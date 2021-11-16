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
const markdown_to_jsx_1 = __importDefault(require("markdown-to-jsx"));
const classnames_1 = __importDefault(require("classnames"));
const components_registry_1 = require("../../components-registry");
const map_styles_to_class_names_1 = require("../../utils/map-styles-to-class-names");
function CtaSection(props) {
    const cssId = props.elementId || null;
    const colors = props.colors || 'colors-a';
    const sectionStyles = props.styles?.self || {};
    const sectionBorderWidth = sectionStyles.borderWidth ? sectionStyles.borderWidth : 0;
    return (React.createElement("div", { id: cssId, className: (0, classnames_1.default)('sb-component', 'sb-component-section', 'sb-component-cta-section', colors, 'flex', 'flex-col', 'justify-center', 'relative', sectionStyles.height ? mapMinHeightStyles(sectionStyles.height) : null, sectionStyles.margin, sectionStyles.padding, sectionStyles.borderColor, sectionStyles.borderRadius ? (0, map_styles_to_class_names_1.mapStylesToClassNames)({ borderRadius: sectionStyles.borderRadius }) : null, sectionStyles.borderStyle ? (0, map_styles_to_class_names_1.mapStylesToClassNames)({ borderStyle: sectionStyles.borderStyle }) : null), style: {
            borderWidth: `${sectionBorderWidth}px`
        } },
        props.backgroundImage && ctaBackgroundImage(props.backgroundImage),
        React.createElement("div", { className: (0, classnames_1.default)('flex', 'relative', 'w-full', sectionStyles.justifyContent ? (0, map_styles_to_class_names_1.mapStylesToClassNames)({ justifyContent: sectionStyles.justifyContent }) : null) },
            React.createElement("div", { className: (0, classnames_1.default)('w-full', sectionStyles.width ? mapMaxWidthStyles(sectionStyles.width) : null) },
                React.createElement("div", { className: (0, classnames_1.default)('flex', '-mx-4', sectionStyles.flexDirection ? mapFlexDirectionStyles(sectionStyles.flexDirection) : null, sectionStyles.alignItems ? (0, map_styles_to_class_names_1.mapStylesToClassNames)({ alignItems: sectionStyles.alignItems }) : null) },
                    ctaBody(props),
                    ctaActions(props))))));
}
exports.default = CtaSection;
function ctaBackgroundImage(image) {
    const imageUrl = image.url;
    if (!imageUrl) {
        return null;
    }
    const imageStyles = image.styles?.self || {};
    const imageOpacity = imageStyles.opacity || imageStyles.opacity === 0 ? imageStyles.opacity : 100;
    return (React.createElement("div", { className: "bg-cover bg-center block absolute inset-0", style: {
            backgroundImage: `url('${imageUrl}')`,
            opacity: imageOpacity * 0.01
        } }));
}
function ctaBody(props) {
    if (!props.title && !props.text) {
        return null;
    }
    const styles = props.styles || {};
    return (React.createElement("div", { className: "my-3 px-4 w-full lg:flex-grow" },
        props.title && (React.createElement("h2", { className: (0, classnames_1.default)('text-3xl', 'sm:text-4xl', styles.title ? (0, map_styles_to_class_names_1.mapStylesToClassNames)(styles.title) : null), "data-sb-field-path": ".title" }, props.title)),
        props.text && (React.createElement(markdown_to_jsx_1.default, { options: { forceBlock: true, forceWrapper: true }, className: (0, classnames_1.default)('sb-markdown', 'md:text-lg', styles.text ? (0, map_styles_to_class_names_1.mapStylesToClassNames)(styles.text) : null), "data-sb-field-path": ".text" }, props.text))));
}
function ctaActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const styles = props.styles || {};
    const Action = (0, components_registry_1.getComponent)('Action');
    return (React.createElement("div", { className: (0, classnames_1.default)('my-3', 'px-4', 'w-full', styles.self?.flexDirection === 'row' ? 'lg:w-auto' : null) },
        React.createElement("div", { className: (0, classnames_1.default)('flex', 'flex-wrap', 'items-center', '-mx-2', 'lg:flex-nowrap', styles.actions ? (0, map_styles_to_class_names_1.mapStylesToClassNames)(styles.actions) : null), "data-sb-field-path": ".actions" }, actions.map((action, index) => (React.createElement(Action, { key: index, ...action, className: "mb-3 mx-2 lg:whitespace-nowrap", annotationPrefix: `.${index}` }))))));
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
function mapFlexDirectionStyles(flexDirection) {
    switch (flexDirection) {
        case 'row':
            return ['flex-col', 'lg:flex-row', 'lg:justify-between'];
        case 'col':
            return ['flex-col'];
    }
    return null;
}
//# sourceMappingURL=index.js.map