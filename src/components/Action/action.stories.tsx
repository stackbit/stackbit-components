import React from 'react';
import Action from './index';

export default {
    title: 'Blocks/ActionBlock',
    component: Action
};

const Template = (args) => <Action {...args} />;

const args = {
    label: 'Stackbit',
    altText: 'Stackbit',
    url: 'https://www.stackbit.com',
    style: 'primary'
};

export const Primary = Template.bind({});
Primary.storyName = 'Primary button';
Primary.args = { ...args };

export const ButtonIcon = Template.bind({});
ButtonIcon.storyName = 'Primary button with icon';
ButtonIcon.args = {
    ...args,
    showIcon: true,
    icon: 'arrowRight',
    iconPosition: 'right'
};

export const ButtonIconOnly = Template.bind({});
ButtonIconOnly.storyName = 'Secondary button with icon only';
ButtonIconOnly.args = {
    ...args,
    label: null,
    altText: 'Cart',
    showIcon: true,
    icon: 'cart',
    iconPosition: 'right',
    style: 'secondary'
};

export const LinkIcon = Template.bind({});
LinkIcon.storyName = 'Link with icon';
LinkIcon.args = {
    ...args,
    showIcon: true,
    icon: 'arrowLeft',
    iconPosition: 'left',
    style: 'link'
};
