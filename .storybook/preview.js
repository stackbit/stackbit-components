import React from 'react';

export const parameters = {
    backgrounds: { disable: true },
    options: {
        storySort: {
            order: ['Layouts', ['Landing'], 'Components', ['Navigation Bar', 'Footer', 'Contact Section', 'CTA Section', 'Hero Section', 'Posts Section', 'Testimonials Section'], 'Atoms']
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
        defaultValue: 'light',
        toolbar: {
            icon: 'photo',
            items: [
                { value: 'light', title: 'Light Theme' }
            ]
        }
    }
};

function withThemeProvider(Story, context) {
    setThemeCSS(context.globals.theme);
    return <Story {...context} />;
}

export const decorators = [withThemeProvider];
