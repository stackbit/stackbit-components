#!/usr/bin/env node
const path = require('path');
const fs = require('fs-extra');
const yaml = require('js-yaml');
const args = process.argv.slice(2);

const modelsFolder = path.join(__dirname, '../models');
const modelsFilepaths = fs.readdirSync(modelsFolder).map((relFilename) => path.resolve(modelsFolder, relFilename));
const dest = path.join(__dirname, '../stackbit-theme.yaml');

console.log(`Merging models from ${modelsFolder}`);

const models = {
    stackbitVersion: '~0.3.0',
    ssgName: 'nextjs',
    nodeVersion: 14,
    cmsName: 'git',
    assets: {
        referenceType: 'static',
        staticDir: 'public',
        uploadDir: 'images',
        publicPath: '/'
    },
    dataDir: 'content/data',
    pagesDir: 'content/pages',
    pageLayoutKey: 'layout',
    models: {}
};

modelsFilepaths.forEach((modelAbsFilepath) => {
    const fileData = fs.readFileSync(modelAbsFilepath);
    const modelYaml = yaml.load(fileData);
    models.models[modelYaml.name] = modelYaml;
    delete models.models[modelYaml.name].name;
});

const stackbitYaml = yaml.dump(models);
fs.writeFileSync(dest, stackbitYaml);

console.log(`Writing stackbit.yaml to ${dest}`);

fs.writeFileSync(path.join(__dirname, '../stackbit-theme.yaml'), stackbitYaml);

if (args.includes('--local')) {
    fs.writeFileSync(path.join(__dirname, '../../stackbit-nextjs-v2/stackbit.yaml'), stackbitYaml);
}
