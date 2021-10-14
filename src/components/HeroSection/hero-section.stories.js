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
        },
        featurePosition: {
            options: ['right', 'left', 'top', 'bottom'],
            defaultValue: 'right',
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
    colors: 'colors-a',
    width: 'wide',
    height: 'short',
    topGap: 'none',
    bottomGap: 'none',
    contentWidth: 'large',
    contentAlignHoriz: 'center',
    contentAlignVert: 'middle',
    textAlign: 'left',
    title: 'The quick, brown fox jumps over a lazy dog',
    subtitle: 'Section subtitle',
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
        url: '/images/hero.png',
        altText: 'Image alt text',
        caption: 'Image caption'
    },
    featurePosition: 'right',
    styles: {
        title: {
            fontSize: 'xxx-large',
            fontWeight: '500',
            textAlign: 'left'
        },
        subtitle: {
            fontSize: 'xx-large',
            fontWeight: '300',
            textAlign: 'left'
        },
        text: {
            fontSize: 'large',
            fontWeight: '400',
            textAlign: 'left'
        }
    }
};

export const Primary = Template.bind({});
Primary.storyName = 'Hero Section With Image on the Right';
Primary.args = args;

export const HeroLeftVideo = Template.bind({});
HeroLeftVideo.storyName = 'Hero Section With Video on the Left';
HeroLeftVideo.args = {
    ...args,
    colors: 'colors-c',
    width: 'full',
    height: 'tall',
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
        url: '/videos/stackbit-for-marketers.mp4',
        thumbnailUrl: '/images/stackbit-for-marketers.jpeg',
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
    colors: 'colors-c',
    width: 'full',
    contentWidth: 'small',
    textAlign: 'center',
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
        url: '/images/hero.png',
        altText: 'Image alt text',
        caption: 'Image caption'
    }
};

export const HeroTextOnly = Template.bind({});
HeroTextOnly.storyName = 'Hero Section With Text Only';
HeroTextOnly.args = {
    ...args,
    colors: 'colors-c',
    width: 'full',
    height: 'tall',
    contentWidth: 'small',
    contentAlignHoriz: 'left',
    contentAlignVert: 'bottom',
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
        url: '/images/bg.jpg',
        altText: 'Hero Image',
        caption: '',
        opacity: 50
    }
};

export const HeroRightForm = Template.bind({});
HeroRightForm.storyName = 'Hero Section With Form on the Right';
HeroRightForm.args = {
    ...args,
    colors: 'colors-f',
    contentWidth: 'medium',
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
        elementId: 'hero-form',
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
    colors: 'colors-i',
    contentWidth: 'small',
    contentAlignHoriz: 'center',
    title: 'Join our newsletter',
    actions: null,
    feature: {
        type: 'FormBlock',
        elementId: 'hero-form',
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
