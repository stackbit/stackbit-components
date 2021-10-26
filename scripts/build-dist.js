#!/usr/bin/env node
const path = require('path');
const childProcess = require('child_process');
const fse = require('fs-extra');
const args = process.argv.slice(2);
const { generateComponentsMapJSON, generateComponentsMapJS } = require('./generate-components-map');

console.log('Building components library');

const projectDir = path.join(__dirname, '..');

if (args.includes('--clean')) {
    console.log('⏳ removing dist folder...');
    fse.rmdirSync(path.join(projectDir, 'dist'), { recursive: true });
    console.log('✔ removed dist folder');
}

generateComponentsMapJSON();
generateComponentsMapJS();
runTSC();

if (process.env.SOURCEMAP_COMMAND) {
    console.log('⏳ running stackbit sourcemap generation...');
    const cmdParts = process.env.SOURCEMAP_COMMAND.split(' ');
    const srcDirPath = path.resolve(projectDir, 'src');
    const sourcemapResult = childProcess.spawnSync(
        cmdParts[0],
        [cmdParts.slice(1).join(' ') + ` ${srcDirPath} ${srcDirPath} node_modules/@stackbit/components/src`],
        {
            shell: true
        }
    );
    console.log(String(sourcemapResult.stdout).trim());
    console.log(String(sourcemapResult.stderr).trim());
    runTSC('temp-dist');
    // apply using: patch -p1 -i sourcemap.patch
    childProcess.spawnSync('diff', ['-rc', 'dist temp-dist > sourcemap.patch'], {
        shell: true,
        cwd: projectDir
    });
    childProcess.spawnSync('git', ['checkout', '--', 'src'], { cwd: projectDir });
    fse.rmdirSync('temp-dist', { recursive: true });
    console.log('✔ finished stackbit sourcemap generation');
}

if (args.includes('--local')) {
    const targetDir = path.join(projectDir, '../stackbit-nextjs-starter/node_modules/@stackbit/components');

    console.log(`⏳ run npm pack ...`);
    const npmPackResult = childProcess.spawnSync('npm', ['pack', '--json'], { cwd: projectDir });
    if (npmPackResult.status !== 0) {
        console.log(`❌ npm pack failed, quiting`);
        process.exit(1);
    }
    const tarFile = JSON.parse(String(npmPackResult.stdout).trim())[0].filename;
    console.log(`✔ generated package archive ${tarFile}`);

    console.log(`⏳ uncompress archive ...`);
    fse.ensureDirSync(targetDir);
    const tarResult = childProcess.spawnSync('tar', ['-xf', tarFile], { cwd: projectDir, env: { LC_ALL: 'en_US.UTF-8' } });
    if (tarResult.status !== 0) {
        console.log(`❌ tar failed, quiting`);
        process.exit(1);
    }
    fse.removeSync(path.join(projectDir, tarFile));
    console.log(`✔ uncompressed archive`);

    console.log(`⏳ copy uncompressed package to ${targetDir} ...`);
    fse.copySync(path.join(projectDir, 'package'), targetDir, { overwrite: true });
    fse.removeSync(path.join(projectDir, 'package'));
    console.log(`✔ copied package`);
}

function runTSC(outputDir = 'dist') {
    console.log('⏳ compiling typescript...');
    const tscBin = path.resolve(projectDir, 'node_modules/.bin/tsc');
    const outputDirPath = path.resolve(projectDir, outputDir);
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
