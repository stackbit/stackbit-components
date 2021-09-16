import React from 'react';
import ImageBlock from './index';

export default {
    title: 'Blocks/ImageBlock',
    component: ImageBlock
};

const Template = (args) => <ImageBlock {...args} />;

const args = {
    type: 'ImageBlock',
    url: '/images/fisherman.jpg',
    altText: 'Image alt text',
    caption: 'Image caption',
    elementId: ''
};

export const Primary = Template.bind({});
Primary.storyName = 'Image';
Primary.args = { ...args };
