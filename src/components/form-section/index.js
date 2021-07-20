import React from 'react';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';

export default function FormSection(props) {
    const style = props.style || 'style-a';
    const width = props.width || 'full';
    const height = props.height || 'auto';
    const imagePosition = props.imagePosition || 'left';
    const alignHoriz = props.alignHoriz || 'left';

    return (
        <div
            className={classNames('py-16 lg:py-20', {
                'mx-auto': width !== 'full',
                'max-w-screen-xl': width === 'wide',
                'max-w-screen-lg': width === 'narrow',
                'min-h-screen flex flex-col justify-center': height === 'viewport',
                'bg-base-50 text-base': style === 'style-a',
                'bg-neutral text-base-50': style === 'style-b',
                'bg-neutral text-primary': style === 'style-c',
                'bg-primary text-base': style === 'style-d',
                'bg-primary-variant text-base': style === 'style-e'
            })}
        >
            <div
                className={classNames('mx-auto px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg lg:px-8', {
                    'xl:max-w-screen-xl': width !== 'narrow'
                })}
            >
                <div className="grid gap-8 lg:grid-cols-2">
                    <div
                        className={classNames('flex flex-col justify-center', {
                            'lg:order-last': imagePosition === 'left',
                            'text-center': alignHoriz === 'center'
                        })}
                    >
                        {props.badge && <Badge label={props.badge} />}
                        {props.title && <h2 className="font-medium font-sans text-3xl tracking-tight sm:text-4xl mb-4">{props.title}</h2>}
                        {props.description && (
                            <div className="mb-12 md:text-lg">
                                <ReactMarkdown>{props.description}</ReactMarkdown>
                            </div>
                        )}
                        <form
                            name={props.formId}
                            id={props.formId}
                            {...(props.formAction ? ({ action: props.formAction }) : null)}
                            method="POST"
                            className="text-left"
                        >
                            <div className="flex flex-wrap -mx-2">
                                {(props.formFields || []).map((field, idx) => (
                                    <React.Fragment key={idx}>
                                        {FormField(field)}
                                    </React.Fragment>
                                ))}
                            </div>
                            <div className="mt-4 sm:mt-8">
                                <button type="submit" className="inline-flex items-center justify-center h-12 px-6 font-medium w-full tracking-wide text-white transition duration-200 shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none md:w-auto">{props.submitLabel}</button>
                            </div>
                        </form>
                    </div>
                    {props.imageUrl && (
                        <div className="relative">
                            <img src={props.imageUrl} alt={props.imageAlt} />
                        </div>
                    )}
                </div>
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
                <div className={classNames('sb-checkbox', classes)}>
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
