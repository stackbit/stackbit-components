import React from 'react';
import ContactSection from './index';

export default {
    title: 'Components/Contact Section',
    component: ContactSection,
    argTypes: {
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
            options: ['left', 'center'],
            control: { type: 'select' }
        },
        imagePosition: {
            options: ['left', 'right'],
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <ContactSection {...args} />;

const args = {
    type: 'contact_section',
    variant: 'variant-b',
    colors: 'colors-e',
    width: 'wide',
    height: 'auto',
    alignHoriz: 'left',
    title: 'Join our club',
    text: 'We will notify you every time a shipment is heading to your neighborhood, and you could immediatly let us know if you want in or not.',
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
        }
    ],
    submitLabel: 'Send Message'
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
    formFields: [
        {
            type: 'text',
            name: 'name',
            label: 'Name',
            defaultValue: 'Your name',
            isRequired: true,
            width: 'full'
        },
        {
            type: 'email',
            name: 'email',
            label: 'Email',
            defaultValue: 'Your email',
            isRequired: true,
            width: 'full'
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
        }
    ],
};
