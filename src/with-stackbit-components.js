const fse = require('fs-extra');
const path = require('path');

const componentsManifest = require('./components-manifest.json');
const defaultComponentMap = require('./components-map.json');
const STACKBIT_FOLDER_DEFAULT_PATH = '.stackbit/';
const STACKBIT_COMPONENTS_PACKAGE_NAME = '@stackbit/components';
const COMPONENTS_MAP_DEFAULT_USER_PATH = '.stackbit/components-map.json';
const DYNAMIC_COMPONENTS_DEFAULT_USER_PATH = '.stackbit/dynamic-components.js';
const DYNAMIC_COMPONENTS_INTERNAL_PATH = path.resolve(__dirname, 'dynamic-components.js');

module.exports = function withStackbitComponents(nextConfig) {
    copyComponentsJson(nextConfig);
    generateDynamicComponents(nextConfig);
    configureWebpack(nextConfig);
    return nextConfig;
};

function copyComponentsJson(nextConfig) {
    fse.ensureDir(STACKBIT_FOLDER_DEFAULT_PATH);
    const targetRelFilePath = nextConfig?.componentsMapPath ?? COMPONENTS_MAP_DEFAULT_USER_PATH;
    const targetFilePath = path.resolve(targetRelFilePath);
    const targetExists = fse.pathExistsSync(targetFilePath);
    let existingData = {};
    if (targetExists) {
        try {
            existingData = fse.readJsonSync(targetFilePath);
        } catch (error) {
            console.error(`[withStackbitComponents] Error loading ${targetRelFilePath}, error: `, error);
        }
    }
    const newData = {
        README: defaultComponentMap.README,
        components: Object.assign({}, defaultComponentMap.components, existingData.components),
        dynamic: Object.assign({}, defaultComponentMap.dynamic, existingData.dynamic)
    };
    fse.writeJsonSync(targetFilePath, newData, { spaces: 4 });
}

function generateDynamicComponents(nextConfig) {
    const componentsMapPath = path.resolve(nextConfig?.componentsMapPath ?? COMPONENTS_MAP_DEFAULT_USER_PATH);
    const targetFilePath = path.resolve(nextConfig?.dynamicComponentsPath ?? DYNAMIC_COMPONENTS_DEFAULT_USER_PATH);
    const componentsMapDir = path.dirname(componentsMapPath);
    const targetDir = path.dirname(targetFilePath);
    const componentMap = fse.readJsonSync(componentsMapPath);
    const dynamicComponents = componentMap.dynamic || {};
    const componentsString = Object.keys(dynamicComponents)
        .map((key) => {
            let importString = dynamicComponents[key];
            if (importString.startsWith('.')) {
                importString = path.relative(targetDir, path.join(componentsMapDir, importString));
                if (!importString.startsWith('.')) {
                    importString = '.' + path.sep + importString;
                }
            }
            return `'${key}': dynamic(() => import('${importString}'))`;
        })
        .join(',\n  ');
    const data = fse.readFileSync(DYNAMIC_COMPONENTS_INTERNAL_PATH, 'utf-8');
    const replaced = data.replace('//__COMPONENTS_TOKEN__', componentsString);
    fse.writeFileSync(targetFilePath, replaced, 'utf-8');
}

function configureWebpack(nextConfig) {
    const origWebpack = nextConfig.webpack;
    nextConfig.webpack = (wpConfig, wpOptions) => {
        const userComponentsMap = resolveUserComponentsMap(nextConfig, wpConfig, wpOptions);
        const dynamicComponentsMap = getDynamicComponentsAlias(nextConfig, wpConfig, wpOptions);
        const componentsMap = Object.assign({}, userComponentsMap, dynamicComponentsMap);

        // console.log(`componentsMap, isServer: ${wpOptions.isServer}`, componentsMap);

        patchExternals(wpConfig, wpOptions);

        // resolveWithAlias(wpConfig, componentsMap);
        resolverWithPlugin(wpConfig, wpOptions, componentsMap);

        return origWebpack ? origWebpack(wpConfig, wpOptions) : wpConfig;
    };
}

