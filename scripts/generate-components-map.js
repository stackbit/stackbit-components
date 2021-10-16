const fse = require('fs-extra');
const path = require('path');
const componentsManifest = require('../src/components-manifest.json');

if (require.main === module) {
    generateComponentsMapJSON();
    generateComponentsMapTS();
} else {
    module.exports.generateComponentsMapJSON = generateComponentsMapJSON;
    module.exports.generateComponentsMapTS = generateComponentsMapTS;
}

function generateComponentsMapJSON() {
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

function generateComponentsMapTS() {
    console.log('⏳ generating src/components-map.ts ...');

    const { staticImports, staticMap } = Object.entries(componentsManifest)
        .filter(([_, component]) => !component.isDynamic)
        .reduce((res, [componentName, componentManifest]) => {
            res.staticImports.push(`import ${componentName} from './${componentManifest.path}';`);
            res.staticMap.push(`'${componentName}': ${componentName},`);
            return res;
        }, { staticImports: [], staticMap: [] });

    const dynamicMap = Object.entries(componentsManifest)
        .filter(([_, component]) => component.isDynamic)
        .reduce((map, [_, componentManifest]) => {
            map.push(`'${componentManifest.modelName}': dynamic(() => import('./${componentManifest.path}'))`);
            return map;
        }, []);

    const data = `import dynamic from 'next/dynamic';

${staticImports.join('\n')}

export const componentsMap = {
    // static components, key is component name
    ${staticMap.join('\n    ')}

    // dynamic components, key is model name
    ${dynamicMap.join(',\n    ')}
};
`;

    fse.writeFileSync(path.join(__dirname, '../src/components-map.ts'), data);

    console.log('✔ generated src/components-map.ts');
}
