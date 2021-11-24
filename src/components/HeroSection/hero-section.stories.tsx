import React from 'react';
import { Subtitle, Description, Primary as PrimaryStory, ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import StackbitFrontmatter from '../../storybook-addons/addon-stackbit-frontmatter/StackbitFrontmatter';
import StackbitModels from '../../storybook-addons/addon-stackbit-models/StackbitModels';
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
    colors: 'colors-h',
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
    media: {
        type: 'ImageBlock',
        url: 'https://assets.stackbit.com/components/images/default/hero.png',
        altText: 'Image alt text',
        caption: 'Image caption'
    },
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
            borderColor: 'border-dark'
        },
        title: {
            textAlign: 'left'
        },
        subtitle: {
            textAlign: 'left'
        },
        text: {
            textAlign: 'left'
        },
        actions: {
            justifyContent: 'flex-start'
        }
    }
};

export const Primary = Template.bind({});
Primary.storyName = 'Hero Section With Image on the Right';
Primary.args = args;

export const HeroImageBottom = Template.bind({});
HeroImageBottom.storyName = 'Hero Section With Image at the Bottom';
HeroImageBottom.args = {
    ...args,
    styles: {
        self: {
            height: 'auto',
            width: 'wide',
            margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0'],
            padding: ['pt-12', 'pb-12', 'pl-4', 'pr-4'],
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'col',
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
        },
        text: {
            textAlign: 'left'
        },
        actions: {
            justifyContent: 'flex-start'
        }
    }
};

export const HeroVideoLeft = Template.bind({});
HeroVideoLeft.storyName = 'Hero Section With Video on the Left';
HeroVideoLeft.args = {
    ...args,
    actions: [
        {
            type: 'Button',
            url: '#',
            label: 'Get started',
            style: 'primary'
        }
    ],
    media: {
        type: 'VideoBlock',
        url: 'https://assets.stackbit.com/components/videos/default/stackbit-for-marketers.mp4',
        thumbnailUrl: 'https://assets.stackbit.com/components/images/default/stackbit-for-marketers.jpeg',
        autoplay: true,
        loop: true,
        muted: true,
        controls: false
    },
    styles: {
        self: {
            height: 'auto',
            width: 'full',
            margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0'],
            padding: ['pt-12', 'pb-12', 'pl-4', 'pr-4'],
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row-reverse',
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
        },
        text: {
            textAlign: 'left'
        },
        actions: {
            justifyContent: 'flex-start'
        }
    }
};

export const HeroFormBottom = Template.bind({});
HeroFormBottom.storyName = 'Hero Section With Form at the Bottom';
HeroFormBottom.args = {
    ...args,
    title: 'Join our newsletter',
    actions: null,
    media: {
        type: 'FormBlock',
        elementId: 'hero-form',
        fields: [
            {
                type: 'TextFormControl',
                name: 'name',
                label: 'Name',
                placeholder: 'john.doe@example.org',
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
        submitLabel: 'Subscribe',
        styles: {
            submitLabel: {
                textAlign: 'center'
            }
        }
    },
    styles: {
        self: {
            height: 'screen',
            width: 'narrow',
            margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0'],
            padding: ['pt-12', 'pb-12', 'pl-4', 'pr-4'],
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'col',
            borderRadius: 'none',
            borderWidth: 0,
            borderStyle: 'none',
            borderColor: 'border-dark'
        },
        title: {
            textAlign: 'center'
        },
        subtitle: {
            textAlign: 'center'
        },
        text: {
            textAlign: 'center'
        },
        actions: {
            justifyContent: 'center'
        }
    }
};

export const HeroTextOnly = Template.bind({});
HeroTextOnly.storyName = 'Hero Section With Borders and Without Feature';
HeroTextOnly.args = {
    ...args,
    media: null,
    backgroundImage: {
        type: 'ImageBlock',
        url: 'https://assets.stackbit.com/components/images/default/bg.jpg',
        altText: 'Hero Image',
        caption: '',
        styles: {
            self: {
                opacity: 50
            }
        }
    },
    styles: {
        self: {
            height: 'screen',
            width: 'narrow',
            margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0'],
            padding: ['pt-12', 'pb-12', 'pl-4', 'pr-4'],
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            borderRadius: 'medium',
            borderWidth: 8,
            borderStyle: 'dashed',
            borderColor: 'border-dark'
        },
        title: {
            textAlign: 'center'
        },
        subtitle: {
            textAlign: 'center'
        },
        text: {
            textAlign: 'center'
        },
        actions: {
            justifyContent: 'center'
        }
    }
};
