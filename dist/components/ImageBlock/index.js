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
function ImageBlock(props) {
    const { url, altText, caption } = props;
    if (!url) {
        return null;
    }
    const cssClasses = props.className || null;
    const cssId = props.elementId || null;
    const styles = props.styles?.self || {};
    const imageOpacity = styles.opacity || styles.opacity === 0 ? styles.opacity : 100;
    return (React.createElement("img", { id: cssId, className: (0, classnames_1.default)('sb-component', 'sb-component-block', 'sb-component-image-block', cssClasses), src: url, alt: altText || '', title: caption, style: { opacity: imageOpacity * 0.01 }, "data-sb-field-path": ".url#@src .altText#@alt .caption#@title .elementId#@id" }));
}
exports.default = ImageBlock;
//# sourceMappingURL=index.js.map