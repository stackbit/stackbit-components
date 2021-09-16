import React from 'react';
import axios from 'axios';
import { getDynamicComponent } from '../../components-registry';

export default class FormBlock extends React.Component {
    state = {
        isSubmitting: false,
        error: null
    };

    formHandler(data, url) {
        return axios({
            method: 'post',
            url,
            data
        });
    }

    handleSubmit(event, formAction) {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const value = Object.fromEntries(data.entries());
        this.setState({
            isSubmitting: true,
            error: null
        });

        formHandler(value, formAction)
            .catch(() => {
                this.setState({
                    error: 'Error submitting form'
                });
            })
            .finally(() => {
                this.setState({
                    isSubmitting: false
                });
            });
    }

    render({ fields = [], idAttr, action, destination, submitLabel }) {
        if (fields.length === 0) {
            return null;
        }
        const formHoneypotName = `${idAttr}-bot-field`;
        return (
            <form
                name={idAttr}
                id={idAttr}
                onSubmit={(e) => handleSubmit(e, action)}
                data-netlify="true"
                data-netlify-honeypot={formHoneypotName}
                data-sb-field-path=".idAttr#@name .idAttr#@id .action#@action"
            >
                <div className="flex flex-wrap -mx-2" data-sb-field-path=".fields">
                    <input type="hidden" name="form-name" value={idAttr} />
                    <input type="hidden" name="form-destination" value={destination} />
                    {fields.map((field, index) => {
                        const fieldType = field.type;
                        if (!fieldType) {
                            throw new Error(`form field does not have the 'type' property`);
                        }
                        const Component = getDynamicComponent(fieldType);
                        if (!Component) {
                            throw new Error(`no component matching the form field type: ${fieldType}`);
                        }
                        return <Component key={index} {...field} annotationPrefix={`.${index}`} />;
                    })}
                </div>
                <div className="mt-4 sm:mt-8">
                    <button type="submit" className="sb-btn sb-btn-primary" data-sb-field-path=".submitLabel">
                        {submitLabel}
                    </button>
                </div>
                <div className="mt-4 sm:mt-8">{this.state.error}</div>
            </form>
        );
    }
}
