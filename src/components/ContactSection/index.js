import React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import Badge from '../Badge';
import ImageBlock from '../ImageBlock';
import InlineMarkdown from '../InlineMarkdown';

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
                'min-h-screen flex flex-col': height === 'viewport',
            })}
            data-sb-field-path={props.annotationPrefix}
        >
            <div
                className={classNames('mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg', {
                    'xl:max-w-screen-xl': width !== 'narrow',
                    'flex flex-col flex-grow w-full': height === 'viewport'
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
        <div className={classNames('flex flex-col lg:flex-row', props.imageUrl ? 'lg:justify-start': 'lg:justify-center', {
            'flex-grow': height === 'viewport'
        })}>
            <div className={classNames('py-16 px-4 w-full lg:py-20', props.imageUrl ? 'lg:pl-8 lg:w-1/2' : 'lg:max-w-3xl', {
                'flex flex-col flex-grow justify-center lg:flex-grow-0': height === 'viewport'
            })}>
                {ContactContent(props)}
                {ContactForm(props)}
            </div>
            {props.imageUrl && (
                <div className="max-w-none ml-1/2 transform -translate-x-1/2 w-screen lg:absolute lg:inset-y-0 lg:max-w-full lg:ml-0 lg:pl-4 lg:right-0 lg:transform-none lg:w-1/2">
                    <div className="h-0 pt-2/3 relative lg:h-full lg:pt-0">
                        <ImageBlock
                            imageUrl={props.imageUrl}
                            imageAltText={props.imageAltText}
                            imageCaption={props.imageCaption}
                            className="absolute left-0 h-full object-cover top-0 w-full"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

function ContactImageLeft(props) {
    const height = props.height || 'auto';
    return (
        <div className={classNames('flex flex-col lg:flex-row', props.imageUrl ? 'lg:justify-end': 'lg:justify-center', {
            'flex-grow': height === 'viewport'
        })}>
            {props.imageUrl && (
                <div className="max-w-none ml-1/2 transform -translate-x-1/2 w-screen lg:absolute lg:inset-y-0 lg:left-0 lg:max-w-full lg:ml-0 lg:pr-4 lg:transform-none lg:w-1/2">
                    <div className="h-0 pt-2/3 relative lg:h-full lg:pt-0">
                        <ImageBlock
                            imageUrl={props.imageUrl}
                            imageAltText={props.imageAltText}
                            imageCaption={props.imageCaption}
                            className="absolute left-0 h-full object-cover top-0 w-full"
                        />
                    </div>
                </div>
            )}
            <div className={classNames('py-16 px-4 w-full lg:py-20', props.imageUrl ? 'lg:pr-8 lg:w-1/2' : 'lg:max-w-3xl', {
                'flex flex-col flex-grow justify-center lg:flex-grow-0': height === 'viewport'
            })}>
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
            'text-right': alignHoriz === 'right',
            'text-center': alignHoriz === 'center'
        })}>
            {props.badge && <Badge label={props.badge} className="inline-block mb-4 text-xs" />}
            {props.title && (
                <h2 className="text-4xl tracking-tight sm:text-5xl mb-6">
                    <InlineMarkdown>{props.title}</InlineMarkdown>
                </h2>
            )}
            {props.text && <Markdown className="md:text-lg">{props.text}</Markdown>}
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
                    className="sb-btn sb-btn-primary"
                >
                    {props.submitLabel}
                </button>
            </div>
        </form>
    );
}

function FormField(field) {
    const labelId = `${field.name}-label`;
    const width = field.width || 'full';
    const attr = {};
    if (field.label) {
        attr['aria-labelledby'] = labelId;
    }
    if (field.isRequired) {
        attr.required = true;
    }
    const classes = classNames('mb-8', 'px-2', 'w-full', {
        'sm:w-1/2': width === '1/2',
        'sm:w-1/3': width === '1/3',
        'sm:w-2/3': width === '2/3',
    });

    switch (field.inputType) {
        case 'checkbox':
            return (
                <div className={classNames('sb-form-control flex items-center', classes)}>
                    <input className="sb-checkbox" type="checkbox" id={field.name} name={field.name} {...attr} />
                    {field.label && (
                        <label htmlFor={field.name} id={labelId} className="sb-label ml-2">
                            {field.label}
                        </label>
                    )}
                </div>
            );
        case 'select':
            const fieldOptions = field.options || [];
            return (
                <div className={classNames('sb-form-control', classes)}>
                    {field.label && (
                        <label htmlFor={field.name} id={field.labelId} className="sb-label sr-only">
                            {field.label}
                        </label>
                    )}
                    <select
                        id={field.name}
                        name={field.name}
                        {...attr}
                        className={classNames('sb-select')}
                    >
                        {field.defaultValue && <option value="">{field.defaultValue}</option>}
                        {fieldOptions.length > 0 && fieldOptions.map((option, idx) =>
                            <option key={idx} value={option}>
                                {option}
                            </option>
                        )}
                    </select>
                </div>
            );
        case 'textarea':
            return (
                <div className={classNames('sb-form-control', classes)}>
                    {field.label && (
                        <label htmlFor={field.name} id={field.labelId} className="sb-label sr-only">
                            {field.label}
                        </label>
                    )}
                    <textarea
                        name={field.name}
                        id={field.name}
                        rows="5"
                        {...(field.defaultValue ? { placeholder: field.defaultValue } : null)}
                        {...attr}
                        className="sb-textarea"
                    />
                </div>
            );
        default:
            return (
                <div className={classNames('sb-form-control', classes)}>
                    {field.label && (
                        <label htmlFor={field.name} id={field.labelId} className="sb-label sr-only">
                            {field.label}
                        </label>
                    )}
                    <input
                        type={field.inputType}
                        name={field.name}
                        id={field.name}
                        {...(field.defaultValue ? { placeholder: field.defaultValue } : null)}
                        {...attr}
                        className="sb-input"
                    />
                </div>
            );
    }
}
