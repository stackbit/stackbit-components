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
        columns: {
            options: [1, 2, 3, 4, 5, 6, 7],
            defaultValue: 4,
            control: { type: 'select' }
        },
        aspectRatio: {
            options: ['1:1', '2:3', '3:2', '4:3', '3:4', '16:9', 'auto'],
            defaultValue: '1:1',
            control: { type: 'select' }
        },
        elementId: {}
    }
};

const Template = (args: MediaGallerySectionProps) => <MediaGallerySection {...args} />;

const args: MediaGallerySectionProps = {
    type: 'MediaGallerySection',
    title: 'Gallery',
    subtitle: 'This is the subtitle',
    columns: 4,
    imageSizePx: 300,
    spacing: 1,
    aspectRatio: '1:1',
    showCaption: true,
    enableHover: true,
    elementId: '',
    colors: 'colors-a',
    images: [
        {
            url: 'https://assets.stackbit.com/components/images/default/image-1.jpeg',
            altText: 'Media gallery image',
            caption: 'Image caption'
        },
        {
            url: 'https://assets.stackbit.com/components/images/default/image-2.jpeg',
            altText: 'Media gallery image',
            caption: 'Image caption'
        },
        {
            url: 'https://assets.stackbit.com/components/images/default/image-3.jpeg',
            altText: 'Media gallery image',
            caption: 'Image caption'
        },
        {
            url: 'https://assets.stackbit.com/components/images/default/image-4.jpeg',
            altText: 'Media gallery image',
            caption: 'Image caption'
        }
    ],
    styles: {
        self: {
            height: 'auto',
            width: 'wide',
            margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0'],
            padding: ['pt-12', 'pb-12', 'pl-4', 'pr-4'],
            justifyContent: 'center',
            borderRadius: 'none',
            borderWidth: 0,
            borderStyle: 'none',
            borderColor: 'border-dark'
        },
        title: {
            textAlign: 'center'
        },
        subtitle: {
            textAlign: 'center'
        }
    }
};

export const Primary = Template.bind({});
Primary.storyName = 'Four columns, captions enabled';
Primary.args = args;
