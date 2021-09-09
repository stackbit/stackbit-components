import React from 'react';

import * as CtaSectionStories from '../../components/CtaSection/cta-section.stories';
import * as NavBarStories from '../../components/NavBar/navbar.stories';
import * as FooterStories from '../../components/Footer/footer.stories';
import * as ContactSectionStories from '../../components/ContactSection/contact-section.stories';
import * as HeroSectionStories from '../../components/HeroSection/hero-section.stories';
import * as FeaturedPostsSectionStories from '../../components/FeaturedPostsSection/featured-posts-section.stories';
import * as TestimonialsSectionStories from '../../components/TestimonialsSection/testimonials-section.stories';
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
            HeroSectionStories.Primary.args,
            TestimonialsSectionStories.Primary.args,
            FeaturedPostsSectionStories.Primary.args,
            CtaSectionStories.Primary.args,
            ContactSectionStories.Primary.args
        ]
    },
    site: {
        backgroundColor: 'bg-white',
        navBar: NavBarStories.Primary.args,
        footer: FooterStories.Primary.args
    }
};
