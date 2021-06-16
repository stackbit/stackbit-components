const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-postcss'],
    webpackFinal: async (config) => {
        config.resolve.alias['next/link'] = path.resolve(__dirname, '../src/utils/next-link')
        config.resolve.alias['next/head'] = path.resolve(__dirname, '../node_modules/react-helmet')
        return config;
    }
};
