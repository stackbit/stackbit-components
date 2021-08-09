const fs = require('fs');
const path = require('path');

const STACKBIT_COMPONENTS_MAP_DEFAULT_PATH = 'src/stackbit-components.json';
const DYNAMIC_COMPONENTS_DEFAULT_PATH = 'src/dynamic-components.js';

module.exports = function withStackbitComponents(nextConfig) {
    copyComponentsJson(nextConfig);
    updateResolveAliases(nextConfig);
    return nextConfig;
}

function copyComponentsJson(nextConfig) {
    const sourceFilePath = path.join(__dirname, 'stackbit-components.json');
    const targetFilePath = path.resolve(nextConfig?.stackbitComponentsMapPath ?? STACKBIT_COMPONENTS_MAP_DEFAULT_PATH);
    const targetExists = fs.existsSync(targetFilePath);
    let existingData = {};
    if (targetExists) {
        existingData = JSON.parse(fs.readFileSync(targetFilePath, 'utf-8'));
    }
    const data = JSON.parse(fs.readFileSync(sourceFilePath, 'utf-8'));
    const newData = {
        README: data.README,
        layouts: Object.assign(data.layouts, existingData.layouts),
        components: Object.assign(data.components, existingData.components)
    };
    fs.writeFileSync(targetFilePath, JSON.stringify(newData, null, 4), 'utf-8');
}

function copyDynamicComponents(nextConfig) {
    const sourceFilePath = path.join(__dirname, 'dynamic-components.js');
    const targetFilePath = path.resolve(nextConfig?.dynamicComponentsPath ?? DYNAMIC_COMPONENTS_DEFAULT_PATH);
    const data = fs.readFileSync(sourceFilePath, 'utf-8');
    fs.writeFileSync(targetFilePath, data);
}

function updateResolveAliases(nextConfig) {
    const origWebpack = nextConfig.webpack;
    nextConfig.webpack = (wpConfig, ...rest) => {
        const componentAliases = getAliases(nextConfig);
        wpConfig.resolve.alias = Object.assign(
            wpConfig.resolve.alias || {},
            componentAliases
        )
        return origWebpack ? origWebpack(wpConfig, ...rest) : wpConfig;
    }
}

function getAliases(nextConfig) {
    let aliases = {};
    const componentsMapRelFilePath = nextConfig?.stackbitComponentsMapPath ?? STACKBIT_COMPONENTS_MAP_DEFAULT_PATH;
    const componentsMapAbsFilePath = path.resolve(componentsMapRelFilePath);
    if (!fs.existsSync(componentsMapAbsFilePath)) {
        console.log(`[withStackbitComponents] Error: file '${componentsMapRelFilePath}' not found.`);
        return aliases;
    }
    let componentsMap;
    try {
        componentsMap = JSON.parse(fs.readFileSync(componentsMapAbsFilePath, 'utf-8'));
    } catch (e) {
        console.error(`[withStackbitComponents] Error loading ${componentsMapAbsFilePath}`);
        return aliases;
    }
    const componentsMapDir = path.dirname(componentsMapAbsFilePath);
    if (componentsMap.components) {
        Object.assign(aliases, getAliasesForComponents(componentsMap.components, 'components', componentsMapDir));
    }
    if (componentsMap.layouts) {
        Object.assign(aliases, getAliasesForComponents(componentsMap.layouts, 'layouts', componentsMapDir));
    }
    return aliases;
}

function getAliasesForComponents(componentMap, componentsPrefixDir, componentsMapDir) {
    const aliases = {};
    for (const componentName in componentMap || {}) {
        const componentRelPath = componentMap[componentName];
        if (!componentRelPath) {
            continue;
        }
        const absPath = path.join(componentsMapDir, componentRelPath);
        try {
            const targetModulePath = require.resolve(absPath);
        } catch (e) {
            console.error(`[withStackbitComponents] Error: component specified in 'stackbit-components.json' was not found: ${componentRelPath}`)
            continue;
        }
        try {
            const relStackbitComponentPath = `${componentsPrefixDir}/${componentName}`;
            const stackbitComponentAbsPath = path.resolve(__dirname, relStackbitComponentPath);
            const stackbitComponentImport = `@stackbit/components/${relStackbitComponentPath}`;
            aliases[stackbitComponentAbsPath] = absPath;
            aliases[stackbitComponentImport] = absPath;
            console.log(`[withStackbitComponents] replaced ${stackbitComponentImport} with '${componentRelPath}'`);
        } catch (e) {
            console.error(`[withStackbitComponents] Error: component name '${componentName}' specified in 'stackbit-components.json' does not exist`);
        }
    }
    return aliases;
}
