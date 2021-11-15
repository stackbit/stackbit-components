"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComponent = exports.registerComponents = void 0;
// When stackbit components are imported into a project,
// withStackbitComponents() method replaces this import using Webpack resolve.
// Instead of loading ./dynamic-components.js relative to this file
// Webpack replaces it with a file located at /.stackbit/dynamic-components.js
const dynamic_components_1 = __importDefault(require("./dynamic-components"));
function registerComponents(newComponents) {
    Object.assign(dynamic_components_1.default, newComponents);
}
exports.registerComponents = registerComponents;
function getComponent(key) {
    return dynamic_components_1.default[key];
}
exports.getComponent = getComponent;
//# sourceMappingURL=components-registry.js.map