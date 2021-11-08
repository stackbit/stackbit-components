import * as React from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../utils/map-styles-to-class-names';
import ImageBlock from '../ImageBlock';

type BaseSectionComponentProps = {
    annotationPrefix: string;
    elementId: string;
    colors?: string;
    styles?: any;
};

type Image = {
    url: string;
    altText: string;
    caption: string;
};

export type MediaGallerySectionProps = BaseSectionComponentProps & {
    title?: string;
    subtitle?: string;
    images?: Image[];
    spacing?: number;
    columns?: number;
    imageSizePx?: number;
    showCaption: boolean;
    enableHover: boolean;
};

export default function MediaGallerySection(props: MediaGallerySectionProps) {
    const sectionStyles = props.styles?.self || {};
    const colors = props.colors || 'colors-a';

    return (
        <div
            id={props.elementId}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-media-gallery-section',
                colors,
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
                    {/* Inline-block div that will grow to the width of the image grid so we can left-align / right align text with the edges of the grid */}
                    <div className="inline-block max-w-full">
                        <MediaGalleryHeader {...props} />
                        <MediaGalleryImageGrid {...props} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function MediaGalleryHeader(props: MediaGallerySectionProps) {
    if (!props.title && !props.subtitle) {
        return null;
    }
    const styles = props.styles || {};

    return (
        <div className="w-full pb-4">
            {props.title && (
                <h2 className={classNames('text-3xl', 'sm:text-4xl', styles.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
                    {props.title}
                </h2>
            )}
            {props.subtitle && (
                <p className={classNames('text-lg', 'sm:text-xl', styles.subtitle ? mapStyles(styles.subtitle) : null)} data-sb-field-path=".subtitle">
                    {props.subtitle}
                </p>
            )}
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

function MediaGalleryImageGrid(props: MediaGallerySectionProps) {
    const images = props.images || [];
    if (images.length === 0) {
        return null;
    }

    const columns = props.columns || 4;
    const numGaps = columns - 1; // 1 image, 0 gaps, 2 images, 1 gap, etc etc
    const spacing = props.spacing || 0;
    // Give enough width for the desired image width * columns, plus the gaps, and the grid will auto-resize (resizing the images along with it)
    const widthString = `calc((${props.imageSizePx}px * ${columns}) + (${spacing}rem * ${numGaps}))`; // TODO - this is probably better done through flex

    return (
        <div
            className="grid place-items-center"
            data-sb-field-path=".images"
            style={{
                gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
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
            return 'max-w-screen-lg';
        case 'full':
            return 'max-w-full';
    }
    return null;
}
