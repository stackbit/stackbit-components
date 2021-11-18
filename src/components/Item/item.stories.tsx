import React from 'react';
import { Subtitle, Description, Primary as PrimaryStory, ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import StackbitFrontmatter from '../../storybook-addons/addon-stackbit-frontmatter/StackbitFrontmatter';
import StackbitModels from '../../storybook-addons/addon-stackbit-models/StackbitModels';
import Item from './index';

export default {
    title: 'Blocks/Item',
    component: Item,
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

const Template = (args) => <Item {...args} />;

const args = {
    type: 'Item',
    title: 'Item block',
    subtitle: 'Item block example subtitle',
    author: 'Earnest Hemingway',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.',
    featuredImage: {
        type: 'ImageBlock',
        url: '/images/post-1.jpeg',
        altText: 'Post Image'
    },
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
    styles: {
        title: {
            fontWeight: 700,
            fontStyle: 'normal',
            textAlign: 'left',
            margin: ['mt-0', 'mb-4']
        },
        subtitle: {
            fontWeight: 400,
            fontStyle: 'normal',
            textAlign: 'left',
            margin: ['mt-0', 'mb-6']
        },
        content: {
            textAlign: 'left',
            margin: ['mt-0', 'mb-8']
        },
        actions: {
            justifyContent: 'flex-start'
        }
    }
};

export const Primary = Template.bind({});
Primary.storyName = 'Item with content';
Primary.args = args;
