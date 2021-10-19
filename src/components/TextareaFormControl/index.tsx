import * as React from 'react';
import classNames from 'classnames';

export default function TextareaFormControl(props) {
    const width = props.width || 'full';
    const labelId = `${props.name}-label`;
    const attr: any = {};
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
                <label id={labelId} className="sb-label" htmlFor={props.name} data-sb-field-path=".label .name#@for">
                    {props.label}
                </label>
            )}
            <textarea
                id={props.name}
                className="sb-textarea"
                name={props.name}
                rows="5"
                {...(props.placeholder ? { placeholder: props.placeholder } : null)}
                {...attr}
                data-sb-field-path=".name#@id .name#@name .isRequired#@required .placeholder#@placeholder"
            />
        </div>
    );
}
