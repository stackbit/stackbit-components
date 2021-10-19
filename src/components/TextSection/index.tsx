import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../utils/map-styles-to-class-names';

export default function TextSection(props) {
    const colors = props.colors || 'colors-a';
    const width = props.width || 'wide';
    const height = props.height || 'tall';
    const topGap = props.topGap || 'medium';
    const bottomGap = props.bottomGap || 'medium';
    const contentWidth = props.contentWidth || 'large';
    const contentAlignHoriz = props.contentAlignHoriz || 'left';
    const contentAlignVert = props.contentAlignVert || 'middle';
    const styles = props.styles || {};

    return (
        <div
            id={props.elementId}
            className={classNames('component', 'component-section', 'component-text-section', width === 'full' ? colors : '', 'px-4', 'sm:px-6', {
                'mt-4 sm:mt-6': topGap === 'small',
                'mt-6 sm:mt-10': topGap === 'medium',
                'mt-10 sm:mt-16': topGap === 'large',
                'mb-4 sm:mb-6': bottomGap === 'small',
                'mb-6 sm:mb-10': bottomGap === 'medium',
                'mb-10 sm:mb-16': bottomGap === 'large'
            })}
            data-sb-field-path={props.annotationPrefix}
        >
            <div
                className={classNames(
                    width === 'wide' ? colors : '',
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
                <div
                    className={classNames('w-full', 'my-3', {
                        'max-w-3xl': contentWidth === 'small',
                        'max-w-5xl': contentWidth === 'medium',
                        'max-w-7xl': contentWidth === 'large'
                    })}
                >
                    {props.title && (
                        <h2 className={classNames('text-3xl', 'sm:text-4xl', styles.title ? mapStyles(styles.title) : '')} data-sb-field-path=".title">
                            {props.title}
                        </h2>
                    )}
                    {props.subtitle && (
                        <p className={classNames('text-xl', 'sm:text-2xl', styles.subtitle ? mapStyles(styles.subtitle) : '')} data-sb-field-path=".subtitle">
                            {props.subtitle}
                        </p>
                    )}
                    {props.text && (
                        <Markdown
                            options={{ forceBlock: true }}
                            className={classNames(
                                'sb-markdown',
                                'md:text-lg',
                                styles.text ? mapStyles(styles.text) : '',
                                props.title || props.subtitle ? 'mt-6' : ''
                            )}
                            data-sb-field-path=".text"
                        >
                            {props.text}
                        </Markdown>
                    )}
                </div>
            </div>
        </div>
    );
}
