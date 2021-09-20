import React from 'react';
import ContactSection from './index';

export default {
    title: 'Components/ContactSection',
    component: ContactSection,
    argTypes: {
        type: { table: { disable: true } },
        elementId: {
            defaultValue: ''
        },
        variant: {
            options: ['variant-a', 'variant-b'],
            defaultValue: 'variant-a',
            control: { type: 'select' }
        },
        colors: {
            options: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e', 'colors-f', 'colors-g', 'colors-h', 'colors-i'],
            defaultValue: 'colors-a',
            control: { type: 'select' }
        },
        width: {
            options: ['wide', 'full'],
            defaultValue: 'wide',
            control: { type: 'select' }
        },
        height: {
            options: ['short', 'tall', 'viewport'],
            defaultValue: 'short',
            control: { type: 'select' }
        },
        topGap: {
            options: ['none', 'small', 'medium', 'large'],
            defaultValue: 'medium',
            control: { type: 'select' }
        },
        bottomGap: {
            options: ['none', 'small', 'medium', 'large'],
            defaultValue: 'medium',
            control: { type: 'select' }
        },
        contentWidth: {
            options: ['small', 'medium', 'large'],
            defaultValue: 'large',
            control: { type: 'select' }
        },
        contentAlignHoriz: {
            options: ['left', 'center', 'right'],
            defaultValue: 'left',
            control: { type: 'select' }
        },
        contentAlignVert: {
            options: ['top', 'middle', 'bottom'],
            defaultValue: 'middle',
            control: { type: 'select' }
        },
        textAlign: {
            options: ['left', 'center', 'right'],
            defaultValue: 'left',
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <ContactSection {...args} />;

const args = {
    type: 'ContactSection',
    elementId: '',
    variant: 'variant-b',
    colors: 'colors-e',
    width: 'wide',
    height: 'short',
    topGap: 'none',
    bottomGap: 'none',
    contentWidth: 'large',
    contentAlignHoriz: 'center',
    contentAlignVert: 'middle',
    textAlign: 'left',
    title: 'Join our club',
    text: 'We will notify you every time a shipment is heading to your neighborhood, and you could immediatly let us know if you want in or not.',
    feature: {
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
    colors: 'colors-h',
    textAlign: 'center',
    title: 'Join our **club**'
};
