import React from 'react';
import FeaturedPeopleSection from './index';

export default {
    title: 'Components/FeaturedPeopleSection',
    component: FeaturedPeopleSection,
    argTypes: {
        type: { table: { disable: true } },
        variant: {
            options: ['variant-a', 'variant-b', 'variant-c'],
            defaultValue: 'variant-a',
            control: { type: 'select' }
        },
        colors: {
            options: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e', 'colors-f', 'colors-g', 'colors-h', 'colors-i'],
            defaultValue: 'colors-a',
            control: { type: 'select' }
        },
        elementId: {
            defaultValue: ''
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

const Template = (args) => <FeaturedPeopleSection {...args} />;

const args = {
    type: 'FeaturedPeopleSection',
    variant: 'variant-a',
    colors: 'colors-a',
    width: 'wide',
    height: 'short',
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
Primary.storyName = 'Four Cols, Info Under the Image';
Primary.args = args;

export const VariantB = Template.bind({});
VariantB.storyName = 'Two Cols, Info to the Right of the Image';
VariantB.args = {
    ...args,
    variant: 'variant-b',
    colors: 'colors-c',
    elementId: '',
    width: 'full',
    alignHoriz: 'left',
    actions: [
        {
            type: 'Button',
            url: '#',
            label: 'View More',
            style: 'primary'
        }
    ]
};

export const VariantC = Template.bind({});
VariantC.storyName = 'Two Cols, Info Under the Image';
VariantC.args = {
    ...args,
    variant: 'variant-c',
    colors: 'colors-i',
    alignHoriz: 'center'
};
