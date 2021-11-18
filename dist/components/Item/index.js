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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const markdown_to_jsx_1 = __importDefault(require("markdown-to-jsx"));
const components_registry_1 = require("../../components-registry");
const map_styles_to_class_names_1 = require("../../utils/map-styles-to-class-names");
function Item(props) {
    const cssId = props.elementId || null;
    return (React.createElement("div", { id: cssId, className: (0, classnames_1.default)('sb-component', 'sb-component-block', 'sb-component-item', 'flex', 'flex-col', 'justify-center', 'relative'), "data-sb-field-path": props.annotationPrefix },
        React.createElement("div", { className: (0, classnames_1.default)('flex', 'relative', 'w-full') },
            React.createElement("div", { className: (0, classnames_1.default)('w-full') },
                React.createElement("article", { className: "sb-card" },
                    React.createElement("div", { className: "px-4 py-6 sm:px-6 sm:pb-10" },
                        props.title && (React.createElement("h2", { className: (0, classnames_1.default)('text-4xl', 'sm:text-5xl', props?.styles?.title ? (0, map_styles_to_class_names_1.mapStylesToClassNames)(props?.styles?.title) : null), "data-sb-field-path": ".title" }, props.title)),
                        props.subtitle && (React.createElement("p", { className: (0, classnames_1.default)('text-xl', 'sm:text-2xl', props?.styles?.subtitle ? (0, map_styles_to_class_names_1.mapStylesToClassNames)(props?.styles?.subtitle) : null), "data-sb-field-path": ".subtitle" }, props.subtitle)),
                        props.content && (React.createElement(markdown_to_jsx_1.default, { options: { forceBlock: true, forceWrapper: true }, className: (0, classnames_1.default)('sb-markdown', 'md:text-lg', props?.styles?.content ? (0, map_styles_to_class_names_1.mapStylesToClassNames)(props?.styles?.content) : null), "data-sb-field-path": ".content" }, props.content)),
                        props.author && React.createElement("div", null, props.author),
                        props.rating && React.createElement("div", null, props.rating),
                        React.createElement("div", { className: "my-3 flex-1 px-4 w-full" }, itemActions(props))))))));
}
exports.default = Item;
function itemActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const styles = props.styles || {};
    const Action = (0, components_registry_1.getComponent)('Action');
    return (React.createElement("div", { className: (0, classnames_1.default)('flex', 'flex-wrap', 'items-center', '-mx-2', styles.actions ? (0, map_styles_to_class_names_1.mapStylesToClassNames)(styles.actions) : null), "data-sb-field-path": ".actions" }, actions.map((action, index) => (React.createElement(Action, { key: index, ...action, className: "mb-3 mx-2 lg:whitespace-nowrap", annotationPrefix: `.${index}` })))));
}
//# sourceMappingURL=index.js.map