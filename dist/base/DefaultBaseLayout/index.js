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
const head_1 = __importDefault(require("next/head"));
const classnames_1 = __importDefault(require("classnames"));
const components_registry_1 = require("../../components-registry");
function DefaultBaseLayout(props) {
    const { page, site } = props;
    const siteMeta = site?.__metadata || {};
    const pageMeta = page?.__metadata || {};
    const Header = (0, components_registry_1.getComponent)('Header');
    const Footer = (0, components_registry_1.getComponent)('Footer');
    return (React.createElement("div", { className: (0, classnames_1.default)('page', pageMeta.pageCssClasses), "data-sb-object-id": pageMeta.id },
        React.createElement("div", { className: "base default-base-layout" },
            React.createElement(head_1.default, null,
                React.createElement("title", null, page.title),
                React.createElement("meta", { name: "description", content: "Stackbit Components Library" }),
                React.createElement("link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon/favicon-32x32.png" }),
                React.createElement("link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon/favicon-16x16.png" })),
            React.createElement(Header, { ...site.header, annotationPrefix: siteMeta.id }),
            props.children,
            React.createElement(Footer, { ...site.footer, annotationPrefix: siteMeta.id }))));
}
exports.default = DefaultBaseLayout;
//# sourceMappingURL=index.js.map