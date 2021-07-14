import React from 'react';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';

export default function FormSection(props) {
    const imagePosition = props.imagePosition || 'left';
    const alignVert = props.alignVert || 'top';

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col lg:flex-row">
                <div
                    className={classNames('w-full mb-10 lg:w-1/2', {
                        'lg:order-last lg:pl-5': imagePosition === 'left',
                        'lg:pr-8': imagePosition === 'right',
                        'self-center': alignVert === 'middle',
                        'self-end': alignVert === 'bottom'
                    })}
                >
                    {props.badge && <Badge label={props.badge} />}
                    {props.title && <h2 className="header-2 mb-4">{props.title}</h2>}
                    {props.description && (
                        <div className="mb-12">
                            <ReactMarkdown>{props.description}</ReactMarkdown>
                        </div>
                    )}
                    <form
                        name={props.formId}
                        id={props.formId}
                        {...(props.formAction ? ({ action: props.formAction }) : null)}
                        method="POST"
                        className=""
                    >
                        <div className="flex flex-wrap -mx-2">
                            {(props.formFields || []).map((field, idx) => (
                                <React.Fragment key={idx}>
                                    {FormField(field)}
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="mt-4 sm:mt-8">
                            <button type="submit" className="inline-flex items-center justify-center h-12 px-6 font-medium w-full tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none md:w-auto">{props.submitLabel}</button>
                        </div>
                    </form>
                </div>
                {props.imageUrl && (
                    <div
                        className="w-full lg:w-1/2">
                        <img src={props.imageUrl} className="w-full h-full object-cover" alt={props.imageAlt} />
                    </div>
                )}
            </div>
        </div>
    );
}

function FormField(field) {
    const labelId = `${field.name}-label`;
    const attr = {};
    if (field.label) {
        attr['aria-labelledby'] = labelId;
    }
    if (field.isRequired) {
        attr.required = true;
    }
    const classes = classNames([
        'mb-8',
        'px-2',
        'w-full',
        field.width !== 'full' && `md:w-${field.width}`
    ]);

    switch (field.type) {
        case 'checkbox':
            return (
                <div className={classes}>
                    <input type="checkbox" id={field.name} name={field.name} className="mr-2" {...attr} />
                    {field.label && <label htmlFor={field.name} id={labelId}>{field.label}</label>}
                </div>
            );
        case 'select':
            return (
                <div className={classes}>
                    {field.label && <label htmlFor={field.name} id={field.labelId} className="sr-only">{field.label}</label>}
                    <select id={field.name} name={field.name} {...attr} className="bg-transparent font-light text-xl border border-current w-full p-2">
                        {field.defaultValue && <option value="">{field.defaultValue}</option>}
                        {_.map(field.options, (option, idx) => (
                            <option key={idx} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            );
        case 'textarea':
            return (
                <div className={classes}>
                    {field.label && <label htmlFor={field.name} id={field.labelId} className="sr-only">{field.label}</label>}
                    <textarea name={field.name} id={field.name} rows="5" {...(field.defaultValue ? { placeholder: field.defaultValue } : null)} {...attr} className="bg-transparent font-light text-xl placeholder-black placeholder-opacity-40 border-b border-current w-full focus:outline-none pb-2 sm:pr-6" />
                </div>
            );
        default:
            return (
                <div className={classes}>
                    {field.label && <label htmlFor={field.name} id={field.labelId} className="sr-only">{field.label}</label>}
                    <input type={field.type} name={field.name} id={field.name} {...(field.defaultValue ? { placeholder: field.defaultValue } : null)} {...attr} className="bg-transparent font-light text-xl placeholder-black placeholder-opacity-40 border-b border-current w-full focus:outline-none pb-2 sm:pr-6" />
                </div>
            );
    }
}
