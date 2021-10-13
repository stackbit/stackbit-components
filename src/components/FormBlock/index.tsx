import * as React from 'react';
import axios from 'axios';
import { getDynamicComponent } from '../../components-registry';

export default class FormBlock extends React.Component<any> {
    state = {
        submitted: false,
        error: false
    };

    formRef = React.createRef<HTMLFormElement>();

    formHandler(data, url) {
        return axios({
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
        return (
            <form
                className={className}
                name={elementId}
                id={elementId}
                onSubmit={(e) => this.handleSubmit(e, action)}
                data-netlify="true"
                ref={this.formRef}
                data-netlify-honeypot={formHoneypotName}
                data-sb-field-path=".elementId#@name .elementId#@id .action#@action"
            >
                <div className="flex flex-wrap -mx-2" data-sb-field-path=".fields">
                    <input type="hidden" name="form-name" value={elementId} />
                    <input type="hidden" name="form-destination" value={destination} />
                    {fields.map((field, index) => {
                        const fieldType = field.type;
                        if (!fieldType) {
                            throw new Error(`form field does not have the 'type' property`);
                        }
                        const FormControl = getDynamicComponent(fieldType);
                        if (!FormControl) {
                            throw new Error(`no component matching the form field type: ${fieldType}`);
                        }
                        return <FormControl key={index} {...field} annotationPrefix={`.${index}`} />;
                    })}
                </div>
                <div className="mt-4">
                    <button
                        type="submit"
                        className="sb-component sb-component-block sb-component-button sb-component-button-primary"
                        data-sb-field-path=".submitLabel"
                    >
                        {submitLabel}
                    </button>
                    {this.state.submitted && <span className="ml-8">Thank you, your message was sent.</span>}
                    {this.state.error && <span className="ml-8 text-info">Something went wrong, please try again.</span>}
                </div>
            </form>
        );
    }
}
