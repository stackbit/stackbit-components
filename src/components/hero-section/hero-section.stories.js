import React from 'react';
import HeroSection from './index';

export default {
    title: 'Components/Hero Section',
    component: HeroSection,
    argTypes: {
        variant: {
            options: ['variant-a', 'variant-b', 'variant-c', 'variant-d'],
            control: { type: 'select' }
        },
        style: {
            options: ['style-a', 'style-b', 'style-c'],
            control: { type: 'select' }
        },
        width: {
            options: ['narrow', 'wide', 'full'],
            control: { type: 'select' }
        },
        height: {
            options: ['auto', 'viewport'],
            control: { type: 'select' }
        },
        alignHoriz: {
            options: ['left', 'center'],
            control: { type: 'select' }
        },
        mediaPosition: {
            options: ['left', 'right'],
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <HeroSection {...args} />;

const args = {
    type: 'section_hero',
    style: 'style-a',
    variant: 'variant-a',
    width: 'wide',
    height: 'auto',
    alignHoriz: 'left',
    mediaPosition: 'right',
    badge: 'New Collaboration',
    title: 'The quick, brown fox  \njumps over **a lazy dog**',
    description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.',
    imageUrl: '/images/hero.png',
    imageAlt: '',
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
    width: 'full',
    height: 'auto',
    alignHoriz: 'center',
    mediaPosition: 'left',
    badge: 'Brand new',
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
    imageUrl: '',
    videoUrl: '/videos/schema.mp4',
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

export const HeroImage = Template.bind({});
HeroImage.storyName = 'Hero Section Image';
HeroImage.args = {
    ...args,
    variant: 'variant-d',
    badge: 'Brand new',
    title: 'Innovative analytics  \nthat you **will love**',
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
