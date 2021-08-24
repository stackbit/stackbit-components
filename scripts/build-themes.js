#!/usr/bin/env node
const path = require('path');
const childProcess = require('child_process');

const themes = ['bold', 'eco', 'modern', 'retro'];
const themeGlobal = path.join(__dirname, '../themes/global.css');

themes.forEach((theme) => {
  const themeConfig = path.join(__dirname, `../themes/tailwind.${theme}.config.js`);
  const themeOutput = path.join(__dirname, `../public/css/tailwind.${theme}.css`);
  console.log(`Building CSS for ${theme} theme...`);
  childProcess.execSync(`npx tailwindcss build --minify -i "${themeGlobal}" --config "${themeConfig}" --output "${themeOutput}"`);
});
