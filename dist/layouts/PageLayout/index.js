"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const components_registry_1 = require("../../components-registry");
const base_layout_1 = require("../../utils/base-layout");
function PageLayout(props) {
    const { page, site } = props;
    const BaseLayout = (0, base_layout_1.getBaseLayoutComponent)(page.baseLayout, site.baseLayout);
    const sections = page.sections || [];
    return (React.createElement(BaseLayout, { page: page, site: site },
        React.createElement("main", { id: "main", className: "layout page-layout" },
            page.title && (React.createElement("h1", { className: "sr-only", "data-sb-field-path": "title" }, page.title)),
            sections.length > 0 && (React.createElement("div", { "data-sb-field-path": "sections" }, sections.map((section, index) => {
                const Component = (0, components_registry_1.getComponent)(section.type);
                if (!Component) {
                    throw new Error(`no component matching the page section's type: ${section.type}`);
                }
                return (React.createElement("div", { key: index, "data-sb-field-path": `sections.${index}` },
                    React.createElement(Component, { ...section })));
            }))))));
}
exports.default = PageLayout;
//# sourceMappingURL=index.js.map