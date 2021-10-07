import React from 'react';
import VideoBlock from './index';

export default {
    title: 'Blocks/VideoBlock',
    component: VideoBlock
};

const Template = (args) => <VideoBlock {...args} />;

const args = {
    type: 'VideoBlock',
    videoUrl: '/videos/stackbit-for-marketers.mp4',
    videoThumbnailUrl: '/images/stackbit-for-marketers.jpg',
    controls: true,
    elementId: ''
};

export const Primary = Template.bind({});
Primary.storyName = 'Video';
Primary.args = { ...args };
