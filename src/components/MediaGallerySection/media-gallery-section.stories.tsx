import React from 'react';
import MediaGallerySection, { MediaGallerySectionProps } from './index';

export default {
    title: 'Components/MediaGallerySection',
    component: MediaGallerySection,
    argTypes: {
        type: { table: { disable: true } },
        elementId: {}
    }
};

const Template = (args: MediaGallerySectionProps) => <MediaGallerySection {...args} />;

const args = {
    type: 'MediaGallerySection',
    elementId: '',
    width: 'full',
    images: [
        {
            type: 'ImageBlock',
            url: 'https://splendid-petunia-99a9e.stackbit.app/images/Frame%201484.svg',
            altText: 'Apple Logo'
        },
        {
            type: 'ImageBlock',
            url: 'https://splendid-petunia-99a9e.stackbit.app/images/Frame%201485.svg',
            altText: 'Google Pixel'
        },
        {
            type: 'ImageBlock',
            url: 'https://splendid-petunia-99a9e.stackbit.app/images/Frame%201486.svg',
            altText: 'Xbox Logo'
        },
        {
            type: 'ImageBlock',
            url: 'https://splendid-petunia-99a9e.stackbit.app/images/Frame%201487.svg',
            altText: 'PlayStation Logo'
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
Primary.storyName = 'Four images, four columns, captions disabled';
Primary.args = args;
