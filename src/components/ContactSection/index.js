import React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import Badge from '../Badge';
import FormBlock from '../FormBlock';
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
        <div className={classNames('flex flex-col lg:flex-row', props.image ? 'lg:justify-start': 'lg:justify-center', {
            'flex-grow': height === 'viewport'
        })}>
            <div className={classNames('py-16 px-4 w-full lg:py-20', props.image ? 'lg:pl-8 lg:w-1/2' : 'lg:max-w-3xl', {
                'flex flex-col flex-grow justify-center lg:flex-grow-0': height === 'viewport'
            })}>
                {ContactContent(props)}
                {props.form && <FormBlock {...props.form} />}
            </div>
            {props.image && (
                <div className="max-w-none ml-1/2 transform -translate-x-1/2 w-screen lg:absolute lg:inset-y-0 lg:max-w-full lg:ml-0 lg:pl-4 lg:right-0 lg:transform-none lg:w-1/2">
                    <div className="h-0 pt-2/3 relative lg:h-full lg:pt-0">
                        <ImageBlock {...props.image} className="absolute left-0 h-full object-cover top-0 w-full" />
                    </div>
                </div>
            )}
        </div>
    );
}

function ContactImageLeft(props) {
    const height = props.height || 'auto';
    return (
        <div className={classNames('flex flex-col lg:flex-row', props.image ? 'lg:justify-end': 'lg:justify-center', {
            'flex-grow': height === 'viewport'
        })}>
            {props.image && (
                <div className="max-w-none ml-1/2 transform -translate-x-1/2 w-screen lg:absolute lg:inset-y-0 lg:left-0 lg:max-w-full lg:ml-0 lg:pr-4 lg:transform-none lg:w-1/2">
                    <div className="h-0 pt-2/3 relative lg:h-full lg:pt-0">
                        <ImageBlock {...props.image} className="absolute left-0 h-full object-cover top-0 w-full" />
                    </div>
                </div>
            )}
            <div className={classNames('py-16 px-4 w-full lg:py-20', props.image ? 'lg:pr-8 lg:w-1/2' : 'lg:max-w-3xl', {
                'flex flex-col flex-grow justify-center lg:flex-grow-0': height === 'viewport'
            })}>
                {ContactContent(props)}
                {props.form && <FormBlock {...props.form} />}
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
