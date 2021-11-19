import * as React from 'react';
import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';
import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../utils/map-styles-to-class-names';
import { ImageBlock } from '..';

export default function Item(props) {
    const cssId = props.elementId || null;
    return (
        <article id={cssId} className="sb-component sb-component-block sb-component-item" data-sb-field-path={props.annotationPrefix}>
            {props.featuredImage && (
                <div className="" data-sb-field-path="featuredImage">
                    <ImageBlock {...props.featuredImage} className="" />
                </div>
            )}
            {props.title && (
                <h3 className={classNames(props?.styles?.title ? mapStyles(props?.styles?.title) : null)} data-sb-field-path=".title">
                    {props.title}
                </h3>
            )}
            {props.subtitle && (
                <p className={classNames('text-lg', props?.styles?.subtitle ? mapStyles(props?.styles?.subtitle) : null)} data-sb-field-path=".subtitle">
                    {props.subtitle}
                </p>
            )}
            {props.text && (
                <Markdown
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames('sb-markdown', props?.styles?.text ? mapStyles(props?.styles?.text) : null)}
                    data-sb-field-path=".text"
                >
                    {props.text}
                </Markdown>
            )}
            {props.author && <div className="text-sm">{props.author}</div>}
            {props.rating && <div>{props.rating}</div>}
            <div className="my-3 flex-1 px-4 w-full">{itemActions(props)}</div>
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
            className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', styles.actions ? mapStyles(styles.actions) : null)}
            data-sb-field-path=".actions"
        >
            {actions.map((action, index) => (
                <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" annotationPrefix={`.${index}`} />
            ))}
        </div>
    );
}
