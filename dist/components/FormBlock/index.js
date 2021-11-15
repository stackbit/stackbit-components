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
const axios_1 = __importDefault(require("axios"));
const components_registry_1 = require("../../components-registry");
class FormBlock extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            submitted: false,
            error: false
        };
        this.formRef = React.createRef();
    }
    formHandler(data, url) {
        return (0, axios_1.default)({
            method: 'post',
            url,
            data
        });
    }
    handleSubmit(event, formAction) {
        event.preventDefault();
        const data = new FormData(this.formRef.current);
        const value = Object.fromEntries(data.entries());
        this.setState({
            submitted: false,
            error: false
        });
        this.formHandler(value, formAction)
            .then(() => {
            this.setState({
                submitted: true
            });
            this.formRef.current.reset();
        })
            .catch(() => {
            this.setState({
                error: true
            });
        });
    }
    componentDidUpdate(prevProps, prevState) {
        if (!prevState.submitted && this.state.submitted) {
            setTimeout(() => {
                this.setState({
                    submitted: false
                });
            }, 3000);
        }
    }
    render() {
        const { fields = [], elementId, action, destination, submitLabel, className } = this.props;
        if (fields.length === 0) {
            return null;
        }
        const formHoneypotName = `${elementId}-bot-field`;
        return (React.createElement("form", { className: className, name: elementId, id: elementId, onSubmit: (e) => this.handleSubmit(e, action), "data-netlify": "true", ref: this.formRef, "data-netlify-honeypot": formHoneypotName, "data-sb-field-path": ".elementId#@name .elementId#@id .action#@action" },
            React.createElement("div", { className: "flex flex-wrap -mx-2", "data-sb-field-path": ".fields" },
                React.createElement("input", { type: "hidden", name: "form-name", value: elementId }),
                React.createElement("input", { type: "hidden", name: "form-destination", value: destination }),
                fields.map((field, index) => {
                    const fieldType = field.type;
                    if (!fieldType) {
                        throw new Error(`form field does not have the 'type' property`);
                    }
                    const FormControl = (0, components_registry_1.getComponent)(fieldType);
                    if (!FormControl) {
                        throw new Error(`no component matching the form field type: ${fieldType}`);
                    }
                    return React.createElement(FormControl, { key: index, ...field, annotationPrefix: `.${index}` });
                })),
            React.createElement("div", { className: "mt-4" },
                React.createElement("button", { type: "submit", className: "sb-component sb-component-block sb-component-button sb-component-button-primary", "data-sb-field-path": ".submitLabel" }, submitLabel),
                this.state.submitted && React.createElement("span", { className: "ml-8" }, "Thank you, your message was sent."),
                this.state.error && React.createElement("span", { className: "ml-8 text-info" }, "Something went wrong, please try again."))));
    }
}
exports.default = FormBlock;
//# sourceMappingURL=index.js.map