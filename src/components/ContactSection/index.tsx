import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../utils/map-styles-to-class-names';
import FormBlock from '../FormBlock';

export default function ContactSection(props) {
    const colors = props.colors || 'colors-a';
    const sectionStyles = props.styles?.self || {};
    const sectionBorderWidth = sectionStyles.borderWidth ? sectionStyles.borderWidth : 0;
    return (
        <div
            id={props.elementId}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-contact-section',
                colors,
                'flex',
                'flex-col',
                'justify-center',
                sectionStyles.height ? mapMinHeightStyles(sectionStyles.height) : null,
                sectionStyles.margin,
                sectionStyles.padding,
                sectionStyles.borderColor,
                sectionStyles.borderRadius ? mapStyles({ borderRadius: sectionStyles.borderRadius }) : null,
                sectionStyles.borderStyle ? mapStyles({ borderStyle: sectionStyles.borderStyle }) : null
            )}
            style={{
                borderWidth: `${sectionBorderWidth}px`
            }}
            data-sb-field-path={props.annotationPrefix}
        >
            <div className={classNames('flex', 'w-full', sectionStyles.justifyContent ? mapStyles({ justifyContent: sectionStyles.justifyContent }) : null)}>
                <div className={classNames('w-full', sectionStyles.width ? mapMaxWidthStyles(sectionStyles.width) : null)}>
                    <div
                        className={classNames(
                            'flex',
                            '-mx-4',
                            sectionStyles.flexDirection ? mapFlexDirectionStyles(sectionStyles.flexDirection) : null,
                            sectionStyles.alignItems ? mapStyles({ alignItems: sectionStyles.alignItems }) : null
                        )}
                    >
                        <div className="my-3 flex-1 px-4 w-full">
                            {contactBody(props)}
                            {props.form && (
                                <div data-sb-field-path=".form">
                                    <FormBlock {...props.form} />
                                </div>
                            )}
                        </div>
                        {props.feature && (
                            <div className="my-3 flex-1 px-4 w-full">
                                <div data-sb-field-path=".feature">{contactFeature(props.feature)}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function contactFeature(feature) {
    const featureType = feature.type;
    if (!featureType) {
        throw new Error(`contact section feature does not have the 'type' property`);
    }
    const Feature = getComponent(featureType);
    if (!Feature) {
        throw new Error(`no component matching the contact section feature type: ${featureType}`);
    }
    return <Feature {...feature} />;
}

function contactBody(props) {
    const styles = props.styles || {};
    return (
        <div>
            {props.title && (
                <h2 className={classNames('text-4xl', 'sm:text-5xl', styles.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
                    {props.title}
                </h2>
            )}
            {props.text && (
                <Markdown
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames('sb-markdown', styles.text ? mapStyles(styles.text) : null)}
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
            return 'max-w-screen-md';
        case 'wide':
            return 'max-w-screen-xl';
        case 'full':
            return 'max-w-full';
    }
    return null;
}

function mapFlexDirectionStyles(flexDirection) {
    switch (flexDirection) {
        case 'row':
            return ['flex-col', 'lg:flex-row'];
        case 'row-reverse':
            return ['flex-col-reverse', 'lg:flex-row-reverse'];
        case 'col':
            return ['flex-col'];
        case 'col-reverse':
            return ['flex-col-reverse'];
    }
    return null;
}
