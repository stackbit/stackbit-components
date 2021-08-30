import React from 'react';
import CtaSection from './index';

export default {
    title: 'Components/CtaSection',
    component: CtaSection,
    argTypes: {
        type: { table: { disable: true } },
        variant: {
            options: ['variant-a', 'variant-b'],
            control: { type: 'select' }
        },
        colors: {
            options: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e'],
            control: { type: 'select' }
        },
        width: {
            options: ['narrow', 'wide', 'full'],
            control: { type: 'select' }
        },
        height: {
            options: ['auto', 'viewport'],
            control: { type: 'select' }
        },
        alignHoriz: {
            options: ['left', 'right', 'center'],
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
    height: 'auto',
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
    ]
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
