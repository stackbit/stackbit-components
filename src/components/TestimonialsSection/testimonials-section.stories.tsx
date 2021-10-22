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
        },
        backgroundWidth: {
            options: ['full', 'inset'],
            defaultValue: 'full',
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <TestimonialsSection {...args} />;

const args = {
    type: 'TestimonialsSection',
    elementId: '',
    colors: 'colors-h',
    backgroundWidth: 'full',
    testimonials: [
        {
            quote: '“Stackbit is fast! Themes are always up to date. It’s easy to use across the organization, and collaboration is easy.”',
            name: 'Isabelle Parks',
            title: 'Design Manager at Retro',
            image: {
                type: 'ImageBlock',
                url: '/images/isabelle-parks.jpg',
                altText: 'Photo of Isabelle Parks'
            },
            styles: {
                self: {
                    flexDirection: 'row'
                },
                quote: {
                    textAlign: 'left'
                },
                name: {
                    textAlign: 'left'
                },
                title: {
                    textAlign: 'left'
                }
            }
        }
    ],
    styles: {
        self: {
            height: 'auto',
            width: 'wide',
            alignItems: 'center',
            justifyContent: 'center'
        },
        title: {
            textAlign: 'center'
        },
        subtitle: {
            textAlign: 'center'
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
                url: '/images/isabelle-parks.jpg',
                altText: 'Photo of Isabelle Parks'
            },
            styles: {
                self: {
                    flexDirection: 'col-reverse'
                },
                quote: {
                    textAlign: 'center'
                },
                name: {
                    textAlign: 'center'
                },
                title: {
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
                url: '/images/desmond-eagle.jpg',
                altText: 'Photo of Desmond Eagle'
            },
            styles: {
                self: {
                    flexDirection: 'col'
                },
                quote: {
                    textAlign: 'center'
                },
                name: {
                    textAlign: 'center'
                },
                title: {
                    textAlign: 'center'
                }
            }
        }
    ],
    styles: {
        self: {
            height: 'auto',
            width: 'narrow',
            alignItems: 'center',
            justifyContent: 'center'
        },
        title: {
            textAlign: 'center'
        },
        subtitle: {
            textAlign: 'center'
        }
    }
};
