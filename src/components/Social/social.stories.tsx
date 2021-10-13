import React from 'react';
import Social from './index';

export default {
    title: 'Blocks/Social',
    component: Social
};

const Template = (args) => <Social {...args} />;

const args = {
    type: 'Social',
    label: 'Facebook',
    altText: 'Facebook',
    url: '#',
    showIcon: true,
    icon: 'facebook',
    style: 'primary'
};

export const Primary = Template.bind({});
Primary.storyName = 'Facebook button with text and icon';
Primary.args = { ...args };

export const SocialIconOnly = Template.bind({});
SocialIconOnly.storyName = 'Facebook link with icon only';
SocialIconOnly.args = {
    ...args,
    label: null,
    altText: 'Join us on Facebook',
    style: 'link'
};