function patchExternals(wpConfig, wpOptions) {
    // if `isServer: true` and webpack config has a function in externals[0]
    // then wrap this function and ensure that example-lib is not treated as external
    if (wpOptions.isServer && Array.isArray(wpConfig.externals) && wpConfig.externals.length > 0 && typeof wpConfig.externals[0] === 'function') {
        const origExternals = wpConfig.externals[0];
        const regExp = new RegExp(STACKBIT_COMPONENTS_PACKAGE_NAME);

        const isStackbitComponents = (context, request) => {
            // return true for any @stackbit/component required from outside
            // and also any relative require from within @stackbit/components
            // but not external require from @stackbit/components
            // OK: "src/page.js" => "node_modules/@stackbit/components/components/Button"
            // OK: "node_modules/@stackbit/components/components/HeroSection" => "../Button"
            // NO: "node_modules/@stackbit/components/components/HeroSection" => "react"
            return !!(regExp.test(context) && request.startsWith('.') || regExp.test(request));
        };

        // the externals function interface is different between webpack v4 and webpack v5
        wpConfig.externals[0] = isWebpack5(wpOptions) ? (options) => {
            const { context, request } = options;
            if (isStackbitComponents(context, request)) {
                return Promise.resolve();
            }
            return origExternals(options);
        } : (context, request, callback) => {
            if (isStackbitComponents(context, request)){
                return callback();
            }
            return origExternals(context, request, callback);
        };
    }
}

function isWebpack5(wpOptions) {
    const webpackVersion = wpOptions.webpack.version;
    if (!webpackVersion) {
        return true;
    }
    const majorVersionMatch = webpackVersion.match(/^\d+/);
    if (!majorVersionMatch) {
        return true;
    }
    const version = parseInt(majorVersionMatch[0], 10);
    return version >= 5;
}

function resolveWithAlias(wpConfig, componentsMap) {
    // webpack alias keys should not contain extension
    // https://webpack.js.org/configuration/resolve/#resolvealias
    componentsMap = Object.entries(componentsMap).reduce((result, [target, source]) => {
        const pathObject = path.parse(target);
        target = path.join(pathObject.dir, pathObject.name);
        result[target] = source;
        return result;
    }, {});
    wpConfig.resolve.alias = Object.assign(wpConfig.resolve.alias || {}, componentsMap);
}

function resolverWithPlugin(wpConfig, wpOptions, componentsMap) {
    wpConfig.resolve.plugins.push(
        new StackbitComponentsResolverPlugin({
            componentsRoot: path.join(wpConfig.context, `node_modules/${STACKBIT_COMPONENTS_PACKAGE_NAME}`),
            isServer: wpOptions.isServer,
            componentsMap
        })
    );
}

function getDynamicComponentsAlias(nextConfig, wpConfig, wpOptions) {
    const dynamicComponentsRelPath = nextConfig?.dynamicComponentsPath ?? DYNAMIC_COMPONENTS_DEFAULT_USER_PATH;
    const dynamicComponentsAbsPath = path.resolve(wpConfig.context, dynamicComponentsRelPath);
    let resolvedDynamicComponentsPath;
    try {
        resolvedDynamicComponentsPath = require.resolve(dynamicComponentsAbsPath);
    } catch (e) {
        if (wpOptions.isServer) {
            console.error(`[withStackbitComponents] Error: '${dynamicComponentsRelPath}' was not found. Will not load custom dynamic imports.`);
        }
        return {};
    }
    return {
        [DYNAMIC_COMPONENTS_INTERNAL_PATH]: resolvedDynamicComponentsPath
    };
}

