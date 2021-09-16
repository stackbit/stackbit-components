import React from 'react';
import Badge from './index';

export default {
    title: 'Blocks/Badge',
    component: Badge
};

const Template = (args) => <Badge {...args} />;

const args = {
    label: 'Stackbit',
    elementId: ''
};

export const Primary = Template.bind({});
Primary.storyName = 'Badge';
Primary.args = { ...args };
