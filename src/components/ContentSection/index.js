import React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import Badge from '../Badge';
import InlineMarkdown from '../InlineMarkdown';

export default function ContentSection(props) {
    const width = props.width || 'wide';
    switch (width) {
        case 'wide':
            return contentSectionWide(props);
        case 'full':
            return contentSectionFull(props);
    }
    return null;
}

function contentSectionWide(props) {
    const colors = props.colors || 'colors-a';
    const height = props.height || 'short';
    const topGap = props.topGap || 'small';
    const bottomGap = props.bottomGap || 'small';
    return (
        <div id={props.elementId} className="component component-section component-content-section px-4 sm:px-6" data-sb-field-path={props.annotationPrefix}>
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
                        'min-h-screen flex flex-col justify-center': height === 'viewport',
                        'mt-10': topGap === 'small',
                        'mt-20': topGap === 'large',
                        'mb-10': bottomGap === 'small',
                        'mb-20': bottomGap === 'large'
                    }
                )}
            >
                <div
                    className={classNames('mx-auto', 'relative', 'sm:max-w-screen-sm', 'md:max-w-screen-md', 'lg:max-w-screen-lg', {
                        'w-full': height === 'viewport'
                    })}
                >
                    {contentBody(props)}
                </div>
            </div>
        </div>
    );
}

function contentSectionFull(props) {
    const colors = props.colors || 'colors-a';
    const height = props.height || 'short';
    const topGap = props.topGap || 'small';
    const bottomGap = props.bottomGap || 'small';
    return (
        <div
            id={props.elementId}
            className={classNames(
                'component',
                'component-section',
                'component-content-section',
                colors,
                'px-4',
                'relative',
                'sm:px-6',
                height === 'tall' ? 'py-40 lg:py-60' : 'py-14 lg:py-20',
                {
                    'min-h-screen flex flex-col justify-center': height === 'viewport',
                    'mt-10': topGap === 'small',
                    'mt-20': topGap === 'large',
                    'mb-10': bottomGap === 'small',
                    'mb-20': bottomGap === 'large'
                }
            )}
            data-sb-field-path={props.annotationPrefix}
        >
            <div
                className={classNames('mx-auto', 'relative', 'sm:max-w-screen-sm', 'md:max-w-screen-md', 'lg:max-w-screen-lg', 'xl:max-w-screen-xl', {
                    'w-full': height === 'viewport'
                })}
            >
                {contentBody(props)}
            </div>
        </div>
    );
}

function contentBody(props) {
    const alignHoriz = props.alignHoriz || 'left';
    return (
        <div
            className={classNames({
                'text-center': alignHoriz === 'center',
                'text-right': alignHoriz === 'right'
            })}
        >
            {props.badge && <Badge label={props.badge} className="sb-badge inline-block mb-4 text-xs" data-sb-field-path=".badge" />}
            {props.title && (
                <h2 className="text-3xl tracking-tight sm:text-4xl" data-sb-field-path=".title">
                    <InlineMarkdown>{props.title}</InlineMarkdown>
                </h2>
            )}
            {props.subtitle && (
                <p className="md:text-lg" data-sb-field-path=".subtitle">
                    {props.subtitle}
                </p>
            )}
            {props.text && (
                <Markdown
                    options={{ forceBlock: true }}
                    className={classNames('md:text-lg', {
                        'mt-6': props.badge || props.title || props.subtitle
                    })}
                    data-sb-field-path=".text"
                >
                    {props.text}
                </Markdown>
            )}
        </div>
    );
}
