import React from 'react';
import TeamSection from './team-section';

export default {
    title: 'Components/Team Section',
    component: TeamSection,
    argTypes: {
        variant: {
            options: ['variant-a', 'variant-b'],
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <TeamSection {...args} />;

const args = {
    type: 'section_team',
    badge: 'Know Our Team',
    subtitle: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    variant: 'variant-a',
    team: [
        {
            name: 'Oliver Aguilerra',
            title: 'Product Manager',
            bio: 'Vincent Van Gogh’s most popular painting, The Starry Night.',
            photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260',
            social_links: [
                {
                    type: 'twitter',
                    url: 'https://www.example.com'
                },
                {
                    type: 'facebook',
                    url: 'https://www.example.com'
                }
            ]
        },
        {
            name: 'Marta Clermont',
            title: 'Design Team Lead',
            bio: 'Amet I love liquorice jujubes pudding croissant I love pudding.',
            photo: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260',
            social_links: [
                {
                    type: 'twitter',
                    url: 'https://www.example.com'
                },
                {
                    type: 'facebook',
                    url: 'https://www.example.com'
                }
            ]
        },
        {
            name: 'Alice Melbourne',
            title: 'Human Resources',
            bio: 'Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.',
            photo: 'https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260',
            social_links: [
                {
                    type: 'twitter',
                    url: 'https://www.example.com'
                },
                {
                    type: 'facebook',
                    url: 'https://www.example.com'
                }
            ]
        },
        {
            name: 'John Doe',
            title: 'Good guy',
            bio: 'Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank.',
            photo: 'https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260',
            social_links: [
                {
                    type: 'twitter',
                    url: 'https://www.example.com'
                },
                {
                    type: 'facebook',
                    url: 'https://www.example.com'
                }
            ]
        }
    ]
};

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.storyName = 'info under image';
Primary.args = { ...args, variant: 'variant-a' };

export const VariantB = Template.bind({});
VariantB.storyName = 'info to the right of the image';
VariantB.args = { ...args, variant: 'variant-b' };
