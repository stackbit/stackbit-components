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
const link_1 = __importDefault(require("../../utils/link"));
const facebook_1 = __importDefault(require("../../svgs/facebook"));
const github_1 = __importDefault(require("../../svgs/github"));
const instagram_1 = __importDefault(require("../../svgs/instagram"));
const linkedin_1 = __importDefault(require("../../svgs/linkedin"));
const twitter_1 = __importDefault(require("../../svgs/twitter"));
const iconMap = {
    facebook: facebook_1.default,
    github: github_1.default,
    instagram: instagram_1.default,
    linkedin: linkedin_1.default,
    twitter: twitter_1.default
};
function Social(props) {
    const { label, altText, url, showIcon } = props;
    const icon = props.icon || 'facebook';
    const IconComponent = iconMap[icon];
    const annotationPrefix = props.annotationPrefix || '';
    const annotations = [
        `${annotationPrefix}`,
        `${annotationPrefix}.url#@href`,
        `${annotationPrefix}.altText#@aria-label`,
        `${annotationPrefix}.elementId#@id`,
        `${annotationPrefix}.label#span[1]`,
        `${annotationPrefix}.icon#svg[1]`
    ];
    const style = props.style || 'link';
    const cssClasses = props.className || null;
    const cssId = props.elementId || null;
    return (React.createElement(link_1.default, { href: url, "aria-label": altText, id: cssId, className: (0, classnames_1.default)('sb-component', 'sb-component-block', style === 'link' ? 'sb-component-link' : 'sb-component-button', cssClasses, {
            'sb-component-button-primary': style === 'primary',
            'sb-component-button-secondary': style === 'secondary'
        }), "data-sb-field-path": annotations.join(' ').trim() },
        label && React.createElement("span", null, label),
        showIcon && IconComponent && React.createElement(IconComponent, { className: (0, classnames_1.default)('fill-current h-5 w-5', label ? 'mr-1.5 order-first' : '') })));
}
exports.default = Social;
//# sourceMappingURL=index.js.map