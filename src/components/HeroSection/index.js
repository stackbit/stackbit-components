import React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import { getDynamicComponent } from '../../components-registry';
import Badge from '../Badge';
import Action from '../Action';
import InlineMarkdown from '../InlineMarkdown';

export default function HeroSection(props) {
    const width = props.width || 'wide';
    switch (width) {
        case 'wide':
            return heroSectionWide(props);
        case 'full':
            return heroSectionFull(props);
    }
    return null;
}

function heroSectionWide(props) {
    const colors = props.colors || 'colors-a';
    const height = props.height || 'short';
    const topGap = props.topGap || 'small';
    const bottomGap = props.bottomGap || 'small';
    const alignHoriz = props.alignHoriz || 'left';
    const alignVert = props.alignVert || 'middle';
    return (
        <div id={props.elementId} className="component component-section component-hero-section px-4 sm:px-6" data-sb-field-path={props.annotationPrefix}>
            <div
                className={classNames(
                    colors,
                    'max-w-screen-xl',
                    'mx-auto',
                    'px-4',
                    'relative',
                    'sm:px-6',
                    height === 'tall' ? 'py-40 lg:py-60' : 'py-14 lg:py-20',
                    {
                        'min-h-screen flex flex-col': height === 'viewport',
                        'justify-center': height === 'viewport' && alignVert === 'middle',
                        'justify-end': height === 'viewport' && alignVert === 'bottom',
                        'mt-10': topGap === 'small',
                        'mt-20': topGap === 'large',
                        'mb-10': bottomGap === 'small',
                        'mb-20': bottomGap === 'large',
                        'text-center': alignHoriz === 'center',
                        'text-right': alignHoriz === 'right'
                    }
                )}
            >
                {props.backgroundImage && heroBackgroundImage(props.backgroundImage)}
                <div
                    className={classNames('mx-auto', 'relative', 'sm:max-w-screen-sm', 'md:max-w-screen-md', 'lg:max-w-screen-lg', {
                        'w-full': height === 'viewport'
                    })}
                >
                    {heroVariants(props)}
                </div>
            </div>
        </div>
    );
}

function heroSectionFull(props) {
    const colors = props.colors || 'colors-a';
    const height = props.height || 'short';
    const topGap = props.topGap || 'small';
    const bottomGap = props.bottomGap || 'small';
    const alignHoriz = props.alignHoriz || 'left';
    const alignVert = props.alignVert || 'middle';
    return (
        <div id={props.elementId} className="component component-section component-hero-section" data-sb-field-path={props.annotationPrefix}>
            <div
                className={classNames(colors, 'px-4', 'relative', 'sm:px-6', height === 'tall' ? 'py-40 lg:py-60' : 'py-14 lg:py-20', {
                    'min-h-screen flex flex-col': height === 'viewport',
                    'justify-center': height === 'viewport' && alignVert === 'middle',
                    'justify-end': height === 'viewport' && alignVert === 'bottom',
                    'mt-10': topGap === 'small',
                    'mt-20': topGap === 'large',
                    'mb-10': bottomGap === 'small',
                    'mb-20': bottomGap === 'large',
                    'text-center': alignHoriz === 'center',
                    'text-right': alignHoriz === 'right'
                })}
            >
                {props.backgroundImage && heroBackgroundImage(props.backgroundImage)}
                <div
                    className={classNames('mx-auto', 'relative', 'sm:max-w-screen-sm', 'md:max-w-screen-md', 'lg:max-w-screen-lg', 'xl:max-w-screen-xl', {
                        'w-full': height === 'viewport'
                    })}
                >
                    {heroVariants(props)}
                </div>
            </div>
        </div>
    );
}

function heroVariants(props) {
    const variant = props.variant || 'variant-a';
    switch (variant) {
        case 'variant-a':
            return heroFeatureRight(props);
        case 'variant-b':
            return heroFeatureLeft(props);
        case 'variant-c':
            return heroFeatureTop(props);
        case 'variant-d':
            return heroFeatureBottom(props);
    }
    return null;
}

