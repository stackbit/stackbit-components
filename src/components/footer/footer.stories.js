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
            label: 'About us',
            url: '/about',
            altText: 'About us'
        },
        {
            label: 'Product',
            url: '/',
            altText: 'Product'
        },
        {
            label: 'Features',
            url: '/',
            altText: 'Features'
        },
        {
            label: 'Pricing',
            url: '/',
            altText: 'Pricing'
        }
    ],
    socialLinks: [
        {
            label: 'Twitter',
            url: '/',
            icon: 'twitter'
        },
        {
            label: 'Instagram',
            url: '/',
            icon: 'instagram',
        },
        {
            label: 'Facebook',
            url: '/',
            icon: 'facebook',
        }
    ],
    legalLinks: [
        {
            label: 'F.A.Q',
            url: '/'
        },
        {
            label: 'Privacy Policy',
            url: '/'
        },
        {
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
