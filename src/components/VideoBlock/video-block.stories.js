import React from 'react';
import VideoBlock from './index';

export default {
    title: 'Blocks/VideoBlock',
    component: VideoBlock
};

const Template = (args) => <VideoBlock {...args} />;

const args = {
    type: 'VideoBlock',
    url: '/videos/stackbit-for-marketers.mp4',
    thumbnailUrl: '/images/stackbit-for-marketers.jpeg',
    autoplay: true,
    loop: true,
    muted: true,
    controls: false
};

export const Primary = Template.bind({});
Primary.storyName = 'Video';
Primary.args = { ...args };
