import React from 'react';
import ItemBlock from './index';

export default {
    title: 'Blocks/ItemBlock',
    component: ItemBlock
};

const Template = (args) => <ItemBlock {...args} />;

const args = {
    type: 'ItemBlock',
    title: 'Item block',
    subtitle: 'Item block example subtitle',
    author: 'Earnest Hemingway',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.',
    featuredImage: {
        type: 'ImageBlock',
        url: '/images/post-1.jpeg',
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
            margin: ['mt-4', 'mb-0']
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
