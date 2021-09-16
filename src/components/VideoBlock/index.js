import React from 'react';
import classNames from 'classnames';

export default function VideoBlock(props) {
    const videoUrl = props.videoUrl;
    const classes = props.className || null;

    if (!videoUrl) {
        return null;
    }

    return (
        <video
            id={props.elementId}
            {...(props.autoplay && { autoPlay: true })}
            {...(props.loop && { loop: true })}
            {...(props.muted && { muted: true })}
            {...(props.controls && { controls: true })}
            playsInline
            poster={props.posterUrl}
            className={classNames('component', 'component-block', 'component-video-block', classes)}
            data-sb-field-path=".posterUrl#@poster"
        >
            <source src={videoUrl} type="video/mp4" data-sb-field-path=".videoUrl" />
        </video>
    );
}
