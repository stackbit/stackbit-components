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
const dayjs_1 = __importDefault(require("dayjs"));
const markdown_to_jsx_1 = __importDefault(require("markdown-to-jsx"));
const ImageBlock_1 = __importDefault(require("../../components/ImageBlock"));
const base_layout_1 = require("../../utils/base-layout");
const components_registry_1 = require("../../components-registry");
function PostLayout(props) {
    const { page, site } = props;
    const BaseLayout = (0, base_layout_1.getBaseLayoutComponent)(page.baseLayout, site.baseLayout);
    const sections = page.bottomSections || [];
    const dateTimeAttr = (0, dayjs_1.default)(page.date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = (0, dayjs_1.default)(page.date).format('MMMM D, YYYY');
    return (React.createElement(BaseLayout, { page: page, site: site },
        React.createElement("main", { id: "main", className: "layout post-layout" },
            React.createElement("article", { className: "px-4 sm:px-8 py-14 lg:py-20" },
                React.createElement("div", { className: "max-w-screen-2xl mx-auto" },
                    React.createElement("header", { className: "max-w-screen-md mx-auto mb-12 text-center" },
                        page.title && (React.createElement("h1", { className: "text-4xl sm:text-5xl mb-6 max-w-xl mx-auto", "data-sb-field-path": "title" }, page.title)),
                        React.createElement("div", { className: "text-lg" },
                            React.createElement("time", { dateTime: dateTimeAttr, "data-sb-field-path": "date" }, formattedDate),
                            page.author && postAuthor(page.author))),
                    page.featuredImage && (React.createElement("figure", { className: "h-0 w-full pt-9/16 max-w-screen-xl mx-auto mb-8 relative", "data-sb-field-path": "featuredImage" },
                        React.createElement(ImageBlock_1.default, { ...page.featuredImage, className: "absolute left-0 top-0 h-full w-full object-cover" }))),
                    page.markdown_content && (React.createElement(markdown_to_jsx_1.default, { options: { forceBlock: true }, className: "sb-markdown max-w-screen-md mx-auto", "data-sb-field-path": "markdown_content" }, page.markdown_content)))),
            sections.length > 0 && (React.createElement("div", { "data-sb-field-path": "bottomSections" }, sections.map((section, index) => {
                const Component = (0, components_registry_1.getComponent)(section.type);
                if (!Component) {
                    throw new Error(`no component matching the page section's type: ${section.type}`);
                }
                return (React.createElement("div", { key: index, "data-sb-field-path": `bottomSections.${index}` },
                    React.createElement(Component, { ...section })));
            }))))));
}
exports.default = PostLayout;
function postAuthor(author) {
    return (React.createElement("div", { "data-sb-field-path": "author" },
        author.firstName && React.createElement("span", { "data-sb-field-path": ".firstName" }, author.firstName),
        ' ',
        author.lastName && React.createElement("span", { "data-sb-field-path": ".lastName" }, author.lastName)));
}
//# sourceMappingURL=index.js.map