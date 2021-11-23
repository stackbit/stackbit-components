import * as React from 'react';

import * as HeaderStories from '../../components/Header/header.stories';
import * as FooterStories from '../../components/Footer/footer.stories';
import * as ContactSectionStories from '../../components/ContactSection/contact-section.stories';
import * as CtaSectionStories from '../../components/CtaSection/cta-section.stories';
import * as FaqStories from '../../components/FaqSection/faq-section.stories';
import * as FeaturedItemsStories from '../../components/FeaturedItemsSection/featured-items-section.stories';
import * as FeaturedPeopleSectionStories from '../../components/FeaturedPeopleSection/featured-people-section.stories';
import * as FeaturedPostsSectionStories from '../../components/FeaturedPostsSection/featured-posts-section.stories';
import * as HeroSectionStories from '../../components/HeroSection/hero-section.stories';
import * as LatestPostsSectionStories from '../../components/LatestPostsSection/latest-posts-section.stories';
import * as MediaGallerySectionStories from '../../components/MediaGallerySection/media-gallery-section.stories';
import * as QuoteSectionStories from '../../components/QuoteSection/quote-section.stories';
import * as TestimonialsSectionStories from '../../components/TestimonialsSection/testimonials-section.stories';
import * as TextSectionStories from '../../components/TextSection/text-section.stories';

import PageLayout from './index';

export default {
    title: 'Layouts/PageLayout',
    component: PageLayout,
    parameters: {
        StackbitFrontmatter: {
            root: 'page'
        },
        StackbitModels: {
            root: 'page'
        }
    }
};

const Template = (args) => <PageLayout {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'Layout';
Primary.args = {
    page: {
        title: 'Example Page',
        layout: 'PageLayout',
        sections: [
            ContactSectionStories.Primary.args,
            CtaSectionStories.Primary.args,
            FaqStories.Primary.args,
            FeaturedItemsStories.Primary.args,
            FeaturedPeopleSectionStories.Primary.args,
            FeaturedPostsSectionStories.Primary.args,
            HeroSectionStories.Primary.args,
            LatestPostsSectionStories.Primary.args,
            MediaGallerySectionStories.Primary.args,
            QuoteSectionStories.Primary.args,
            TextSectionStories.Primary.args,
            TestimonialsSectionStories.Primary.args
        ]
    },
    site: {
        header: HeaderStories.Primary.args,
        footer: FooterStories.Primary.args
    }
};
