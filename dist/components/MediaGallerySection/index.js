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
const map_styles_to_class_names_1 = require("../../utils/map-styles-to-class-names");
const ImageBlock_1 = __importDefault(require("../ImageBlock"));
function MediaGallerySection(props) {
    const cssId = props.elementId || null;
    const sectionStyles = props.styles?.self;
    const colors = props.colors || 'colors-a';
    const sectionBorderWidth = sectionStyles?.borderWidth || 0;
    return (React.createElement("div", { id: cssId, className: (0, classnames_1.default)('sb-component', 'sb-component-section', 'sb-component-media-gallery-section', colors, 'flex', 'flex-col', 'justify-center', sectionStyles?.height ? mapMinHeightStyles(sectionStyles?.height) : null, sectionStyles?.margin, sectionStyles?.padding, sectionStyles?.borderColor, sectionStyles?.borderRadius ? (0, map_styles_to_class_names_1.mapStylesToClassNames)({ borderRadius: sectionStyles?.borderRadius }) : null, sectionStyles?.borderStyle ? (0, map_styles_to_class_names_1.mapStylesToClassNames)({ borderStyle: sectionStyles?.borderStyle }) : null), style: {
            borderWidth: `${sectionBorderWidth}px`
        } },
        React.createElement("div", { className: (0, classnames_1.default)('flex', 'w-full', sectionStyles?.justifyContent ? (0, map_styles_to_class_names_1.mapStylesToClassNames)({ justifyContent: sectionStyles?.justifyContent }) : null) },
            React.createElement("div", { className: (0, classnames_1.default)('flex', 'w-full', sectionStyles.width ? mapMaxWidthStyles(sectionStyles.width) : null, sectionStyles?.justifyContent ? (0, map_styles_to_class_names_1.mapStylesToClassNames)({ justifyContent: sectionStyles?.justifyContent }) : null) },
                React.createElement("div", { className: "inline-block max-w-full" },
                    React.createElement(MediaGalleryHeader, { ...props }),
                    React.createElement(MediaGalleryImageGrid, { ...props }))))));
}
exports.default = MediaGallerySection;
function MediaGalleryHeader(props) {
    if (!props.title && !props.subtitle) {
        return null;
    }
    const styles = props.styles;
    return (React.createElement("div", null,
        props.title && (React.createElement("h2", { className: (0, classnames_1.default)('text-3xl', 'sm:text-4xl', styles?.title ? (0, map_styles_to_class_names_1.mapStylesToClassNames)(styles.title) : null), "data-sb-field-path": ".title" }, props.title)),
        props.subtitle && (React.createElement("p", { className: (0, classnames_1.default)('text-lg', 'sm:text-xl', styles?.subtitle ? (0, map_styles_to_class_names_1.mapStylesToClassNames)(styles.subtitle) : null), "data-sb-field-path": ".subtitle" }, props.subtitle))));
}
function MediaGalleryImage({ image, enableHover, aspectRatio }) {
    if (!image) {
        return null;
    }
    return (React.createElement(ImageBlock_1.default, { ...image, className: (0, classnames_1.default)('sb-media-gallery-image', aspectRatio === 'auto' ? 'mx-auto' : 'absolute left-0 top-0 h-full w-full object-cover', {
            'transition-transform hover:scale-105': enableHover
        }) }));
}
function MediaGalleryImageGrid(props) {
    const images = props.images || [];
    if (images.length === 0) {
        return null;
    }
    const columns = props.columns || 4;
    const aspectRatio = props.aspectRatio || '1:1';
    const numGaps = columns - 1; // 1 image, 0 gaps, 2 images, 1 gap, etc etc
    const spacing = props.spacing || 0;
    // Give enough width for the desired image width * columns, plus the gaps, and the grid will auto-resize (resizing the images along with it)
    const widthString = `calc((${props.imageSizePx}px * ${columns}) + (${spacing}rem * ${numGaps}))`; // TODO - this is probably better done through flex
    return (React.createElement("div", { className: "grid place-items-center", "data-sb-field-path": ".images", style: {
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
            gap: spacing ? `${spacing}rem` : undefined,
            width: props.imageSizePx ? widthString : '100%',
            maxWidth: '100%'
        } }, images.map((image, index) => (React.createElement("div", { key: `image-${index}`, "data-sb-field-path": `.${index}`, className: (0, classnames_1.default)('overflow-hidden', 'relative', 'w-full', {
            'h-0 pt-1/1': aspectRatio === '1:1',
            'h-0 pt-3/2': aspectRatio === '2:3',
            'h-0 pt-2/3': aspectRatio === '3:2',
            'h-0 pt-4/3': aspectRatio === '3:4',
            'h-0 pt-3/4': aspectRatio === '4:3',
            'h-0 pt-9/16': aspectRatio === '16:9'
        }) },
        React.createElement(MediaGalleryImage, { image: image, enableHover: props.enableHover, aspectRatio: aspectRatio }),
        props.showCaption && image.caption && (React.createElement("div", { className: "absolute bg-white bg-opacity-70 left-0 mx-2 bottom-2 p-1.5 text-xs pointer-events-none" }, image.caption)))))));
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
            return 'max-w-screen-lg';
        case 'full':
            return 'max-w-full';
    }
    return null;
}
//# sourceMappingURL=index.js.map