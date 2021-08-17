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
            {props.badge && <Badge label={props.badge} className="sb-badge inline-block mb-4 text-xs" data-sb-field-path=".badge" />}
            {props.title && (
                <h2 className="text-4xl tracking-tight sm:text-5xl mb-6" data-sb-field-path=".title">
                    <InlineMarkdown>{props.title}</InlineMarkdown>
                </h2>
            )}
            {props.text && <Markdown className="md:text-lg" data-sb-field-path=".text">{props.text}</Markdown>}
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
            data-sb-field-path=".formId#@name .formId#@id .formAction#@action"
        >
            <div className="flex flex-wrap -mx-2" data-sb-field-path=".formFields">
                {formFields.map((field, idx) => (
                    <React.Fragment key={idx}>{FormField(field, idx)}</React.Fragment>
                ))}
            </div>
            <div className="mt-4 sm:mt-8">
                <button
                    type="submit"
                    className="sb-btn sb-btn-primary"
                    data-sb-field-path=".submitLabel"
                >
                    {props.submitLabel}
                </button>
            </div>
        </form>
    );
}

function FormField(field, idx) {
    const labelId = `${field.name}-label`;
    const width = field.width || 'full';
    const formControlClasses = classNames('sb-form-control', 'mb-8', 'px-2', 'w-full', {
        'sm:w-1/2': width === '1/2',
        'sm:w-1/3': width === '1/3',
        'sm:w-2/3': width === '2/3',
    });
    const fieldAttr = {};
    if (field.label) {
        fieldAttr['aria-labelledby'] = labelId;
    }
    if (field.isRequired) {
        fieldAttr.required = true;
    }

    switch (field.inputType) {
        case 'checkbox':
            return (
                <div className={classNames(formControlClasses, 'flex', 'items-center')} data-sb-field-path={`.${idx} .${idx}.inputType`}>
                    <input
                        id={field.name}
                        className="sb-checkbox"
                        type="checkbox"
                        name={field.name}
                        {...fieldAttr}
                        data-sb-field-path=".name#@id .name#@name .isRequired#@required"
                    />
                    {field.label && (
                        <label
                            id={labelId}
                            className="sb-label ml-2"
                            htmlFor={field.name}
                            data-sb-field-path=".label .name#@for"
                        >
                            {field.label}
                        </label>
                    )}
                </div>
            );
        case 'select':
            const fieldOptions = field.options || [];
            return (
                <div className={formControlClasses} data-sb-field-path={`.${idx} .${idx}.inputType`}>
                    {field.label && (
                        <label
                            id={labelId}
                            className="sb-label sr-only"
                            htmlFor={field.name}
                            data-sb-field-path=".label .name#@for"
                        >
                            {field.label}
                        </label>
                    )}
                    <select
                        id={field.name}
                        className="sb-select"
                        name={field.name}
                        {...fieldAttr}
                        data-sb-field-path=".name#@id .name#@name .isRequired#@required .options"
                    >
                        {field.defaultValue && <option value="" data-sb-field-path=".defaultValue">{field.defaultValue}</option>}
                        {fieldOptions.length > 0 && fieldOptions.map((option, idx) =>
                            <option key={idx} value={option} data-sb-field-path={`.${idx}`}>
                                {option}
                            </option>
                        )}
                    </select>
                </div>
            );
        case 'textarea':
            return (
                <div className={formControlClasses} data-sb-field-path={`.${idx} .${idx}.inputType`}>
                    {field.label && (
                        <label
                            id={labelId}
                            className="sb-label sr-only"
                            htmlFor={field.name}
                            data-sb-field-path=".label .name#@for"
                        >
                            {field.label}
                        </label>
                    )}
                    <textarea
                        id={field.name}
                        className="sb-textarea"
                        name={field.name}
                        rows="5"
                        {...(field.defaultValue ? { placeholder: field.defaultValue } : null)}
                        {...fieldAttr}
                        data-sb-field-path=".name#@id .name#@name .isRequired#@required .defaultValue#@placeholder"
                    />
                </div>
            );
        default:
            return (
                <div className={formControlClasses} data-sb-field-path={`.${idx} .${idx}.inputType`}>
                    {field.label && (
                        <label
                            id={labelId}
                            className="sb-label sr-only"
                            htmlFor={field.name}
                            data-sb-field-path=".label .name#@for"
                        >
                            {field.label}
                        </label>
                    )}
                    <input
                        id={field.name}
                        className="sb-input"
                        type={field.inputType}
                        name={field.name}
                        {...(field.defaultValue ? { placeholder: field.defaultValue } : null)}
                        {...fieldAttr}
                        data-sb-field-path=".name#@id .name#@name .isRequired#@required .defaultValue#@placeholder"
                    />
                </div>
            );
    }
}
