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
            options: [1, 2, 3, 4, 5, 6],
            defaultValue: 4,
            control: { type: 'select' }
        },
        elementId: {}
    }
};

const Template = (args: MediaGallerySectionProps) => <MediaGallerySection {...args} />;

const args: MediaGallerySectionProps = {
    title: 'Some photos',
    subtitle: 'Subtitle for some photos',
    columns: 4,
    imageSizePx: 200,
    spacing: 1,
    showCaption: true,
    enableHover: true,
    elementId: '',
    colors: 'colors-d',
    annotationPrefix: 'sections.1',
    images: [
        {
            url: 'https://www.fillmurray.com/640/640',
            altText: 'Bill Murray',
            caption: 'Comedian and actor Bill Murray'
        },
        {
            url: 'https://loremflickr.com/cache/resized/65535_51377543930_d101570b6d_b_640_640_nofilter.jpg',
            altText: 'Kitten',
            caption: "Oh Look, It's a Cat!"
        },
        {
            url: 'https://placebear.com/640/640',
            altText: 'Two Brown Bears (I think)',
            caption: "Don't poke the bears."
        },
        {
            url: 'https://www.stevensegallery.com/640/640',
            altText: 'Steven Segal',
            caption: "I'm going to be honest I'm not sure who Steven Seagal is."
        },
        {
            url: 'https://i.picsum.photos/id/828/800/500.jpg?hmac=g6xZl72KNwQKXfu6g3a4mAjzKEKU-ZF8BGtBltcN-QE',
            altText: 'Fireworks',
            caption: "Fireworks. Aren't they pretty!"
        }
    ],
    styles: {
        self: {
            height: 'auto',
            width: 'wide',
            margin: ['mt-0', 'mb-0'],
            padding: ['pt-12', 'pb-12', 'pl-4', 'pr-4'],
            justifyContent: 'center',
            borderRadius: 'none',
            borderWidth: 0,
            borderStyle: 'none',
            borderColor: 'border-neutral'
        },
        title: {
            fontWeight: 700,
            fontStyle: 'normal',
            textAlign: 'left',
            margin: ['mt-0', 'mb-2']
        },
        subtitle: {
            fontWeight: 400,
            fontStyle: 'normal',
            textAlign: 'left',
            margin: ['mt-0', 'mb-12']
        }
    }
};

export const Primary = Template.bind({});
Primary.storyName = 'Four images, four columns, captions enabled';
Primary.args = args;
