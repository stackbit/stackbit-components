export const dynamicComponents = {};

export function registerDynamicComponents(newComponents) {
    Object.assign(dynamicComponents, newComponents);
}

export function getDynamicComponent(key) {
    return dynamicComponents[key];
}
