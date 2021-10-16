// When stackbit components are imported into a project,
// withStackbitComponents() method replaces this import using Webpack resolve.
// Instead of loading ./dynamic-components.js relative to this file
// Webpack replaces it with a file located at /.stackbit/dynamic-components.js
import dynamicComponents from './dynamic-components';

export function registerComponents(newComponents) {
    Object.assign(dynamicComponents, newComponents);
}

export function getComponent(key) {
    return dynamicComponents[key];
}
