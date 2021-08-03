import dynamic from 'next/dynamic';

export { default as NavBar } from './navbar';
export { default as Footer } from './footer';
export { default as Badge } from './badge';
export { default as Button } from './button';
export { default as ContactSection } from './contact-section';
export { default as CTASection } from './cta-section';
export { default as HeroSection } from './hero-section';
export { default as TestimonialsSection } from './testimonials-section';
export { default as PostsSection } from './posts-section';
export { default as VideoBlock } from './video-block';
export { default as ImageBlock } from './image-block';

// dynamic maps from model name to dynamic import
export const dynamicComponents = {
    navbar: dynamic(() => import('./navbar')),
    footer: dynamic(() => import('./footer')),
    badge: dynamic(() => import('./badge')),
    button: dynamic(() => import('./button')),
    contact_section: dynamic(() => import('./contact-section')),
    cta_section: dynamic(() => import('./cta-section')),
    hero_section: dynamic(() => import('./hero-section')),
    testimonials_section: dynamic(() => import('./testimonials-section')),
    posts_section: dynamic(() => import('./posts-section')),
    video_block: dynamic(() => import('./video-block')),
    image_block: dynamic(() => import('./image-block'))
}
