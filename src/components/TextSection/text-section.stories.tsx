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

const Template = (args) => <TextSection {...args} />;

const args = {
    type: 'TextSection',
    elementId: '',
    colors: 'colors-e',
    width: 'wide',
    height: 'short',
    topGap: 'medium',
    bottomGap: 'medium',
    contentWidth: 'small',
    contentAlignHoriz: 'center',
    contentAlignVert: 'middle',
    title: 'The Section Title',
    subtitle: 'The section subtitle',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis undeomnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    styles: {
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

export const Primary = Template.bind({});
Primary.storyName = 'Wide Short Text Section';
Primary.args = {
    ...args,
    styles: {
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

export const Secondary = Template.bind({});
Secondary.storyName = 'Full Bleed Tall Text Section';
Secondary.args = {
    ...args,
    colors: 'colors-i',
    width: 'full',
    height: 'tall',
    topGap: 'none',
    bottomGap: 'none',
    contentWidth: 'medium',
    contentAlignHoriz: 'left',
    contentAlignVert: 'bottom'
};

export const Tertiary = Template.bind({});
Tertiary.storyName = 'Full Bleed Viewport Height Text Section';
Tertiary.args = {
    ...args,
    colors: 'colors-h',
    width: 'full',
    height: 'screen',
    topGap: 'none',
    bottomGap: 'none',
    contentWidth: 'small',
    contentAlignHoriz: 'right',
    contentAlignVert: 'top'
};
