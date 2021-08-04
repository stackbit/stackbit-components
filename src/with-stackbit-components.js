const fs = require('fs');
const path = require('path');

module.exports = function withStackbitComponents(config) {
    const sourceFilePath = path.join(__dirname, 'dynamic_components.js');
    const targetFilePath = config?.dynamicComponentsPath ?? 'src/components/_dynamic_components.js';
    const data = fs.readFileSync(sourceFilePath, 'utf-8');
    fs.writeFileSync(targetFilePath, data);
    return config;
}
