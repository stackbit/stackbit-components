import React from 'react';
import NavBar from './index';

export default {
    title: 'Components/Navigation Bar',
    component: NavBar,
    argTypes: {
        primaryStyle: {
            options: ['style-a', 'style-b', 'style-c', 'style-d', 'style-e'],
            control: { type: 'select' }
        },
        secondaryStyle: {
            options: ['style-a', 'style-b', 'style-c', 'style-d', 'style-e'],
            control: { type: 'select' }
        },
        width: {
            options: ['narrow', 'wide', 'full'],
            control: { type: 'select' }
        },
        desktopNavVariant: {
            options: ['variant-a', 'variant-b', 'variant-c', 'variant-d'],
            control: { type: 'select' }
        },
        mobileNavVariant: {
            options: ['variant-a', 'variant-b'],
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <NavBar {...args} />;

const args = {
    primaryStyle: 'style-a',
    secondaryStyle: 'style-a',
    desktopNavVariant: 'variant-a',
    mobileNavVariant: 'variant-a',
    width: 'wide',
    title: 'Fish_of_the_day',
    isTitleVisible: true,
    logoUrl: '/images/logo.svg',
    logoAlt: 'Logo',
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
    secondaryLinks: [
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
    ]
};

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.storyName = 'Logo on the left, primary links on the left';
Primary.args = { ...args, desktopNavVariant: 'variant-a' };

export const VariantB = Template.bind({});
VariantB.storyName = 'Logo on the left, primary links centered, mobile nav alt';
VariantB.args = { ...args, desktopNavVariant: 'variant-b', mobileNavVariant: 'variant-b' };

export const VariantC = Template.bind({});
VariantC.storyName = 'Logo on the left, primary links on the right';
VariantC.args = { ...args, desktopNavVariant: 'variant-c' };

export const VariantD = Template.bind({});
VariantD.storyName = 'Logo centered, primary links on the left, mobile nav alt';
VariantD.args = { ...args, desktopNavVariant: 'variant-d', mobileNavVariant: 'variant-b' };
