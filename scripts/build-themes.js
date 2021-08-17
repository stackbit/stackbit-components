#!/usr/bin/env node
const path = require('path');
const fse = require('fs-extra');
const childProcess = require('child_process');

const themes = [
  "bold",
  "eco",
  "modern",
  "retro"
]

themes.forEach((theme) => {
  const themeGlobal = path.join(process.cwd(), 'themes', 'global.css');
  const themeConfig = path.join(process.cwd(), 'themes', `tailwind.${theme}.config.js`);
  const themeOutput = path.join(process.cwd(), 'public', 'css', `tailwind.${theme}.css`);
  console.log(`Building CSS for ${theme} theme...`);
  childProcess.execSync(`npx tailwindcss build --minify -i "${themeGlobal}" --config "${themeConfig}" --output "${themeOutput}"`);
});
