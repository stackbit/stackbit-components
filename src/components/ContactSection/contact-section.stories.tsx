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
        },
        backgroundWidth: {
            options: ['full', 'inset'],
            defaultValue: 'full',
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <ContactSection {...args} />;

const args = {
    type: 'ContactSection',
    elementId: '',
    colors: 'colors-h',
    backgroundWidth: 'full',
    title: 'Join our club',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    feature: {
        type: 'ImageBlock',
        url: '/images/contact.png',
        altText: 'Contact Image'
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
            margin: ['mt-0', 'mb-0'],
            padding: ['pt-10', 'pb-10'],
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row'
        },
        title: {
            fontWeight: 700,
            fontStyle: 'normal',
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
    feature: {
        type: 'VideoBlock',
        url: '/videos/stackbit-for-marketers.mp4',
        thumbnailUrl: '/images/stackbit-for-marketers.jpeg',
        autoplay: true,
        loop: true,
        muted: true,
        controls: false
    },
    styles: {
        self: {
            height: 'auto',
            width: 'wide',
            margin: ['mt-0', 'mb-0'],
            padding: ['pt-10', 'pb-10'],
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row-reverse'
        },
        title: {
            fontWeight: 700,
            fontStyle: 'normal',
            textAlign: 'left'
        },
        text: {
            textAlign: 'left'
        }
    }
};
