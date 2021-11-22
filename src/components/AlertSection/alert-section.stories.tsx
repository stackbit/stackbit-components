import React from 'react';
import AlertSection from './index';

export default {
    title: 'Components/AlertSection',
    component: AlertSection,
    argTypes: {
        type: { table: { disable: true } },
        elementId: {
            defaultValue: ''
        }
    }
};

const Template = (args) => <AlertSection {...args} />;

const args = {
    type: 'AlertSection',
    elementId: '',
    body: 'Join our club'
};

export const Primary = Template.bind({});
Primary.storyName = 'Standard Alert';
Primary.args = args;
