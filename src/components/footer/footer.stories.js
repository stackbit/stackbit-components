import React from 'react';
import Footer from './index';

export default {
    title: 'Components/Footer',
    component: Footer,
    argTypes: {
        width: {
            options: ['narrow', 'wide', 'full'],
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <Footer {...args} />;

const args = {
    width: 'wide',
    title: 'Fish_of_the_day',
    isTitleVisible: true,
    logoUrl: '/images/logo.svg',
    logoAlt: 'Logo',
    info:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.\n' +
        '\n' +
        'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    contacts: {
        phoneAlt: 'Our phone',
        phoneNumber: '850-123-5021',
        emailAlt: 'Our email',
        email: 'info@lorem.mail',
        addressAlt: 'Our address',
        address: '312 Lovely Street, NY'
    },
    copyrightText: '💖 powered by Stackbit',
    primaryLinks: [
        {
            label: 'About us',
            url: '/about',
            alt: 'About us'
        },
        {
            label: 'Product',
            url: '/',
            alt: 'Product'
        },
        {
            label: 'Features',
            url: '/',
            alt: 'Features'
        },
        {
            label: 'Pricing',
            url: '/',
            alt: 'Pricing'
        }
    ],
    socialLinks: [
        {
            icon: 'twitter',
            url: '/'
        },
        {
            icon: 'instagram',
            url: '/'
        },
        {
            icon: 'facebook',
            url: '/'
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
FooterNoContacts.storyName = 'Footer without contacts';
FooterNoContacts.args = { ...args, contacts: undefined };

//👇 Each story then reuses that template
export const FooterNoLegal = Template.bind({});
FooterNoLegal.storyName = 'Footer without legal links';
FooterNoLegal.args = { ...args, legalLinks: undefined };
