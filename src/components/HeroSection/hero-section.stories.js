import React from 'react';
import { Title, Subtitle, Description, Primary as PrimaryStory, ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import StackbitFrontmatter from '../../../addons/addon-stackbit-frontmatter/src/StackbitFrontmatter';
import StackbitModels from '../../../addons/addon-stackbit-models/src/StackbitModels';
import HeroSection from './index';

const args = {
    type: 'HeroSection',
    variant: 'variant-a',
    colors: 'colors-a',
    width: 'wide',
    height: 'short',
    topGap: 'none',
    bottomGap: 'small',
    alignHoriz: 'left',
    alignVert: 'bottom',
    badge: 'New Collaboration',
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

export default {
    title: 'Components/HeroSection',
    component: HeroSection,
    argTypes: {
        type: { table: { disable: true } },
        variant: {
            description: null,
            options: ['variant-a', 'variant-b', 'variant-c', 'variant-d'],
            control: { type: 'select' },
            type: {
                required: true
            },
            table: {
                type: {
                    summary: null,
                    detail: null
                },
                defaultValue: {
                    summary: 'variant-a',
                    detail: null
                }
            }
        },
        colors: {
            options: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e', 'colors-f', 'colors-g', 'colors-h', 'colors-i'],
            control: { type: 'select' },
            table: {
                defaultValue: {
                    summary: 'colors-a'
                }
            }
        },
        width: {
            options: ['wide', 'full'],
            control: { type: 'select' },
            table: {
                defaultValue: {
                    summary: 'wide'
                }
            }
        },
        height: {
            options: ['short', 'tall', 'viewport'],
            control: { type: 'select' },
            table: {
                defaultValue: {
                    summary: 'short'
                }
            }
        },
        topGap: {
            options: ['none', 'small', 'large'],
            control: { type: 'select' },
            table: {
                defaultValue: {
                    summary: 'small'
                }
            }
        },
        bottomGap: {
            options: ['none', 'small', 'large'],
            control: { type: 'select' },
            table: {
                defaultValue: {
                    summary: 'small'
                }
            }
        },
        alignHoriz: {
            options: ['left', 'right', 'center'],
            control: { type: 'select' },
            table: {
                defaultValue: {
                    summary: 'left'
                }
            }
        },
        alignVert: {
            options: ['top', 'middle', 'bottom'],
            control: { type: 'select' },
            table: {
                defaultValue: {
                    summary: 'middle'
                }
            }
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

export const Primary = Template.bind({});
Primary.storyName = 'Hero Section With Image on the Right';
Primary.args = args;

export const HeroLeftVideo = Template.bind({});
HeroLeftVideo.storyName = 'Hero Section With Video on the Left';
HeroLeftVideo.args = {
    ...args,
    variant: 'variant-b',
    colors: 'colors-e',
    width: 'full',
    badge: 'Brand new',
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
    alignHoriz: 'center',
    badge: 'Brand new',
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
    badge: null,
    title: 'The quick, brown fox jumps over **a lazy dog**',
    actions: [
        {
            type: 'Button',
            url: '#',
            label: 'Start Shopping',
            style: 'primary',
            icon: 'cart'
        },
        {
            type: 'Link',
            url: '#',
            label: 'Get 15% discount',
            style: 'link',
            icon: 'arrowRight'
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
    badge: null,
    title: 'The quick, brown fox jumps over **a lazy dog**',
    actions: [
        {
            type: 'Link',
            url: '#',
            label: 'Learn More',
            style: 'link',
            icon: 'arrowRight'
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
