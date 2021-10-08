import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import Badge from '../Badge';

export default function TextSection(props) {
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
                'component-text-section',
                width === 'full' ? colors : '',
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
                    {
                        'min-h-2/3-screen': height === 'tall',
                        'min-h-screen': height === 'viewport',
                        'justify-center': contentAlignVert === 'middle',
                        'justify-end': contentAlignVert === 'bottom'
                    }
                )}
            >
                <div
                    className={classNames(
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
                    {textSectionBody(props)}
                </div>
            </div>
        </div>
    );
}

function textSectionBody(props) {
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
                <h2 className="component-section-title text-3xl tracking-tight sm:text-4xl" data-sb-field-path=".title">
                    {props.title}
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
