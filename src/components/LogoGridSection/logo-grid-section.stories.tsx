import React from 'react';
import LogoGridSection, { LogoGridSectionProps } from './index';

export default {
    title: 'Components/LogoGridSection',
    component: LogoGridSection,
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

const Template = (args: LogoGridSectionProps) => <LogoGridSection {...args} />;

const args = {
    type: 'LogoGridSection',
    elementId: '',
    colors: 'colors-h',
    width: 'wide',
    backgroundWidth: 'full',
    title: 'Trusted By the Best',
    subtitle: 'These companies have done great things with us',
    logos: [
        {
            // title: 'Apple',
            image: {
                type: 'ImageBlock',
                url: 'https://splendid-petunia-99a9e.stackbit.app/images/Frame%201484.svg',
                altText: 'Apple Logo'
            }
        },
        {
            // title: 'Google Pixel',
            image: {
                type: 'ImageBlock',
                url: 'https://splendid-petunia-99a9e.stackbit.app/images/Frame%201485.svg',
                altText: 'Google Pixel'
            }
        },
        {
            // title: 'Xbox',
            image: {
                type: 'ImageBlock',
                url: 'https://splendid-petunia-99a9e.stackbit.app/images/Frame%201486.svg',
                altText: 'Xbox Logo'
            }
        },
        {
            // title: 'PlayStation',
            image: {
                type: 'ImageBlock',
                url: 'https://splendid-petunia-99a9e.stackbit.app/images/Frame%201487.svg',
                altText: 'PlayStation Logo'
            }
        },
        {
            // title: 'Apple',
            image: {
                type: 'ImageBlock',
                url: 'https://splendid-petunia-99a9e.stackbit.app/images/Frame%201484.svg',
                altText: 'Apple Logo'
            }
        },
        {
            // title: 'Google Pixel',
            image: {
                type: 'ImageBlock',
                url: 'https://splendid-petunia-99a9e.stackbit.app/images/Frame%201485.svg',
                altText: 'Google Pixel'
            }
        },
        {
            // title: 'Xbox',
            image: {
                type: 'ImageBlock',
                url: 'https://splendid-petunia-99a9e.stackbit.app/images/Frame%201486.svg',
                altText: 'Xbox Logo'
            }
        },
        {
            // title: 'PlayStation',
            image: {
                type: 'ImageBlock',
                url: 'https://splendid-petunia-99a9e.stackbit.app/images/Frame%201487.svg',
                altText: 'PlayStation Logo'
            }
        }
    ],
    styles: {
        self: {
            height: 'auto',
            width: 'wide',
            margin: ['mt-0', 'mb-0'],
            padding: ['pt-12', 'pb-12'],
            alignItems: 'center',
            justifyContent: 'center'
        },
        title: {
            fontWeight: 700,
            fontStyle: 'normal',
            textAlign: 'center'
        },
        subtitle: {
            fontWeight: 400,
            fontStyle: 'normal',
            textAlign: 'center'
        },
        actions: {
            justifyContent: 'center'
        }
    }
};

export const Primary = Template.bind({});
Primary.storyName = 'Many Logos, No Titles';
Primary.args = args;
