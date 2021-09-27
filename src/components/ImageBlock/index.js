import React from 'react';
import classNames from 'classnames';

export default function ImageBlock(props) {
    const { url, altText, caption } = props;
    if (!url) {
        return null;
    }
    const cssClasses = props.className || null;
    const cssId = props.elementId || null;

    return (
        <img
            id={cssId}
            className={classNames('component', 'component-block', 'component-image-block', cssClasses)}
            src={url}
            alt={altText || ''}
            title={caption}
            data-sb-field-path=".url#@src .altText#@alt .caption#@title .elementId#@id"
        />
    );
}
