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
        colors: {
            options: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e', 'colors-f', 'colors-g', 'colors-h', 'colors-i'],
            defaultValue: 'colors-a',
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <ContactSection {...args} />;

const args = {
    type: 'ContactSection',
    elementId: '',
    colors: 'colors-h',
    title: 'Join our club',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    media: {
        type: 'ImageBlock',
        url: 'https://assets.stackbit.com/components/images/default/contact.png',
        altText: 'Contact section image'
    },
    form: {
        type: 'FormBlock',
        elementId: 'contact-form',
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
                type: 'SelectFormControl',
                name: 'city',
                label: 'City',
                defaultValue: 'Please choose...',
                isRequired: true,
                options: ['City 1', 'City 2'],
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
    },
    styles: {
        self: {
            height: 'auto',
            width: 'wide',
            margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0'],
            padding: ['pt-12', 'pb-12', 'pl-4', 'pr-4'],
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            borderRadius: 'none',
            borderWidth: 0,
            borderStyle: 'none',
            borderColor: 'border-dark'
        },
        title: {
            textAlign: 'left'
        },
        text: {
            textAlign: 'left'
        }
    }
};

export const Primary = Template.bind({});
Primary.storyName = 'Contact Section With Image on the Right';
Primary.args = args;

export const ContactVideoLeft = Template.bind({});
ContactVideoLeft.storyName = 'Contact Section With Video on the Left';
ContactVideoLeft.args = {
    ...args,
    media: {
        type: 'VideoBlock',
        url: 'https://assets.stackbit.com/components/videos/default/stackbit-for-marketers.mp4',
        thumbnailUrl: 'https://assets.stackbit.com/components/images/default/stackbit-for-marketers.jpeg',
        autoplay: true,
        loop: true,
        muted: true,
        controls: false
    },
    styles: {
        self: {
            height: 'auto',
            width: 'wide',
            margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0'],
            padding: ['pt-12', 'pb-12', 'pl-4', 'pr-4'],
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row-reverse',
            borderRadius: 'none',
            borderWidth: 0,
            borderStyle: 'none',
            borderColor: 'border-dark'
        },
        title: {
            textAlign: 'left'
        },
        text: {
            textAlign: 'left'
        }
    }
};
