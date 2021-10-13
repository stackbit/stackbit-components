import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import { getDynamicComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../utils/map-styles-to-class-names';
import FormBlock from '../FormBlock';

export default function ContactSection(props) {
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
                'component-contact-section',
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
                        'min-h-screen': height === 'screen',
                        'justify-center': contentAlignVert === 'middle',
                        'justify-end': contentAlignVert === 'bottom'
                    }
                )}
            >
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
                    {contactVariants(props)}
                </div>
            </div>
        </div>
    );
}

function contactVariants(props) {
    const variant = props.variant || 'variant-a';
    switch (variant) {
        case 'variant-a':
            return contactFeatureRight(props);
        case 'variant-b':
            return contactFeatureLeft(props);
    }
    return null;
}

function contactFeatureRight(props) {
    const contentAlignVert = props.contentAlignVert || 'middle';
    return (
        <div
            className={classNames('grid gap-y-8', {
                'gap-x-12 lg:grid-cols-2': props.feature,
                'lg:items-center': contentAlignVert === 'middle',
                'lg:items-end': contentAlignVert === 'bottom'
            })}
        >
            <div>
                {contactContent(props)}
                {props.form && (
                    <div data-sb-field-path=".form">
                        <FormBlock {...props.form} />
                    </div>
                )}
            </div>
            {props.feature && <div data-sb-field-path=".feature">{contactFeature(props.feature)}</div>}
        </div>
    );
}

function contactFeatureLeft(props) {
    const contentAlignVert = props.contentAlignVert || 'middle';
    return (
        <div
            className={classNames('grid gap-y-8', {
                'gap-x-12 lg:grid-cols-2': props.feature,
                'lg:items-center': contentAlignVert === 'middle',
                'lg:items-end': contentAlignVert === 'bottom'
            })}
        >
            {props.feature && <div data-sb-field-path=".feature">{contactFeature(props.feature)}</div>}
            <div>
                {contactContent(props)}
                {props.form && (
                    <div data-sb-field-path=".form">
                        <FormBlock {...props.form} />
                    </div>
                )}
            </div>
        </div>
    );
}

function contactFeature(feature) {
    const featureType = feature.type;
    if (!featureType) {
        throw new Error(`contact section feature does not have the 'type' property`);
    }
    const Feature = getDynamicComponent(featureType);
    if (!Feature) {
        throw new Error(`no component matching the contact section feature type: ${featureType}`);
    }
    return (
        <Feature {...feature} />
    );
}

function contactContent(props) {
    const styles = props.styles || {};
    return (
        <div className="mb-12">
            {props.title && (
                <h2
                    className={classNames('text-4xl', 'sm:text-5xl', 'mb-6', styles.title ? mapStyles(styles.title) : '')}
                    data-sb-field-path=".title"
                >
                    {props.title}
                </h2>
            )}
            {props.text && (
                <Markdown
                    options={{ forceBlock: true }}
                    className={classNames('sb-markdown', styles.text ? mapStyles(styles.text) : '')}
                    data-sb-field-path=".text"
                >
                    {props.text}
                </Markdown>
            )}
        </div>
    );
}
