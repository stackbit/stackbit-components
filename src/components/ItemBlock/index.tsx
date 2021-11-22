import * as React from 'react';
import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';
import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../utils/map-styles-to-class-names';
import { ImageBlock } from '..';

export default function ItemBlock(props) {
    const cssId = props.elementId || null;
    return (
        <article id={cssId} className="sb-component sb-component-block sb-component-item" data-sb-field-path={props.annotationPrefix}>
            {props.featuredImage && (
                <div className="mb-4" data-sb-field-path=".featuredImage">
                    <ImageBlock {...props.featuredImage} className="mx-auto" />
                </div>
            )}
            {props.title && (
                <h3 className={classNames(props?.styles?.title ? mapStyles(props?.styles?.title) : null)} data-sb-field-path=".title">
                    {props.title}
                </h3>
            )}
            {props.subtitle && (
                <p
                    className={classNames('text-lg', props?.styles?.subtitle ? mapStyles(props?.styles?.subtitle) : null, { 'mt-1': props.title })}
                    data-sb-field-path=".subtitle"
                >
                    {props.subtitle}
                </p>
            )}
            {props.text && (
                <Markdown
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames('sb-markdown', props?.styles?.text ? mapStyles(props?.styles?.text) : null, {
                        'mt-4': props.title || props.subtitle
                    })}
                    data-sb-field-path=".text"
                >
                    {props.text}
                </Markdown>
            )}
            {props.author && (
                <div className={classNames('text-sm', { 'mt-4': props.title || props.subtitle || props.text })} data-sb-field-path=".author">
                    {props.author}
                </div>
            )}
            {props.isRatingVisible && props.rating && (
                <div className={classNames({ 'mt-4': props.title || props.subtitle || props.text || props.author })} data-sb-field-path=".rating">
                    {props.rating}
                </div>
            )}
            {itemActions(props)}
        </article>
    );
}

function itemActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const styles = props.styles || {};
    const Action = getComponent('Action');
    return (
        <div
            className={classNames('flex', 'flex-wrap', 'items-center', 'mt-6', '-mx-2', styles.actions ? mapStyles(styles.actions) : null)}
            data-sb-field-path=".actions"
        >
            {actions.map((action, index) => (
                <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" annotationPrefix={`.${index}`} />
            ))}
        </div>
    );
}
