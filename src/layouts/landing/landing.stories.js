import React from 'react';
import Landing from './index';

import * as NavBarStories from '../../components/navbar/navbar.stories';
import FooterStory from '../../components/footer/footer.stories';
import * as HeroSectionStories from '../../components/hero-section/hero-section.stories';
import * as TeamSectionStories from '../../components/team-section/team-section.stories';

export default {
    title: 'Layouts/Landing Page',
    component: Landing
};

const Template = (args) => <Landing {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'Landing Page';
Primary.args = {
    page: {
        title: 'Example Page',
        sections: [
            HeroSectionStories.HeroVideo.args,
            TeamSectionStories.Primary.args,
            HeroSectionStories.HeroSVG.args
        ]
    },
    siteConfig: {
        ...NavBarStories.Primary.args,
        ...FooterStory.args
    }
};
