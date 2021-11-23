import React from 'react';
import FaqSection from './index';

export default {
    title: 'Components/FaqSection',
    component: FaqSection,
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

const Template = (args) => <FaqSection {...args} />;

const args = {
    type: 'FaqSection',
    elementId: '',
    title: 'FAQ',
    subtitle: 'This is the subtitle',
    items: [
        {
            question: 'How it this different from what we have today?',
            answer: 'At the office, working together is often a distruction, on remote, it could be motivation. At the office, working together is often a distruction, on remote, it could be motivation. At the office, working together is often a distruction, on remote, it could be motivation.',
            styles: {
                question: {
                    textAlign: 'left'
                },
                answer: {
                    textAlign: 'left'
                }
            }
        },
        {
            question: 'How it this different from what we have today?',
            answer: 'At the office, working together is often a distruction, on remote, it could be motivation. At the office, working together is often a distruction, on remote, it could be motivation. At the office, working together is often a distruction, on remote, it could be motivation.',
            styles: {
                question: {
                    textAlign: 'left'
                },
                answer: {
                    textAlign: 'left'
                }
            }
        },
        {
            question: 'How it this different from what we have today?',
            answer: 'At the office, working together is often a distruction, on remote, it could be motivation. At the office, working together is often a distruction, on remote, it could be motivation. At the office, working together is often a distruction, on remote, it could be motivation.',
            styles: {
                question: {
                    textAlign: 'left'
                },
                answer: {
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
            borderColor: 'border-dark'
        },
        title: {
            textAlign: 'left'
        },
        subtitle: {
            textAlign: 'left'
        }
    }
};

export const Primary = Template.bind({});
Primary.storyName = 'FAQ';
Primary.args = args;
