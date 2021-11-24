import React from 'react';
import Header from './index';

export default {
    title: 'Components/Header',
    component: Header,
    argTypes: {
        headerVariant: {
            options: ['variant-a', 'variant-b', 'variant-c', 'variant-d', 'variant-e'],
            defaultValue: 'variant-a',
            control: { type: 'select' }
        },
        primaryColors: {
            options: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e', 'colors-f', 'colors-g', 'colors-h', 'colors-i'],
            defaultValue: 'colors-a',
            control: { type: 'select' }
        },
        secondaryColors: {
            options: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e', 'colors-f', 'colors-g', 'colors-h', 'colors-i'],
            defaultValue: 'colors-a',
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <Header {...args} />;

const args = {
    headerVariant: 'variant-a',
    primaryColors: 'colors-a',
    secondaryColors: 'colors-h',
    title: 'Starter',
    isTitleVisible: true,
    logo: {
        type: 'ImageBlock',
        url: 'https://assets.stackbit.com/components/images/default/logo.svg',
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
            type: 'Button',
            label: 'Sign up',
            url: '/',
            altText: 'Sign up',
            style: 'secondary'
        }
    ],
    styles: {
        self: {
            width: 'full',
            padding: ['pt-5', 'pb-5', 'pl-4', 'pr-4']
        }
    }
};

export const Primary = Template.bind({});
Primary.storyName = 'Header With Logo and Primary Links on the Left';
Primary.args = args;

export const VariantB = Template.bind({});
VariantB.storyName = 'Header With Logo on the Left and Primary Links Centered';
VariantB.args = {
    ...args,
    headerVariant: 'variant-b'
};

export const VariantC = Template.bind({});
VariantC.storyName = 'Header With Logo on the Left and Primary Links on the Right';
VariantC.args = {
    ...args,
    headerVariant: 'variant-c'
};

export const VariantD = Template.bind({});
VariantD.storyName = 'Header With Logo Centered and Primary Links on the Left';
VariantD.args = {
    ...args,
    headerVariant: 'variant-d'
};

export const VariantE = Template.bind({});
VariantE.storyName = 'Header With Logo and Primary Links Centered';
VariantE.args = {
    ...args,
    headerVariant: 'variant-e'
};
