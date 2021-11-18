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
const components_registry_1 = require("../../components-registry");
const map_styles_to_class_names_1 = require("../../utils/map-styles-to-class-names");
const Item_1 = __importDefault(require("../Item"));
function FeaturedItemsSection(props) {
    const sectionStyles = props.styles?.self || {};
    const cssId = props.elementId || null;
    const sectionBorderWidth = sectionStyles.borderWidth ? sectionStyles.borderWidth : 0;
    return (React.createElement("div", { id: cssId, className: (0, classnames_1.default)('sb-component', 'sb-component-section', 'sb-component-featured-items-section', 'flex', 'flex-col', 'justify-center', 'relative', sectionStyles.height ? mapMinHeightStyles(sectionStyles.height) : null, sectionStyles.margin, sectionStyles.padding, sectionStyles.borderColor, sectionStyles.borderRadius ? (0, map_styles_to_class_names_1.mapStylesToClassNames)({ borderRadius: sectionStyles.borderRadius }) : null, sectionStyles.borderStyle ? (0, map_styles_to_class_names_1.mapStylesToClassNames)({ borderStyle: sectionStyles.borderStyle }) : null), style: {
            borderWidth: `${sectionBorderWidth}px`
        }, "data-sb-field-path": props.annotationPrefix },
        React.createElement("div", { className: (0, classnames_1.default)('flex', 'relative', 'w-full', sectionStyles.justifyContent ? (0, map_styles_to_class_names_1.mapStylesToClassNames)({ justifyContent: sectionStyles.justifyContent }) : null) },
            React.createElement("div", { className: (0, classnames_1.default)('w-full', sectionStyles.width ? mapMaxWidthStyles(sectionStyles.width) : null) },
                React.createElement("article", { className: "sb-card" },
                    React.createElement("div", { className: "px-4 py-6 sm:px-6 sm:pb-10" },
                        props.title && (React.createElement("h2", { className: (0, classnames_1.default)('text-4xl', 'sm:text-5xl', props?.styles?.title ? (0, map_styles_to_class_names_1.mapStylesToClassNames)(props?.styles?.title) : null), "data-sb-field-path": ".title" }, props.title)),
                        props.subtitle && (React.createElement("p", { className: (0, classnames_1.default)('text-xl', 'sm:text-2xl', props?.styles?.subtitle ? (0, map_styles_to_class_names_1.mapStylesToClassNames)(props?.styles?.subtitle) : null), "data-sb-field-path": ".subtitle" }, props.subtitle)),
                        props?.items && (React.createElement("div", { className: "grid gap-6 md:grid-cols-3 lg:gap-8", "data-sb-field-path": ".items" }, props.items.map((item, index) => (React.createElement(Item_1.default, { key: index, ...item }))))),
                        React.createElement("div", { className: "my-3 flex-1 px-4 w-full" }, featuredItemActions(props))))))));
}
exports.default = FeaturedItemsSection;
function featuredItemActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const styles = props.styles || {};
    const Action = (0, components_registry_1.getComponent)('Action');
    return (React.createElement("div", { className: (0, classnames_1.default)('flex', 'flex-wrap', 'items-center', '-mx-2', styles.actions ? (0, map_styles_to_class_names_1.mapStylesToClassNames)(styles.actions) : null), "data-sb-field-path": ".actions" }, actions.map((action, index) => (React.createElement(Action, { key: index, ...action, className: "mb-3 mx-2 lg:whitespace-nowrap", annotationPrefix: `.${index}` })))));
}
function mapMinHeightStyles(height) {
    switch (height) {
        case 'auto':
            return 'min-h-0';
        case 'screen':
            return 'min-h-screen';
    }
    return null;
}
function mapMaxWidthStyles(width) {
    switch (width) {
        case 'narrow':
            return 'max-w-screen-md';
        case 'wide':
            return 'max-w-screen-xl';
        case 'full':
            return 'max-w-full';
    }
    return null;
}
//# sourceMappingURL=index.js.map