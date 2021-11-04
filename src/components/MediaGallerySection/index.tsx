import * as React from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../utils/map-styles-to-class-names';
import ImageBlock from '../ImageBlock';

type BaseSectionComponentProps = {
    annotationPrefix: string;
    elementId: string;
    colors: string;
    styles?: any;
};

type Image = {
    url: string;
    altText: string;
    caption: string;
};

export type MediaGallerySectionProps = BaseSectionComponentProps & {
    images?: Image[];
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
                    'max-w-screen-2xl',
                    'mx-auto',
                    sectionStyles.height ? mapMinHeightStyles(sectionStyles.height) : null,
                    sectionStyles.padding,
                    sectionStyles.alignItems ? mapStyles({ alignItems: sectionStyles.alignItems }) : null,
                    sectionStyles.justifyContent ? mapStyles({ justifyContent: sectionStyles.justifyContent }) : null
                )}
            >
                <div className={classNames('w-full', sectionStyles.width ? mapMaxWidthStyles(sectionStyles.width) : null)}>
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
        <div className="h-0 w-full pt-1/1 relative items-center overflow-hidden">
            <ImageBlock
                {...image}
                className={classNames('absolute', 'left-0', 'h-full', 'object-cover', 'top-0', 'w-full', 'transition-transform', {
                    'hover:scale-105': enableHover
                })}
            />
        </div>
    );
}

function MediaGalleryImages(props: MediaGallerySectionProps) {
    const images = props.images || [];
    if (images.length === 0) {
        return null;
    }

    return (
        <div
            className={classNames('grid')}
            data-sb-field-path=".images"
            style={{
                gridTemplateColumns: `repeat(${images.length}, minmax(0, 1fr))`
            }}
        >
            {images.map((image, index) => (
                <div key={`image-${index}`} data-sb-field-path={`.${index}`} className="relative p-2">
                    <LogoImage image={image} enableHover={props.enableHover} />
                    {props.showCaption ? <div className="absolute left-4 bottom-4 text-xs text-left leading-4 pointer-events-none">{image.caption}</div> : null}
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
