import { registerDynamicComponents, components, layouts } from '../src';

registerDynamicComponents({
    advanced: layouts.Advanced,
    CheckboxFormControl: components.CheckboxFormControl,
    ContactSection: components.ContactSection,
    ContentSection: components.ContentSection,
    CtaSection: components.CtaSection,
    EmailFormControl: components.EmailFormControl,
    FeaturedPostsSection: components.FeaturedPostsSection,
    FormBlock: components.FormBlock,
    HeroSection: components.HeroSection,
    ImageBlock: components.ImageBlock,
    SelectFormControl: components.SelectFormControl,
    TestimonialsSection: components.TestimonialsSection,
    TextFormControl: components.TextFormControl,
    TextareaFormControl: components.TextareaFormControl,
    VideoBlock: components.VideoBlock
});
