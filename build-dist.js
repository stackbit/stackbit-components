#!/usr/bin/env node

const path = require('path');
const fse = require('fs-extra');
const childProcess = require('child_process');
const args = process.argv.slice(2);
const generateDistComponentMap = require('./generate-components-map');

console.log('Building components library');

if (args.includes('--clean')) {
    console.log('removing dist folder...');
    fse.rmdirSync('dist', { recursive: true });
}



console.log('runing babel...');
const babelResult = childProcess.spawnSync('babel', '--config-file ./babel.dist.config.json --out-dir dist src'.split(' '));

if (babelResult.status === 0) {
    console.log(String(babelResult.stdout));
} else {
    console.log(String(babelResult.stderr));
    process.exit(1);
}

console.log('copy package.json and remove peerDependencies marked as devDependencies...');
const devDependenciesToRemove = ['react', 'react-dom'];
const packageJSON = require('./package.json');
delete packageJSON['private'];
devDependenciesToRemove.forEach((dependency) => {
    delete packageJSON.devDependencies[dependency];
});
fse.writeFileSync('dist/package.json', JSON.stringify(packageJSON, null, 2), 'utf8');

console.log('generating components-map.json ...');
const componentsMap = generateDistComponentMap();
fse.writeJsonSync(path.join(__dirname, 'dist/components-map.json'), componentsMap, { spaces: 4 });

console.log('copying files and folders...');
const folders = ['src', 'models', 'themes'];
folders.forEach((folder) => {
    childProcess.spawnSync('cp', ['-r', folder, 'dist']);
});
const files = [
    'src/dynamic-components.js',
    'src/with-stackbit-components.js',
    'src/components-manifest.json',
    'README.md'
];
files.forEach((file) => {
    childProcess.spawnSync('cp', [file, 'dist']);
});
