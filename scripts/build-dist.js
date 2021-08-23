#!/usr/bin/env node

const childProcess = require('child_process');
const fse = require('fs-extra');
const args = process.argv.slice(2);
const packageJSON = require('../package.json');
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
delete packageJSON['private'];
devDependenciesToRemove.forEach((dependency) => {
  delete packageJSON.devDependencies[dependency];
});
fse.writeFileSync('dist/package.json', JSON.stringify(packageJSON, null, 2), 'utf8');

console.log('generating components-map.json ...');
generateDistComponentMap();

console.log('copying files and folders...');
const folders = ['src', 'models', 'themes'];
folders.forEach((folder) => {
  childProcess.spawnSync('cp', ['-r', folder, 'dist']);
});

const files = ['src/dynamic-components.js', 'src/with-stackbit-components.js', 'src/components-manifest.json', 'README.md'];
files.forEach((file) => {
  childProcess.spawnSync('cp', [file, 'dist']);
});
