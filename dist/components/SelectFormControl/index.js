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
function SelectFormControl(props) {
    const width = props.width || 'full';
    const labelId = `${props.name}-label`;
    const options = props.options || [];
    const attr = {};
    if (props.label) {
        attr['aria-labelledby'] = labelId;
    }
    if (props.isRequired) {
        attr.required = true;
    }
    return (React.createElement("div", { className: (0, classnames_1.default)('sb-form-control', 'px-2', 'w-full', {
            'sm:w-1/2': width === '1/2'
        }), "data-sb-field-path": props.annotationPrefix },
        props.label && (React.createElement("label", { id: labelId, className: "sb-label", htmlFor: props.name, "data-sb-field-path": ".label .name#@for" }, props.label)),
        React.createElement("select", { id: props.name, className: "sb-select", name: props.name, ...attr, "data-sb-field-path": ".name#@id .name#@name .isRequired#@required .options" },
            props.defaultValue && (React.createElement("option", { value: "", "data-sb-field-path": ".defaultValue" }, props.defaultValue)),
            options.length > 0 &&
                options.map((option, index) => (React.createElement("option", { key: index, value: option, "data-sb-field-path": `.${index}` }, option))))));
}
exports.default = SelectFormControl;
//# sourceMappingURL=index.js.map