import React from 'react';
import FormSection from './index';

export default {
    title: 'Components/Form Section',
    component: FormSection,
    argTypes: {
        width: {
            options: ['narrow', 'wide', 'full'],
            control: { type: 'select' }
        },
        height: {
            options: ['auto', 'viewport'],
            control: { type: 'select' }
        },
        alignHoriz: {
            options: ['left', 'center'],
            control: { type: 'select' }
        },
        imagePosition: {
            options: ['left', 'right'],
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <FormSection {...args} />;

const args = {
    type: 'section_form',
    width: 'wide',
    height: 'auto',
    alignHoriz: 'left',
    title: 'Join our club',
    description: 'We will notify you every time a shipment is heading to your neighborhood, and you could immediatly let us know if you want in or not.',
    imageUrl: '/images/lobster.jpg',
    imageAlt: 'Fisherman holding lobster',
    imagePosition: 'left',
    formId: 'contact-form',
    formFields: [
        {
            type: 'text',
            name: 'name',
            label: 'Name',
            defaultValue: 'Your name',
            isRequired: true,
            width: '1/2'
        },
        {
            type: 'email',
            name: 'email',
            label: 'Email',
            defaultValue: 'Your email',
            isRequired: true,
            width: '1/2'
        },
        {
            type: 'text',
            name: 'home-address',
            label: 'Home address',
            defaultValue: 'Your home address',
            isRequired: true,
            width: 'full'
        },
        {
            type: 'checkbox',
            name: 'updates',
            label: 'Sign me up to recieve updates',
            width: 'full'
        },
    ],
    submitLabel: 'Send Message'
};

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.storyName = 'Form with left image';
Primary.args = { ...args, imagePosition: 'left' };

export const VariantB = Template.bind({});
VariantB.storyName = 'Form with right image, centered';
VariantB.args = { ...args, imagePosition: 'right', alignHoriz: 'center' };
