import React from 'react';
import Video from './index';

export default {
    title: 'Atoms/Video',
    component: Video
};

const Template = (args) => <Video {...args} />;

const args = {
    type: 'video',
    videoUrl: '/videos/stackbit-for-marketers.mp4',
    posterUrl: '/images/stackbit-for-marketers.jpg',
    controls: true
};

export const Primary = Template.bind({});
Primary.storyName = 'Video';
Primary.args = { ...args };
