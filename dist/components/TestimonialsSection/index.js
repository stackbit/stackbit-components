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
const map_styles_to_class_names_1 = require("../../utils/map-styles-to-class-names");
const ImageBlock_1 = __importDefault(require("../ImageBlock"));
function TestimonialsSection(props) {
    const cssId = props.elementId || null;
    const colors = props.colors || 'colors-a';
    const testimonials = props.testimonials || [];
    const sectionStyles = props.styles?.self || {};
    const sectionBorderWidth = sectionStyles.borderWidth ? sectionStyles.borderWidth : 0;
    return (React.createElement("div", { id: cssId, className: (0, classnames_1.default)('sb-component', 'sb-component-section', 'sb-component-testimonials-section', colors, 'flex', 'flex-col', 'justify-center', 'relative', sectionStyles.height ? mapMinHeightStyles(sectionStyles.height) : null, sectionStyles.margin, sectionStyles.padding, sectionStyles.borderColor, sectionStyles.borderRadius ? (0, map_styles_to_class_names_1.mapStylesToClassNames)({ borderRadius: sectionStyles.borderRadius }) : null, sectionStyles.borderStyle ? (0, map_styles_to_class_names_1.mapStylesToClassNames)({ borderStyle: sectionStyles.borderStyle }) : null), style: {
            borderWidth: `${sectionBorderWidth}px`
        } },
        React.createElement("div", { className: (0, classnames_1.default)('flex', 'w-full', sectionStyles.justifyContent ? (0, map_styles_to_class_names_1.mapStylesToClassNames)({ justifyContent: sectionStyles.justifyContent }) : null) },
            React.createElement("div", { className: (0, classnames_1.default)('w-full', sectionStyles.width ? mapMaxWidthStyles(sectionStyles.width) : null) },
                testimonialsHeader(props),
                testimonials.length > 0 && (React.createElement("div", { "data-sb-field-path": ".testimonials" }, testimonials.map((testimonial, index) => testimonialItem(testimonial, index))))))));
}
exports.default = TestimonialsSection;
function testimonialsHeader(props) {
    if (!props.title && !props.subtitle) {
        return null;
    }
    const styles = props.styles || {};
    return (React.createElement("div", null,
        props.title && (React.createElement("h2", { className: (0, classnames_1.default)('text-3xl', 'sm:text-4xl', styles.title ? (0, map_styles_to_class_names_1.mapStylesToClassNames)(styles.title) : null), "data-sb-field-path": ".title" }, props.title)),
        props.subtitle && (React.createElement("p", { className: (0, classnames_1.default)('text-lg', 'sm:text-xl', styles.subtitle ? (0, map_styles_to_class_names_1.mapStylesToClassNames)(styles.subtitle) : null), "data-sb-field-path": ".subtitle" }, props.subtitle))));
}
function testimonialItem(testimonial, index) {
    const styles = testimonial.styles || {};
    const testimonialStyles = styles.self || {};
    return (React.createElement("blockquote", { key: index, className: (0, classnames_1.default)('flex', '-mx-4', testimonialStyles.flexDirection ? mapFlexDirectionStyles(testimonialStyles.flexDirection) : null, testimonialStyles.margin), "data-sb-field-path": `.${index}` },
        React.createElement("div", { className: "flex-grow my-4 px-4" },
            testimonial.quote && (React.createElement(markdown_to_jsx_1.default, { options: { forceBlock: true, forceWrapper: true }, className: (0, classnames_1.default)('sb-markdown', 'text-3xl', 'sm:text-4xl', styles.quote ? (0, map_styles_to_class_names_1.mapStylesToClassNames)(styles.quote) : null), "data-sb-field-path": ".quote" }, testimonial.quote)),
            (testimonial.name || testimonial.title) && (React.createElement("footer", null,
                testimonial.name && (React.createElement("strong", { className: (0, classnames_1.default)('block', 'text-lg', styles.name ? (0, map_styles_to_class_names_1.mapStylesToClassNames)(styles.name) : null), "data-sb-field-path": ".name" }, testimonial.name)),
                testimonial.title && (React.createElement("span", { className: (0, classnames_1.default)('block', styles.title ? (0, map_styles_to_class_names_1.mapStylesToClassNames)(styles.title) : null), "data-sb-field-path": ".title" }, testimonial.title))))),
        testimonial.image && (React.createElement("div", { className: "flex-shrink-0 mx-auto my-4 px-4" },
            React.createElement("div", { className: "w-36 h-36 sm:w-48 sm:h-48", "data-sb-field-path": ".image" },
                React.createElement(ImageBlock_1.default, { ...testimonial.image, className: "h-full object-cover w-full" }))))));
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
            return ['flex-col', 'md:flex-row'];
        case 'row-reverse':
            return ['flex-col-reverse', 'md:flex-row-reverse'];
        case 'col':
            return ['flex-col'];
        case 'col-reverse':
            return ['flex-col-reverse'];
    }
    return null;
}
//# sourceMappingURL=index.js.map