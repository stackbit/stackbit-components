import React from 'react';
import Badge from './index';

export default {
    title: 'Blocks/Badge',
    component: Badge,
    argTypes: {
        type: { table: { disable: true } },
        label: {
            defaultValue: 'Stackbit'
        }
    }
};

const Template = (args) => <Badge {...args} />;

const args = {
    type: 'Badge',
    label: 'Stackbit',
    elementId: ''
};

export const Primary = Template.bind({});
Primary.storyName = 'Default';
Primary.args = { ...args };
