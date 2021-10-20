import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../utils/map-styles-to-class-names';

export default function QuoteSection(props) {
    const colors = props.colors || 'colors-a';
    const backgroundWidth = props.backgroundWidth || 'full';
    const sectionStyles = props.styles?.self || {};

    return (
        <div
            id={props.elementId}
            className={classNames(
                'sb-component',
                'sb-component-section',
                backgroundWidth === 'inset' ? 'sb-component-section-inset' : '',
                'sb-component-quote-section',
                colors,
                'px-4',
                'sm:px-8',
                'relative'
            )}
            data-sb-field-path={props.annotationPrefix}
        >
            {props.backgroundImage && quoteBackgroundImage(props.backgroundImage)}
            <div
                className={classNames(
                    'flex',
                    'flex-col',
                    'max-w-screen-xl',
                    'mx-auto',
                    'py-8',
                    'sm:py-14',
                    'relative',
                    sectionStyles.height ? mapMinHeightStyles(sectionStyles.height) : '',
                    sectionStyles.alignItems ? mapStyles({ alignItems: sectionStyles.alignItems }) : '',
                    sectionStyles.justifyContent ? mapStyles({ justifyContent: sectionStyles.justifyContent }) : ''
                )}
            >
                <div className={classNames('relative', 'w-full', sectionStyles.width ? mapMaxWidthStyles(sectionStyles.width) : '')}>{quoteContent(props)}</div>
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
        <blockquote>
            {props.quote && (
                <Markdown
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames('sb-markdown', 'text-3xl', 'sm:text-4xl', styles.quote ? mapStyles(styles.quote) : '')}
                    data-sb-field-path=".quote"
                >
                    {props.quote}
                </Markdown>
            )}
            {(props.name || props.title) && (
                <footer>
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

function mapMinHeightStyles(height) {
    switch (height) {
        case 'auto':
            return 'min-h-0';
        case 'screen':
            return 'min-h-screen';
    }
    return null;
}

function mapMaxWidthStyles(width) {
    switch (width) {
        case 'narrow':
            return 'max-w-screen-sm';
        case 'wide':
            return 'max-w-screen-lg';
        case 'full':
            return 'max-w-full';
    }
    return null;
}
