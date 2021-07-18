import React from 'react';
import Landing from './index';

import * as NavBarStories from '../../components/navbar/navbar.stories';
import * as FooterStories from '../../components/footer/footer.stories';
import * as FormSectionStories from '../../components/form-section/form-section.stories';
import * as HeroSectionStories from '../../components/hero-section/hero-section.stories';
import * as PostsSectionStories from '../../components/posts-section/posts-section.stories';
import * as TestimonialsSectionStories from '../../components/testimonials-section/testimonials-section.stories';

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
            HeroSectionStories.HeroImage.args,
            TestimonialsSectionStories.Primary.args,
            PostsSectionStories.Primary.args,
            FormSectionStories.Primary.args
        ]
    },
    siteConfig: {
        ...NavBarStories.Primary.args,
        ...FooterStories.Primary.args
    }
};
