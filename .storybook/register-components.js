import { registerDynamicComponents, components, layouts } from '../src';

registerDynamicComponents({
    landing: layouts.Advanced,
    contact_section: components.ContactSection,
    cta_section: components.CTASection,
    hero_section: components.HeroSection,
    testimonials_section: components.TestimonialsSection,
    posts_section: components.PostsSection,
    video_block: components.VideoBlock,
    image_block: components.ImageBlock
});
