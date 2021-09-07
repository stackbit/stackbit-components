import React from 'react';
import TestimonialsSection from './index';

export default {
    title: 'Components/TestimonialsSection',
    component: TestimonialsSection,
    argTypes: {
        type: { table: { disable: true } },
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

const Template = (args) => <TestimonialsSection {...args} />;

const args = {
    type: 'TestimonialsSection',
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
    alignHoriz: 'center',
    title: 'Testimonials',
    subtitle: 'What our users say'
};