function resolveUserComponentsMap(nextConfig, wpConfig, wpOptions) {
    const componentsMapPath = nextConfig?.componentsMapPath ?? COMPONENTS_MAP_DEFAULT_USER_PATH;
    const componentsMapAbsFilePath = path.resolve(wpConfig.context, componentsMapPath);
    if (!fse.pathExistsSync(componentsMapAbsFilePath)) {
        if (wpOptions.isServer) {
            console.log(`[withStackbitComponents] Error: file '${componentsMapPath}' not found.`);
        }
        return {};
    }
    let componentsMap;
    try {
        componentsMap = fse.readJsonSync(componentsMapAbsFilePath);
    } catch (e) {
        if (wpOptions.isServer) {
            console.error(`[withStackbitComponents] Error loading ${componentsMapAbsFilePath}`);
        }
        return {};
    }
    const componentsMapDir = path.dirname(componentsMapAbsFilePath);
    const componentMap = componentsMap?.components || {};

    return Object.entries(componentMap).reduce((result, [componentName, userComponentPath]) => {
        if (!userComponentPath) {
            return result;
        }
        let resolvedUserComponentPath;
        try {
            resolvedUserComponentPath = require.resolve(path.join(componentsMapDir, userComponentPath));
        } catch (error) {
            if (wpOptions.isServer) {
                console.error(`[withStackbitComponents] Error: component '${userComponentPath}' specified in '${componentsMapPath}' was not found.`);
            }
            return result;
        }

        const componentManifestInfo = componentsManifest[componentName];
        if (!componentManifestInfo) {
            if (wpOptions.isServer) {
                console.error(`[withStackbitComponents] Error: component name '${componentName}' specified in '${componentsMapPath}' does not exist`);
            }
            return result;
        }

        const stackbitComponentImport = `${STACKBIT_COMPONENTS_PACKAGE_NAME}/${componentManifestInfo.path}`;
        let resolvedStackbitComponentPath;
        try {
            resolvedStackbitComponentPath = require.resolve(path.resolve(__dirname, componentManifestInfo.path));
        } catch (error) {
            if (wpOptions.isServer) {
                console.error(`[withStackbitComponents] Error: component name '${componentName}' specified in '${componentsMapPath}' does not exist`);
            }
            return result;
        }

        result[resolvedStackbitComponentPath] = resolvedUserComponentPath;
        if (wpOptions.isServer) {
            const rootUserComponentPath = path.relative(wpConfig.context, resolvedUserComponentPath);
            console.log(`[withStackbitComponents] mapped '${stackbitComponentImport}' to '${rootUserComponentPath}'`);
        }

        return result;
    }, {});
}

class StackbitComponentsResolverPlugin {
    constructor({ componentsRoot, isServer, componentsMap }) {
        // console.log(`[withStackbitComponents] StackbitComponentsResolverPlugin, isServer: ${isServer}, componentsRoot: ${componentsRoot}`);
        this.isServer = isServer;
        this.componentsRoot = componentsRoot;
        this.componentsMap = componentsMap;
    }

    apply(resolver) {
        // This hook is executed very early and captures the original file name
        resolver.getHook('resolve').tapAsync('StackbitComponentsResolverPlugin', (request, stack, callback) => {
            if (!request._originalRequestPath) {
                request._originalRequestPath = request.request;
            }
            return callback();
        });

        // This is where the magic really happens
        resolver.getHook('before-resolved').tapAsync('StackbitComponentsResolverPlugin', (request, stack, callback) => {
            const requestPath = request.path;
            const originalRequestPath = request._originalRequestPath;
            const issuer = request.context?.issuer;

            // only consider paths inside the components dir
            if (!requestPath.startsWith(__dirname)) {
                return callback();
            }

            // only consider paths that need to be resolved
            if (!this.componentsMap[requestPath]) {
                return callback();
            }

            const newPath = this.componentsMap[requestPath];

            if (issuer === newPath) {
                console.log('[withStackbitComponents] cyclic resolve, skipping resolve', { isServer: this.isServer, issuer: issuer, path: requestPath, newPath, originalRequestPath });
                return callback();
            }

            // console.log(`[withStackbitComponents] isServer: ${this.isServer}, resolve ${requestPath} to ${newPath}, issuer: ${issuer}, required path: ${originalRequestPath}`);
            return resolver.doResolve(
                resolver.hooks.describedRelative,
                { ...request, path: newPath },
                null,
                {},
                callback
            );
        });
    }
};
