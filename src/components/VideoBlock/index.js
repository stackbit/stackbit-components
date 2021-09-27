import React from 'react';
import classNames from 'classnames';

export default function VideoBlock(props) {
    const { videoUrl, posterUrl, autoplay, loop, muted, controls } = props;
    if (!videoUrl) {
        return null;
    }
    const cssClasses = props.className || null;
    const cssId = props.elementId || null;

    return (
        <video
            id={cssId}
            {...(autoplay && { autoPlay: true })}
            {...(loop && { loop: true })}
            {...(muted && { muted: true })}
            {...(controls && { controls: true })}
            playsInline
            poster={posterUrl}
            className={classNames('component', 'component-block', 'component-video-block', cssClasses)}
            data-sb-field-path=".elementId#@id .posterUrl#@poster"
        >
            <source src={videoUrl} type="video/mp4" data-sb-field-path=".videoUrl" />
        </video>
    );
}
