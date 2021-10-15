const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-docs',
        '@storybook/addon-postcss'
    ],
    managerEntries: [
        './src/storybook-addons/addon-stackbit-frontmatter/register',
        './src/storybook-addons/addon-stackbit-models/register'
    ],
    webpackFinal: async (config) => {
        config.resolve.alias['next/link'] = path.resolve(__dirname, '../src/storybook-polyfills/next-link');
        config.resolve.alias['next/head'] = path.resolve(__dirname, '../node_modules/react-helmet');
        config.resolve.alias['next/dynamic'] = path.resolve(__dirname, '../src/storybook-polyfills/next-dynamic');
        config.resolve.alias[path.resolve(__dirname, '../src/dynamic-components')] = path.resolve(__dirname, './storybook-dynamic');
        return config;
    }
};
