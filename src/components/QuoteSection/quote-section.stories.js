import React from 'react';
import QuoteSection from './index';

export default {
    title: 'Components/QuoteSection',
    component: QuoteSection,
    argTypes: {
        type: { table: { disable: true } },
        colors: {
            options: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e', 'colors-f', 'colors-g', 'colors-h', 'colors-i'],
            defaultValue: 'colors-a',
            control: { type: 'select' }
        },
        elementId: {
            defaultValue: ''
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

const Template = (args) => <QuoteSection {...args} />;

const args = {
    type: 'QuoteSection',
    colors: 'colors-c',
    elementId: '',
    width: 'wide',
    height: 'short',
    alignHoriz: 'left',
    quote: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis undeomnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    name: 'Isabelle Parks',
    title: 'Head chef at The Cook',
    backgroundImage: {
        type: 'ImageBlock',
        url: '/images/water.jpg',
        altText: 'Water',
        caption: '',
        opacity: 40
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
    height: 'viewport',
    alignHoriz: 'center',
    backgroundImage: null
};
