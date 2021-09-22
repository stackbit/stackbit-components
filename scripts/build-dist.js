#!/usr/bin/env node
const path = require('path');
const childProcess = require('child_process');
const fse = require('fs-extra');
const args = process.argv.slice(2);
const packageJSON = require('../package.json');
const componentsManifest = require('../src/components-manifest.json');

console.log('Building components library');

function runBabel(inputDir='src', outputDir='dist') {
    console.log('running babel...');
    const babelBin = path.resolve(__dirname, '../node_modules/.bin/babel');
    const babelConfig = path.resolve(__dirname, '../babel.dist.config.json');
    const inputDirPath = path.resolve(__dirname, '../', inputDir);
    const outputDirPath = path.resolve(__dirname, '../', outputDir);
    const babelResult = childProcess.spawnSync(babelBin, ['--config-file', babelConfig, '--out-dir', outputDirPath, inputDirPath]);
    if (babelResult.status === 0) {
        console.log(String(babelResult.stdout));
    } else {
        console.log(String(babelResult.stderr));
        process.exit(1);
    }
}

if (args.includes('--clean')) {
    console.log('removing dist folder...');
    fse.rmdirSync('dist', { recursive: true });
}

runBabel();

if (process.env.SOURCEMAP_COMMAND) {
    console.log('running sourcemap generation...');
    const cmdParts = process.env.SOURCEMAP_COMMAND.split(' ');
    const srcDirPath = path.resolve(__dirname, '../src');
    const sourcemapResult = childProcess.spawnSync(
        cmdParts[0],
        [cmdParts.slice(1).join(' ') + ` ${srcDirPath} ${srcDirPath} node_modules/@stackbit/components`],
        {
            shell: true
        }
    );
    console.log(String(sourcemapResult.stdout));
    console.log(String(sourcemapResult.stderr));
    runBabel('src', 'temp-dist');
    // apply using: patch -p1 -i sourcemap.patch
    childProcess.spawnSync('diff', ['-rc', 'dist temp-dist > dist/sourcemap.patch'], {
        shell: true, 
        cwd: path.resolve(__dirname, '../')
    });
    childProcess.spawnSync('git', ['checkout', '--', 'src']);
    fse.rmdirSync('temp-dist', { recursive: true });
}

console.log('copy package.json and remove peerDependencies marked as devDependencies...');
const devDependenciesToRemove = ['react', 'react-dom'];
delete packageJSON['private'];
devDependenciesToRemove.forEach((dependency) => {
    delete packageJSON.devDependencies[dependency];
});
fse.writeFileSync(path.join(__dirname, '../dist/package.json'), JSON.stringify(packageJSON, null, 2), 'utf8');

console.log('generating dist/components-map.json ...');
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
        map[component.modelName] = '@stackbit/components/' + component.path;
        return map;
    }, {});

fse.writeJsonSync(path.join(__dirname, '../dist/components-map.json'), componentsMap, { spaces: 4 });
console.log('generated dist/components-map.json');

console.log('copying files and folders...');
const folders = ['src', 'models', 'styles'];
folders.forEach((folder) => {
    const folderPath = path.join(__dirname, '../', folder);
    console.log(folderPath);
    childProcess.spawnSync('cp', ['-r', folderPath, path.join(__dirname, '../dist')]);
});

const srcFolders = ['models', 'styles'];
srcFolders.forEach((folder) => {
    const folderPath = path.join(__dirname, '../', folder);
    childProcess.spawnSync('cp', ['-r', folderPath, path.join(__dirname, '../dist/src')]);
});

const files = ['src/dynamic-components.js', 'src/next-stackbit-components.js', 'src/components-manifest.json', 'README.md'];
files.forEach((file) => {
    const filePath = path.join(__dirname, '../', file);
    childProcess.spawnSync('cp', [filePath, path.join(__dirname, '../dist')]);
});

if (args.includes('--local')) {
    console.log('copy local');
    childProcess.spawnSync('cp', ['-r', path.join(__dirname, '../dist'), path.join(__dirname, '../stackbit-nextjs-v2/node_modules/@stackbit/components')]);
}
