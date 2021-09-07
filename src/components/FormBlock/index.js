import React from 'react';
import { getDynamicComponent } from '../../components-registry';

export default function FormBlock(props) {
    const fields = props.fields || [];
    if (fields.length === 0) {
        return null;
    }
    return (
        <form
            className={props.className}
            name={props.idAttr}
            id={props.idAttr}
            {...(props.action ? { action: props.action } : null)}
            method="POST"
            data-sb-field-path=".idAttr#@name .idAttr#@id .action#@action"
        >
            <div className="flex flex-wrap -mx-2" data-sb-field-path=".fields">
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
