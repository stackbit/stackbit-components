const fse = require('fs-extra');
const path = require('path');
const componentsManifest = require('../src/components-manifest.json');

if (require.main === module) {
    generateComponentsMap();
} else {
    module.exports = generateComponentsMap;
}

function generateComponentsMap() {
    console.log('⏳ generating src/components-map.json ...');

    const componentsMap = {
        README: "Components set to 'null' will be loaded from @stackbit/components library. To override a component, set it to relative paths of your component",
        components: {},
        dynamic: {}
    };

    componentsMap.components = Object.entries(componentsManifest)
        .filter(([_, component]) => !component.isDynamic)
        .reduce((map, [componentName]) => {
            map[componentName] = null;
            return map;
        }, {});

    componentsMap.dynamic = Object.entries(componentsManifest)
        .filter(([_, component]) => component.isDynamic)
        .reduce((map, [_, component]) => {
            map[component.modelName] = '@stackbit/components/' + component.path;
            return map;
        }, {});

    fse.writeJsonSync(path.join(__dirname, '../src/components-map.json'), componentsMap, { spaces: 4 });

    console.log('✔ generated src/components-map.json');
}
