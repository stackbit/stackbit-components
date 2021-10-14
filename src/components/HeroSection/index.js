import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import { getDynamicComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../utils/map-styles-to-class-names';
import Action from '../Action';

export default function HeroSection(props) {
    const colors = props.colors || 'colors-a';
    const width = props.width || 'wide';
    const height = props.height || 'tall';
    const topGap = props.topGap || 'medium';
    const bottomGap = props.bottomGap || 'medium';
    const contentWidth = props.contentWidth || 'large';
    const contentAlignHoriz = props.contentAlignHoriz || 'left';
    const contentAlignVert = props.contentAlignVert || 'middle';
    const featurePosition = props.featurePosition || 'right';

    return (
        <div
            id={props.elementId}
            className={classNames(
                'component',
                'component-section',
                'component-hero-section',
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
                        'min-h-screen': height === 'viewport',
                        'justify-center': contentAlignVert === 'middle',
                        'justify-end': contentAlignVert === 'bottom',
                        'items-center': contentAlignHoriz === 'center',
                        'items-end': contentAlignHoriz === 'right'
                    }
                )}
            >
                {props.backgroundImage && heroBackgroundImage(props.backgroundImage)}
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
                                'flex-col lg:flex-row': featurePosition === 'right',
                                'flex-col-reverse lg:flex-row-reverse': featurePosition === 'left',
                                'flex-col-reverse': featurePosition === 'top',
                                'flex-col': featurePosition === 'bottom'
                            }
                        )}
                    >
                        <div
                            className={classNames(
                                'my-3',
                                'flex-1',
                                'px-4',
                                'w-full',{
                                    'self-center': contentAlignVert === 'middle',
                                    'self-end': contentAlignVert === 'bottom'
                                }
                            )}
                        >
                            {heroBody(props)}
                            {heroActions(props)}
                        </div>
                        {props.feature && (
                            <div
                                className={classNames(
                                    'my-3',
                                    'flex-1',
                                    'px-4',
                                    'w-full',{
                                        'self-center': contentAlignVert === 'middle',
                                        'self-end': contentAlignVert === 'bottom'
                                    }
                                )}
                                data-sb-field-path=".feature"
                            >
                                {heroFeature(props.feature)}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function heroFeature(feature) {
    const featureType = feature.type;
    if (!featureType) {
        throw new Error(`hero section feature does not have the 'type' property`);
    }
    const Feature = getDynamicComponent(featureType);
    if (!Feature) {
        throw new Error(`no component matching the hero section feature type: ${featureType}`);
    }
    return (
        <Feature {...feature} />
    );
}

function heroBackgroundImage(image) {
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

function heroBody(props) {
    const styles = props.styles || {};
    return (
        <div>
            {props.title && (
                <h2
                    className={classNames('mb-6', styles.title ? mapStyles(styles.title) : '')}
                    data-sb-field-path=".title"
                >
                    {props.title}
                </h2>
            )}
            {props.subtitle && (
                <p
                    className={classNames('mb-3', styles.subtitle ? mapStyles(styles.subtitle) : '')}
                    data-sb-field-path=".subtitle"
                >
                    {props.subtitle}
                </p>
            )}
            {props.text && (
                <Markdown
                    options={{ forceBlock: true }}
                    className={classNames('sb-markdown', 'mb-3', styles.text ? mapStyles(styles.text) : '')}
                    data-sb-field-path=".text"
                >
                    {props.text}
                </Markdown>
            )}
        </div>
    );
}

function heroActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames(
                'flex',
                'flex-wrap',
                'items-center',
                'mt-8',
                '-mx-2'
            )}
            data-sb-field-path=".actions"
        >
            {actions.map((action, index) => (
                <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" annotationPrefix={`.${index}`} />
            ))}
        </div>
    );
}
