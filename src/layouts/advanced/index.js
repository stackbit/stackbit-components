import React from 'react';

import BaseLayout from '../base-layout/base-layout';
import ContactSection from '../../components/contact-section';
import CTASection from '../../components/cta-section';
import HeroSection from '../../components/hero-section';
import PostsSection from '../../components/posts-section';
import TestimonialsSection from '../../components/testimonials-section';

const components = {
    contact_section: ContactSection,
    cta_section: CTASection,
    hero_section: HeroSection,
    posts_section: PostsSection,
    testimonials_section: TestimonialsSection
};

export default function Advanced(props) {
    const siteConfig = props?.siteConfig ?? {};
    const page = props?.page ?? {};
    const sections = page?.sections ?? [];
    const urlPath = page?.__metadata?.urlPath ?? '';
    const pageUrl = '/' + urlPath.replace(/^\//, '');

    return (
        <BaseLayout page={page} siteConfig={siteConfig}>
            {sections.map((section, index) => {
                const sectionType = section?.type;
                if (!sectionType) {
                    throw new Error(`page section does not have the 'type' property, page: ${pageUrl}`);
                }
                const Component = components[sectionType];
                if (!Component) {
                    throw new Error(`no component matching the page section's type: ${sectionType}`);
                }
                return <Component key={index} {...section} />;
            })}
        </BaseLayout>
    );
}
