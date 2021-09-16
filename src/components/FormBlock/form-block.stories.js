import React from 'react';
import FormBlock from './index';

export default {
    title: 'Blocks/FormBlock',
    component: FormBlock
};

const Template = (args) => <FormBlock {...args} />;

const args = {
    type: 'FormBlock',
    idAttr: 'contact-form',
    fields: [
        {
            type: 'TextFormControl',
            name: 'name',
            label: 'Name',
            placeholder: 'Your name',
            isRequired: true,
            width: '1/2'
        },
        {
            type: 'EmailFormControl',
            name: 'email',
            label: 'Email',
            placeholder: 'Your email',
            isRequired: true,
            width: '1/2'
        },
        {
            type: 'TextFormControl',
            name: 'home-address',
            label: 'Street address',
            placeholder: 'Your street address',
            isRequired: true,
            width: '1/2'
        },
        {
            type: 'SelectFormControl',
            name: 'city',
            label: 'City',
            defaultValue: 'Please choose...',
            isRequired: true,
            options: ['City 1', 'City 2'],
            width: '1/2'
        },
        {
            type: 'TextareaFormControl',
            name: 'message',
            label: 'Message',
            width: 'full'
        },
        {
            type: 'CheckboxFormControl',
            name: 'consent',
            label: 'I understand that this form is storing my submitted information.',
            width: 'full'
        }
    ],
    submitLabel: 'Submit'
};

export const Primary = Template.bind({});
Primary.storyName = 'Form';
Primary.args = { ...args };
