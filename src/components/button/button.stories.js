import React from 'react';
import Button from './index';

export default {
    title: 'Atoms/Button',
    component: Button
};

const Template = (args) => <Button {...args} />;

const args = {
    label: 'Stackbit',
    url: 'https://www.stackbit.com',
    alt: 'Stackbit'
};

export const Primary = Template.bind({});
Primary.storyName = 'Button';
Primary.args = { ...args };

export const ButtonIcon = Template.bind({});
ButtonIcon.storyName = 'Button with icon';
ButtonIcon.args = { ...args, icon: 'cart' };
