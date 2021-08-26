// shadowing of dynamic-components.js is not working when @stackbit/components is in node_modules
import dynamicComponents from './dynamic-components';

export function registerDynamicComponents(newComponents) {
    Object.assign(dynamicComponents, newComponents);
}

export function getDynamicComponent(key) {
    return dynamicComponents[key];
}
