import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../utils/map-styles-to-class-names';
import { getComponent } from '../../components-registry';

export default function CtaSection(props) {
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
                'sb-component-cta-section',
                colors,
                'px-4',
                'sm:px-8',
                'relative'
            )}
            data-sb-field-path={props.annotationPrefix}
        >
            {props.backgroundImage && ctaBackgroundImage(props.backgroundImage)}
            <div
                className={classNames(
                    'flex',
                    'flex-col',
                    'max-w-screen-xl',
                    'mx-auto',
                    'py-5',
                    'sm:py-11',
                    'relative',
                    sectionStyles.height ? mapMinHeightStyles(sectionStyles.height) : '',
                    sectionStyles.alignItems ? mapStyles({ alignItems: sectionStyles.alignItems }) : '',
                    sectionStyles.justifyContent ? mapStyles({ justifyContent: sectionStyles.justifyContent }) : ''
                )}
            >
                <div className={classNames('relative', 'w-full', sectionStyles.width ? mapMaxWidthStyles(sectionStyles.width) : '')}>
                    <div className={classNames('flex', '-mx-4', sectionStyles.flexDirection ? mapFlexDirectionStyles(sectionStyles.flexDirection) : '')}>
                        {ctaBody(props)}
                        {ctaActions(props)}
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

function ctaBody(props) {
    if (!props.title && !props.text) {
        return null;
    }
    const styles = props.styles || {};
    return (
        <div className="my-3 px-4">
            {props.title && (
                <h2 className={classNames('text-3xl', 'sm:text-4xl', 'mb-6', styles.title ? mapStyles(styles.title) : '')} data-sb-field-path=".title">
                    {props.title}
                </h2>
            )}
            {props.text && (
                <Markdown
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames('sb-markdown', 'md:text-lg', styles.text ? mapStyles(styles.text) : '')}
                    data-sb-field-path=".text"
                >
                    {props.text}
                </Markdown>
            )}
        </div>
    );
}

function ctaActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const styles = props.styles || {};
    const Action = getComponent('Action');
    return (
        <div className="my-3 px-4">
            <div
                className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', styles.actions ? mapStyles(styles.actions) : '')}
                data-sb-field-path=".actions"
            >
                {actions.map((action, index) => (
                    <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" annotationPrefix={`.${index}`} />
                ))}
            </div>
        </div>
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

function mapFlexDirectionStyles(flexDirection) {
    switch (flexDirection) {
        case 'row':
            return ['flex-col', 'lg:flex-row lg:justify-between'];
        case 'col':
            return ['flex-col'];
    }
    return null;
}