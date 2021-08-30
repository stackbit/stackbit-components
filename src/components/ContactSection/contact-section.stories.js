import React from 'react';
import ContactSection from './index';

export default {
    title: 'Components/ContactSection',
    component: ContactSection,
    argTypes: {
        type: { table: { disable: true } },
        variant: {
            options: ['variant-a', 'variant-b'],
            control: { type: 'select' }
        },
        colors: {
            options: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e'],
            control: { type: 'select' }
        },
        width: {
            options: ['narrow', 'wide', 'full'],
            control: { type: 'select' }
        },
        height: {
            options: ['auto', 'viewport'],
            control: { type: 'select' }
        },
        alignHoriz: {
            options: ['left', 'right', 'center'],
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <ContactSection {...args} />;

const args = {
    type: 'ContactSection',
    variant: 'variant-b',
    colors: 'colors-e',
    width: 'wide',
    height: 'auto',
    alignHoriz: 'left',
    title: 'Join our club',
    text: 'We will notify you every time a shipment is heading to your neighborhood, and you could immediatly let us know if you want in or not.',
    image: {
        type: 'ImageBlock',
        url: '/images/lobster.jpg',
        altText: 'Fisherman holding lobster'
    },
    form: {
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
                label: 'Home address',
                placeholder: 'Your home address',
                isRequired: true,
                width: 'full'
            },
            {
                type: 'CheckboxFormControl',
                name: 'updates',
                label: 'Sign me up to receive updates',
                width: 'full'
            }
        ],
        submitLabel: 'Send Message'
    }
};

export const Primary = Template.bind({});
Primary.storyName = 'Contact Section With Left Image';
Primary.args = args;

export const ContactRightImage = Template.bind({});
ContactRightImage.storyName = 'Contact Section With Right Image';
ContactRightImage.args = {
    ...args,
    variant: 'variant-a',
    colors: 'colors-b',
    alignHoriz: 'center',
    title: 'Join our **club**',
    form: {
        type: 'FormBlock',
        idAttr: 'contact-form',
        fields: [
            {
                type: 'TextFormControl',
                name: 'name',
                label: 'Name',
                placeholder: 'Your name',
                isRequired: true,
                width: 'full'
            },
            {
                type: 'EmailFormControl',
                name: 'email',
                label: 'Email',
                placeholder: 'Your email',
                isRequired: true,
                width: 'full'
            },
            {
                type: 'TextFormControl',
                name: 'street-address',
                label: 'Street address',
                placeholder: 'Your street address',
                isRequired: true,
                width: 'full'
            },
            {
                type: 'SelectFormControl',
                name: 'city',
                label: 'City',
                defaultValue: 'Please choose...',
                isRequired: true,
                options: ['City 1', 'City 2'],
                width: 'full'
            },
            {
                type: 'TextareaFormControl',
                name: 'message',
                label: 'Message',
                width: 'full'
            },
            {
                type: 'CheckboxFormControl',
                name: 'updates',
                label: 'Sign me up to receive updates',
                width: 'full'
            }
        ],
        submitLabel: 'Send Message'
    }
};
