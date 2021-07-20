import React from 'react';
import TestimonialsSection from './index';

export default {
    title: 'Components/Testimonials Section',
    component: TestimonialsSection,
    argTypes: {
        variant: {
            options: ['variant-a', 'variant-b'],
            control: { type: 'select' }
        },
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
        }
    }
};

const Template = (args) => <TestimonialsSection {...args} />;

const args = {
    type: 'section_testimonials',
    variant: 'variant-a',
    style: 'style-e',
    width: 'wide',
    height: 'auto',
    testimonials: [
        {
            quote: '“It’s great to see someone taking action while still maintaining a sustainable fish supply to home cooks.”',
            name: 'Isabelle Parks',
            title: 'Head chef at The Cook',
            image: '/images/isabelle-parks.jpg',
            image_alt: 'Photo of Isabelle Parks',
            logo: '/images/the-cook-logo.svg',
            logo_alt: 'The Cook logo',
        }
    ]
};

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.storyName = 'quote under image';
Primary.args = { ...args, variant: 'variant-a' };

export const VariantB = Template.bind({});
VariantB.storyName = 'quote to the right of the image';
VariantB.args = { ...args, variant: 'variant-b', width: 'narrow' };
