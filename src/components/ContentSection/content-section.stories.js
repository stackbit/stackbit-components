import React from 'react';
import ContentSection from './index';

export default {
    title: 'Components/ContentSection',
    component: ContentSection,
    argTypes: {
        type: { table: { disable: true } },
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

const Template = (args) => <ContentSection {...args} />;

const args = {
    type: 'ContentSection',
    colors: 'colors-a',
    width: 'wide',
    height: 'short',
    alignHoriz: 'left',
    badge: 'Small text',
    title: 'The Section Title',
    subtitle: 'The section subtitle',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis undeomnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
};

export const Primary = Template.bind({});
Primary.storyName = 'Content Section';
Primary.args = args;

export const Secondary = Template.bind({});
Secondary.storyName = 'Centered Content Section';
Secondary.args = {
    ...args,
    colors: 'colors-c',
    width: 'full',
    alignHoriz: 'center'
};
