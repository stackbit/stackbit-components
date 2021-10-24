import React from 'react';
import ImageBlock from './index';

export default {
    title: 'Blocks/ImageBlock',
    component: ImageBlock
};

const Template = (args) => <ImageBlock {...args} />;

const args = {
    type: 'ImageBlock',
    url: '/images/post-1.jpeg',
    altText: 'Image alt text',
    caption: 'Image caption',
    elementId: '',
    styles: {
        self: {
            opacity: 100
        }
    }
};

export const Primary = Template.bind({});
Primary.storyName = 'Image';
Primary.args = { ...args };
