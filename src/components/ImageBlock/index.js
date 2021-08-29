import React from 'react';

export default function ImageBlock(props) {
    const imageUrl = props.url;
    if (!imageUrl) {
        return null;
    }
    return (
        <img
            className={props.className}
            src={imageUrl}
            alt={props.altText || ''}
            title={props.caption}
            data-sb-field-path=".url#@src .altText#@alt .caption#@title"
        />
    );
}
