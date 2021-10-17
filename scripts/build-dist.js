#!/usr/bin/env node
const path = require('path');
const childProcess = require('child_process');
const fse = require('fs-extra');
const args = process.argv.slice(2);
const { generateComponentsMapJSON, generateComponentsMapJS } = require('./generate-components-map');

console.log('Building components library');

function runTSC(outputDir = 'dist') {
    console.log('⏳ compiling typescript...');
    const tscBin = path.resolve(__dirname, '../node_modules/.bin/tsc');
    const outputDirPath = path.resolve(__dirname, '../', outputDir);
    const tscResult = childProcess.spawnSync(tscBin, ['--outDir', outputDirPath]);
    const stdout = String(tscResult.stdout).trim();
    const stderr = String(tscResult.stderr).trim();
    if (stdout) {
        console.log(stdout);
    }
    if (stderr) {
        console.log(stderr);
    }
    if (tscResult.status !== 0) {
        console.log('❌ typescript compilation failed, quiting');
        process.exit(1);
    }
    console.log('✔ finished compiling typescript');
}

if (args.includes('--clean')) {
    console.log('⏳ removing dist folder...');
    fse.rmdirSync(path.join(__dirname, '../dist'), { recursive: true });
    console.log('✔ removed dist folder');
}

generateComponentsMapJSON();
generateComponentsMapJS();
runTSC();

if (process.env.SOURCEMAP_COMMAND) {
    console.log('⏳ running stackbit sourcemap generation...');
    const cmdParts = process.env.SOURCEMAP_COMMAND.split(' ');
    const srcDirPath = path.resolve(__dirname, '../src');
    const sourcemapResult = childProcess.spawnSync(
        cmdParts[0],
        [cmdParts.slice(1).join(' ') + ` ${srcDirPath} ${srcDirPath} node_modules/@stackbit/components`],
        {
            shell: true
        }
    );
    console.log(String(sourcemapResult.stdout).trim());
    console.log(String(sourcemapResult.stderr).trim());
    runTSC('temp-dist');
    // apply using: patch -p1 -i sourcemap.patch
    childProcess.spawnSync('diff', ['-rc', 'dist temp-dist > dist/sourcemap.patch'], {
        shell: true,
        cwd: path.resolve(__dirname, '../')
    });
    childProcess.spawnSync('git', ['checkout', '--', 'src']);
    fse.rmdirSync('temp-dist', { recursive: true });
    console.log('✔ finished stackbit sourcemap generation');
}

if (args.includes('--local')) {
    const cwd = path.join(__dirname, '..');
    const targetDir = path.join(cwd, '../stackbit-nextjs-starter/node_modules/@stackbit/components');
    console.log(`⏳ run npm pack ...`);
    const npmPackResult = childProcess.spawnSync('npm', ['pack', '--json'], { cwd });
    if (npmPackResult.status !== 0) {
        console.log(`❌ npm pack failed, quiting`);
        process.exit(1);
    }
    const tarFile = JSON.parse(String(npmPackResult.stdout).trim())[0].filename;
    console.log(`✔ generated package archive ${tarFile}`);
    console.log(`⏳ uncompress archive ...`);
    fse.ensureDirSync(targetDir);
    const tarResult = childProcess.spawnSync('tar', ['-xf', tarFile], { cwd, env: { LC_ALL: 'en_US.UTF-8' } });
    if (tarResult.status !== 0) {
        console.log(`❌ tar failed, quiting`);
        process.exit(1);
    }
    fse.removeSync(path.join(cwd, tarFile));
    console.log(`✔ uncompressed archive`);
    console.log(`⏳ copy uncompressed package to ${targetDir} ...`);
    fse.copySync(path.join(cwd, 'package'), targetDir, { overwrite: true });
    fse.removeSync(path.join(cwd, 'package'));
    console.log(`✔ copied package`);
}
