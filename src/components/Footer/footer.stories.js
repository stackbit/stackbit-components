import React from 'react';
import Footer from './index';

export default {
    title: 'Components/Footer',
    component: Footer,
    argTypes: {
        colors: {
            options: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e'],
            control: { type: 'select' }
        },
        width: {
            options: ['narrow', 'wide', 'full'],
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <Footer {...args} />;

const args = {
    colors: 'colors-d',
    width: 'wide',
    title: 'Fish_of_the_day',
    isTitleVisible: true,
    logoUrl: '/images/logo.svg',
    logoAltText: 'Logo',
    text:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.  \nEaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    contacts: {
        phoneNumber: '850-123-5021',
        phoneAltText: 'Our phone',
        email: 'info@lorem.mail',
        emailAltText: 'Our email',
        address: '312 Lovely Street, NY',
        addressAltText: 'Our address'
    },
    copyrightText: '💖 powered by Stackbit',
    primaryLinks: [
        {
            type: 'Link',
            label: 'About us',
            url: '/about',
            altText: 'About us'
        },
        {
            type: 'Link',
            label: 'Product',
            url: '/',
            altText: 'Product'
        },
        {
            type: 'Link',
            label: 'Features',
            url: '/',
            altText: 'Features'
        },
        {
            type: 'Link',
            label: 'Pricing',
            url: '/',
            altText: 'Pricing'
        }
    ],
    socialLinks: [
        {
            type: 'Link',
            label: 'Twitter',
            url: '/',
            icon: 'twitter'
        },
        {
            type: 'Link',
            label: 'Instagram',
            url: '/',
            icon: 'instagram',
        },
        {
            type: 'Link',
            label: 'Facebook',
            url: '/',
            icon: 'facebook',
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
    colors: 'colors-b',
    width: 'full',
    logoUrl: '/images/logo-alt.svg',
    contacts: null
};

export const FooterNoLegal = Template.bind({});
FooterNoLegal.storyName = 'Footer Without Legal Links';
FooterNoLegal.args = {
    ...args,
    colors: 'colors-e',
    legalLinks: null
};