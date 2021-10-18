import * as React from 'react';
import classNames from 'classnames';

export default function CheckboxFormControl(props) {
    const width = props.width || 'full';
    const labelId = `${props.name}-label`;
    // TODO
    const attr: any = {};
    if (props.label) {
        attr['aria-labelledby'] = labelId;
    }
    if (props.isRequired) {
        attr.required = true;
    }
    return (
        <div
            className={classNames('sb-form-control', 'flex', 'items-center', 'px-2', 'w-full', {
                'sm:w-1/2': width === '1/2'
            })}
            data-sb-field-path={props.annotationPrefix}
        >
            <input
                id={props.name}
                className="sb-checkbox"
                type="checkbox"
                name={props.name}
                {...attr}
                data-sb-field-path=".name#@id .name#@name .isRequired#@required"
            />
            {props.label && (
                <label
                    id={labelId}
                    className="sb-label ml-2"
                    htmlFor={props.name}
                    data-sb-field-path=".label .name#@for"
                >
                    {props.label}
                </label>
            )}
        </div>
    );
}
