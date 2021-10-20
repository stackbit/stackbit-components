import React from 'react';
import CtaSection from './index';

export default {
    title: 'Components/CtaSection',
    component: CtaSection,
    argTypes: {
        type: { table: { disable: true } },
        elementId: {
            defaultValue: ''
        },
        colors: {
            options: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e', 'colors-f', 'colors-g', 'colors-h', 'colors-i'],
            defaultValue: 'colors-a',
            control: { type: 'select' }
        },
        backgroundWidth: {
            options: ['full', 'inset'],
            defaultValue: 'full',
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <CtaSection {...args} />;

const args = {
    type: 'CtaSection',
    elementId: '',
    colors: 'colors-h',
    backgroundWidth: 'full',
    title: "Let's do this",
    text: 'The Stackbit theme is flexible and scalable to every need. It can manage any layout and any screen.',
    actions: [
        {
            type: 'Button',
            url: '#',
            label: 'Get Started',
            style: 'primary'
        },
        {
            type: 'Button',
            url: '#',
            label: 'Learn more',
            style: 'secondary'
        }
    ],
    backgroundImage: {
        type: 'ImageBlock',
        url: '/images/bg.jpg',
        altText: 'Background image',
        caption: '',
        opacity: 50
    },
    styles: {
        self: {
            height: 'auto',
            width: 'full',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row'
        },
        title: {
            textAlign: 'left'
        },
        text: {
            textAlign: 'left'
        },
        actions: {
            justifyContent: 'start'
        }
    }
};

export const Primary = Template.bind({});
Primary.storyName = 'CTA Section With Actions on the Right';
Primary.args = args;

export const CtaActionsBottom = Template.bind({});
CtaActionsBottom.storyName = 'CTA Section With Actions at the Bottom';
CtaActionsBottom.args = {
    ...args,
    styles: {
        self: {
            height: 'auto',
            width: 'full',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'col'
        },
        title: {
            textAlign: 'center'
        },
        text: {
            textAlign: 'center'
        },
        actions: {
            justifyContent: 'center'
        }
    }
};
