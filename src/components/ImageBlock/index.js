import React from 'react';
import classNames from 'classnames';

export default function ImageBlock(props) {
    const { url, altText, caption } = props;
    const classes = props.className || null;

    if (!url) {
        return null;
    }

    return (
        <img
            id={props.elementId}
            className={classNames('component', 'component-block', 'component-image-block', classes)}
            src={url}
            alt={altText || ''}
            title={caption}
            data-sb-field-path=".url#@src .altText#@alt .caption#@title"
        />
    );
}
