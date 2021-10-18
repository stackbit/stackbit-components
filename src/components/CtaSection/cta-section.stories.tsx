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
        width: {
            options: ['wide', 'full'],
            defaultValue: 'wide',
            control: { type: 'select' }
        },
        height: {
            options: ['short', 'tall', 'screen'],
            defaultValue: 'short',
            control: { type: 'select' }
        },
        topGap: {
            options: ['none', 'small', 'medium', 'large'],
            defaultValue: 'medium',
            control: { type: 'select' }
        },
        bottomGap: {
            options: ['none', 'small', 'medium', 'large'],
            defaultValue: 'medium',
            control: { type: 'select' }
        },
        contentWidth: {
            options: ['small', 'medium', 'large'],
            defaultValue: 'large',
            control: { type: 'select' }
        },
        contentAlignHoriz: {
            options: ['left', 'center', 'right'],
            defaultValue: 'left',
            control: { type: 'select' }
        },
        contentAlignVert: {
            options: ['top', 'middle', 'bottom'],
            defaultValue: 'middle',
            control: { type: 'select' }
        },
        actionsPosition: {
            options: ['right', 'bottom'],
            defaultValue: 'right',
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <CtaSection {...args} />;

const args = {
    type: 'CtaSection',
    elementId: '',
    colors: 'colors-h',
    height: 'short',
    topGap: 'none',
    bottomGap: 'none',
    contentWidth: 'large',
    contentAlignHoriz: 'center',
    contentAlignVert: 'middle',
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
    actionsPosition: 'right',
    styles: {
        title: {
            textAlign: 'left'
        },
        text: {
            textAlign: 'left'
        },
        actions: {
            textAlign: 'left'
        }
    }
};

export const Primary = Template.bind({});
Primary.storyName = 'CTA Section With Button on the Right';
Primary.args = args;

export const CtaButtonsRight = Template.bind({});
CtaButtonsRight.storyName = 'CTA Section With Buttons at the Bottom';
CtaButtonsRight.args = {
    ...args,
    colors: 'colors-c',
    width: 'full',
    contentWidth: 'medium',
    actionsPosition: 'bottom',
    backgroundImage: {
        type: 'ImageBlock',
        url: '/images/bg.jpg',
        altText: 'Background image',
        caption: '',
        opacity: 50
    },
    styles: {
        title: {
            textAlign: 'center'
        },
        text: {
            textAlign: 'center'
        },
        actions: {
            textAlign: 'center'
        }
    }
};
