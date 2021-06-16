import React from 'react';

export const parameters = {
    options: {
        storySort: {
            order: [
                'Layouts',
                ['Landing'],
                'Components',
                ['Navigation Bar', 'Footer', 'Team Section']
            ],
        },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
};

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'light',
        toolbar: {
            icon: 'photo',
            items: [
                { value: 'light', title: 'Light Theme' },
                { value: 'dark', title: 'Dark Theme' }
            ]
        }
    }
};

function withThemeProvider(Story, context) {
    setThemeCSS(context.globals.theme);
    return <Story {...context} />;
}

export const decorators = [
    withThemeProvider
];
