import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../utils/map-styles-to-class-names';
import { getComponent } from '../../components-registry';

export default function CtaSection(props) {
    const colors = props.colors || 'colors-a';
    const width = props.width || 'wide';
    const height = props.height || 'tall';
    const topGap = props.topGap || 'medium';
    const bottomGap = props.bottomGap || 'medium';
    const contentWidth = props.contentWidth || 'large';
    const contentAlignHoriz = props.contentAlignHoriz || 'left';
    const contentAlignVert = props.contentAlignVert || 'middle';
    const actionsPosition = props.actionsPosition || 'right';
    const actions = props.actions || [];
    const styles = props.styles || {};

    return (
        <div
            id={props.elementId}
            className={classNames(
                'component',
                'component-section',
                'component-cta-section',
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
                {props.backgroundImage && ctaBackgroundImage(props.backgroundImage)}
                <div
                    className={classNames(
                        'relative',
                        'w-full',
                        {
                            'max-w-3xl': contentWidth === 'small',
                            'max-w-5xl': contentWidth === 'medium',
                            'max-w-7xl': contentWidth === 'large'
                        }
                    )}
                >
                    <div
                        className={classNames(
                            'flex',
                            '-mx-4',
                            {
                                'flex-col lg:flex-row lg:justify-between': actionsPosition === 'right',
                                'flex-col': actionsPosition === 'bottom'
                            }
                        )}
                    >
                        {(props.title || props.text) && (
                            <div className="my-3 px-4">
                                {props.title && (
                                    <h2
                                        className={classNames('text-3xl', 'sm:text-4xl', 'mb-6', styles.title ? mapStyles(styles.title) : '')}
                                        data-sb-field-path=".title"
                                    >
                                        {props.title}
                                    </h2>
                                )}
                                {props.text && (
                                    <Markdown
                                        options={{ forceBlock: true }}
                                        className={classNames('sb-markdown', 'md:text-lg', styles.text ? mapStyles(styles.text) : '')}
                                        data-sb-field-path=".text"
                                    >
                                        {props.text}
                                    </Markdown>
                                )}
                            </div>
                        )}
                        {actions.length > 0 && (
                            <div className="my-3 px-4">
                                {ctaActions(props)}
                            </div>
                        )}
                    </div>
                </div>
            </div>
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

function ctaActions(props) {
    const actions = props.actions || [];
    const actionStyles = props.styles?.actions || {};
    const Action = getComponent('Action');
    return (
        <div
            className={classNames('flex flex-wrap items-center -mx-2', actionStyles.textAlign ? mapActionsAlignStyles(actionStyles.textAlign) : '')}
            data-sb-field-path=".actions"
        >
            {actions.map((action, index) => (
                <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" annotationPrefix={`.${index}`} />
            ))}
        </div>
    );
}

function mapActionsAlignStyles(textAlign) {
    switch (textAlign) {
        case 'left':
            return 'justify-start';
        case 'center':
            return 'justify-center';
        case 'right':
            return 'justify-end';
    }
    return null;
}
