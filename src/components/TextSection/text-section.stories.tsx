import React from 'react';
import TextSection from './index';

export default {
    title: 'Components/TextSection',
    component: TextSection,
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

const Template = (args) => <TextSection {...args} />;

const args = {
    type: 'TextSection',
    elementId: '',
    colors: 'colors-f',
    backgroundWidth: 'full',
    title: 'The Section Title',
    subtitle: 'The section subtitle',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis undeomnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    styles: {
        self: {
            height: 'auto',
            width: 'wide',
            margin: ['mt-0', 'mb-0'],
            padding: ['pt-10', 'pb-10'],
            alignItems: 'center',
            justifyContent: 'center'
        },
        title: {
            fontWeight: 700,
            fontStyle: 'normal',
            textAlign: 'center'
        },
        subtitle: {
            fontWeight: 400,
            fontStyle: 'normal',
            textAlign: 'center'
        },
        text: {
            textAlign: 'center'
        }
    }
};

export const Primary = Template.bind({});
Primary.storyName = 'Text Section With Wide Centered Content';
Primary.args = args;

export const TextFullLeft = Template.bind({});
TextFullLeft.storyName = 'Text Section With Full Width Left Aligned Content';
TextFullLeft.args = {
    ...args,
    styles: {
        self: {
            height: 'auto',
            width: 'narrow',
            margin: ['mt-0', 'mb-0'],
            padding: ['pt-10', 'pb-10'],
            alignItems: 'center',
            justifyContent: 'center'
        },
        title: {
            fontWeight: 700,
            fontStyle: 'normal',
            textAlign: 'left'
        },
        subtitle: {
            fontWeight: 400,
            fontStyle: 'normal',
            textAlign: 'left'
        },
        text: {
            textAlign: 'left'
        }
    }
};

export const TextNarrowLeftBottom = Template.bind({});
TextNarrowLeftBottom.storyName = 'Screen Height Text Section With Narrow Left Aligned Content';
TextNarrowLeftBottom.args = {
    ...args,
    styles: {
        self: {
            height: 'screen',
            width: 'narrow',
            margin: ['mt-0', 'mb-0'],
            padding: ['pt-10', 'pb-10'],
            alignItems: 'start',
            justifyContent: 'end'
        },
        title: {
            fontWeight: 700,
            fontStyle: 'normal',
            textAlign: 'left'
        },
        subtitle: {
            fontWeight: 400,
            fontStyle: 'normal',
            textAlign: 'left'
        },
        text: {
            textAlign: 'left'
        }
    }
};
