import * as React from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../utils/map-styles-to-class-names';
import ImageBlock from '../ImageBlock';

type BaseSectionComponentProps = {
    annotationPrefix: string;
    elementId: string;
};

type Image = {
    url: string;
    altText: string;
};

export type MediaGallerySectionProps = BaseSectionComponentProps & {
    images?: Image[];
    styles?: any;
};

export default function MediaGallerySection(props: MediaGallerySectionProps) {
    const sectionStyles = props.styles?.self || {};
    return (
        <div
            id={props.elementId}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-media-gallery-section',
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

function LogoImage({ image, index }: { image: Image; index: number }) {
    return (
        <article data-sb-field-path={`.${index}`}>
            {image && (
                <div className="h-0 w-full pt-1/1 relative items-center" data-sb-field-path=".image">
                    <ImageBlock {...image} className="absolute left-0 h-full object-contain top-0 w-full" />
                </div>
            )}
            {/* TODO: caption */}
        </article>
    );
}

function MediaGalleryImages(props: MediaGallerySectionProps) {
    const images = props.images || [];
    if (images.length === 0) {
        return null;
    }
    return (
        <div className={classNames('grid', 'grid-cols-4')} data-sb-field-path=".logos">
            {images.map((image, index) => (
                <LogoImage image={image} key={`image-${index}`} index={index} />
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
