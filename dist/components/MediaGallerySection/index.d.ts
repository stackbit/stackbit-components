/// <reference types="react" />
declare type BaseSectionStyle = {
    self: {
        height?: string;
        width?: string;
        justifyContent?: string;
        margin?: string | string[];
        padding?: string | string[];
        borderRadius?: string;
        borderWidth?: number;
        borderStyle?: string;
        borderColor?: string;
    };
};
declare type MediaGalleryStyle = {
    title: {
        fontWeight?: number;
        fontStyle?: string;
        textAlign?: string;
        margin?: string | string[];
    };
    subtitle: {
        fontWeight?: number;
        fontStyle?: string;
        textAlign?: string;
        margin?: string | string[];
    };
};
declare type BaseSectionComponentProps = {
    type: string;
    elementId: string;
    colors?: string;
    styles?: BaseSectionStyle & MediaGalleryStyle;
};
declare type Image = {
    url: string;
    altText: string;
    caption: string;
};
export declare type MediaGallerySectionProps = BaseSectionComponentProps & {
    title?: string;
    subtitle?: string;
    images?: Image[];
    spacing?: number;
    columns?: number;
    aspectRatio?: string;
    imageSizePx?: number;
    showCaption: boolean;
    enableHover: boolean;
};
export default function MediaGallerySection(props: MediaGallerySectionProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map