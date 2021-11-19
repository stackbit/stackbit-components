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
            options: [2, 3, 4],
            defaultValue: 4,
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <FeaturedItemsSection {...args} />;

const args = {
    type: 'FeaturedItemsSection',
    elementId: '',
    title: 'Featured items section',
    subtitle: 'Featured items section example subtitle',
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
            type: 'Item',
            title: 'The quick, brown fox jumps over a lazy dog',
            subtitle: 'Section subtitle',
            author: 'Earnest Hemingway',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.',
            featuredImage: {
                type: 'ImageBlock',
                url: 'https://assets.stackbit.com/components/images/default/post-1.jpeg',
                altText: 'Post Image'
            },
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
        },
        {
            type: 'Item',
            title: 'The quick, brown fox jumps over a lazy dog',
            subtitle: 'Section subtitle',
            author: 'Earnest Hemingway',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.',
            featuredImage: {
                type: 'ImageBlock',
                url: 'https://assets.stackbit.com/components/images/default/post-1.jpeg',
                altText: 'Post Image'
            },
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
        },
        {
            type: 'Item',
            title: 'The quick, brown fox jumps over a lazy dog',
            subtitle: 'Section subtitle',
            author: 'Earnest Hemingway',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.',
            featuredImage: {
                type: 'ImageBlock',
                url: 'https://assets.stackbit.com/components/images/default/post-1.jpeg',
                altText: 'Post Image'
            },
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
        },
        {
            type: 'Item',
            title: 'The quick, brown fox jumps over a lazy dog',
            subtitle: 'Section subtitle',
            author: 'Earnest Hemingway',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.',
            featuredImage: {
                type: 'ImageBlock',
                url: 'https://assets.stackbit.com/components/images/default/post-1.jpeg',
                altText: 'Post Image'
            },
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
            fontWeight: 700,
            fontStyle: 'normal',
            textAlign: 'left',
            margin: ['mt-0', 'mb-2']
        },
        subtitle: {
            fontWeight: 400,
            fontStyle: 'normal',
            textAlign: 'left',
            margin: ['mt-0', 'mb-12']
        },
        actions: {
            justifyContent: 'flex-start'
        }
    }
};

export const Primary = Template.bind({});
Primary.storyName = 'Featured item with items';
Primary.args = args;
