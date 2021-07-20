import React from 'react';

import BaseLayout from '../base-layout/base-layout';
import CTASection from '../../components/cta-section';
import FormSection from '../../components/form-section';
import HeroSection from '../../components/hero-section';
import PostsSection from '../../components/posts-section';
import TestimonialsSection from '../../components/testimonials-section';

const components = {
    section_cta: CTASection,
    section_form: FormSection,
    section_hero: HeroSection,
    section_posts: PostsSection,
    section_testimonials: TestimonialsSection,
};

export default function Landing(props) {
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
