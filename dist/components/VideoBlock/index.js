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
function VideoBlock(props) {
    const { url, thumbnailUrl, autoplay, loop, muted, controls } = props;
    if (!url) {
        return null;
    }
    const cssClasses = props.className || null;
    const cssId = props.elementId || null;
    return (React.createElement("video", { id: cssId, ...(autoplay && { autoPlay: true }), ...(loop && { loop: true }), ...(muted && { muted: true }), ...(controls && { controls: true }), playsInline: true, poster: thumbnailUrl, className: (0, classnames_1.default)('sb-component', 'sb-component-block', 'sb-component-video-block', cssClasses), "data-sb-field-path": ".elementId#@id .thumbnailUrl#@poster" },
        React.createElement("source", { src: url, type: "video/mp4", "data-sb-field-path": ".url" })));
}
exports.default = VideoBlock;
//# sourceMappingURL=index.js.map