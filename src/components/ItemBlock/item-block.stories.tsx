import React from 'react';
import ItemBlock from './index';

export default {
    title: 'Blocks/ItemBlock',
    component: ItemBlock,
    argTypes: {
        type: { table: { disable: true } },
        elementId: {
            defaultValue: ''
        },
        rating: {
            options: [1, 2, 3, 4, 5],
            defaultValue: 1,
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <ItemBlock {...args} />;

const args = {
    type: 'ItemBlock',
    elementId: '',
    title: 'Item block',
    subtitle: 'Item block example subtitle',
    author: 'Ernest Hemingway',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.',
    rating: 5,
    isRatingVisible: true,
    featuredImage: {
        type: 'ImageBlock',
        url: 'https://assets.stackbit.com/components/images/default/post-1.jpeg',
        altText: 'Post Image'
    },
    actions: [
        {
            type: 'Button',
            url: '#',
            label: 'Apply Now',
            style: 'primary'
        },
        {
            type: 'Button',
            url: '#',
            label: 'Learn more',
            style: 'secondary'
        }
    ],
    styles: {
        title: {
            fontWeight: 700,
            fontStyle: 'normal',
            textAlign: 'left',
            margin: ['mt-4', 'mb-1']
        },
        subtitle: {
            fontWeight: 400,
            fontStyle: 'normal',
            textAlign: 'left',
            margin: ['mt-0', 'mb-4']
        },
        text: {
            textAlign: 'left',
            margin: ['mt-0', 'mb-4']
        },
        actions: {
            justifyContent: 'flex-start'
        }
    }
};

export const Primary = Template.bind({});
Primary.storyName = 'Item with content';
Primary.args = args;
