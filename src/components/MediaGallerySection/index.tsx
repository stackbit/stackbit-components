import * as React from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../utils/map-styles-to-class-names';
import ImageBlock from '../ImageBlock';

type BaseSectionComponentProps = {
    annotationPrefix: string;
    elementId: string;
    colors?: string;
    backgroundWidth?: string;
    styles?: any;
};

type Image = {
    url: string;
    altText: string;
    caption: string;
};

export type MediaGallerySectionProps = BaseSectionComponentProps & {
    images?: Image[];
    spacing?: number;
    imageSizePx?: number;
    showCaption: boolean;
    enableHover: boolean;
};

export default function MediaGallerySection(props: MediaGallerySectionProps) {
    const sectionStyles = props.styles?.self || {};
    const colors = props.colors || 'colors-a';
    const backgroundWidth = props.backgroundWidth || 'full';

    return (
        <div
            id={props.elementId}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-media-gallery-section',
                colors,
                backgroundWidth === 'inset' ? 'sb-component-section-inset' : null,
                'mt-6',
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
                    'items-center',
                    'justify-center',
                    'max-w-screen-2xl',
                    'mx-auto',
                    sectionStyles.height ? mapMinHeightStyles(sectionStyles.height) : null,
                    sectionStyles.padding
                )}
            >
                <div
                    className={classNames(
                        'w-full',
                        'flex',
                        'flex-col',
                        'items-center',
                        'justify-center',
                        sectionStyles.width ? mapMaxWidthStyles(sectionStyles.width) : null // TODO - should this width handler be up a level and get rid of this div?
                    )}
                >
                    <MediaGalleryImages {...props} />
                </div>
            </div>
        </div>
    );
}

function LogoImage({ image, enableHover }: { image: Image; enableHover: boolean }) {
    if (!image) {
        return null;
    }

    return (
        <ImageBlock
            {...image}
            className={classNames('media-gallery-image', 'absolute', 'left-0', 'top-0', 'h-full', 'w-full', 'object-cover', 'transition-transform', {
                'hover:scale-105': enableHover
            })}
        />
    );
}

function MediaGalleryImages(props: MediaGallerySectionProps) {
    const images = props.images || [];
    if (images.length === 0) {
        return null;
    }

    const spacing = props.spacing || 0;
    const numImages = images.length;
    const numGaps = images.length - 1;
    // Give enough width for the desired image width, plus the gaps, and the grid will auto-resize (resizing the images along with it)
    const widthString = `calc((${props.imageSizePx}px * ${numImages}) + (${spacing}rem * ${numGaps}))`; // TODO - this is better done through flex

    return (
        <div
            className="grid place-items-center"
            data-sb-field-path=".images"
            style={{
                gridTemplateColumns: `repeat(auto-fit, minmax(0, 1fr))`,
                gap: props.spacing ? `${props.spacing}rem` : undefined,
                width: props.imageSizePx ? widthString : '100%',
                maxWidth: '100%'
            }}
        >
            {images.map((image, index) => (
                <div key={`image-${index}`} data-sb-field-path={`.${index}`} className="relative h-0 w-full pt-1/1 relative items-center overflow-hidden">
                    <LogoImage image={image} enableHover={props.enableHover} />
                    {props.showCaption ? <div className="absolute left-2 bottom-2 text-xs text-left pointer-events-none">{image.caption}</div> : null}
                </div>
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
