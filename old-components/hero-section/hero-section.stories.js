import React from 'react';
import HeroSection from './index';

export default {
    title: 'Components/Hero Section',
    component: HeroSection,
    argTypes: {
        variant: {
            options: ['variant-a', 'variant-b', 'variant-c', 'variant-d'],
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <HeroSection {...args} />;

const args = {
    type: 'section_hero',
    variant: 'variant-a',
    badge: 'New Collaboration',
    title: 'The quick, brown fox  \njumps over **a lazy dog**',
    description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.',
    imageUrl: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260',
    actions: [
        {
            url: '#',
            label: 'Apply Now',
            type: 'button'
        },
        {
            url: '#',
            label: 'Learn more',
            type: 'link'
        }
    ]
};

export const Primary = Template.bind({});
Primary.storyName = 'Hero Section Image Horizontal Bleed';
Primary.args = args;

export const Secondary = Template.bind({});
Secondary.storyName = 'Hero Section Image Vertical Bleed';
Secondary.args = {
    ...args,
    variant: 'variant-b',
    badge: 'Brand new',
    imageUrl: 'https://kitwind.io/assets/kometa/two-thirds-phone.png',
    actions: [
        {
            url: '#',
            label: 'Get started',
            type: 'button'
        },
        {
            url: '#',
            label: 'Learn more',
            type: 'link'
        }
    ]
};

export const HeroVideo = Template.bind({});
HeroVideo.storyName = 'Hero Section Video';
HeroVideo.args = {
    ...args,
    variant: 'variant-c',
    badge: 'Brand new',
    imageUrl: 'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260',
    videoUrl: '#',
    actions: [
        {
            url: '#',
            label: 'Start Shopping',
            type: 'button',
            icon: 'cart'
        },
        {
            url: '#',
            label: 'Get 15% discount',
            type: 'link'
        }
    ]
};

export const HeroSVG = Template.bind({});
HeroSVG.storyName = 'Hero Section SVG';
HeroSVG.args = {
    ...args,
    variant: 'variant-d',
    badge: 'Brand new',
    title: 'Innovative analytics  \nthat you **will love**',
    svg: 'graph',
    actions: [
        {
            url: '#',
            label: 'Learn more',
            type: 'link',
            primary: true,
            icon: 'arrowRight'
        }
    ]
};
