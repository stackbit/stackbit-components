import React from 'react';
import './storybook.css';
import '../styles/default.css';

export const parameters = {
    backgrounds: { disable: true },
    options: {
        storySort: {
            order: [
                'Layouts',
                ['PageLayout', 'PostLayout'],
                'Components',
                [
                    'Header',
                    'Footer',
                    'ContactSection',
                    'CtaSection',
                    'FeaturedPeopleSection',
                    'FeaturedPostsSection',
                    'HeroSection',
                    'QuoteSection',
                    'TestimonialsSection',
                    'TextSection'
                ],
                'Blocks'
            ]
        }
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    layout: 'fullscreen'
};
