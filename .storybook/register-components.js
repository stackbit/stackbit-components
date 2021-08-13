import { registerDynamicComponents, components, layouts } from '../src';

registerDynamicComponents({
    advanced: layouts.Advanced,
    ContactSection: components.ContactSection,
    CtaSection: components.CtaSection,
    HeroSection: components.HeroSection,
    TestimonialsSection: components.TestimonialsSection,
    PostsSection: components.PostsSection,
    VideoBlock: components.VideoBlock,
    ImageBlock: components.ImageBlock
});
