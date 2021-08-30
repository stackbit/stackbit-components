import React from 'react';
import NavBar from './index';

export default {
    title: 'Components/NavBar',
    component: NavBar,
    argTypes: {
        desktopNavVariant: {
            options: ['variant-a', 'variant-b', 'variant-c', 'variant-d'],
            control: { type: 'select' }
        },
        mobileNavVariant: {
            options: ['variant-a', 'variant-b'],
            control: { type: 'select' }
        },
        primaryColors: {
            options: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e'],
            control: { type: 'select' }
        },
        secondaryColors: {
            options: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e'],
            control: { type: 'select' }
        },
        width: {
            options: ['narrow', 'wide', 'full'],
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <NavBar {...args} />;

const args = {
    desktopNavVariant: 'variant-a',
    mobileNavVariant: 'variant-a',
    primaryColors: 'colors-d',
    secondaryColors: 'colors-a',
    width: 'wide',
    title: 'Fish_of_the_day',
    isTitleVisible: true,
    logo: {
        type: 'ImageBlock',
        url: '/images/logo.svg',
        altText: 'Logo'
    },
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
    secondaryLinks: [
        {
            type: 'Link',
            label: 'Sign in',
            url: '/',
            altText: 'Sign in'
        },
        {
            type: 'Button',
            label: 'Sign up',
            url: '/',
            altText: 'Sign up',
            style: 'secondary'
        }
    ]
};

export const Primary = Template.bind({});
Primary.storyName = 'Navbar With Logo and Primary Links on the Left';
Primary.args = args;

export const VariantB = Template.bind({});
VariantB.storyName = 'Navbar With Logo on the Left and Primary Links Centered';
VariantB.args = {
    ...args,
    desktopNavVariant: 'variant-b',
    primaryColors: 'colors-a',
    secondaryColors: 'colors-e'
};

export const VariantC = Template.bind({});
VariantC.storyName = 'Navbar With Logo on the Left and Primary Links on the Right';
VariantC.args = {
    ...args,
    desktopNavVariant: 'variant-c',
    mobileNavVariant: 'variant-b',
    primaryColors: 'colors-b',
    secondaryColors: 'colors-e',
    width: 'full',
    logo: null
};

export const VariantD = Template.bind({});
VariantD.storyName = 'Navbar With Logo Centered and Primary Links on the Left';
VariantD.args = {
    ...args,
    desktopNavVariant: 'variant-d',
    mobileNavVariant: 'variant-b',
    primaryColors: 'colors-b',
    secondaryColors: 'colors-b',
    logo: {
        type: 'ImageBlock',
        url: '/images/logo-alt.svg',
        altText: 'The Cook logo'
    },
    isTitleVisible: false
};
