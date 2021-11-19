import React from 'react';
import VideoBlock from './index';

export default {
    title: 'Blocks/VideoBlock',
    component: VideoBlock
};

const Template = (args) => <VideoBlock {...args} />;

const args = {
    type: 'VideoBlock',
    url: 'https://assets.stackbit.com/components/videos/default/stackbit-for-marketers.mp4',
    thumbnailUrl: 'https://assets.stackbit.com/components/images/default/stackbit-for-marketers.jpeg',
    autoplay: true,
    loop: true,
    muted: true,
    controls: false
};

export const Primary = Template.bind({});
Primary.storyName = 'Video';
Primary.args = { ...args };
