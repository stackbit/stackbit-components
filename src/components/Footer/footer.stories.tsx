import React from 'react';
import Footer from './index';

export default {
    title: 'Components/Footer',
    component: Footer,
    argTypes: {
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

const Template = (args) => <Footer {...args} />;

const args = {
    colors: 'colors-c',
    backgroundWidth: 'full',
    title: 'Starter',
    logo: {
        type: 'ImageBlock',
        url: '/images/logo-alt.svg',
        altText: 'Logo'
    },
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.  \nEaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    contacts: {
        phoneNumber: '850-123-5021',
        phoneAltText: 'Our phone',
        email: 'info@lorem.mail',
        emailAltText: 'Our email',
        address: '312 Lovely Street, NY',
        addressAltText: 'Our address'
    },
    copyrightText: 'Powered by Stackbit',
    primaryLinks: [
        {
            type: 'Link',
            label: 'About us',
            url: '/about'
        },
        {
            type: 'Link',
            label: 'Product',
            url: '/'
        },
        {
            type: 'Link',
            label: 'Features',
            url: '/'
        },
        {
            type: 'Link',
            label: 'Pricing',
            url: '/'
        }
    ],
    socialLinks: [
        {
            type: 'Social',
            altText: 'Twitter',
            url: '/',
            showIcon: true,
            icon: 'twitter'
        },
        {
            type: 'Social',
            altText: 'Instagram',
            url: '/',
            showIcon: true,
            icon: 'instagram'
        },
        {
            type: 'Social',
            altText: 'Facebook',
            url: '/',
            showIcon: true,
            icon: 'facebook'
        }
    ],
    legalLinks: [
        {
            type: 'Link',
            label: 'F.A.Q',
            url: '/'
        },
        {
            type: 'Link',
            label: 'Privacy Policy',
            url: '/'
        },
        {
            type: 'Link',
            label: 'Terms & Conditions',
            url: '/'
        }
    ]
};

export const Primary = Template.bind({});
Primary.storyName = 'Footer';
Primary.args = args;

export const FooterNoContacts = Template.bind({});
FooterNoContacts.storyName = 'Footer Without Contacts';
FooterNoContacts.args = {
    ...args,
    colors: 'colors-c',
    logo: {
        type: 'ImageBlock',
        url: '/images/logo-alt.svg',
        altText: 'Logo'
    },
    contacts: null
};

export const FooterNoLegal = Template.bind({});
FooterNoLegal.storyName = 'Footer Without Legal Links';
FooterNoLegal.args = {
    ...args,
    colors: 'colors-e',
    logo: {
        type: 'ImageBlock',
        url: '/images/logo.svg',
        altText: 'Logo'
    },
    legalLinks: null
};
