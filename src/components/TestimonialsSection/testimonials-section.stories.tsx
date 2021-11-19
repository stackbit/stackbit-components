import React from 'react';
import TestimonialsSection from './index';

export default {
    title: 'Components/TestimonialsSection',
    component: TestimonialsSection,
    argTypes: {
        type: { table: { disable: true } },
        elementId: {
            defaultValue: ''
        },
        colors: {
            options: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e', 'colors-f', 'colors-g', 'colors-h', 'colors-i'],
            defaultValue: 'colors-a',
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <TestimonialsSection {...args} />;

const args = {
    type: 'TestimonialsSection',
    elementId: '',
    colors: 'colors-h',
    testimonials: [
        {
            quote: '“Stackbit is fast! Themes are always up to date. It’s easy to use across the organization, and collaboration is easy.”',
            name: 'Isabelle Parks',
            title: 'Design Manager at Retro',
            image: {
                type: 'ImageBlock',
                url: 'https://assets.stackbit.com/components/images/default/isabelle-parks.jpg',
                altText: 'Photo of Isabelle Parks'
            },
            styles: {
                self: {
                    margin: ['mt-0', 'mb-0'],
                    flexDirection: 'row'
                },
                quote: {
                    textAlign: 'left'
                },
                name: {
                    fontWeight: 700,
                    fontStyle: 'normal',
                    textAlign: 'left'
                },
                title: {
                    fontWeight: 400,
                    fontStyle: 'normal',
                    textAlign: 'left'
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
            justifyContent: 'center',
            borderRadius: 'none',
            borderWidth: 0,
            borderStyle: 'none',
            borderColor: 'border-neutral'
        },
        title: {
            fontWeight: 700,
            fontStyle: 'normal',
            textAlign: 'center',
            margin: ['mt-0', 'mb-2']
        },
        subtitle: {
            fontWeight: 400,
            fontStyle: 'normal',
            textAlign: 'center',
            margin: ['mt-0', 'mb-12']
        }
    }
};

export const Primary = Template.bind({});
Primary.storyName = 'Testimonials Section With Author Image on the Left/Right';
Primary.args = args;

export const TestimonialsAuthorTop = Template.bind({});
TestimonialsAuthorTop.storyName = 'Testimonials Section With Author Image at the Top';
TestimonialsAuthorTop.args = {
    ...args,
    title: 'Testimonials',
    subtitle: 'What our users say',
    testimonials: [
        {
            quote: '“Stackbit is fast! Themes are always up to date. It’s easy to use across the organization, and collaboration is easy.”',
            name: 'Isabelle Parks',
            title: 'Design Manager at Retro',
            image: {
                type: 'ImageBlock',
                url: 'https://assets.stackbit.com/components/images/default/isabelle-parks.jpg',
                altText: 'Photo of Isabelle Parks'
            },
            styles: {
                self: {
                    margin: ['mt-12', 'mb-0'],
                    flexDirection: 'col-reverse'
                },
                quote: {
                    textAlign: 'center'
                },
                name: {
                    fontWeight: 700,
                    fontStyle: 'normal',
                    textAlign: 'center'
                },
                title: {
                    fontWeight: 400,
                    fontStyle: 'normal',
                    textAlign: 'center'
                }
            }
        },
        {
            quote: '“Stackbit allows you to easily deploy a static site backed with a CMS. Amazing service.”',
            name: 'Desmond Eagle',
            title: 'CTO at Retro',
            image: {
                type: 'ImageBlock',
                url: 'https://assets.stackbit.com/components/images/default/desmond-eagle.jpg',
                altText: 'Photo of Desmond Eagle'
            },
            styles: {
                self: {
                    margin: ['mt-12', 'mb-0'],
                    flexDirection: 'col-reverse'
                },
                quote: {
                    textAlign: 'center'
                },
                name: {
                    fontWeight: 700,
                    fontStyle: 'normal',
                    textAlign: 'center'
                },
                title: {
                    fontWeight: 400,
                    fontStyle: 'normal',
                    textAlign: 'center'
                }
            }
        }
    ],
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
            borderColor: 'border-neutral'
        },
        title: {
            fontWeight: 700,
            fontStyle: 'normal',
            textAlign: 'center',
            margin: ['mt-0', 'mb-2']
        },
        subtitle: {
            fontWeight: 400,
            fontStyle: 'normal',
            textAlign: 'center',
            margin: ['mt-0', 'mb-12']
        }
    }
};
