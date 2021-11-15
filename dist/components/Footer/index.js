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
const ImageBlock_1 = __importDefault(require("../ImageBlock"));
const link_1 = __importDefault(require("../../utils/link"));
function Footer(props) {
    const colors = props.colors || 'colors-a';
    const footerStyles = props.styles?.self || {};
    const primaryLinks = props.primaryLinks || [];
    const socialLinks = props.socialLinks || [];
    const legalLinks = props.legalLinks || [];
    const Action = (0, components_registry_1.getComponent)('Action');
    const Social = (0, components_registry_1.getComponent)('Social');
    return (React.createElement("footer", { className: (0, classnames_1.default)('sb-component', 'sb-component-footer', colors, footerStyles.padding), "data-sb-field-path": `${props.annotationPrefix}:footer` },
        React.createElement("div", { className: (0, classnames_1.default)('mx-auto', footerStyles.width ? mapMaxWidthStyles(footerStyles.width) : null) },
            (props.logo || props.title || props.text) && (React.createElement("div", { className: "mb-12" },
                props.logo && (React.createElement(link_1.default, { href: "/", className: "inline-block mb-4", "data-sb-field-path": ".logo" }, props.logo && React.createElement(ImageBlock_1.default, { ...props.logo }))),
                props.title && (React.createElement("div", { className: "mb-2 text-2xl tracking-wide", "data-sb-field-path": ".title" }, props.title)),
                props.text && (React.createElement(markdown_to_jsx_1.default, { options: { forceBlock: true, forceWrapper: true }, className: "sb-markdown max-w-xl", "data-sb-field-path": ".text" }, props.text)))),
            (primaryLinks.length > 0 || socialLinks.length > 0 || props.contacts) && (React.createElement("div", { className: "sm:flex sm:justify-between sm:items-end" },
                primaryLinks.length > 0 && (React.createElement("div", { className: "mb-6" },
                    React.createElement("ul", { className: "flex flex-col items-start mb-6 space-y-6 text-lg", "data-sb-field-path": ".primaryLinks" }, primaryLinks.map((link, index) => (React.createElement("li", { key: index, "data-sb-field-path": `.${index}` },
                        React.createElement(Action, { ...link }))))))),
                (socialLinks.length > 0 || props.contacts) && (React.createElement("div", { className: "mb-6" },
                    socialLinks.length > 0 && (React.createElement("ul", { className: "flex items-center mb-6 space-x-10", "data-sb-field-path": ".socialLinks" }, socialLinks.map((link, index) => (React.createElement("li", { key: index, "data-sb-field-path": `.${index}` },
                        React.createElement(Social, { ...link })))))),
                    props.contacts && React.createElement(Contacts, { ...props.contacts }))))),
            React.createElement("div", { className: "sb-divider" }),
            React.createElement("div", { className: "flex flex-col-reverse justify-between pt-6 lg:flex-row" },
                props.copyrightText && React.createElement("p", { "data-sb-field-path": ".copyrightText" }, props.copyrightText),
                legalLinks.length > 0 && (React.createElement("ul", { className: "flex flex-col mb-6 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row", "data-sb-field-path": ".legalLinks" }, legalLinks.map((link, index) => (React.createElement("li", { key: index, "data-sb-field-path": `.${index}` },
                    React.createElement(Action, { ...link }))))))))));
}
exports.default = Footer;
function Contacts(props) {
    return (React.createElement("div", { className: "mb-6 space-y-4 text-lg", "data-sb-field-path": ".contacts" },
        props.phoneNumber && (React.createElement("p", null,
            React.createElement("a", { href: `tel:${props.phoneNumber}`, "aria-label": props.phoneAltText, title: props.phoneAltText, "data-sb-field-path": ".phoneNumber .phoneNumber#@href .phoneAltText#@title" }, props.phoneNumber))),
        props.email && (React.createElement("p", null,
            React.createElement("a", { href: `mailto:${props.email}`, "aria-label": props.emailAltText, title: props.emailAltText, "data-sb-field-path": ".email .email#@href .emailAltText#@title" }, props.email))),
        props.address && (React.createElement("p", null,
            React.createElement("a", { href: `https://www.google.com/maps/search/${props.address}`, "aria-label": props.addressAltText, title: props.addressAltText, target: "_blank", rel: "noopener noreferrer", "data-sb-field-path": ".address .address#@href .addressAltText#@title" }, props.address)))));
}
function mapMaxWidthStyles(width) {
    switch (width) {
        case 'narrow':
            return 'max-w-screen-xl';
        case 'wide':
            return 'max-w-screen-2xl';
        case 'full':
            return 'max-w-full';
    }
    return null;
}
//# sourceMappingURL=index.js.map