import React from 'react';
import FeaturedItemsSection from './index';

export default {
    title: 'Components/FeaturedItemsSection',
    component: FeaturedItemsSection,
    argTypes: {
        type: { table: { disable: true } },
        elementId: {
            defaultValue: ''
        },
        colors: {
            options: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e', 'colors-f', 'colors-g', 'colors-h', 'colors-i'],
            defaultValue: 'colors-a',
            control: { type: 'select' }
        },
        columns: {
            options: [1, 2, 3, 4],
            defaultValue: 4,
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <FeaturedItemsSection {...args} />;

const args = {
    type: 'FeaturedItemsSection',
    elementId: '',
    title: 'Featured Items',
    subtitle: 'This is the subtitle',
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
    columns: 4,
    items: [
        {
            type: 'ItemBlock',
            title: 'Item Title',
            subtitle: 'This is the subtitle',
            author: 'Item author',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.',
            featuredImage: {
                type: 'ImageBlock',
                url: 'https://assets.stackbit.com/components/images/default/post-1.jpeg',
                altText: 'Post Image'
            },
            styles: {
                title: {
                    textAlign: 'left'
                },
                subtitle: {
                    textAlign: 'left'
                },
                text: {
                    textAlign: 'left'
                },
                actions: {
                    justifyContent: 'flex-start'
                }
            }
        },
        {
            type: 'ItemBlock',
            title: 'Item Title',
            subtitle: 'This is the subtitle',
            author: 'Item author',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.',
            featuredImage: {
                type: 'ImageBlock',
                url: 'https://assets.stackbit.com/components/images/default/post-1.jpeg',
                altText: 'Post Image'
            },
            styles: {
                title: {
                    textAlign: 'left'
                },
                subtitle: {
                    textAlign: 'left'
                },
                text: {
                    textAlign: 'left'
                },
                actions: {
                    justifyContent: 'flex-start'
                }
            }
        },
        {
            type: 'ItemBlock',
            title: 'Item Title',
            subtitle: 'This is the subtitle',
            author: 'Item author',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.',
            featuredImage: {
                type: 'ImageBlock',
                url: 'https://assets.stackbit.com/components/images/default/post-1.jpeg',
                altText: 'Post Image'
            },
            styles: {
                title: {
                    textAlign: 'left'
                },
                subtitle: {
                    textAlign: 'left'
                },
                text: {
                    textAlign: 'left'
                },
                actions: {
                    justifyContent: 'flex-start'
                }
            }
        },
        {
            type: 'ItemBlock',
            title: 'Item Title',
            subtitle: 'This is the subtitle',
            author: 'Item author',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.',
            featuredImage: {
                type: 'ImageBlock',
                url: 'https://assets.stackbit.com/components/images/default/post-1.jpeg',
                altText: 'Post Image'
            },
            styles: {
                title: {
                    textAlign: 'left'
                },
                subtitle: {
                    textAlign: 'left'
                },
                text: {
                    textAlign: 'left'
                },
                actions: {
                    justifyContent: 'flex-start'
                }
            }
        }
    ],
    styles: {
        self: {
            height: 'auto',
            width: 'wide',
            margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0'],
            padding: ['pt-12', 'pb-12', 'pl-4', 'pr-4'],
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            borderRadius: 'none',
            borderWidth: 0,
            borderStyle: 'none',
            borderColor: 'border-neutral'
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

export const Primary = Template.bind({});
Primary.storyName = 'Featured items, four columns';
Primary.args = args;
