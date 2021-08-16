const fse = require('fs-extra');
const path = require('path');

const componentsManifest = require('./components-manifest.json');
const defaultComponentMap = require('./components-map.json');
const STACKBIT_FOLDER_DEFAULT_PATH = '.stackbit/';
const COMPONENTS_MAP_DEFAULT_USER_PATH = '.stackbit/components-map.json';
const DYNAMIC_COMPONENTS_DEFAULT_USER_PATH = '.stackbit/dynamic-components.js';

module.exports = function withStackbitComponents(nextConfig) {
    copyComponentsJson(nextConfig);
    generateDynamicComponents(nextConfig);
    updateResolveAliases(nextConfig);
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
    const sourceFilePath = path.join(__dirname, 'dynamic-components.js');
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
    const data = fse.readFileSync(sourceFilePath, 'utf-8');
    const replaced = data.replace('//__COMPONENTS_TOKEN__', componentsString);
    fse.writeFileSync(targetFilePath, replaced, 'utf-8');
}

function updateResolveAliases(nextConfig) {
    const origWebpack = nextConfig.webpack;
    nextConfig.webpack = (wpConfig, wpOptions) => {
        const componentAliases = getAliases(nextConfig, wpOptions);
        const dynamicComponentsAlias = getDynamicComponentsAlias(nextConfig, wpOptions);
        wpConfig.resolve.alias = Object.assign(wpConfig.resolve.alias || {}, componentAliases, dynamicComponentsAlias);
        return origWebpack ? origWebpack(wpConfig, wpOptions) : wpConfig;
    };
}

function getDynamicComponentsAlias(nextConfig, wpOptions) {
    const dynamicComponentsRelPath = nextConfig?.dynamicComponentsPath ?? DYNAMIC_COMPONENTS_DEFAULT_USER_PATH;
    const dynamicComponentsAbsPath = path.resolve(dynamicComponentsRelPath);
    try {
        require.resolve(dynamicComponentsAbsPath);
    } catch (e) {
        if (wpOptions.isServer) {
            console.error(`[withStackbitComponents] Error: '${dynamicComponentsRelPath}' was not found. Will not load custom dynamic imports.`);
        }
        return {};
    }
    return {
        [path.resolve(__dirname, 'dynamic-components')]: dynamicComponentsAbsPath
    };
}

function getAliases(nextConfig, wpOptions) {
    const componentsMapRelFilePath = nextConfig?.componentsMapPath ?? COMPONENTS_MAP_DEFAULT_USER_PATH;
    const componentsMapAbsFilePath = path.resolve(componentsMapRelFilePath);
    if (!fse.pathExistsSync(componentsMapAbsFilePath)) {
        if (wpOptions.isServer) {
            console.log(`[withStackbitComponents] Error: file '${componentsMapRelFilePath}' not found.`);
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
    return getAliasesForComponents(componentsMap.components, componentsMapDir, componentsMapRelFilePath, wpOptions)
}

function getAliasesForComponents(componentMap, componentsMapDir, componentsMapRelFilePath, wpOptions) {
    const aliases = {};
    for (const componentName in componentMap || {}) {
        const componentRelPath = componentMap[componentName];
        if (!componentRelPath) {
            continue;
        }
        const absPath = path.join(componentsMapDir, componentRelPath);
        try {
            require.resolve(absPath);
        } catch (e) {
            if (wpOptions.isServer) {
                console.error(
                    `[withStackbitComponents] Error: component '${componentRelPath}' specified in '${componentsMapRelFilePath}' was not found.`
                );
            }
            continue;
        }
        const manifest = componentsManifest[componentName];

        if (!manifest) {
            if (wpOptions.isServer) {
                console.error(
                    `[withStackbitComponents] Error: component name '${componentName}' specified in '${componentsMapRelFilePath}' does not exist`
                );
            }
            continue;
        }

        const stackbitComponentAbsPath = path.resolve(__dirname, manifest.path);
        const stackbitComponentImport = `@stackbit/components/${manifest.path}`;

        try {
            require.resolve(stackbitComponentAbsPath);
        } catch (e) {
            if (wpOptions.isServer) {
                console.error(
                    `[withStackbitComponents] Error: component name '${componentName}' specified in '${componentsMapRelFilePath}' does not exist`
                );
            }
            continue;
        }

        aliases[stackbitComponentAbsPath] = absPath;
        aliases[stackbitComponentImport] = absPath;
        if (wpOptions.isServer) {
            console.log(`[withStackbitComponents] replaced '${stackbitComponentImport}' with '${componentRelPath}'`);
        }
    }
    return aliases;
}
