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
const dayjs_1 = __importDefault(require("dayjs"));
const components_registry_1 = require("../../components-registry");
const map_styles_to_class_names_1 = require("../../utils/map-styles-to-class-names");
const get_page_url_path_1 = __importDefault(require("../../utils/get-page-url-path"));
const link_1 = __importDefault(require("../../utils/link"));
function FeaturedPostsSection(props) {
    const cssId = props.elementId || null;
    const colors = props.colors || 'colors-a';
    const sectionStyles = props.styles?.self || {};
    const sectionBorderWidth = sectionStyles.borderWidth ? sectionStyles.borderWidth : 0;
    return (React.createElement("div", { id: cssId, className: (0, classnames_1.default)('sb-component', 'sb-component-section', 'sb-component-featured-posts-section', colors, 'flex', 'flex-col', 'justify-center', 'relative', sectionStyles.height ? mapMinHeightStyles(sectionStyles.height) : null, sectionStyles.margin, sectionStyles.padding, sectionStyles.borderColor, sectionStyles.borderRadius ? (0, map_styles_to_class_names_1.mapStylesToClassNames)({ borderRadius: sectionStyles.borderRadius }) : null, sectionStyles.borderStyle ? (0, map_styles_to_class_names_1.mapStylesToClassNames)({ borderStyle: sectionStyles.borderStyle }) : null), style: {
            borderWidth: `${sectionBorderWidth}px`
        } },
        React.createElement("div", { className: (0, classnames_1.default)('flex', 'w-full', sectionStyles.justifyContent ? (0, map_styles_to_class_names_1.mapStylesToClassNames)({ justifyContent: sectionStyles.justifyContent }) : null) },
            React.createElement("div", { className: (0, classnames_1.default)('w-full', sectionStyles.width ? mapMaxWidthStyles(sectionStyles.width) : null) },
                featuredPostsHeader(props),
                featuredPostsVariants(props),
                featuredPostsActions(props)))));
}
exports.default = FeaturedPostsSection;
function featuredPostsHeader(props) {
    if (!props.title && !props.subtitle) {
        return null;
    }
    const styles = props.styles || {};
    return (React.createElement("div", null,
        props.title && (React.createElement("h2", { className: (0, classnames_1.default)('text-3xl', 'sm:text-4xl', styles.title ? (0, map_styles_to_class_names_1.mapStylesToClassNames)(styles.title) : null), "data-sb-field-path": ".title" }, props.title)),
        props.subtitle && (React.createElement("p", { className: (0, classnames_1.default)('text-lg', 'sm:text-xl', styles.subtitle ? (0, map_styles_to_class_names_1.mapStylesToClassNames)(styles.subtitle) : null), "data-sb-field-path": ".subtitle" }, props.subtitle))));
}
function featuredPostsActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const styles = props.styles || {};
    const Action = (0, components_registry_1.getComponent)('Action');
    return (React.createElement("div", { className: (0, classnames_1.default)('flex', 'flex-wrap', 'items-center', 'mt-12', '-mx-2', styles.actions ? (0, map_styles_to_class_names_1.mapStylesToClassNames)(styles.actions) : null), "data-sb-field-path": ".actions" }, props.actions.map((action, index) => (React.createElement(Action, { key: index, ...action, className: "mb-3 mx-2 lg:whitespace-nowrap", annotationPrefix: `.${index}` })))));
}
function featuredPostsVariants(props) {
    const variant = props.variant || 'variant-a';
    switch (variant) {
        case 'variant-a':
            return postsVariantA(props);
        case 'variant-b':
            return postsVariantB(props);
        case 'variant-c':
            return postsVariantC(props);
        case 'variant-d':
            return postsVariantD(props);
    }
    return null;
}
function postsVariantA(props) {
    const posts = props.posts || [];
    if (posts.length === 0) {
        return null;
    }
    const ImageBlock = (0, components_registry_1.getComponent)('ImageBlock');
    return (React.createElement("div", { className: "grid gap-6 md:grid-cols-3 lg:gap-8", "data-sb-field-path": ".posts" }, posts.map((post, index) => (React.createElement("article", { key: index, className: "sb-card", "data-sb-object-id": post.__metadata?.id },
        post.featuredImage && (React.createElement(link_1.default, { href: (0, get_page_url_path_1.default)(post), className: "block h-0 w-full pt-9/16 relative", "data-sb-field-path": "featuredImage" },
            React.createElement(ImageBlock, { ...post.featuredImage, className: "absolute left-0 top-0 h-full w-full object-cover" }))),
        React.createElement("div", { className: "px-4 py-6 sm:px-6 sm:pb-10" },
            props.showDate && postDate(post.date),
            props.title ? (React.createElement("h3", { className: "text-xl sm:text-2xl" },
                React.createElement(link_1.default, { href: (0, get_page_url_path_1.default)(post), "data-sb-field-path": "title" }, post.title))) : (React.createElement("h2", { className: "text-xl sm:text-2xl" },
                React.createElement(link_1.default, { href: (0, get_page_url_path_1.default)(post), "data-sb-field-path": "title" }, post.title))),
            props.showAuthor && post.author && postAuthor(post.author),
            post.excerpt && (React.createElement("p", { className: "mt-3", "data-sb-field-path": "excerpt" }, post.excerpt))))))));
}
function postsVariantB(props) {
    const posts = props.posts || [];
    if (posts.length === 0) {
        return null;
    }
    const ImageBlock = (0, components_registry_1.getComponent)('ImageBlock');
    return (React.createElement("div", { className: "grid gap-6 md:grid-cols-3 lg:gap-8", "data-sb-field-path": ".posts" }, posts.map((post, index) => (React.createElement("article", { key: index, className: (0, classnames_1.default)('sb-card', {
            'md:col-span-2': index % 4 === 0 || (index + 1) % 4 === 0
        }), "data-sb-object-id": post.__metadata?.id },
        post.featuredImage && (React.createElement(link_1.default, { href: (0, get_page_url_path_1.default)(post), className: "block h-0 w-full pt-9/16 relative md:pt-0 md:h-60 lg:h-72", "data-sb-field-path": "featuredImage" },
            React.createElement(ImageBlock, { ...post.featuredImage, className: "absolute left-0 top-0 h-full w-full object-cover" }))),
        React.createElement("div", { className: "px-4 py-6 sm:px-6 sm:pb-10" },
            props.showDate && postDate(post.date),
            props.title ? (React.createElement("h3", { className: "text-xl sm:text-2xl" },
                React.createElement(link_1.default, { href: (0, get_page_url_path_1.default)(post), "data-sb-field-path": "title" }, post.title))) : (React.createElement("h2", { className: "text-xl sm:text-2xl" },
                React.createElement(link_1.default, { href: (0, get_page_url_path_1.default)(post), "data-sb-field-path": "title" }, post.title))),
            props.showAuthor && post.author && postAuthor(post.author),
            post.excerpt && (React.createElement("p", { className: "mt-3", "data-sb-field-path": "excerpt" }, post.excerpt))))))));
}
function postsVariantC(props) {
    const posts = props.posts || [];
    if (posts.length === 0) {
        return null;
    }
    const ImageBlock = (0, components_registry_1.getComponent)('ImageBlock');
    return (React.createElement("div", { className: "grid gap-6 md:grid-cols-3 lg:gap-8", "data-sb-field-path": ".posts" }, posts.map((post, index) => {
        const isFullWidth = index % 4 === 0;
        return (React.createElement("article", { key: index, className: (0, classnames_1.default)('sb-card', {
                'md:col-span-3 md:flex': isFullWidth
            }), "data-sb-object-id": post.__metadata.id },
            post.featuredImage && (React.createElement("div", { className: (0, classnames_1.default)({
                    'md:w-2/5': isFullWidth
                }) },
                React.createElement(link_1.default, { href: (0, get_page_url_path_1.default)(post), className: (0, classnames_1.default)('block', 'h-0', 'w-full', 'pt-9/16', 'relative', {
                        'md:h-60 md:min-h-full md:pt-0 lg:h-72': isFullWidth
                    }), "data-sb-field-path": "featuredImage" },
                    React.createElement(ImageBlock, { ...post.featuredImage, className: "absolute left-0 top-0 h-full w-full object-cover" })))),
            React.createElement("div", { className: (0, classnames_1.default)('px-4 pt-6 pb-8 sm:px-6', {
                    'md:w-3/5 md:pt-8 md:pb-10': isFullWidth
                }) },
                props.showDate && postDate(post.date),
                props.title ? (React.createElement("h3", { className: (0, classnames_1.default)('text-xl', 'sm:text-2xl', {
                        'md:text-3xl': isFullWidth
                    }) },
                    React.createElement(link_1.default, { href: (0, get_page_url_path_1.default)(post), "data-sb-field-path": "title" }, post.title))) : (React.createElement("h2", { className: (0, classnames_1.default)('text-xl', 'sm:text-2xl', {
                        'md:text-3xl': isFullWidth
                    }) },
                    React.createElement(link_1.default, { href: (0, get_page_url_path_1.default)(post), "data-sb-field-path": "title" }, post.title))),
                props.showAuthor && post.author && postAuthor(post.author),
                post.excerpt && (React.createElement("p", { className: "mt-3", "data-sb-field-path": "excerpt" }, post.excerpt)))));
    })));
}
function postsVariantD(props) {
    const posts = props.posts || [];
    if (posts.length === 0) {
        return null;
    }
    const ImageBlock = (0, components_registry_1.getComponent)('ImageBlock');
    return (React.createElement("div", { "data-sb-field-path": ".posts" }, posts.map((post, index) => (React.createElement("article", { key: index, className: "sb-card mb-8 md:flex", "data-sb-object-id": post.__metadata.id },
        post.featuredImage && (React.createElement("div", { className: "md:w-2/5" },
            React.createElement(link_1.default, { href: (0, get_page_url_path_1.default)(post), className: "block h-0 w-full pt-9/16 relative md:h-60 md:min-h-full md:pt-0 lg:h-72", "data-sb-field-path": "featuredImage" },
                React.createElement(ImageBlock, { ...post.featuredImage, className: "absolute left-0 top-0 h-full w-full object-cover" })))),
        React.createElement("div", { className: "px-4 pt-6 pb-8 sm:px-6 md:w-3/5 md:pt-8 md:pb-10" },
            props.showDate && postDate(post.date),
            props.title ? (React.createElement("h3", { className: "text-xl sm:text-2xl md:text-3xl" },
                React.createElement(link_1.default, { href: (0, get_page_url_path_1.default)(post), "data-sb-field-path": "title" }, post.title))) : (React.createElement("h2", { className: "text-xl sm:text-2xl md:text-3xl" },
                React.createElement(link_1.default, { href: (0, get_page_url_path_1.default)(post), "data-sb-field-path": "title" }, post.title))),
            props.showAuthor && post.author && postAuthor(post.author),
            post.excerpt && (React.createElement("p", { className: "mt-3", "data-sb-field-path": "excerpt" }, post.excerpt))))))));
}
function postDate(date) {
    const dateTimeAttr = (0, dayjs_1.default)(date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = (0, dayjs_1.default)(date).format('MMMM D, YYYY');
    return (React.createElement("div", { className: "text-sm mb-1" },
        React.createElement("time", { dateTime: dateTimeAttr, "data-sb-field-path": "date" }, formattedDate)));
}
function postAuthor(author) {
    return (React.createElement("div", { className: "text-sm mt-1" },
        "By",
        ' ',
        React.createElement("span", { "data-sb-field-path": "author" },
            author.firstName && React.createElement("span", { "data-sb-field-path": ".firstName" }, author.firstName),
            ' ',
            author.lastName && React.createElement("span", { "data-sb-field-path": ".lastName" }, author.lastName))));
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
//# sourceMappingURL=index.js.map