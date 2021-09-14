import React from 'react';

import * as NavBarStories from '../../components/NavBar/navbar.stories';
import * as FooterStories from '../../components/Footer/footer.stories';
import * as ContactSectionStories from '../../components/ContactSection/contact-section.stories';
import * as ContentSectionStories from '../../components/ContentSection/content-section.stories';
import * as CtaSectionStories from '../../components/CtaSection/cta-section.stories';
import * as FeaturedPeopleSectionStories from '../../components/FeaturedPeopleSection/featured-people-section.stories';
import * as FeaturedPostsSectionStories from '../../components/FeaturedPostsSection/featured-posts-section.stories';
import * as HeroSectionStories from '../../components/HeroSection/hero-section.stories';
import * as TestimonialsSectionStories from '../../components/TestimonialsSection/testimonials-section.stories';
import * as QuoteSectionStories from '../../components/QuoteSection/quote-section.stories';

import AdvancedLayout from './index';

export default {
    title: 'Layouts/AdvancedLayout',
    component: AdvancedLayout,
    parameters: {
        StackbitFrontmatter: {
            root: 'page'
        },
        StackbitModels: {
            root: 'page'
        }
    }
};

const Template = (args) => <AdvancedLayout {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'Layout';
Primary.args = {
    page: {
        title: 'Example Page',
        layout: 'AdvancedLayout',
        sections: [
            ContactSectionStories.Primary.args,
            ContentSectionStories.Primary.args,
            CtaSectionStories.Primary.args,
            FeaturedPeopleSectionStories.Primary.args,
            FeaturedPostsSectionStories.Primary.args,
            HeroSectionStories.Primary.args,
            TestimonialsSectionStories.Primary.args,
            QuoteSectionStories.Primary.args
        ]
    },
    site: {
        backgroundColor: 'bg-white',
        navBar: NavBarStories.Primary.args,
        footer: FooterStories.Primary.args
    }
};
