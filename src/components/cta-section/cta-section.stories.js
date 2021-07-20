import React from 'react';
import CTASection from './index';

export default {
    title: 'Components/CTA Section',
    component: CTASection,
    argTypes: {
        style: {
            options: ['style-a', 'style-b', 'style-c', 'style-d', 'style-e'],
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
            options: ['left', 'center'],
            control: { type: 'select' }
        },
    }
};

const Template = (args) => <CTASection {...args} />;

const args = {
    type: 'section_cta',
    style: 'style-b',
    width: 'wide',
    height: 'auto',
    alignHoriz: 'center',
    title: 'Let\'s do this',
    description:
        'The Stackbit theme is felxible and scalable to every need. It can manage any layout and any screen',
    actions: [
        {
            url: '#',
            label: 'Get Started',
            type: 'button'
        }
    ]
};

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.storyName = 'Wide, centered';
Primary.args = { ...args, style: 'style-b' };

export const VariantB = Template.bind({});
VariantB.storyName = 'Narrow, left-aligned';
VariantB.args = { ...args, style: 'style-d', width: 'narrow', alignHoriz: 'left' };
