import React from 'react';
import TestimonialsSection from './index';

export default {
    title: 'Components/Testimonials Section',
    component: TestimonialsSection,
    argTypes: {
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
        testimonialVariant: {
            options: ['variant-a', 'variant-b'],
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <TestimonialsSection {...args} />;

const args = {
    type: 'TestimonialsSection',
    colors: 'colors-e',
    width: 'wide',
    height: 'auto',
    testimonialVariant: 'variant-a',
    testimonials: [
        {
            quote: '“It’s great to see someone taking action while still maintaining a sustainable fish supply to home cooks.”',
            name: 'Isabelle Parks',
            title: 'Head chef at The Cook',
            imageUrl: '/images/isabelle-parks.jpg',
            imageAltText: 'Photo of Isabelle Parks',
            logoUrl: '/images/the-cook-logo.svg',
            logoAltText: 'The Cook logo'
        }
    ]
};

export const Primary = Template.bind({});
Primary.storyName = 'Quote Under Image';
Primary.args = args;

export const VariantB = Template.bind({});
VariantB.storyName = 'Quote to the Right of the Image';
VariantB.args = {
    ...args,
    colors: 'colors-a',
    width: 'narrow',
    testimonialVariant: 'variant-b',
};