function heroFeatureRight(props) {
    const alignVert = props.alignVert || 'middle';
    return (
        <div
            className={classNames('grid gap-8', {
                'lg:grid-cols-2': props.feature,
                'lg:items-center': alignVert === 'middle',
                'lg:items-end': alignVert === 'bottom'
            })}
        >
            <div>
                {heroContent(props)}
                {heroActions(props)}
            </div>
            {props.feature && <div data-sb-field-path=".feature">{heroFeature(props.feature)}</div>}
        </div>
    );
}

function heroFeatureLeft(props) {
    const alignVert = props.alignVert || 'middle';
    return (
        <div
            className={classNames('grid gap-8', {
                'lg:grid-cols-2': props.feature,
                'lg:items-center': alignVert === 'middle',
                'lg:items-end': alignVert === 'bottom'
            })}
        >
            {props.feature && <div data-sb-field-path=".feature">{heroFeature(props.feature)}</div>}
            <div>
                {heroContent(props)}
                {heroActions(props)}
            </div>
        </div>
    );
}

function heroFeatureTop(props) {
    return (
        <>
            {props.feature && (
                <div className="mb-8 lg:mb-12" data-sb-field-path=".feature">
                    {heroFeature(props.feature)}
                </div>
            )}
            <div>
                {heroContent(props)}
                {heroActions(props)}
            </div>
        </>
    );
}

function heroFeatureBottom(props) {
    return (
        <>
            <div>
                {heroContent(props)}
                {heroActions(props)}
            </div>
            {props.feature && (
                <div className="mt-8 lg:mt-12" data-sb-field-path=".feature">
                    {heroFeature(props.feature)}
                </div>
            )}
        </>
    );
}

function heroFeature(feature) {
    const featureType = feature.type;
    if (!featureType) {
        throw new Error(`hero section feature does not have the 'type' property`);
    }
    const Feature = getDynamicComponent(featureType);
    if (!Feature) {
        throw new Error(`no component matching the hero section feature type: ${featureType}`);
    }
    return <Feature {...feature} className="mx-auto" />;
}

function heroBackgroundImage(image) {
    const imageUrl = image.url;
    if (!imageUrl) {
        return null;
    }
    const imageOpacity = (image.opacity || 1) * 0.01;

    return (
        <span
            className="bg-cover bg-center block absolute inset-0"
            style={{
                backgroundImage: `url('${imageUrl}')`,
                opacity: imageOpacity
            }}
            aria-label={image.altText}
            data-sb-field-path=".backgroundImage.url#@style .backgroundImage.opacity#@style .backgroundImage.altText#@aria-label"
        />
    );
}

function heroContent(props) {
    return (
        <>
            {props.badge && <Badge {...props.badge} className="sb-badge inline-block mb-4 text-xs" data-sb-field-path=".badge" />}
            {props.title && (
                <h2 className="text-4xl tracking-tight sm:text-5xl mb-6" data-sb-field-path=".title">
                    <InlineMarkdown>{props.title}</InlineMarkdown>
                </h2>
            )}
            {props.text && (
                <Markdown options={{ forceBlock: true }} className="md:text-lg" data-sb-field-path=".text">
                    {props.text}
                </Markdown>
            )}
        </>
    );
}

function heroActions(props) {
    const alignHoriz = props.alignHoriz || 'left';
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('flex flex-wrap items-center -mx-2', {
                'mt-8': props.badge || props.title || props.text,
                'justify-center': alignHoriz === 'center',
                'justify-end': alignHoriz === 'right'
            })}
            data-sb-field-path=".actions"
        >
            {props.actions.map((action, index) => (
                <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" annotationPrefix={`.${index}`} />
            ))}
        </div>
    );
}
