import React from 'react';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';

export default function ContactSection(props) {
    const colors = props.colors || 'colors-a';
    const width = props.width || 'full';
    const height = props.height || 'auto';

    return (
        <div
            className={classNames(colors, 'overflow-x-hidden relative', {
                'mx-auto': width !== 'full',
                'max-w-screen-xl': width === 'wide',
                'max-w-screen-lg': width === 'narrow',
                'min-h-screen flex flex-col': height === 'viewport'
            })}
        >
            <div
                className={classNames('mx-auto px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg lg:px-8', {
                    'xl:max-w-screen-xl': width !== 'narrow',
                    'w-full': height === 'viewport'
                })}
            >
                <ContactVariants {...props} />
            </div>
        </div>
    );
}

function ContactVariants({ variant, ...props }) {
    variant = variant || 'variant-a';
    switch (variant) {
        case 'variant-a':
            return ContactImageRight(props);
        case 'variant-b':
            return ContactImageLeft(props);
    }
    return null;
}

function ContactImageRight(props) {
    const height = props.height || 'auto';

    return (
        <div
            className={classNames('flex flex-wrap', {
                'flex-grow': height === 'viewport',
            })}
        >
            <div className="py-16 px-4 w-full lg:self-center lg:w-1/2 lg:py-20 lg:pl-8">
                {ContactContent(props)}
                {ContactForm(props)}
            </div>
            <div
                className="w-full lg:inset-y-0 lg:w-1/2 lg:max-w-full lg:absolute right-0 lg:pl-4">
                <img
                    src={props.imageUrl}
                    className="w-screen max-w-none ml-1/2 transform -translate-x-1/2 object-cover lg:h-full lg:ml-0 lg:transform-none lg:w-full lg:max-w-full"
                    alt={props.imageAltText}
                />
            </div>
        </div>
    );
}

function ContactImageLeft(props) {
    const height = props.height || 'auto';

    return (
        <div
            className={classNames('flex flex-wrap lg:justify-end', {
                'flex-grow': height === 'viewport',
            })}
        >
            <div
                className="w-full lg:inset-y-0 lg:w-1/2 lg:max-w-full lg:absolute left-0 lg:pr-4">
                <img
                    src={props.imageUrl}
                    className="w-screen max-w-none ml-1/2 transform -translate-x-1/2 object-cover lg:h-full lg:ml-0 lg:transform-none lg:w-full lg:max-w-full"
                    alt={props.imageAltText}
                />
            </div>
            <div className="py-16 px-4 w-full lg:self-center lg:w-1/2 lg:py-20 lg:pr-8">
                {ContactContent(props)}
                {ContactForm(props)}
            </div>
        </div>
    );
}

function ContactContent(props) {
    const alignHoriz = props.alignHoriz || 'left';
    return (
        <div className={classNames('mb-12', {
            'text-center': alignHoriz === 'center'
        })}>
            {props.badge && <Badge label={props.badge} />}
            {props.title && (
                <h1 className="font-medium font-sans text-4xl tracking-tight sm:text-5xl mb-6">
                    <ReactMarkdown allowedElements={['br', 'span', 'strong']} unwrapDisallowed={true} components={components}>
                        {props.title}
                    </ReactMarkdown>
                </h1>
            )}
            {props.text && <ReactMarkdown className={classNames('max-w-2xl md:text-lg', {
                'mx-auto': alignHoriz === 'center'
            })}>{props.text}</ReactMarkdown>}
        </div>
    );
}

function ContactForm(props) {
    const formFields = props.formFields || [];
    if (formFields.length === 0) {
        return null;
    }
    return (
        <form
            name={props.formId}
            id={props.formId}
            {...(props.formAction ? { action: props.formAction } : null)}
            method="POST"
        >
            <div className="flex flex-wrap -mx-2">
                {formFields.map((field, idx) => (
                    <React.Fragment key={idx}>{FormField(field)}</React.Fragment>
                ))}
            </div>
            <div className="mt-4 sm:mt-8">
                <button
                    type="submit"
                    className="sb-btn inline-flex items-center justify-center transition duration-200 focus:outline-none"
                >
                    {props.submitLabel}
                </button>
            </div>
        </form>
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
    const classes = classNames(['mb-8', 'px-2', 'w-full', field.width !== 'full' && `md:w-${field.width}`]);

    switch (field.inputType) {
        case 'checkbox':
            return (
                <div className={classes}>
                    <input type="checkbox" id={field.name} name={field.name} className="mr-2" {...attr} />
                    {field.label && (
                        <label htmlFor={field.name} id={labelId}>
                            {field.label}
                        </label>
                    )}
                </div>
            );
        case 'select':
            return (
                <div className={classes}>
                    {field.label && (
                        <label htmlFor={field.name} id={field.labelId} className="sr-only">
                            {field.label}
                        </label>
                    )}
                    <select id={field.name} name={field.name} {...attr} className={classNames('bg-transparent text-xl border border-current w-full p-2')}>
                        {field.defaultValue && <option value="">{field.defaultValue}</option>}
                        {_.map(field.options, (option, idx) => (
                            <option key={idx} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            );
        case 'textarea':
            return (
                <div className={classes}>
                    {field.label && (
                        <label htmlFor={field.name} id={field.labelId} className="sr-only">
                            {field.label}
                        </label>
                    )}
                    <textarea
                        name={field.name}
                        id={field.name}
                        rows="5"
                        {...(field.defaultValue ? { placeholder: field.defaultValue } : null)}
                        {...attr}
                        className={classNames(
                            'bg-transparent font-light text-xl  placeholder-opacity-40 border-b w-full focus:outline-none pb-2 sm:pr-6'
                        )}
                    />
                </div>
            );
        default:
            return (
                <div className={classes}>
                    {field.label && (
                        <label htmlFor={field.name} id={field.labelId} className="sr-only">
                            {field.label}
                        </label>
                    )}
                    <input
                        type={field.inputType}
                        name={field.name}
                        id={field.name}
                        {...(field.defaultValue ? { placeholder: field.defaultValue } : null)}
                        {...attr}
                        className={classNames(
                            'bg-transparent text-xl font-light placeholder-opacity-40 border-b w-full focus:outline-none pb-2 sm:pr-6'
                        )}
                    />
                </div>
            );
    }
}

const components = {
    strong({ children }) {
        return <span className="sb-highlight inline-block">{children}</span>;
    }
};
