import React from 'react';
import CtaSection from './index';

export default {
    title: 'Components/CtaSection',
    component: CtaSection,
    argTypes: {
        type: { table: { disable: true } },
        variant: {
            options: ['variant-a', 'variant-b'],
            defaultValue: 'variant-a',
            control: { type: 'select' }
        },
        colors: {
            options: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e', 'colors-f', 'colors-g', 'colors-h', 'colors-i'],
            defaultValue: 'colors-a',
            control: { type: 'select' }
        },
        width: {
            options: ['wide', 'full'],
            defaultValue: 'wide',
            control: { type: 'select' }
        },
        height: {
            options: ['short', 'tall', 'viewport'],
            defaultValue: 'short',
            control: { type: 'select' }
        },
        topGap: {
            options: ['none', 'small', 'large'],
            defaultValue: 'small',
            control: { type: 'select' }
        },
        bottomGap: {
            options: ['none', 'small', 'large'],
            defaultValue: 'small',
            control: { type: 'select' }
        },
        alignHoriz: {
            options: ['left', 'right', 'center'],
            defaultValue: 'left',
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <CtaSection {...args} />;

const args = {
    type: 'CtaSection',
    variant: 'variant-a',
    colors: 'colors-b',
    width: 'wide',
    height: 'short',
    alignHoriz: 'center',
    title: "Let's do this",
    text: 'The Stackbit theme is flexible and scalable to every need. It can manage any layout and any screen.',
    actions: [
        {
            type: 'Button',
            url: '#',
            label: 'Get Started',
            style: 'primary'
        }
    ],
    backgroundImage: {
        type: 'ImageBlock',
        url: 'https://images.unsplash.com/photo-1483004406427-6acb078d1f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        altText: 'Water',
        caption: '',
        opacity: 50
    }
};

export const Primary = Template.bind({});
Primary.storyName = 'CTA Section With Button at the Bottom';
Primary.args = args;

export const CtaButtonsRight = Template.bind({});
CtaButtonsRight.storyName = 'CTA Section With Buttons on the Right';
CtaButtonsRight.args = {
    ...args,
    variant: 'variant-b',
    colors: 'colors-d',
    alignHoriz: 'left'
};
