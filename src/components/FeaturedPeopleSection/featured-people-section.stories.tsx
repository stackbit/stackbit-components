import React from 'react';
import FeaturedPeopleSection from './index';

export default {
    title: 'Components/FeaturedPeopleSection',
    component: FeaturedPeopleSection,
    argTypes: {
        type: { table: { disable: true } },
        elementId: {
            defaultValue: ''
        },
        variant: {
            options: ['variant-a', 'variant-b', 'variant-c'],
            defaultValue: 'variant-a',
            control: { type: 'select' }
        },
        colors: {
            options: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e', 'colors-f', 'colors-g', 'colors-h', 'colors-i'],
            defaultValue: 'colors-a',
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <FeaturedPeopleSection {...args} />;

const args = {
    type: 'FeaturedPeopleSection',
    elementId: '',
    variant: 'variant-a',
    colors: 'colors-h',
    title: 'The Team',
    subtitle: 'This is Subtitle',
    actions: [
        {
            type: 'Button',
            url: '#',
            label: 'View More',
            style: 'primary'
        }
    ],
    people: [
        {
            firstName: 'Desmond',
            lastName: 'Eagle',
            role: 'Product Manager',
            bio: 'Vincent Van Gogh’s most popular painting, The Starry Night.',
            image: {
                type: 'ImageBlock',
                url: 'https://assets.stackbit.com/components/images/default/desmond-eagle.jpg',
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
                url: 'https://assets.stackbit.com/components/images/default/dianne-ameter.jpg',
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
                url: 'https://assets.stackbit.com/components/images/default/hilary-ouse.jpg',
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
                url: 'https://assets.stackbit.com/components/images/default/hugh-saturation.jpg',
                altText: 'Photo of Hugh Saturation'
            }
        }
    ],
    styles: {
        self: {
            height: 'auto',
            width: 'wide',
            margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0'],
            padding: ['pt-12', 'pb-12', 'pl-4', 'pr-4'],
            justifyContent: 'center',
            borderRadius: 'none',
            borderWidth: 0,
            borderStyle: 'none',
            borderColor: 'border-dark'
        },
        title: {
            textAlign: 'center'
        },
        subtitle: {
            textAlign: 'center'
        },
        actions: {
            justifyContent: 'center'
        }
    }
};

export const Primary = Template.bind({});
Primary.storyName = 'Featured People, Four Column Grid';
Primary.args = args;

export const FeaturedPeopleTwoCol = Template.bind({});
FeaturedPeopleTwoCol.storyName = 'Featured People, Two Column Grid';
FeaturedPeopleTwoCol.args = {
    ...args,
    variant: 'variant-b',
    styles: {
        self: {
            height: 'auto',
            width: 'wide',
            margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0'],
            padding: ['pt-12', 'pb-12', 'pl-4', 'pr-4'],
            justifyContent: 'center',
            borderRadius: 'none',
            borderWidth: 0,
            borderStyle: 'none',
            borderColor: 'border-dark'
        },
        title: {
            textAlign: 'left'
        },
        subtitle: {
            textAlign: 'left'
        },
        actions: {
            justifyContent: 'flex-start'
        }
    }
};

export const FeaturedPeopleTwoColAlt = Template.bind({});
FeaturedPeopleTwoColAlt.storyName = 'Featured People, Two Column Grid Alt';
FeaturedPeopleTwoColAlt.args = {
    ...args,
    variant: 'variant-c',
    styles: {
        self: {
            height: 'auto',
            width: 'narrow',
            margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0'],
            padding: ['pt-12', 'pb-12', 'pl-4', 'pr-4'],
            justifyContent: 'center',
            borderRadius: 'none',
            borderWidth: 0,
            borderStyle: 'none',
            borderColor: 'border-dark'
        },
        title: {
            textAlign: 'center'
        },
        subtitle: {
            textAlign: 'center'
        },
        actions: {
            justifyContent: 'center'
        }
    }
};
