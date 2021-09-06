import React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import { getDynamicComponent } from '../../components-registry';
import Badge from '../Badge';
import FormBlock from '../FormBlock';
import InlineMarkdown from '../InlineMarkdown';

export default function ContactSection(props) {
    const width = props.width || 'wide';
    switch (width) {
        case 'wide':
            return ContactSectionWide(props);
        case 'full':
            return ContactSectionFull(props);
    }
    return null;
}

function ContactSectionWide(props) {
    const colors = props.colors || 'colors-a';
    const height = props.height || 'short';
    const topGap = props.topGap || 'small';
    const bottomGap = props.bottomGap || 'small';
    const alignVert = props.alignVert || 'middle';
    return (
        <div
            className="px-4 sm:px-6"
            data-sb-field-path={props.annotationPrefix}
        >
            <div
                className={classNames(colors, 'max-w-screen-xl', 'mx-auto', 'px-4', 'sm:px-6', height === 'tall' ? 'py-40 lg:py-60' : 'py-14 lg:py-20', {
                    'min-h-screen flex flex-col': height === 'viewport',
                    'justify-center': height === 'viewport' && alignVert === 'middle',
                    'justify-end': height === 'viewport' && alignVert === 'bottom',
                    'mt-10': topGap === 'small',
                    'mt-20': topGap === 'large',
                    'mb-10': bottomGap === 'small',
                    'mb-20': bottomGap === 'large'
                })}
            >
                <div
                    className={classNames('mx-auto', 'sm:max-w-screen-sm', 'md:max-w-screen-md', 'lg:max-w-screen-lg', {
                        'w-full': height === 'viewport'
                    })}
                >
                    <ContactVariants {...props} />
                </div>
            </div>
        </div>
    );
}

function ContactSectionFull(props) {
    const colors = props.colors || 'colors-a';
    const height = props.height || 'short';
    const topGap = props.topGap || 'small';
    const bottomGap = props.bottomGap || 'small';
    const alignVert = props.alignVert || 'middle';
    return (
        <div
            className={classNames(colors, 'px-4', 'sm:px-6', height === 'tall' ? 'py-40 lg:py-60' : 'py-14 lg:py-20', {
                'min-h-screen flex flex-col': height === 'viewport',
                'justify-center': height === 'viewport' && alignVert === 'middle',
                'justify-end': height === 'viewport' && alignVert === 'bottom',
                'mt-10': topGap === 'small',
                'mt-20': topGap === 'large',
                'mb-10': bottomGap === 'small',
                'mb-20': bottomGap === 'large'
            })}
            data-sb-field-path={props.annotationPrefix}
        >
            <div
                className={classNames('mx-auto', 'sm:max-w-screen-sm', 'md:max-w-screen-md', 'lg:max-w-screen-lg', 'xl:max-w-screen-xl', {
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
            return ContactFeatureRight(props);
        case 'variant-b':
            return ContactFeatureLeft(props);
    }
    return null;
}

function ContactFeatureRight(props) {
    const alignVert = props.alignVert || 'middle';
    return (
        <div
            className={classNames('grid gap-y-8', {
                'gap-x-12 lg:grid-cols-2': props.feature,
                'lg:items-center': alignVert === 'middle',
                'lg:items-end': alignVert === 'bottom'
            })}
        >
            <div>
                {ContactContent(props)}
                {props.form && <div data-sb-field-path=".form"><FormBlock {...props.form} /></div>}
            </div>
            {props.feature && (
                <div data-sb-field-path=".feature">
                    {ContactFeature(props.feature)}
                </div>
            )}
        </div>
    );
}

function ContactFeatureLeft(props) {
    const alignVert = props.alignVert || 'middle';
    return (
        <div
            className={classNames('grid gap-y-8', {
                'gap-x-12 lg:grid-cols-2': props.feature,
                'lg:items-center': alignVert === 'middle',
                'lg:items-end': alignVert === 'bottom'
            })}
        >
            {props.feature && (
                <div data-sb-field-path=".image">
                    {ContactFeature(props.feature)}
                </div>
            )}
            <div>
                {ContactContent(props)}
                {props.form && <div data-sb-field-path=".form"><FormBlock {...props.form} /></div>}
            </div>
        </div>
    );
}

function ContactFeature(feature) {
    const featureType = feature.type;
    if (!featureType) {
        throw new Error(`contact section feature does not have the 'type' property`);
    }
    const Feature = getDynamicComponent(featureType);
    if (!Feature) {
        throw new Error(`no component matching the contact section feature type: ${featureType}`);
    }
    return <Feature {...feature} className="mx-auto" />;
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
            {props.text && <Markdown options={{ forceBlock: true }} className="md:text-lg" data-sb-field-path=".text">{props.text}</Markdown>}
        </div>
    );
}
