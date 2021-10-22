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
            alignItems: 'center',
            justifyContent: 'center'
        },
        title: {
            textAlign: 'center'
        },
        subtitle: {
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
            width: 'full',
            alignItems: 'center',
            justifyContent: 'center'
        },
        title: {
            textAlign: 'left'
        },
        subtitle: {
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
            alignItems: 'start',
            justifyContent: 'end'
        },
        title: {
            textAlign: 'left'
        },
        subtitle: {
            textAlign: 'left'
        },
        text: {
            textAlign: 'left'
        }
    }
};
