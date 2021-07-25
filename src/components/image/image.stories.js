import React from 'react';
import Image from './index';

export default {
    title: 'Atoms/Image',
    component: Image
};

const Template = (args) => <Image {...args} />;

const args = {
    imageUrl: '/images/fisherman.jpg',
    altText: 'Image alt text',
    caption: 'Image caption'
};

export const Primary = Template.bind({});
Primary.storyName = 'Image';
Primary.args = { ...args };
