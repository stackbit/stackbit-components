import React from 'react';
import TestimonialsSection from './index';

export default {
    title: 'Components/TestimonialsSection',
    component: TestimonialsSection,
    argTypes: {
        type: { table: { disable: true } },
        elementId: {
            defaultValue: ''
        },
        variant: {
            options: ['variant-a', 'variant-b'],
            defaultValue: 'variant-a',
            control: { type: 'select' }
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
            options: ['short', 'tall', 'viewport'],
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
        },
        textAlign: {
            options: ['left', 'center', 'right'],
            defaultValue: 'left',
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <TestimonialsSection {...args} />;

const args = {
    type: 'TestimonialsSection',
    elementId: '',
    variant: 'variant-a',
    colors: 'colors-e',
    width: 'wide',
    height: 'short',
    testimonials: [
        {
            quote: '“It’s great to see someone taking action while still maintaining a sustainable fish supply to home cooks.”',
            name: 'Isabelle Parks',
            title: 'Head chef at The Cook',
            image: {
                type: 'ImageBlock',
                url: '/images/isabelle-parks.jpg',
                altText: 'Photo of Isabelle Parks'
            },
            logo: {
                type: 'ImageBlock',
                url: '/images/the-cook-logo.svg',
                altText: 'The Cook logo'
            }
        }
    ]
};

export const Primary = Template.bind({});
Primary.storyName = 'Quote Above Image';
Primary.args = args;

export const VariantB = Template.bind({});
VariantB.storyName = 'Quote to the Right of the Image';
VariantB.args = {
    ...args,
    variant: 'variant-b',
    colors: 'colors-f',
    width: 'full',
    textAlign: 'center',
    title: 'Testimonials',
    subtitle: 'What our users say'
};
