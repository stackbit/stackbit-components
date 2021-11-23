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
    controls: false,
    aspectRatio: '16:9'
};

export const Primary = Template.bind({});
Primary.storyName = '.mp4 video';
Primary.args = { ...args };

export const YouTubeVideo = Template.bind({});
YouTubeVideo.storyName = 'YouTube video';
YouTubeVideo.args = {
    ...args,
    url: 'https://www.youtube.com/watch?v=WBSzKGJER18'
};

export const VimeoVideo = Template.bind({});
VimeoVideo.storyName = 'Vimeo video';
VimeoVideo.args = {
    ...args,
    url: 'https://vimeo.com/310155374'
};
