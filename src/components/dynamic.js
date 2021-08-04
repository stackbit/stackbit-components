import dynamic from 'next/dynamic';

// dynamic maps from model name to dynamic import
const components = {
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
};

export default components;
