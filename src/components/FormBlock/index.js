import React from 'react';
import { getDynamicComponent } from '../../components-registry';

export default function FormBlock(props) {
    const fields = props.fields || [];
    if (fields.length === 0) {
        return null;
    }
    return (
        <form
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
                    const Component = getDynamicComponent(fieldType);
                    if (!Component) {
                        throw new Error(`no component matching the form field type: ${fieldType}`);
                    }
                    return <Component key={index} {...field} annotationPrefix={`.${index}`} />;
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
