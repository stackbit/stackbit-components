import React from 'react';
import Footer from './footer';

export default {
    title: 'Components/Footer',
    component: Footer,
    args: {
        companyName: 'Stackbit',
        companyInfo:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.\n' +
            '\n' +
            'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        companyContacts: {
            title: 'Contacts',
            phoneLabel: 'Phone:',
            phoneAlt: 'Our phone',
            phoneNumber: '850-123-5021',
            emailLabel: 'Email:',
            emailAlt: 'Our email',
            email: 'info@lorem.mail',
            addressLabel: 'Address:',
            addressAlt: 'Our address',
            address: '312 Lovely Street, NY'
        },
        copyrightText: '© Copyright 2020 Lorem Inc. All rights reserved.',
        companySocial: {
            title: 'Social',
            description: 'Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken spare ribs salami.',
            links: [
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
            ]
        },
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
    }
};

const Template = (args) => <Footer {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.storyName = 'Footer';
