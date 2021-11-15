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
const react_1 = require("react");
const classnames_1 = __importDefault(require("classnames"));
const components_registry_1 = require("../../components-registry");
const ImageBlock_1 = __importDefault(require("../ImageBlock"));
const link_1 = __importDefault(require("../../utils/link"));
const close_1 = __importDefault(require("../../svgs/close"));
const hamburger_1 = __importDefault(require("../../svgs/hamburger"));
function Header(props) {
    const primaryColors = props.primaryColors || 'colors-a';
    const headerStyles = props.styles?.self || {};
    return (React.createElement("header", { className: (0, classnames_1.default)('sb-component', 'sb-component-header', primaryColors, 'relative', headerStyles.padding), "data-sb-field-path": `${props.annotationPrefix}:header` },
        React.createElement("div", { className: (0, classnames_1.default)('mx-auto', headerStyles.width ? mapMaxWidthStyles(headerStyles.width) : null) },
            React.createElement(link_1.default, { href: "#main", className: "sr-only" }, "Skip to main content"),
            headerVariants(props))));
}
exports.default = Header;
function headerVariants(props) {
    const headerVariant = props.headerVariant || 'variant-a';
    switch (headerVariant) {
        case 'variant-a':
            return headerVariantA(props);
        case 'variant-b':
            return headerVariantB(props);
        case 'variant-c':
            return headerVariantC(props);
        case 'variant-d':
            return headerVariantD(props);
        case 'variant-e':
            return headerVariantE(props);
    }
    return null;
}
function headerVariantA(props) {
    const primaryLinks = props.primaryLinks || [];
    const secondaryLinks = props.secondaryLinks || [];
    return (React.createElement("div", { className: "flex items-center relative" },
        (props.logo || (props.title && props.isTitleVisible)) && React.createElement("div", { className: "mr-8" }, siteLogoLink(props)),
        primaryLinks.length > 0 && (React.createElement("ul", { className: "hidden lg:flex lg:items-center mr-8 space-x-8", "data-sb-field-path": ".primaryLinks" }, listOfLinks(primaryLinks))),
        secondaryLinks.length > 0 && (React.createElement("ul", { className: "hidden lg:flex lg:items-center ml-auto space-x-8", "data-sb-field-path": ".secondaryLinks" }, listOfLinks(secondaryLinks))),
        (primaryLinks.length > 0 || secondaryLinks.length > 0) && React.createElement(MobileMenu, { ...props })));
}
function headerVariantB(props) {
    const primaryLinks = props.primaryLinks || [];
    const secondaryLinks = props.secondaryLinks || [];
    return (React.createElement("div", { className: "flex items-center relative" },
        (props.logo || (props.title && props.isTitleVisible)) && React.createElement("div", { className: "mr-8" }, siteLogoLink(props)),
        primaryLinks.length > 0 && (React.createElement("ul", { className: "hidden lg:flex lg:items-center space-x-8 absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-auto", "data-sb-field-path": ".primaryLinks" }, listOfLinks(primaryLinks))),
        secondaryLinks.length > 0 && (React.createElement("ul", { className: "hidden lg:flex lg:items-center ml-auto space-x-8", "data-sb-field-path": ".secondaryLinks" }, listOfLinks(secondaryLinks))),
        (primaryLinks.length > 0 || secondaryLinks.length > 0) && React.createElement(MobileMenu, { ...props })));
}
function headerVariantC(props) {
    const primaryLinks = props.primaryLinks || [];
    const secondaryLinks = props.secondaryLinks || [];
    return (React.createElement("div", { className: "flex items-center relative" },
        (props.logo || (props.title && props.isTitleVisible)) && React.createElement("div", { className: "mr-8" }, siteLogoLink(props)),
        primaryLinks.length > 0 && (React.createElement("ul", { className: "hidden lg:flex lg:items-center ml-auto space-x-8", "data-sb-field-path": ".primaryLinks" }, listOfLinks(primaryLinks))),
        secondaryLinks.length > 0 && (React.createElement("ul", { className: (0, classnames_1.default)('hidden', 'lg:flex', 'lg:items-center', 'space-x-8', primaryLinks.length > 0 ? 'ml-8' : 'ml-auto'), "data-sb-field-path": ".secondaryLinks" }, listOfLinks(secondaryLinks))),
        (primaryLinks.length > 0 || secondaryLinks.length > 0) && React.createElement(MobileMenu, { ...props })));
}
function headerVariantD(props) {
    const primaryLinks = props.primaryLinks || [];
    const secondaryLinks = props.secondaryLinks || [];
    return (React.createElement("div", { className: "flex items-center relative" },
        (props.logo || (props.title && props.isTitleVisible)) && (React.createElement("div", { className: "mr-8 lg:mr-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2" }, siteLogoLink(props))),
        primaryLinks.length > 0 && (React.createElement("ul", { className: "hidden lg:flex lg:items-center space-x-8", "data-sb-field-path": ".primaryLinks" }, listOfLinks(primaryLinks))),
        secondaryLinks.length > 0 && (React.createElement("ul", { className: "hidden lg:flex lg:items-center ml-auto space-x-8", "data-sb-field-path": ".secondaryLinks" }, listOfLinks(secondaryLinks))),
        (primaryLinks.length > 0 || secondaryLinks.length > 0) && React.createElement(MobileMenu, { ...props })));
}
function headerVariantE(props) {
    const primaryLinks = props.primaryLinks || [];
    const secondaryLinks = props.secondaryLinks || [];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex items-center relative" },
            (props.logo || (props.title && props.isTitleVisible)) && (React.createElement("div", { className: "mr-8 lg:mr-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2" }, siteLogoLink(props))),
            secondaryLinks.length > 0 && (React.createElement("ul", { className: "hidden lg:flex lg:items-center space-x-8 ml-auto", "data-sb-field-path": ".secondaryLinks" }, listOfLinks(secondaryLinks))),
            (primaryLinks.length > 0 || secondaryLinks.length > 0) && React.createElement(MobileMenu, { ...props })),
        primaryLinks.length > 0 && (React.createElement("ul", { className: "hidden lg:flex lg:items-center lg:justify-center space-x-8 mt-4", "data-sb-field-path": ".primaryLinks" }, listOfLinks(primaryLinks)))));
}
function MobileMenu(props) {
    const [isMenuOpen, setIsMenuOpen] = (0, react_1.useState)(false);
    const secondaryColors = props.secondaryColors || 'colors-a';
    const primaryLinks = props.primaryLinks || [];
    const secondaryLinks = props.secondaryLinks || [];
    return (React.createElement("div", { className: "ml-auto lg:hidden" },
        React.createElement("button", { "aria-label": "Open Menu", title: "Open Menu", className: "p-2 -mr-1 focus:outline-none", onClick: () => setIsMenuOpen(true) },
            React.createElement("span", { className: "sr-only" }, "Open Menu"),
            React.createElement(hamburger_1.default, { className: "fill-current h-6 w-6" })),
        isMenuOpen && (React.createElement("div", { className: (0, classnames_1.default)(secondaryColors, 'fixed', 'inset-0', 'px-4', 'sm:px-8', 'py-5', 'overflow-y-auto', 'z-10') },
            React.createElement("div", { className: "flex flex-col min-h-full" },
                React.createElement("div", { className: "flex items-center justify-between mb-10" },
                    (props.logo || (props.title && props.isTitleVisible)) && siteLogoLink(props),
                    React.createElement("button", { "aria-label": "Close Menu", title: "Close Menu", className: "p-2 -mr-1 focus:outline-none", onClick: () => setIsMenuOpen(false) },
                        React.createElement(close_1.default, { className: "fill-current h-6 w-6" }))),
                primaryLinks.length > 0 && (React.createElement("ul", { className: "flex-grow mb-10 space-y-6", "data-sb-field-path": ".primaryLinks" }, listOfLinks(primaryLinks, true))),
                secondaryLinks.length > 0 && (React.createElement("ul", { className: "mb-10 space-y-5", "data-sb-field-path": ".secondaryLinks" }, listOfLinks(secondaryLinks, true))))))));
}
function siteLogoLink(props) {
    return (React.createElement(link_1.default, { href: "/", "aria-label": props.title, className: "flex items-center", "data-sb-field-path": ".title#span[1] .logo#img[1]" },
        props.logo && React.createElement(ImageBlock_1.default, { ...props.logo, className: (0, classnames_1.default)({ 'mr-2': props.isTitleVisible }) }),
        props.title && props.isTitleVisible && React.createElement("span", { className: "text-2xl tracking-wide" }, props.title)));
}
function listOfLinks(links, inMobileMenu = false) {
    const Action = (0, components_registry_1.getComponent)('Action');
    return links.map((link, index) => {
        const defaultStyle = link.type === 'Link' ? 'link' : 'secondary';
        const style = link.style || defaultStyle;
        return (React.createElement("li", { key: index, "data-sb-field-path": `.${index}` },
            React.createElement(Action, { ...link, className: (0, classnames_1.default)(inMobileMenu && style !== 'link' ? 'w-full' : '') })));
    });
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