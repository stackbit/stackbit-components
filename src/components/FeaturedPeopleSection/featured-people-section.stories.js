import React from 'react';
import FeaturedPeopleSection from './index';

export default {
    title: 'Components/Featured People Section',
    component: FeaturedPeopleSection,
    argTypes: {
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
                imageUrl: '/images/desmond-eagle.jpg',
                imageAltText: 'Photo of Desmond Eagle'
            }
        },
        {
            firstName: 'Dianne',
            lastName: 'Ameter',
            role: 'Product Manager',
            bio: 'Vincent Van Gogh’s most popular painting, The Starry Night.',
            image: {
                type: 'ImageBlock',
                imageUrl: '/images/dianne-ameter.jpg',
                imageAltText: 'Photo of Dianne Ameter'
            }
        },
        {
            firstName: 'Hilary',
            lastName: 'Ouse',
            role: 'Product Manager',
            bio: 'Vincent Van Gogh’s most popular painting, The Starry Night.',
            image: {
                type: 'ImageBlock',
                imageUrl: '/images/hilary-ouse.jpg',
                imageAltText: 'Photo of Hilary Ouse'
            }
        },
        {
            firstName: 'Hugh',
            lastName: 'Saturation',
            role: 'Product Manager',
            bio: 'Vincent Van Gogh’s most popular painting, The Starry Night.',
            image: {
                type: 'ImageBlock',
                imageUrl: '/images/hugh-saturation.jpg',
                imageAltText: 'Photo of Hugh Saturation'
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