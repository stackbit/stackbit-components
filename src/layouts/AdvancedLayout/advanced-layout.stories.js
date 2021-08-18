import React from 'react';
import AdvancedLayout from './index';

import * as CtaSectionStories from '../../components/CtaSection/cta-section.stories';
import * as NavBarStories from '../../components/NavBar/navbar.stories';
import * as FooterStories from '../../components/Footer/footer.stories';
import * as ContactSectionStories from '../../components/ContactSection/contact-section.stories';
import * as HeroSectionStories from '../../components/HeroSection/hero-section.stories';
import * as FeaturedPostsSectionStories from '../../components/FeaturedPostsSection/featured-posts-section.stories';
import * as TestimonialsSectionStories from '../../components/TestimonialsSection/testimonials-section.stories';

export default {
  title: 'Layouts/Advanced Page',
  component: AdvancedLayout
};

const Template = (args) => <AdvancedLayout {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'Advanced Page';
Primary.args = {
  page: {
    title: 'Example Page',
    sections: [
      HeroSectionStories.Primary.args,
      TestimonialsSectionStories.Primary.args,
      FeaturedPostsSectionStories.Primary.args,
      CtaSectionStories.Primary.args,
      ContactSectionStories.Primary.args
    ]
  },
  site: {
    ...NavBarStories.Primary.args,
    ...FooterStories.Primary.args
  }
};
