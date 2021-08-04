#!/usr/bin/env node

const fs = require('fs');
const childProcess = require('child_process')
const args = process.argv.slice(2);

console.log('Building components library');

if (args.includes('--clean')) {
    console.log('removing dist folder...');
    fs.rmdirSync('dist', { recursive: true });
}

console.log('runing babel...');
childProcess.spawnSync('babel', '--config-file ./babel.dist.config.json --out-dir dist src'.split(' '));

console.log('copy package.json and remove peerDependencies marked as devDependencies...');
const devDependenciesToRemove = ['react', 'react-dom'];
const packageJSON = require('./package.json');
delete packageJSON['private'];
devDependenciesToRemove.forEach((dependency) => {
    delete packageJSON.devDependencies[dependency];
})
fs.writeFileSync('dist/package.json', JSON.stringify(packageJSON, null, 2), 'utf8');

console.log('copying files and folders...');
childProcess.spawnSync('cp', '-r src dist'.split(' '));
childProcess.spawnSync('cp', '-r models dist'.split(' '));
childProcess.spawnSync('cp', '-r themes dist'.split(' '));
childProcess.spawnSync('cp', 'README.md dist'.split(' '));
