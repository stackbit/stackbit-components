import * as React from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../utils/map-styles-to-class-names';
import { getComponent } from '../../components-registry';
import ImageBlock from '../ImageBlock';

type Logo = {
    title: string;
    image: {
        url: string;
        altText: string;
    };
    id: string;
};

export type LogoGridSectionProps = {
    colors: string;
    backgroundWidth: string;
    styles: any;
    elementId: string;
    annotationPrefix: string;
    title: string;
    subtitle: string;
    logos: Logo[];
};

export default function LogoGridSection(props: LogoGridSectionProps) {
    const colors = props.colors || 'colors-a';
    const backgroundWidth = props.backgroundWidth || 'full';
    const sectionStyles = props.styles?.self || {};
    return (
        <div
            id={props.elementId}
            className={classNames(
                'sb-component',
                'sb-component-section',
                backgroundWidth === 'inset' ? 'sb-component-section-inset' : null,
                'sb-component-featured-people-section',
                colors,
                'px-4',
                'sm:px-8',
                sectionStyles.margin
            )}
            data-sb-field-path={props.annotationPrefix}
        >
            <div
                className={classNames(
                    'flex',
                    'flex-col',
                    'max-w-screen-2xl',
                    'mx-auto',
                    sectionStyles.height ? mapMinHeightStyles(sectionStyles.height) : null,
                    sectionStyles.padding,
                    sectionStyles.alignItems ? mapStyles({ alignItems: sectionStyles.alignItems }) : null,
                    sectionStyles.justifyContent ? mapStyles({ justifyContent: sectionStyles.justifyContent }) : null
                )}
            >
                <div className={classNames('w-full', sectionStyles.width ? mapMaxWidthStyles(sectionStyles.width) : null)}>
                    <LogoGridHeader {...props} />
                    <LogoGridImages {...props} />
                    <LogoGridActions {...props} />
                </div>
            </div>
        </div>
    );
}

function LogoGridHeader(props: LogoGridSectionProps) {
    if (!props.title && !props.subtitle) {
        return null;
    }
    const styles = props.styles || {};
    return (
        <div>
            {props.title && (
                <h2 className={classNames('text-3xl', 'sm:text-4xl', styles.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
                    {props.title}
                </h2>
            )}
            {props.subtitle && (
                <p className={classNames('text-lg', 'sm:text-xl', styles.subtitle ? mapStyles(styles.subtitle) : null)} data-sb-field-path=".subtitle">
                    {props.subtitle}
                </p>
            )}
        </div>
    );
}

function LogoGridActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const styles = props.styles || {};
    const Action = getComponent('Action');
    return (
        <div
            className={classNames('flex', 'flex-wrap', 'items-center', 'mt-8', '-mx-2', styles.actions ? mapStyles(styles.actions) : null)}
            data-sb-field-path=".actions"
        >
            {props.actions.map((action, index) => (
                <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" annotationPrefix={`.${index}`} />
            ))}
        </div>
    );
}

function LogoImage({ logo, index }: { logo: Logo; index: number }) {
    return (
        <article data-sb-field-path={`.${index}`}>
            {logo.image && (
                <div className="h-0 w-full pt-1/1 relative" data-sb-field-path=".image">
                    <ImageBlock {...logo.image} className="absolute left-0 h-full object-contain top-0 w-full" />
                </div>
            )}
            <div
                className={classNames({
                    'pt-2': logo.image
                })}
            >
                {logo.title && <h2 className="text-xl text-center sm:text-2xl">{logo.title && <span data-sb-field-path=".title">{logo.title}</span>}</h2>}
            </div>
        </article>
    );
}

function LogoGridImages(props: LogoGridSectionProps) {
    const logos = props.logos || [];
    if (logos.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('grid', 'gap-2', 'grid-cols-4', 'md:grid-cols-8', {
                'mt-12': props.title || props.subtitle
            })}
            data-sb-field-path=".logos"
        >
            {logos.map((person, index) => (
                <LogoImage logo={person} key={`logo-${index}`} index={index} />
            ))}
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
