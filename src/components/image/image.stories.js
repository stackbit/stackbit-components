import React from 'react';
import Image from './index';

export default {
    title: 'Atoms/Image',
    component: Image
};

const Template = (args) => <Image {...args} />;

const args = {
    imageUrl: '/images/fisherman.jpg',
    imageAltText: 'Image alt text',
    imageCaption: 'Image caption'
};

export const Primary = Template.bind({});
Primary.storyName = 'Image';
Primary.args = { ...args };
