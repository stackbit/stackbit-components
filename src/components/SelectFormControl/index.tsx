import * as React from 'react';
import classNames from 'classnames';

export default function SelectFormControl(props) {
    const width = props.width || 'full';
    const labelId = `${props.name}-label`;
    const options = props.options || [];
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
            <select id={props.name} className="sb-select" name={props.name} {...attr} data-sb-field-path=".name#@id .name#@name .isRequired#@required .options">
                {props.defaultValue && (
                    <option value="" data-sb-field-path=".defaultValue">
                        {props.defaultValue}
                    </option>
                )}
                {options.length > 0 &&
                    options.map((option, index) => (
                        <option key={index} value={option} data-sb-field-path={`.${index}`}>
                            {option}
                        </option>
                    ))}
            </select>
        </div>
    );
}
