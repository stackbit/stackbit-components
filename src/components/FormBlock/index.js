import React from 'react';
import axios from 'axios';
import { getDynamicComponent } from '../../components-registry';

const formHandler = (data, url) => {
    return axios({
        method: 'post',
        url,
        data
    });
};

const handleSubmit = (event, formAction) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = Object.fromEntries(data.entries());
    formHandler(value, formAction);
};

export default function FormBlock(props) {
    const fields = props.fields || [];
    if (fields.length === 0) {
        return null;
    }
    const formHoneypotName = `${props.idAttr}-bot-field`;
    return (
        <form
            className={props.className}
            name={props.idAttr}
            id={props.idAttr}
            onSubmit={(e) => handleSubmit(e, props.action)}
            data-netlify="true"
            data-netlify-honeypot={formHoneypotName}
            data-sb-field-path=".idAttr#@name .idAttr#@id .action#@action"
        >
            <div className="flex flex-wrap -mx-2" data-sb-field-path=".fields">
                <input type="hidden" name="form-name" value={props.idAttr} />
                <input type="hidden" name="form-destination" value={props.destination} />
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
            <div className="mt-4 sm:mt-8">
                <button type="submit" className="sb-btn sb-btn-primary" data-sb-field-path=".submitLabel">
                    {props.submitLabel}
                </button>
            </div>
        </form>
    );
}
