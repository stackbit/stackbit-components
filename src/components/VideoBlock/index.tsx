import * as React from 'react';
import classNames from 'classnames';
import getVideoData from '../../utils/get-video-data';

export default function VideoBlock(props) {
    const { url, thumbnailUrl, autoplay, loop, muted, controls } = props;
    if (!url) {
        return null;
    }
    const cssClasses = props.className || null;
    const cssId = props.elementId || null;
    const aspectRatio = props.aspectRatio || '16:9';
    const videoData = getVideoData(url);
    if (!videoData.id) {
        return <p>Video URL is not supported.</p>;
    }

    if (videoData.service === 'youtube') {
        return (
            <div
                className={classNames(
                    'sb-component',
                    'sb-component-block',
                    'sb-component-video-block',
                    cssClasses,
                    'overflow-hidden',
                    'relative',
                    'w-full',
                    'h-0',
                    {
                        'pt-3/4': aspectRatio === '4:3',
                        'pt-9/16': aspectRatio === '16:9'
                    }
                )}
            >
                <iframe
                    src={`https://www.youtube.com/embed/${videoData.id}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    data-sb-field-path=".url#@src"
                    className="absolute left-0 top-0 h-full w-full"
                ></iframe>
            </div>
        );
    } else if (videoData.service === 'vimeo') {
        return (
            <div
                className={classNames(
                    'sb-component',
                    'sb-component-block',
                    'sb-component-video-block',
                    cssClasses,
                    'overflow-hidden',
                    'relative',
                    'w-full',
                    'h-0',
                    {
                        'pt-3/4': aspectRatio === '4:3',
                        'pt-9/16': aspectRatio === '16:9'
                    }
                )}
            >
                <iframe
                    src={`https://player.vimeo.com/video/${videoData.id}?transparent=0`}
                    title="Vimeo video player"
                    frameBorder="0"
                    allowFullScreen
                    data-sb-field-path=".url#@src"
                    className="absolute left-0 top-0 h-full w-full"
                ></iframe>
            </div>
        );
    } else if (videoData.service === 'custom') {
        return (
            <div
                className={classNames(
                    'sb-component',
                    'sb-component-block',
                    'sb-component-video-block',
                    cssClasses,
                    'overflow-hidden',
                    'relative',
                    'w-full',
                    'h-0',
                    {
                        'pt-3/4': aspectRatio === '4:3',
                        'pt-9/16': aspectRatio === '16:9'
                    }
                )}
            >
                <video
                    id={cssId}
                    {...(autoplay && { autoPlay: true })}
                    {...(loop && { loop: true })}
                    {...(muted && { muted: true })}
                    {...(controls && { controls: true })}
                    playsInline
                    poster={thumbnailUrl}
                    className="absolute left-0 top-0 h-full w-full"
                    data-sb-field-path=".elementId#@id .thumbnailUrl#@poster"
                >
                    <source src={videoData.id} type="video/mp4" data-sb-field-path=".url#@src" />
                </video>
            </div>
        );
    } else {
        return <p>Video URL is not supported.</p>;
    }
}
