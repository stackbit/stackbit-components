import React from 'react';
import QuoteSection from './index';

export default {
    title: 'Components/QuoteSection',
    component: QuoteSection,
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
        }
    }
};

const Template = (args) => <QuoteSection {...args} />;

const args = {
    type: 'QuoteSection',
    elementId: '',
    colors: 'colors-c',
    width: 'wide',
    height: 'tall',
    topGap: 'none',
    bottomGap: 'none',
    contentWidth: 'small',
    contentAlignHoriz: 'left',
    contentAlignVert: 'bottom',
    quote: '“A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away”',
    name: 'Antoine de Saint-Exupéry',
    title: 'Writer',
    backgroundImage: {
        type: 'ImageBlock',
        url: '/images/bg.jpg',
        altText: 'Background Image',
        caption: '',
        opacity: 50
    },
    styles: {
        quote: {
            textAlign: 'left'
        },
        name: {
            textAlign: 'left'
        },
        title: {
            textAlign: 'left'
        }
    }
};

export const Primary = Template.bind({});
Primary.storyName = 'Quote Section';
Primary.args = args;

export const Secondary = Template.bind({});
Secondary.storyName = 'Centered Quote Section';
Secondary.args = {
    ...args,
    colors: 'colors-d',
    width: 'full',
    height: 'screen',
    contentWidth: 'medium',
    contentAlignHoriz: 'center',
    contentAlignVert: 'middle',
    backgroundImage: null,
    styles: {
        quote: {
            textAlign: 'center'
        },
        name: {
            textAlign: 'center'
        },
        title: {
            textAlign: 'center'
        }
    }
};
