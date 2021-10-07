import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import Badge from '../Badge';
import Action from '../Action';

export default function CtaSection(props) {
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
                'component-cta-section',
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
            {(width === 'full') && props.backgroundImage && ctaBackgroundImage(props.backgroundImage)}
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
                {(width === 'wide') && props.backgroundImage && ctaBackgroundImage(props.backgroundImage)}
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
                    {ctaVariants(props)}
                </div>
            </div>
        </div>
    );
}

function ctaVariants(props) {
    const variant = props.variant || 'variant-a';
    switch (variant) {
        case 'variant-a':
            return ctaButtonsBottom(props);
        case 'variant-b':
            return ctaButtonsRight(props);
    }
    return null;
}

function ctaButtonsBottom(props) {
    const textAlign = props.textAlign || 'left';
    const actions = props.actions || [];
    return (
        <div
            className={classNames({
                'text-center': textAlign === 'center',
                'text-right': textAlign === 'right'
            })}
        >
            {ctaContent(props)}
            {actions.length > 0 && (
                <div
                    className={classNames('flex flex-wrap items-center -mx-2', {
                        'mt-8': props.badge || props.title || props.text,
                        'justify-center': textAlign === 'center',
                        'justify-end': textAlign === 'right'
                    })}
                    data-sb-field-path=".actions"
                >
                    {ctaActions(props)}
                </div>
            )}
        </div>
    );
}

function ctaButtonsRight(props) {
    const textAlign = props.textAlign || 'left';
    const actions = props.actions || [];
    return (
        <div className="lg:flex lg:justify-between">
            {(props.badge || props.title || props.text) && (
                <div
                    className={classNames({
                        'text-center': textAlign === 'center',
                        'text-right': textAlign === 'right'
                    })}
                >
                    {ctaContent(props)}
                </div>
            )}
            {actions.length > 0 && (
                <div
                    className={classNames('flex flex-col -mx-2 lg:pl-12', {
                        'mt-10 lg:mt-0': props.badge || props.title || props.text,
                        'items-start lg:items-center': textAlign === 'left',
                        'items-center': textAlign === 'center',
                        'items-end lg:items-center': textAlign === 'right'
                    })}
                    data-sb-field-path=".actions"
                >
                    {ctaActions(props)}
                </div>
            )}
        </div>
    );
}

function ctaBackgroundImage(image) {
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

function ctaContent(props) {
    return (
        <>
            {props.badge && <Badge {...props.badge} className="inline-block inline-block mb-4 text-xs" annotationPrefix=".badge" />}
            {props.title && (
                <h2 className="component-section-title text-3xl tracking-tight sm:text-4xl mb-6">
                    <Markdown options={{ forceInline: true }} data-sb-field-path=".title">{props.title}</Markdown>
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

function ctaActions(props) {
    return props.actions.map((action, index) => <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" annotationPrefix={`.${index}`} />);
}
