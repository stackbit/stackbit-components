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
        }
    }
};

const Template = (args) => <QuoteSection {...args} />;

const args = {
    type: 'QuoteSection',
    elementId: '',
    colors: 'colors-c',
    quote: '“A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.”',
    name: 'Antoine de Saint-Exupéry',
    title: 'Writer',
    backgroundImage: {
        type: 'ImageBlock',
        url: 'https://assets.stackbit.com/components/images/default/bg.jpg',
        altText: 'Background Image',
        caption: '',
        styles: {
            self: {
                opacity: 50
            }
        }
    },
    styles: {
        self: {
            height: 'auto',
            width: 'wide',
            margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0'],
            padding: ['pt-16', 'pb-16', 'pl-4', 'pr-4'],
            justifyContent: 'center',
            borderRadius: 'none',
            borderWidth: 0,
            borderStyle: 'none',
            borderColor: 'border-dark'
        },
        quote: {
            textAlign: 'left'
        },
        name: {
            fontWeight: 400,
            fontStyle: 'normal',
            textAlign: 'left'
        },
        title: {
            fontWeight: 400,
            fontStyle: 'normal',
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
            margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0'],
            padding: ['pt-16', 'pb-16', 'pl-4', 'pr-4'],
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'none',
            borderWidth: 0,
            borderStyle: 'none',
            borderColor: 'border-dark'
        },
        quote: {
            textAlign: 'center'
        },
        name: {
            fontWeight: 400,
            fontStyle: 'normal',
            textAlign: 'center'
        },
        title: {
            fontWeight: 400,
            fontStyle: 'normal',
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
            margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0'],
            padding: ['pt-16', 'pb-16', 'pl-4', 'pr-4'],
            alignItems: 'center',
            justifyContent: 'flex-start',
            borderRadius: 'none',
            borderWidth: 0,
            borderStyle: 'none',
            borderColor: 'border-dark'
        },
        quote: {
            textAlign: 'left'
        },
        name: {
            fontWeight: 400,
            fontStyle: 'normal',
            textAlign: 'left'
        },
        title: {
            fontWeight: 400,
            fontStyle: 'normal',
            textAlign: 'left'
        }
    }
};
