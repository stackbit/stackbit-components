import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../utils/map-styles-to-class-names';

export default function QuoteSection(props) {
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
                'component-quote-section',
                width === 'full' ? `${colors} relative` : '',
                'px-4',
                'sm:px-6',
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
            {width === 'full' && props.backgroundImage && quoteBackgroundImage(props.backgroundImage)}
            <div
                className={classNames(
                    width === 'wide' ? `${colors} relative` : '',
                    'flex',
                    'flex-col',
                    'max-w-screen-2xl',
                    'mx-auto',
                    'px-4',
                    'sm:px-8',
                    'md:px-16',
                    'py-8',
                    'sm:py-16',
                    {
                        'min-h-2/3-screen': height === 'tall',
                        'min-h-screen': height === 'screen',
                        'justify-center': contentAlignVert === 'middle',
                        'justify-end': contentAlignVert === 'bottom',
                        'items-center': contentAlignHoriz === 'center',
                        'items-end': contentAlignHoriz === 'right'
                    }
                )}
            >
                {props.backgroundImage && quoteBackgroundImage(props.backgroundImage)}
                <div
                    className={classNames('relative', 'w-full', {
                        'max-w-3xl': contentWidth === 'small',
                        'max-w-5xl': contentWidth === 'medium',
                        'max-w-7xl': contentWidth === 'large'
                    })}
                >
                    {quoteContent(props)}
                </div>
            </div>
        </div>
    );
}

function quoteBackgroundImage(image) {
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

function quoteContent(props) {
    const styles = props.styles || {};

    return (
        <blockquote className="my-3">
            {props.quote && (
                <Markdown
                    options={{ forceBlock: true }}
                    className={classNames('sb-markdown', 'text-3xl', 'sm:text-4xl', styles.quote ? mapStyles(styles.quote) : '')}
                    data-sb-field-path=".quote"
                >
                    {props.quote}
                </Markdown>
            )}
            {(props.name || props.title) && (
                <footer className="mt-8 sm:mt-12">
                    {props.name && (
                        <strong
                            className={classNames('block', 'font-normal', 'text-2xl', 'sm:text-3xl', styles.name ? mapStyles(styles.name) : '')}
                            data-sb-field-path=".name"
                        >
                            {props.name}
                        </strong>
                    )}
                    {props.title && (
                        <span
                            className={classNames('block', 'text-lg', styles.title ? mapStyles(styles.title) : '', props.name ? 'mt-1.5' : '')}
                            data-sb-field-path=".title"
                        >
                            {props.title}
                        </span>
                    )}
                </footer>
            )}
        </blockquote>
    );
}
