#!/usr/bin/env node
const componentsManifest = require('../src/components-manifest.json');

function generateDistComponentMap() {
    console.log('generating src/components-map.json ...');
    const componentsMap = {
        README: "Components set to 'null' will be loaded from @stackbit/components library. To override a component, set it to relative paths of your component",
        components: {},
        dynamic: {}
    };

    componentsMap.components = Object.entries(componentsManifest).reduce((map, [componentName]) => {
        map[componentName] = null;
        return map;
    }, {});

    componentsMap.dynamic = Object.entries(componentsManifest)
        .filter(([_, component]) => component.isDynamic)
        .reduce((map, [_, component]) => {
            map[component.className] = '@stackbit/components/' + component.path;
            return map;
        }, {});

    return componentsMap;
}

module.exports = generateDistComponentMap;

if (require.main === module) {
    generateDistComponentMap();
}
