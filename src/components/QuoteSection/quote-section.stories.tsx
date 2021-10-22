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
        backgroundWidth: {
            options: ['full', 'inset'],
            defaultValue: 'full',
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <QuoteSection {...args} />;

const args = {
    type: 'QuoteSection',
    elementId: '',
    colors: 'colors-c',
    backgroundWidth: 'full',
    quote: '“A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.”',
    name: 'Antoine de Saint-Exupéry',
    title: 'Writer',
    backgroundImage: {
        type: 'ImageBlock',
        url: '/images/bg.jpg',
        altText: 'Background Image',
        caption: '',
        opacity: 20
    },
    styles: {
        self: {
            height: 'auto',
            width: 'full',
            alignItems: 'center',
            justifyContent: 'center'
        },
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
Primary.storyName = 'Quote Section With Full Width Left Aligned Content';
Primary.args = args;

export const QuoteWideCentered = Template.bind({});
QuoteWideCentered.storyName = 'Quote Section With Wide Centered Content';
QuoteWideCentered.args = {
    ...args,
    styles: {
        self: {
            height: 'auto',
            width: 'wide',
            alignItems: 'center',
            justifyContent: 'center'
        },
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

export const QuoteNarrowLeftBottom = Template.bind({});
QuoteNarrowLeftBottom.storyName = 'Screen Height Quote Section With Narrow Left aligned Content';
QuoteNarrowLeftBottom.args = {
    ...args,
    styles: {
        self: {
            height: 'screen',
            width: 'narrow',
            alignItems: 'start',
            justifyContent: 'end'
        },
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
