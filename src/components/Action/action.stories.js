import React from 'react';
import Action from './index';

export default {
    title: 'Blocks/ActionBlock',
    component: Action
};

const Template = (args) => <Action {...args} />;

const args = {
    type: 'Button',
    label: 'Stackbit',
    url: 'https://www.stackbit.com',
    altText: 'Stackbit',
    style: 'primary',
    elementId: ''
};

export const Primary = Template.bind({});
Primary.storyName = 'Primary button';
Primary.args = { ...args };

export const ButtonIcon = Template.bind({});
ButtonIcon.storyName = 'Secondary button with icon';
ButtonIcon.args = { ...args, style: 'secondary', icon: 'cart' };

export const LinkIcon = Template.bind({});
LinkIcon.storyName = 'Link with icon';
LinkIcon.args = { ...args, type: 'Link', style: 'link', icon: 'arrowRight' };
