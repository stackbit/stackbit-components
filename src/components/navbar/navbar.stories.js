import React from 'react';
import NavBar from './navbar';

export default {
    title: 'Components/Navigation Bar',
    component: NavBar,
    argTypes: {
        navBarLinksPosition: {
            options: ['left', 'center', 'right'],
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <NavBar {...args} />;

const args = {
    companyName: 'Stackbit',
    leftLinks: [
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
    rightLinks: [
        {
            label: 'Sign in',
            url: '/',
            style: 'link',
            alt: 'Sign in'
        },
        {
            label: 'Sign up',
            url: '/',
            style: 'button',
            alt: 'Sign up'
        }
    ],
    navBarLinksPosition: 'left'
};

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.storyName = 'Left and right links';
Primary.args = { ...args, navBarLinksPosition: 'left' };

export const VariantB = Template.bind({});
VariantB.storyName = 'Center and right links';
VariantB.args = { ...args, navBarLinksPosition: 'center' };

export const VariantC = Template.bind({});
VariantC.storyName = 'Left links aligned to the right';
VariantC.args = { ...args, navBarLinksPosition: 'right' };

export const VariantD = Template.bind({});
VariantD.storyName = 'Left links empty';
VariantD.args = { ...args, leftLinks: [], rightLinks: args.leftLinks.concat(args.rightLinks), navBarLinksPosition: 'left' };
