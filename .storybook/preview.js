import React from 'react';
import './storybook.css';
import '../themes/default/theme.css';

export const parameters = {
    backgrounds: { disable: true },
    options: {
        storySort: {
            order: [
                'Layouts',
                ['AdvancedLayout', 'PostLayout'],
                'Components',
                [
                    'NavBar',
                    'Footer',
                    'ContactSection',
                    'ContentSection',
                    'CtaSection',
                    'FeaturedPeopleSection',
                    'FeaturedPostsSection',
                    'HeroSection',
                    'QuoteSection',
                    'TestimonialsSection'
                ],
                'Atoms'
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