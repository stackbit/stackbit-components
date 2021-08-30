import React from 'react';

export const parameters = {
    backgrounds: { disable: true },
    options: {
        storySort: {
            order: ['Layouts', ['AdvancedLayout', 'PostLayout'], 'Components', ['NavBar', 'Footer', 'ContactSection', 'ContentSection', 'CtaSection', 'FeaturedPeopleSection', 'FeaturedPostsSection', 'HeroSection', 'TestimonialsSection'], 'Atoms']
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

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'bold',
        toolbar: {
            icon: 'cog',
            items: [
                { value: 'bold', title: 'Bold Theme' },
                { value: 'eco', title: 'Eco Theme' },
                { value: 'modern', title: 'Modern Theme' },
                { value: 'retro', title: 'Retro Theme' }
            ]
        }
    }
};

function withThemeProvider(Story, context) {
    setThemeCSS(context.globals.theme);
    return <Story {...context} />;
}

export const decorators = [withThemeProvider];
