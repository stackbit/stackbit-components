import React from 'react';
import FeaturedPeopleSection from './index';

export default {
    title: 'Components/FeaturedPeopleSection',
    component: FeaturedPeopleSection,
    argTypes: {
        type: { table: { disable: true } },
        variant: {
            options: ['variant-a', 'variant-b'],
            control: { type: 'select' }
        },
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

const Template = (args) => <FeaturedPeopleSection {...args} />;

const args = {
    type: 'FeaturedPeopleSection',
    variant: 'variant-a',
    colors: 'colors-d',
    width: 'wide',
    height: 'auto',
    alignHoriz: 'center',
    badge: 'Know Our Team',
    title: 'The Team',
    subtitle: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    people: [
        {
            firstName: 'Desmond',
            lastName: 'Eagle',
            role: 'Product Manager',
            bio: 'Vincent Van Gogh’s most popular painting, The Starry Night.',
            image: {
                type: 'ImageBlock',
                url: '/images/desmond-eagle.jpg',
                altText: 'Photo of Desmond Eagle'
            }
        },
        {
            firstName: 'Dianne',
            lastName: 'Ameter',
            role: 'Product Manager',
            bio: 'Vincent Van Gogh’s most popular painting, The Starry Night.',
            image: {
                type: 'ImageBlock',
                url: '/images/dianne-ameter.jpg',
                altText: 'Photo of Dianne Ameter'
            }
        },
        {
            firstName: 'Hilary',
            lastName: 'Ouse',
            role: 'Product Manager',
            bio: 'Vincent Van Gogh’s most popular painting, The Starry Night.',
            image: {
                type: 'ImageBlock',
                url: '/images/hilary-ouse.jpg',
                altText: 'Photo of Hilary Ouse'
            }
        },
        {
            firstName: 'Hugh',
            lastName: 'Saturation',
            role: 'Product Manager',
            bio: 'Vincent Van Gogh’s most popular painting, The Starry Night.',
            image: {
                type: 'ImageBlock',
                url: '/images/hugh-saturation.jpg',
                altText: 'Photo of Hugh Saturation'
            }
        }
    ]
};

export const Primary = Template.bind({});
Primary.storyName = 'Three Cols, Info Under the Image';
Primary.args = args;

export const VariantB = Template.bind({});
VariantB.storyName = 'Two Cols, Info to the Right of the Image';
VariantB.args = {
    ...args,
    colors: 'colors-b',
    variant: 'variant-b',
    alignHoriz: 'left'
};
