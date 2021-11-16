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
const markdown_to_jsx_1 = __importDefault(require("markdown-to-jsx"));
const map_styles_to_class_names_1 = require("../../utils/map-styles-to-class-names");
const components_registry_1 = require("../../components-registry");
const ImageBlock_1 = __importDefault(require("../ImageBlock"));
function FeaturedPeopleSection(props) {
    const cssId = props.elementId || null;
    const colors = props.colors || 'colors-a';
    const sectionStyles = props.styles?.self || {};
    const sectionBorderWidth = sectionStyles.borderWidth ? sectionStyles.borderWidth : 0;
    return (React.createElement("div", { id: cssId, className: (0, classnames_1.default)('sb-component', 'sb-component-section', 'sb-component-featured-people-section', colors, 'flex', 'flex-col', 'justify-center', 'relative', sectionStyles.height ? mapMinHeightStyles(sectionStyles.height) : null, sectionStyles.margin, sectionStyles.padding, sectionStyles.borderColor, sectionStyles.borderRadius ? (0, map_styles_to_class_names_1.mapStylesToClassNames)({ borderRadius: sectionStyles.borderRadius }) : null, sectionStyles.borderStyle ? (0, map_styles_to_class_names_1.mapStylesToClassNames)({ borderStyle: sectionStyles.borderStyle }) : null), style: {
            borderWidth: `${sectionBorderWidth}px`
        } },
        React.createElement("div", { className: (0, classnames_1.default)('flex', 'w-full', sectionStyles.justifyContent ? (0, map_styles_to_class_names_1.mapStylesToClassNames)({ justifyContent: sectionStyles.justifyContent }) : null) },
            React.createElement("div", { className: (0, classnames_1.default)('w-full', sectionStyles.width ? mapMaxWidthStyles(sectionStyles.width) : null) },
                featuredPeopleHeader(props),
                featuredPeopleVariants(props),
                featuredPeopleActions(props)))));
}
exports.default = FeaturedPeopleSection;
function featuredPeopleHeader(props) {
    if (!props.title && !props.subtitle) {
        return null;
    }
    const styles = props.styles || {};
    return (React.createElement("div", null,
        props.title && (React.createElement("h2", { className: (0, classnames_1.default)('text-3xl', 'sm:text-4xl', styles.title ? (0, map_styles_to_class_names_1.mapStylesToClassNames)(styles.title) : null), "data-sb-field-path": ".title" }, props.title)),
        props.subtitle && (React.createElement("p", { className: (0, classnames_1.default)('text-lg', 'sm:text-xl', styles.subtitle ? (0, map_styles_to_class_names_1.mapStylesToClassNames)(styles.subtitle) : null), "data-sb-field-path": ".subtitle" }, props.subtitle))));
}
function featuredPeopleActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const styles = props.styles || {};
    const Action = (0, components_registry_1.getComponent)('Action');
    return (React.createElement("div", { className: (0, classnames_1.default)('flex', 'flex-wrap', 'items-center', 'mt-12', '-mx-2', styles.actions ? (0, map_styles_to_class_names_1.mapStylesToClassNames)(styles.actions) : null), "data-sb-field-path": ".actions" }, props.actions.map((action, index) => (React.createElement(Action, { key: index, ...action, className: "mb-3 mx-2 lg:whitespace-nowrap", annotationPrefix: `.${index}` })))));
}
function featuredPeopleVariants(props) {
    const variant = props.variant || 'variant-a';
    switch (variant) {
        case 'variant-a':
            return peopleVariantA(props);
        case 'variant-b':
            return peopleVariantB(props);
        case 'variant-c':
            return peopleVariantC(props);
    }
    return null;
}
function peopleVariantA(props) {
    const people = props.people || [];
    if (people.length === 0) {
        return null;
    }
    return (React.createElement("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8", "data-sb-field-path": ".people" }, people.map((person, index) => (React.createElement("article", { key: index, "data-sb-field-path": `.${index}` },
        person.image && (React.createElement("div", { className: "h-0 w-full pt-1/1 relative", "data-sb-field-path": ".image" },
            React.createElement(ImageBlock_1.default, { ...person.image, className: "absolute left-0 h-full object-cover top-0 w-full" }))),
        React.createElement("div", { className: (0, classnames_1.default)('mb-4', {
                'pt-6': person.image
            }) },
            (person.firstName || person.lastName) && (React.createElement("h2", { className: "text-xl sm:text-2xl" },
                person.firstName && React.createElement("span", { "data-sb-field-path": ".firstName" }, person.firstName),
                ' ',
                person.lastName && React.createElement("span", { "data-sb-field-path": ".lastName" }, person.lastName))),
            person.role && React.createElement("p", { "data-sb-field-path": ".role" }, person.role)))))));
}
function peopleVariantB(props) {
    const people = props.people || [];
    if (people.length === 0) {
        return null;
    }
    return (React.createElement("div", { className: "grid gap-x-8 gap-y-10 lg:grid-cols-2", "data-sb-field-path": ".people" }, people.map((person, index) => (React.createElement("article", { key: index, className: "sm:flex", "data-sb-field-path": `.${index}` },
        person.image && (React.createElement("div", { className: "w-full sm:flex-shrink-0 sm:h-full sm:w-1/3" },
            React.createElement("div", { className: "block h-0 w-full pt-1/1 relative", "data-sb-field-path": ".image" },
                React.createElement(ImageBlock_1.default, { ...person.image, className: "absolute left-0 h-full object-cover top-0 w-full" })))),
        React.createElement("div", { className: (0, classnames_1.default)('mb-4', 'sm:flex-grow', {
                'pt-6 sm:pt-0 sm:pl-6': person.image
            }) },
            (person.firstName || person.lastName) && (React.createElement("h2", { className: "text-xl sm:text-2xl" },
                person.firstName && React.createElement("span", { "data-sb-field-path": ".firstName" }, person.firstName),
                ' ',
                person.lastName && React.createElement("span", { "data-sb-field-path": ".lastName" }, person.lastName))),
            person.role && React.createElement("p", { "data-sb-field-path": ".role" }, person.role),
            person.bio && (React.createElement(markdown_to_jsx_1.default, { options: { forceBlock: true, forceWrapper: true }, className: (0, classnames_1.default)({
                    'mt-4': person.firstName || person.lastName || person.role
                }), "data-sb-field-path": ".bio" }, person.bio))))))));
}
function peopleVariantC(props) {
    const people = props.people || [];
    if (people.length === 0) {
        return null;
    }
    const middleIndex = Math.floor(people.length / 2);
    const peopleLeft = people.slice(0, middleIndex);
    const peopleRight = people.slice(-middleIndex);
    return (React.createElement("div", { className: "grid gap-x-6 gap-y-12 sm:grid-cols-2", "data-sb-field-path": ".people" },
        peopleLeft.length > 0 && React.createElement("div", { className: "sm:mt-32" }, peopleListVariantC(peopleLeft)),
        peopleRight.length > 0 && React.createElement("div", null, peopleListVariantC(peopleRight, middleIndex))));
}
function peopleListVariantC(people, annotIndexStart = 0) {
    return people.map((person, index, arr) => (React.createElement("article", { key: index, className: (0, classnames_1.default)(arr.length - 1 === index ? null : 'mb-12'), "data-sb-field-path": `.${annotIndexStart + index}` },
        person.image && (React.createElement("div", { "data-sb-field-path": ".image" },
            React.createElement(ImageBlock_1.default, { ...person.image, className: "w-full" }))),
        React.createElement("div", { className: (0, classnames_1.default)({
                'mt-4': person.image
            }) },
            (person.firstName || person.lastName || person.role) && (React.createElement("h2", { className: (0, classnames_1.default)('text-xl', 'sm:text-2xl', {
                    'mb-3': person.bio
                }) },
                person.firstName && React.createElement("span", { "data-sb-field-path": ".firstName" }, person.firstName),
                ' ',
                person.lastName && React.createElement("span", { "data-sb-field-path": ".lastName" }, person.lastName),
                ' ',
                (person.firstName || person.lastName) && person.role && React.createElement("span", { className: "mx-1" }, "|"),
                ' ',
                person.role && React.createElement("span", { "data-sb-field-path": ".role" }, person.role))),
            person.bio && (React.createElement(markdown_to_jsx_1.default, { options: { forceBlock: true, forceWrapper: true }, className: "sb-markdown", "data-sb-field-path": ".bio" }, person.bio))))));
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