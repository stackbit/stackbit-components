const fse = require('fs-extra');
const path = require('path');
const componentsManifest = require('../src/components-manifest.json');

if (require.main === module) {
    generateComponentsMapJSON();
    generateComponentsMapJS();
} else {
    module.exports.generateComponentsMapJSON = generateComponentsMapJSON;
    module.exports.generateComponentsMapJS = generateComponentsMapJS;
    module.exports.generateComponentsMapTS = generateComponentsMapTS;
}

const projectDir = path.join(__dirname, '..');

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

    fse.writeJsonSync(path.join(projectDir, 'src/components-map.json'), componentsMap, { spaces: 4 });

    console.log('✔ generated src/components-map.json');
}

function generateComponentsMapJS() {
    console.log('⏳ generating dist/components-map.js ...');

    const { staticImports, staticMap } = Object.entries(componentsManifest)
        .filter(([_, component]) => !component.isDynamic)
        .reduce(
            (res, [componentName, componentManifest]) => {
                res.staticImports.push(`const ${componentName} = require('./${componentManifest.path}').default;`);
                res.staticMap.push(`'${componentName}': ${componentName}`);
                return res;
            },
            { staticImports: [], staticMap: [] }
        );

    const dynamicMap = Object.entries(componentsManifest)
        .filter(([_, component]) => component.isDynamic)
        .reduce((map, [_, componentManifest]) => {
            map.push(`'${componentManifest.modelName}': dynamic(() => import('./${componentManifest.path}/index.js').then((mod) => mod.default))`);
            return map;
        }, []);

    const data = `const dynamic = require('next/dynamic').default;

${staticImports.join('\n')}

module.exports.componentsMap = {
    // static components, key is component name
    ${staticMap.join(',\n    ')},

    // dynamic components, key is model name
    ${dynamicMap.join(',\n    ')}
};
`;

    fse.ensureDirSync(path.join(projectDir, 'dist'));
    fse.writeFileSync(path.join(projectDir, 'dist/components-map.js'), data);

    console.log('✔ generated dist/components-map.js');
}

function generateComponentsMapTS() {
    console.log('⏳ generating dist/components-map.ts ...');

    const { staticImports, staticMap } = Object.entries(componentsManifest)
        .filter(([_, component]) => !component.isDynamic)
        .reduce(
            (res, [componentName, componentManifest]) => {
                res.staticImports.push(`import ${componentName} from './${componentManifest.path}';`);
                res.staticMap.push(`'${componentName}': ${componentName}`);
                return res;
            },
            { staticImports: [], staticMap: [] }
        );

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
    ${staticMap.join(',\n    ')},

    // dynamic components, key is model name
    ${dynamicMap.join(',\n    ')}
};
`;

    fse.ensureDirSync(path.join(projectDir, 'dist'));
    fse.writeFileSync(path.join(projectDir, 'dist/components-map.ts'), data);

    console.log('✔ generated dist/components-map.ts');
}
