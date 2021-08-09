import dynamic from 'next/dynamic';

const components = {
  advanced: dynamic(() => import('./layouts/advanced')),
  contact_section: dynamic(() => import('./components/contact-section')),
  cta_section: dynamic(() => import('./components/cta-section')),
  hero_section: dynamic(() => import('./components/hero-section')),
  testimonials_section: dynamic(() => import('./components/testimonials-section')),
  posts_section: dynamic(() => import('./components/posts-section')),
  video_block: dynamic(() => import('./components/video-block')),
  image_block: dynamic(() => import('./components/image-block'))
};

export default components;
