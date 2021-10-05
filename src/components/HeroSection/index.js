import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import { getDynamicComponent } from '../../components-registry';
import Badge from '../Badge';
import Action from '../Action';
import InlineMarkdown from '../InlineMarkdown';

export default function HeroSection(props) {
    const colors = props.colors || 'colors-a';
    const width = props.width || 'wide';
    const height = props.height || 'tall';
    const topGap = props.topGap || 'medium';
    const bottomGap = props.bottomGap || 'medium';
    const contentWidth = props.contentWidth || 'large';
    const contentAlignHoriz = props.contentAlignHoriz || 'left';
    const contentAlignVert = props.contentAlignVert || 'middle';

    return (
        <div
            id={props.elementId}
            className={classNames(
                'component',
                'component-section',
                'component-hero-section',
                width === 'full' ? colors : '',
                'px-4',
                'sm:px-6',
                'relative',
                {
                    'mt-4 sm:mt-6': topGap === 'small',
                    'mt-6 sm:mt-10': topGap === 'medium',
                    'mt-10 sm:mt-16': topGap === 'large',
                    'mb-4 sm:mb-6': bottomGap === 'small',
                    'mb-6 sm:mb-10': bottomGap === 'medium',
                    'mb-10 sm:mb-16': bottomGap === 'large'
                }
            )}
            data-sb-field-path={props.annotationPrefix}
        >
            {(width === 'full') && props.backgroundImage && heroBackgroundImage(props.backgroundImage)}
            <div
                className={classNames(
                    width === 'wide' ? colors : '',
                    'flex',
                    'flex-col',
                    'max-w-screen-2xl',
                    'mx-auto',
                    'px-4',
                    'sm:px-8',
                    'md:px-12',
                    'lg:px-16',
                    'py-10',
                    'md:py-20',
                    'relative',
                    {
                        'min-h-2/3-screen': height === 'tall',
                        'min-h-screen': height === 'viewport',
                        'justify-center': contentAlignVert === 'middle',
                        'justify-end': contentAlignVert === 'bottom'
                    }
                )}
            >
                {(width === 'wide') && props.backgroundImage && heroBackgroundImage(props.backgroundImage)}
                <div
                    className={classNames(
                        'relative',
                        'w-full',
                        {
                            'max-w-3xl': contentWidth === 'small',
                            'max-w-5xl': contentWidth === 'medium',
                            'max-w-7xl': contentWidth === 'large',
                            'mx-auto': contentAlignHoriz === 'center',
                            'ml-auto': contentAlignHoriz === 'right'
                        }
                    )}
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
    const contentAlignVert = props.contentAlignVert || 'middle';
    const textAlign = props.textAlign || 'left';
    return (
        <div
            className={classNames('grid gap-8', {
                'lg:grid-cols-2': props.feature,
                'lg:items-center': contentAlignVert === 'middle',
                'lg:items-end': contentAlignVert === 'bottom'
            })}
        >
            <div>
                {heroBody(props)}
                {heroActions(props)}
            </div>
            {props.feature && <div data-sb-field-path=".feature">{heroFeature(props.feature, textAlign)}</div>}
        </div>
    );
}

function heroFeatureLeft(props) {
    const contentAlignVert = props.contentAlignVert || 'middle';
    const textAlign = props.textAlign || 'left';
    return (
        <div
            className={classNames('grid gap-8', {
                'lg:grid-cols-2': props.feature,
                'lg:items-center': contentAlignVert === 'middle',
                'lg:items-end': contentAlignVert === 'bottom'
            })}
        >
            {props.feature && <div data-sb-field-path=".feature">{heroFeature(props.feature, textAlign)}</div>}
            <div>
                {heroBody(props)}
                {heroActions(props)}
            </div>
        </div>
    );
}

function heroFeatureTop(props) {
    const textAlign = props.textAlign || 'left';
    return (
        <>
            {props.feature && (
                <div className="mb-8 lg:mb-12" data-sb-field-path=".feature">
                    {heroFeature(props.feature, textAlign)}
                </div>
            )}
            <div>
                {heroBody(props)}
                {heroActions(props)}
            </div>
        </>
    );
}

function heroFeatureBottom(props) {
    const textAlign = props.textAlign || 'left';
    return (
        <>
            <div>
                {heroBody(props)}
                {heroActions(props)}
            </div>
            {props.feature && (
                <div className="mt-8 lg:mt-12" data-sb-field-path=".feature">
                    {heroFeature(props.feature, textAlign)}
                </div>
            )}
        </>
    );
}

function heroFeature(feature, align) {
    const featureType = feature.type;
    if (!featureType) {
        throw new Error(`hero section feature does not have the 'type' property`);
    }
    const Feature = getDynamicComponent(featureType);
    if (!Feature) {
        throw new Error(`no component matching the hero section feature type: ${featureType}`);
    }
    return (
        <Feature
            {...feature}
            className={classNames({
                'ml-auto': align === 'right',
                'mx-auto': align === 'center'
            })}
        />
    );
}

function heroBackgroundImage(image) {
    const imageUrl = image.url;
    if (!imageUrl) {
        return null;
    }
    const imageOpacity = (image.opacity || 100) * 0.01;

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

function heroBody(props) {
    const textAlign = props.textAlign || 'left';
    return (
        <div
            className={classNames({
                'text-center': textAlign === 'center',
                'text-right': textAlign === 'right'
            })}
        >
            {props.badge && <Badge {...props.badge} className="inline-block mb-4 text-xs" annotationPrefix=".badge" />}
            {props.title && (
                <h2 className="component-section-title text-4xl tracking-tight sm:text-5xl mb-6" data-sb-field-path=".title">
                    <InlineMarkdown>{props.title}</InlineMarkdown>
                </h2>
            )}
            {props.subtitle && (
                <p className="text-2xl mb-3" data-sb-field-path=".subtitle">
                    {props.subtitle}
                </p>
            )}
            {props.text && (
                <Markdown options={{ forceBlock: true }} className="md:text-lg" data-sb-field-path=".text">
                    {props.text}
                </Markdown>
            )}
        </div>
    );
}

function heroActions(props) {
    const textAlign = props.textAlign || 'left';
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('flex flex-wrap items-center -mx-2', {
                'mt-8': props.badge || props.title || props.text,
                'justify-center': textAlign === 'center',
                'justify-end': textAlign === 'right'
            })}
            data-sb-field-path=".actions"
        >
            {actions.map((action, index) => (
                <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" annotationPrefix={`.${index}`} />
            ))}
        </div>
    );
}
