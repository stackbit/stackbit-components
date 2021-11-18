import * as React from 'react';
import classNames from 'classnames';
import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../utils/map-styles-to-class-names';
import Item from '../Item';

export default function FeaturedItemsSection(props) {
    const sectionStyles = props.styles?.self || {};
    const cssId = props.elementId || null;

    const sectionBorderWidth = sectionStyles.borderWidth ? sectionStyles.borderWidth : 0;
    return (
        <div
            id={cssId}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-featured-items-section',
                'flex',
                'flex-col',
                'justify-center',
                'relative',
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
            <div
                className={classNames(
                    'flex',
                    'relative',
                    'w-full',
                    sectionStyles.justifyContent ? mapStyles({ justifyContent: sectionStyles.justifyContent }) : null
                )}
            >
                <div className={classNames('w-full', sectionStyles.width ? mapMaxWidthStyles(sectionStyles.width) : null)}>
                    <article className="sb-card">
                        <div className="px-4 py-6 sm:px-6 sm:pb-10">
                            {props.title && (
                                <h2
                                    className={classNames('text-4xl', 'sm:text-5xl', props?.styles?.title ? mapStyles(props?.styles?.title) : null)}
                                    data-sb-field-path=".title"
                                >
                                    {props.title}
                                </h2>
                            )}
                            {props.subtitle && (
                                <p
                                    className={classNames('text-xl', 'sm:text-2xl', props?.styles?.subtitle ? mapStyles(props?.styles?.subtitle) : null)}
                                    data-sb-field-path=".subtitle"
                                >
                                    {props.subtitle}
                                </p>
                            )}
                            {props?.items && (
                                <div className={classNames(`grid gap-2 ${mapCulStyles(props?.numOfColumns || 3)} lg:gap-4`)} data-sb-field-path=".items">
                                    {props.items.map((item, index) => (
                                        <Item key={index} {...item} />
                                    ))}
                                </div>
                            )}
                            <div className="my-3 flex-1 px-4 w-full">{featuredItemActions(props)}</div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}

function featuredItemActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const styles = props.styles || {};
    const Action = getComponent('Action');
    return (
        <div
            className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', styles.actions ? mapStyles(styles.actions) : null)}
            data-sb-field-path=".actions"
        >
            {actions.map((action, index) => (
                <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" annotationPrefix={`.${index}`} />
            ))}
        </div>
    );
}

function mapCulStyles(columns) {
    switch (columns) {
        case 4:
            return 'md:grid-cols-4';
        case 3:
            return 'md:grid-cols-3';
        case 2:
            return 'md:grid-cols-2';
    }
    return null;
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
