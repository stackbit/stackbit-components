import React from 'react';
import Action from './index';

export default {
    title: 'Blocks/ActionBlock',
    component: Action,
    argTypes: {
        type: { table: { disable: true } },
        elementId: {
            defaultValue: ''
        },
        showIcon: {
            defaultValue: false,
            control: { type: 'boolean' }
        },
        icon: {
            options: ['apple', 'arrowRight', 'arrowLeft', 'cart', 'facebook', 'github', 'googlePlay', 'instagram', 'linkedin', 'play', 'twitter'],
            defaultValue: 'arrowRight',
            control: { type: 'select' }
        },
        iconPosition: {
            options: ['left', 'right'],
            defaultValue: 'right',
            control: { type: 'select' }
        }
    }
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
