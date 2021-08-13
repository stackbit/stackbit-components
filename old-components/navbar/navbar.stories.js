import React from 'react';
import NavBar from './index';

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
    rightLinks: [
        {
            label: 'Sign in',
            url: '/',
            style: 'link',
            altText: 'Sign in'
        },
        {
            label: 'Sign up',
            url: '/',
            style: 'button',
            altText: 'Sign up'
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
