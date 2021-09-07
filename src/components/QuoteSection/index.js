import React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

export default function QuoteSection(props) {
    const width = props.width || 'wide';
    switch (width) {
        case 'wide':
            return quoteSectionWide(props);
        case 'full':
            return quoteSectionFull(props);
    }
    return null;
}

function quoteSectionWide(props) {
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
                {props.backgroundImage && quoteBackgroundImage(props.backgroundImage)}
                <div
                    className={classNames('mx-auto', 'relative', 'sm:max-w-screen-sm', 'md:max-w-screen-md', 'lg:max-w-screen-lg', {
                        'w-full': height === 'viewport'
                    })}
                >
                    {quoteContent(props)}
                </div>
            </div>
        </div>
    );
}

function quoteSectionFull(props) {
  const colors = props.colors || 'colors-a';
  const height = props.height || 'short';
  const topGap = props.topGap || 'small';
  const bottomGap = props.bottomGap || 'small';
  return (
        <div
            className={classNames(colors, 'px-4', 'relative', 'sm:px-6', height === 'tall' ? 'py-40 lg:py-60' : 'py-14 lg:py-20', {
                'min-h-screen flex flex-col justify-center': height === 'viewport',
                'mt-10': topGap === 'small',
                'mt-20': topGap === 'large',
                'mb-10': bottomGap === 'small',
                'mb-20': bottomGap === 'large'
            })}
            data-sb-field-path={props.annotationPrefix}
        >
            {props.backgroundImage && quoteBackgroundImage(props.backgroundImage)}
            <div
                className={classNames('mx-auto', 'relative', 'sm:max-w-screen-sm', 'md:max-w-screen-md', 'lg:max-w-screen-lg', 'xl:max-w-screen-xl', {
                    'w-full': height === 'viewport'
                })}
            >
                {quoteContent(props)}
            </div>
        </div>
    );
}

function quoteBackgroundImage(image) {
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

function quoteContent(props) {
    const alignHoriz = props.alignHoriz || 'left';
    return (
        <blockquote
            className={classNames({
              'text-center': alignHoriz === 'center',
              'text-right': alignHoriz === 'right'
            })}
        >
            {props.quote && (
                <Markdown options={{ forceBlock: true }} className="text-3xl sm:text-4xl" data-sb-field-path=".quote">
                    {props.quote}
                </Markdown>
            )}
            {(props.name || props.title) && (
                <footer className="mt-8 sm:mt-12">
                    {props.name && (
                        <strong className="block font-normal mb-1 text-3xl sm:text-4xl" data-sb-field-path=".name">
                            {props.name}
                        </strong>
                    )}
                    {props.title && <span className="text-large" data-sb-field-path=".title">{props.title}</span>}
                </footer>
            )}
        </blockquote>
    );
}
