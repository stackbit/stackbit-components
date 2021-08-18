import React from 'react';
import classNames from 'classnames';

export default function EmailFormControl(props) {
    const width = props.width || 'full';
    const labelId = `${props.name}-label`;
    const attr = {};
    if (props.label) {
        attr['aria-labelledby'] = labelId;
    }
    if (props.isRequired) {
        attr.required = true;
    }
    return (
        <div
            className={classNames('sb-form-control', 'px-2', 'w-full', {
                'sm:w-1/2': width === '1/2'
            })}
            data-sb-field-path={props.annotationPrefix}
        >
            {props.label && (
                <label
                    id={labelId}
                    className="sb-label"
                    htmlFor={props.name}
                    data-sb-field-path=".label .name#@for"
                >
                    {props.label}
                </label>
            )}
            <input
                id={props.name}
                className="sb-input"
                type="email"
                name={props.name}
                {...(props.placeholder ? { placeholder: props.placeholder } : null)}
                {...attr}
                data-sb-field-path=".name#@id .name#@name .isRequired#@required .placeholder#@placeholder"
            />
        </div>
    );
}
