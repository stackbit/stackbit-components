import React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import Badge from '../Badge';
import Action from '../Action';
import InlineMarkdown from '../InlineMarkdown';

export default function CtaSection(props) {
    const width = props.width || 'wide';
    switch (width) {
        case 'wide':
            return CtaSectionWide(props);
        case 'full':
            return CtaSectionFull(props);
    }
    return null;
}

function CtaSectionWide(props) {
    const colors = props.colors || 'colors-a';
    const height = props.height || 'short';
    const topGap = props.topGap || 'small';
    const bottomGap = props.bottomGap || 'small';
    return (
        <div
            className="px-4 sm:px-6"
            data-sb-field-path={props.annotationPrefix}
        >
            <div
                className={classNames(colors, 'max-w-screen-xl', 'mx-auto', 'px-4', 'relative', 'sm:px-6', height === 'tall' ? 'py-40 lg:py-60' : 'py-14 lg:py-20', {
                    'min-h-screen flex flex-col justify-center': height === 'viewport',
                    'mt-10': topGap === 'small',
                    'mt-20': topGap === 'large',
                    'mb-10': bottomGap === 'small',
                    'mb-20': bottomGap === 'large'
                })}
            >
                {props.backgroundImage && CtaBackgroundImage(props.backgroundImage)}
                <div
                    className={classNames('mx-auto', 'relative', 'sm:max-w-screen-sm', 'md:max-w-screen-md', 'lg:max-w-screen-lg', {
                        'w-full': height === 'viewport'
                    })}
                >
                    <CtaVariants {...props} />
                </div>
            </div>
        </div>
    );
}

function CtaSectionFull(props) {
    const colors = props.colors || 'colors-a';
    const height = props.height || 'short';
    const topGap = props.topGap || 'small';
    const bottomGap = props.bottomGap || 'small';
    const alignHoriz = props.alignHoriz || 'left';
    const alignVert = props.alignVert || 'middle';
    return (
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
            data-sb-field-path={props.annotationPrefix}
        >
            {props.backgroundImage && CtaBackgroundImage(props.backgroundImage)}
            <div
                className={classNames('mx-auto', 'relative', 'sm:max-w-screen-sm', 'md:max-w-screen-md', 'lg:max-w-screen-lg', 'xl:max-w-screen-xl', {
                    'w-full': height === 'viewport'
                })}
            >
                <CtaVariants {...props} />
            </div>
        </div>
    );
}

function CtaVariants({ variant, ...props }) {
    variant = variant || 'variant-a';
    switch (variant) {
        case 'variant-a':
            return CtaButtonsBottom(props);
        case 'variant-b':
            return CtaButtonsRight(props);
    }
    return null;
}

function CtaButtonsBottom(props) {
    const alignHoriz = props.alignHoriz || 'left';
    const actions = props.actions || [];
    return (
        <div
            className={classNames({
                'text-center': alignHoriz === 'center',
                'text-right': alignHoriz === 'right'
            })}
        >
            {CtaContent(props)}
            {actions.length > 0 && (
                <div
                    className={classNames('flex flex-wrap items-center -mx-2', {
                        'mt-8': props.badge || props.title || props.text,
                        'justify-center': alignHoriz === 'center',
                        'justify-end': alignHoriz === 'right'
                    })}
                    data-sb-field-path=".actions"
                >
                    {CtaActions(props)}
                </div>
            )}
        </div>
    );
}

function CtaButtonsRight(props) {
    const alignHoriz = props.alignHoriz || 'left';
    const actions = props.actions || [];
    return (
        <div className="lg:flex">
            {(props.badge || props.title || props.text) && (
                <div
                    className={classNames({
                        'text-center': alignHoriz === 'center',
                        'text-right': alignHoriz === 'right'
                    })}
                >
                    {CtaContent(props)}
                </div>
            )}
            {actions.length > 0 && (
                <div
                    className={classNames('flex flex-col -mx-2 lg:pl-12', {
                        'mt-10 lg:mt-0': props.badge || props.title || props.text,
                        'items-start lg:items-center': alignHoriz === 'left',
                        'items-center': alignHoriz === 'center',
                        'items-end lg:items-center': alignHoriz === 'right'
                    })}
                    data-sb-field-path=".actions"
                >
                    {CtaActions(props)}
                </div>
            )}
        </div>
    );
}

function CtaBackgroundImage(image) {
    const imageUrl = image.url;
    if (!imageUrl) {
        return null;
    }
    const imageOpacity = (image.opacity || 1) * 0.01;
    return (
        <span
            className="bg-cover block absolute inset-0"
            style={{
                backgroundImage: `url('${imageUrl}')`,
                opacity: imageOpacity
            }}
            aria-label={image.altText}
            data-sb-field-path=".backgroundImage.url#@style .backgroundImage.opacity#@style .backgroundImage.altText#@aria-label"
        />
    );
}

function CtaContent(props) {
    return (
        <>
            {props.badge && <Badge label={props.badge} className="sb-badge inline-block mb-4 text-xs" data-sb-field-path=".badge" />}
            {props.title && (
                <h2 className="text-3xl tracking-tight sm:text-4xl mb-6" data-sb-field-path=".title">
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

function CtaActions(props) {
    return props.actions.map((action, index) => <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" annotationPrefix={`.${index}`} />);
}
