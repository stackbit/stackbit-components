import React from 'react';
import ContentSection from './index';

export default {
    title: 'Components/ContentSection',
    component: ContentSection,
    argTypes: {
        type: { table: { disable: true } },
        colors: {
            options: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e'],
            control: { type: 'select' }
        },
        width: {
            options: ['narrow', 'wide', 'full'],
            control: { type: 'select' }
        },
        height: {
            options: ['auto', 'viewport'],
            control: { type: 'select' }
        },
        alignHoriz: {
            options: ['left', 'right', 'center'],
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <ContentSection {...args} />;

const args = {
    type: 'ContentSection',
    colors: 'colors-b',
    width: 'wide',
    height: 'auto',
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
    colors: 'colors-d',
    alignHoriz: 'center'
};
