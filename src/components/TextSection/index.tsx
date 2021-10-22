import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../utils/map-styles-to-class-names';

export default function TextSection(props) {
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
                'component-text-section',
                colors,
                'px-4',
                'sm:px-8'
            )}
            data-sb-field-path={props.annotationPrefix}
        >
            <div
                className={classNames(
                    'flex',
                    'flex-col',
                    'max-w-screen-xl',
                    'mx-auto',
                    'py-8',
                    'sm:py-14',
                    sectionStyles.height ? mapMinHeightStyles(sectionStyles.height) : '',
                    sectionStyles.alignItems ? mapStyles({ alignItems: sectionStyles.alignItems }) : '',
                    sectionStyles.justifyContent ? mapStyles({ justifyContent: sectionStyles.justifyContent }) : ''
                )}
            >
                <div className={classNames('w-full', sectionStyles.width ? mapMaxWidthStyles(sectionStyles.width) : '')}>{textBody(props)}</div>
            </div>
        </div>
    );
}

function textBody(props) {
    const styles = props.styles || {};
    return (
        <div>
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
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames('sb-markdown', 'md:text-lg', styles.text ? mapStyles(styles.text) : '', props.title || props.subtitle ? 'mt-6' : '')}
                    data-sb-field-path=".text"
                >
                    {props.text}
                </Markdown>
            )}
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
