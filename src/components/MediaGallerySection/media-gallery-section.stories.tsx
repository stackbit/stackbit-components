import React from 'react';
import MediaGallerySection, { MediaGallerySectionProps } from './index';

export default {
    title: 'Components/MediaGallerySection',
    component: MediaGallerySection,
    argTypes: {
        type: { table: { disable: true } },
        colors: {
            options: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e', 'colors-f', 'colors-g', 'colors-h', 'colors-i'],
            defaultValue: 'colors-d',
            control: { type: 'select' }
        },
        backgroundWidth: {
            options: ['full', 'inset'],
            defaultValue: 'full',
            control: { type: 'select' }
        },
        elementId: {}
    }
};

const Template = (args: MediaGallerySectionProps) => <MediaGallerySection {...args} />;

const args: MediaGallerySectionProps = {
    annotationPrefix: 'sections.1',
    elementId: '',
    spacing: 1,
    imageSizePx: 100,
    showCaption: true,
    enableHover: true,
    colors: 'colors-a',
    backgroundWidth: 'full',
    images: [
        {
            url: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5735f40da7ea4353698df276%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D259%26cropX2%3D607%26cropY1%3D19%26cropY2%3D367',
            altText: 'Michelle Obama',
            caption: 'Former first lady Michelle Obama'
        },
        {
            url: 'https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg',
            altText: 'Barak Obama',
            caption: 'President Barak Obama'
        },
        {
            url: 'https://s.abcnews.com/images/GMA/jill-biden-colbert-ht-ps-201218_1608300587346_hpMain_4x3_992.jpg',
            altText: 'Jill Biden',
            caption: 'First Lady Dr. Jill Biden'
        },
        {
            url: 'https://www.whitehouse.gov/wp-content/uploads/2021/04/P20210303AS-1901-cropped.jpg',
            altText: 'Joe Biden',
            caption: 'President Joe Biden'
        },
        {
            url: 'https://www.whitehouse.gov/wp-content/uploads/2021/04/P20210303AS-1901-cropped.jpg',
            altText: 'Joe Biden',
            caption: 'President Joe Biden'
        }
    ],
    styles: {
        self: {
            height: 'auto',
            width: 'wide',
            margin: ['mt-0', 'mb-0'],
            padding: ['pt-12', 'pb-12'],
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
};

export const Primary = Template.bind({});
Primary.storyName = 'Four images, four columns, captions enabled';
Primary.args = args;
