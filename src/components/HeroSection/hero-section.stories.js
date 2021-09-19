import React from 'react';
import { Title, Subtitle, Description, Primary as PrimaryStory, ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import StackbitFrontmatter from '../../../addons/addon-stackbit-frontmatter/src/StackbitFrontmatter';
import StackbitModels from '../../../addons/addon-stackbit-models/src/StackbitModels';
import HeroSection from './index';

export default {
    title: 'Components/HeroSection',
    component: HeroSection,
    argTypes: {
        type: { table: { disable: true } },
        elementId: {
            defaultValue: ''
        },
        variant: {
            options: ['variant-a', 'variant-b', 'variant-c', 'variant-d'],
            defaultValue: 'variant-a',
            control: { type: 'select' }
        },
        colors: {
            options: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e', 'colors-f', 'colors-g', 'colors-h', 'colors-i'],
            defaultValue: 'colors-a',
            control: { type: 'select' }
        },
        width: {
            options: ['wide', 'full'],
            defaultValue: 'wide',
            control: { type: 'select' }
        },
        height: {
            options: ['short', 'tall', 'viewport'],
            defaultValue: 'short',
            control: { type: 'select' }
        },
        topGap: {
            options: ['none', 'small', 'medium', 'large'],
            defaultValue: 'medium',
            control: { type: 'select' }
        },
        bottomGap: {
            options: ['none', 'small', 'medium', 'large'],
            defaultValue: 'medium',
            control: { type: 'select' }
        },
        contentWidth: {
            options: ['small', 'medium', 'large'],
            defaultValue: 'large',
            control: { type: 'select' }
        },
        contentAlignHoriz: {
            options: ['left', 'center', 'right'],
            defaultValue: 'left',
            control: { type: 'select' }
        },
        contentAlignVert: {
            options: ['top', 'middle', 'bottom'],
            defaultValue: 'middle',
            control: { type: 'select' }
        },
        textAlign: {
            options: ['left', 'center', 'right'],
            defaultValue: 'left',
            control: { type: 'select' }
        }
    },
    parameters: {
        controls: { expanded: false },
        docs: {
            page: () => (
                <>
                    <h1 className="normal-case text-3xl">{args.type}</h1>
                    <Subtitle />
                    <Description />
                    <PrimaryStory />

                    <Tabs>
                        <TabList>
                            <Tab>Props</Tab>
                            <Tab>Frontmatter</Tab>
                            <Tab>Model</Tab>
                        </TabList>

                        <TabPanel>
                            <ArgsTable story={PRIMARY_STORY} />
                        </TabPanel>
                        <TabPanel>
                            <StackbitFrontmatter args={args} />
                        </TabPanel>
                        <TabPanel>
                            <StackbitModels args={args} />
                        </TabPanel>
                    </Tabs>

                    <Stories />
                </>
            )
        }
    }
};

const Template = (args) => <HeroSection {...args} />;

const args = {
    type: 'HeroSection',
    elementId: '',
    variant: 'variant-a',
    colors: 'colors-a',
    width: 'wide',
    height: 'short',
    topGap: 'none',
    bottomGap: 'none',
    contentWidth: 'large',
    contentAlignHoriz: 'center',
    contentAlignVert: 'middle',
    textAlign: 'left',
    badge: {
        type: 'Badge',
        label: 'Brand new'
    },
    title: 'The quick, brown fox jumps over **a lazy dog**',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.',
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
    feature: {
        type: 'ImageBlock',
        url: '/images/fishing.jpg',
        altText: 'Image alt text',
        caption: 'Image caption'
    }
};

export const Primary = Template.bind({});
Primary.storyName = 'Hero Section With Image on the Right';
Primary.args = args;

export const HeroLeftVideo = Template.bind({});
HeroLeftVideo.storyName = 'Hero Section With Video on the Left';
HeroLeftVideo.args = {
    ...args,
    variant: 'variant-b',
    colors: 'colors-c',
    width: 'full',
    height: 'tall',
    badge: {
        type: 'Badge',
        label: 'Brand new'
    },
    actions: [
        {
            type: 'Button',
            url: '#',
            label: 'Get started',
            style: 'primary'
        }
    ],
    feature: {
        type: 'VideoBlock',
        videoUrl: '/videos/stackbit-for-marketers.mp4',
        posterUrl: '/images/stackbit-for-marketers.jpg',
        autoplay: true,
        loop: true,
        muted: true,
        controls: false
    }
};

export const HeroBottomImage = Template.bind({});
HeroBottomImage.storyName = 'Hero Section With Image at the Bottom';
HeroBottomImage.args = {
    ...args,
    variant: 'variant-d',
    colors: 'colors-c',
    width: 'full',
    contentWidth: 'small',
    textAlign: 'center',
    badge: {
        type: 'Badge',
        label: 'Brand new'
    },
    title: 'The quick, brown fox jumps over **a lazy dog**',
    actions: [
        {
            type: 'Button',
            url: '#',
            label: 'Get started',
            style: 'primary'
        }
    ],
    feature: {
        type: 'ImageBlock',
        url: '/images/hero-alt.png',
        altText: 'Image alt text',
        caption: 'Image caption'
    }
};

export const HeroTextOnly = Template.bind({});
HeroTextOnly.storyName = 'Hero Section With Text Only';
HeroTextOnly.args = {
    ...args,
    variant: 'variant-a',
    colors: 'colors-c',
    width: 'full',
    height: 'tall',
    contentWidth: 'small',
    contentAlignHoriz: 'left',
    contentAlignVert: 'bottom',
    badge: null,
    title: 'The quick, brown fox jumps over **a lazy dog**',
    actions: [
        {
            type: 'Button',
            url: '#',
            label: 'Start Shopping',
            showIcon: true,
            icon: 'cart',
            style: 'primary'
        },
        {
            type: 'Link',
            url: '#',
            label: 'Get 15% discount',
            showIcon: true,
            icon: 'arrowRight',
            style: 'link'
        }
    ],
    feature: null,
    backgroundImage: {
        type: 'ImageBlock',
        url: 'https://images.unsplash.com/photo-1483004406427-6acb078d1f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        altText: 'Water',
        caption: '',
        opacity: 50
    }
};

export const HeroRightForm = Template.bind({});
HeroRightForm.storyName = 'Hero Section With Form on the Right';
HeroRightForm.args = {
    ...args,
    variant: 'variant-a',
    colors: 'colors-f',
    contentWidth: 'medium',
    badge: null,
    title: 'The quick, brown fox jumps over **a lazy dog**',
    actions: [
        {
            type: 'Link',
            url: '#',
            label: 'Learn More',
            showIcon: true,
            icon: 'arrowRight',
            style: 'link'
        }
    ],
    feature: {
        type: 'FormBlock',
        idAttr: 'hero-form',
        fields: [
            {
                type: 'TextFormControl',
                name: 'name',
                label: 'Name',
                placeholder: 'John Doe',
                isRequired: true,
                width: 'full'
            },
            {
                type: 'EmailFormControl',
                name: 'email',
                label: 'E-mail',
                placeholder: 'john.doe@example.org',
                isRequired: true,
                width: 'full'
            }
        ],
        submitLabel: 'Subscribe'
    }
};

export const HeroBottomForm = Template.bind({});
HeroBottomForm.storyName = 'Hero Section With Form at the Bottom';
HeroBottomForm.args = {
    ...args,
    variant: 'variant-d',
    colors: 'colors-i',
    contentWidth: 'small',
    contentAlignHoriz: 'center',
    badge: null,
    title: 'Join our newsletter',
    actions: null,
    feature: {
        type: 'FormBlock',
        idAttr: 'hero-form',
        fields: [
            {
                type: 'EmailFormControl',
                name: 'email',
                label: 'E-mail',
                placeholder: 'john.doe@example.org',
                isRequired: true,
                width: 'full'
            }
        ],
        submitLabel: 'Subscribe'
    }
};
