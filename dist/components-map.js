"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const getDefault = (mod) => mod.default;

const dynamic = require('next/dynamic').default;

const Action = require('./components/Action').default;
const Footer = require('./components/Footer').default;
const Header = require('./components/Header').default;
const Social = require('./components/Social').default;

module.exports.componentsMap = {
    // static components, key is component name
    'Action': Action,
    'Footer': Footer,
    'Header': Header,
    'Social': Social,

    // dynamic components, key is model name
    'AlertSection': dynamic(
        () => import('./components/AlertSection/index.js').then(getDefault),
        {
            webpack: () => [require.resolveWeak('./components/AlertSection/index.js')],
            modules: ['../../node_modules/@stackbit/components/dist/components-map.js -> ./components/AlertSection/index.js']
        }
    ),
    'CheckboxFormControl': dynamic(
        () => import('./components/CheckboxFormControl/index.js').then(getDefault),
        {
            webpack: () => [require.resolveWeak('./components/CheckboxFormControl/index.js')],
            modules: ['../../node_modules/@stackbit/components/dist/components-map.js -> ./components/CheckboxFormControl/index.js']
        }
    ),
    'ContactSection': dynamic(
        () => import('./components/ContactSection/index.js').then(getDefault),
        {
            webpack: () => [require.resolveWeak('./components/ContactSection/index.js')],
            modules: ['../../node_modules/@stackbit/components/dist/components-map.js -> ./components/ContactSection/index.js']
        }
    ),
    'CtaSection': dynamic(
        () => import('./components/CtaSection/index.js').then(getDefault),
        {
            webpack: () => [require.resolveWeak('./components/CtaSection/index.js')],
            modules: ['../../node_modules/@stackbit/components/dist/components-map.js -> ./components/CtaSection/index.js']
        }
    ),
    'EmailFormControl': dynamic(
        () => import('./components/EmailFormControl/index.js').then(getDefault),
        {
            webpack: () => [require.resolveWeak('./components/EmailFormControl/index.js')],
            modules: ['../../node_modules/@stackbit/components/dist/components-map.js -> ./components/EmailFormControl/index.js']
        }
    ),
    'FeaturedPeopleSection': dynamic(
        () => import('./components/FeaturedPeopleSection/index.js').then(getDefault),
        {
            webpack: () => [require.resolveWeak('./components/FeaturedPeopleSection/index.js')],
            modules: ['../../node_modules/@stackbit/components/dist/components-map.js -> ./components/FeaturedPeopleSection/index.js']
        }
    ),
    'FeaturedPostsSection': dynamic(
        () => import('./components/FeaturedPostsSection/index.js').then(getDefault),
        {
            webpack: () => [require.resolveWeak('./components/FeaturedPostsSection/index.js')],
            modules: ['../../node_modules/@stackbit/components/dist/components-map.js -> ./components/FeaturedPostsSection/index.js']
        }
    ),
    'FormBlock': dynamic(
        () => import('./components/FormBlock/index.js').then(getDefault),
        {
            webpack: () => [require.resolveWeak('./components/FormBlock/index.js')],
            modules: ['../../node_modules/@stackbit/components/dist/components-map.js -> ./components/FormBlock/index.js']
        }
    ),
    'HeroSection': dynamic(
        () => import('./components/HeroSection/index.js').then(getDefault),
        {
            webpack: () => [require.resolveWeak('./components/HeroSection/index.js')],
            modules: ['../../node_modules/@stackbit/components/dist/components-map.js -> ./components/HeroSection/index.js']
        }
    ),
    'ImageBlock': dynamic(
        () => import('./components/ImageBlock/index.js').then(getDefault),
        {
            webpack: () => [require.resolveWeak('./components/ImageBlock/index.js')],
            modules: ['../../node_modules/@stackbit/components/dist/components-map.js -> ./components/ImageBlock/index.js']
        }
    ),
    'MediaGallerySection': dynamic(
        () => import('./components/MediaGallerySection/index.js').then(getDefault),
        {
            webpack: () => [require.resolveWeak('./components/MediaGallerySection/index.js')],
            modules: ['../../node_modules/@stackbit/components/dist/components-map.js -> ./components/MediaGallerySection/index.js']
        }
    ),
    'PostFeedSection': dynamic(
        () => import('./components/PostFeedSection/index.js').then(getDefault),
        {
            webpack: () => [require.resolveWeak('./components/PostFeedSection/index.js')],
            modules: ['../../node_modules/@stackbit/components/dist/components-map.js -> ./components/PostFeedSection/index.js']
        }
    ),
    'QuoteSection': dynamic(
        () => import('./components/QuoteSection/index.js').then(getDefault),
        {
            webpack: () => [require.resolveWeak('./components/QuoteSection/index.js')],
            modules: ['../../node_modules/@stackbit/components/dist/components-map.js -> ./components/QuoteSection/index.js']
        }
    ),
    'SelectFormControl': dynamic(
        () => import('./components/SelectFormControl/index.js').then(getDefault),
        {
            webpack: () => [require.resolveWeak('./components/SelectFormControl/index.js')],
            modules: ['../../node_modules/@stackbit/components/dist/components-map.js -> ./components/SelectFormControl/index.js']
        }
    ),
    'TestimonialsSection': dynamic(
        () => import('./components/TestimonialsSection/index.js').then(getDefault),
        {
            webpack: () => [require.resolveWeak('./components/TestimonialsSection/index.js')],
            modules: ['../../node_modules/@stackbit/components/dist/components-map.js -> ./components/TestimonialsSection/index.js']
        }
    ),
    'TextareaFormControl': dynamic(
        () => import('./components/TextareaFormControl/index.js').then(getDefault),
        {
            webpack: () => [require.resolveWeak('./components/TextareaFormControl/index.js')],
            modules: ['../../node_modules/@stackbit/components/dist/components-map.js -> ./components/TextareaFormControl/index.js']
        }
    ),
    'TextFormControl': dynamic(
        () => import('./components/TextFormControl/index.js').then(getDefault),
        {
            webpack: () => [require.resolveWeak('./components/TextFormControl/index.js')],
            modules: ['../../node_modules/@stackbit/components/dist/components-map.js -> ./components/TextFormControl/index.js']
        }
    ),
    'TextSection': dynamic(
        () => import('./components/TextSection/index.js').then(getDefault),
        {
            webpack: () => [require.resolveWeak('./components/TextSection/index.js')],
            modules: ['../../node_modules/@stackbit/components/dist/components-map.js -> ./components/TextSection/index.js']
        }
    ),
    'VideoBlock': dynamic(
        () => import('./components/VideoBlock/index.js').then(getDefault),
        {
            webpack: () => [require.resolveWeak('./components/VideoBlock/index.js')],
            modules: ['../../node_modules/@stackbit/components/dist/components-map.js -> ./components/VideoBlock/index.js']
        }
    ),
    'PageLayout': dynamic(
        () => import('./layouts/PageLayout/index.js').then(getDefault),
        {
            webpack: () => [require.resolveWeak('./layouts/PageLayout/index.js')],
            modules: ['../../node_modules/@stackbit/components/dist/components-map.js -> ./layouts/PageLayout/index.js']
        }
    ),
    'PostLayout': dynamic(
        () => import('./layouts/PostLayout/index.js').then(getDefault),
        {
            webpack: () => [require.resolveWeak('./layouts/PostLayout/index.js')],
            modules: ['../../node_modules/@stackbit/components/dist/components-map.js -> ./layouts/PostLayout/index.js']
        }
    )
};