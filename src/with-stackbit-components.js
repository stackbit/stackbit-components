const fse = require('fs-extra');
const path = require('path');

const COMPONENTS_MAP_DEFAULT_USER_PATH = '.stackbit/components-map.json';
const DYNAMIC_COMPONENTS_DEFAULT_USER_PATH = '.stackbit/dynamic-components.js';
const DEFAULT_COMPONENTS_MAP_PATH = path.join(__dirname, 'components-map.json');

module.exports = function withStackbitComponents(nextConfig) {
    copyComponentsJson(nextConfig);
    generateDynamicComponents(nextConfig);
    updateResolveAliases(nextConfig);
    return nextConfig;
};

function copyComponentsJson(nextConfig) {
    const sourceFilePath = DEFAULT_COMPONENTS_MAP_PATH;
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
    const data = fse.readJsonSync(sourceFilePath);
    const newData = {
        README: data.README,
        layouts: Object.assign(data.layouts, existingData.layouts),
        components: Object.assign(data.components, existingData.components),
        dynamic: Object.assign(data.dynamic, existingData.dynamic)
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
    const componentsString = Object.keys(dynamicComponents).map((key) => {
        let importString = dynamicComponents[key];
        if (importString.startsWith('.')) {
            importString = path.relative(targetDir, path.join(componentsMapDir, importString));
            if (!importString.startsWith('.')) {
                importString = '.' + path.sep + importString;
            }
        }
        return `'${key}': dynamic(() => import('${importString}'))`;
    }).join(',\n  ');
    const data = fse.readFileSync(sourceFilePath, 'utf-8')
    const replaced = data.replace('//__COMPONENTS_TOKEN__', componentsString);
    fse.writeFileSync(targetFilePath, replaced, 'utf-8');
}

function updateResolveAliases(nextConfig) {
    const origWebpack = nextConfig.webpack;
    nextConfig.webpack = (wpConfig, ...rest) => {
        const componentAliases = getAliases(nextConfig);
        const dynamicComponentsPath = path.resolve(nextConfig?.dynamicComponentsPath ?? DYNAMIC_COMPONENTS_DEFAULT_USER_PATH);
        wpConfig.resolve.alias = Object.assign(wpConfig.resolve.alias || {}, componentAliases, {
            [path.resolve(__dirname, 'dynamic-components')]: dynamicComponentsPath
        });
        return origWebpack ? origWebpack(wpConfig, ...rest) : wpConfig;
    };
}

function getAliases(nextConfig) {
    let aliases = {};
    const componentsMapRelFilePath = nextConfig?.componentsMapPath ?? COMPONENTS_MAP_DEFAULT_USER_PATH;
    const componentsMapAbsFilePath = path.resolve(componentsMapRelFilePath);
    if (!fse.pathExistsSync(componentsMapAbsFilePath)) {
        console.log(`[withStackbitComponents] Error: file '${componentsMapRelFilePath}' not found.`);
        return aliases;
    }
    let componentsMap;
    try {
        componentsMap = fse.readJsonSync(componentsMapAbsFilePath);
    } catch (e) {
        console.error(`[withStackbitComponents] Error loading ${componentsMapAbsFilePath}`);
        return aliases;
    }
    const componentsMapDir = path.dirname(componentsMapAbsFilePath);
    if (componentsMap.components) {
        Object.assign(aliases, getAliasesForComponents(componentsMap.components, 'components', componentsMapDir, componentsMapRelFilePath));
    }
    if (componentsMap.layouts) {
        Object.assign(aliases, getAliasesForComponents(componentsMap.layouts, 'layouts', componentsMapDir, componentsMapRelFilePath));
    }
    return aliases;
}

function getAliasesForComponents(componentMap, componentsPrefixDir, componentsMapDir, componentsMapRelFilePath) {
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
            console.error(
                `[withStackbitComponents] Error: component '${componentRelPath}' specified in '${componentsMapRelFilePath}' was not found.`
            );
            continue;
        }
        try {
            const relStackbitComponentPath = `${componentsPrefixDir}/${componentName}`;
            const stackbitComponentAbsPath = path.resolve(__dirname, relStackbitComponentPath);
            const stackbitComponentImport = `@stackbit/components/${relStackbitComponentPath}`;
            aliases[stackbitComponentAbsPath] = absPath;
            aliases[stackbitComponentImport] = absPath;
            console.log(`[withStackbitComponents] replaced '${stackbitComponentImport}' with '${componentRelPath}'`);
        } catch (e) {
            console.error(
                `[withStackbitComponents] Error: component name '${componentName}' specified in '${componentsMapRelFilePath}' does not exist`
            );
        }
    }
    return aliases;
}
