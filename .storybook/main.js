const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-docs',
        '@storybook/addon-postcss',
        '../addons/addon-stackbit-frontmatter/src/preset.js',
        '../addons/addon-stackbit-models/src/preset.js'
    ],
    webpackFinal: async (config) => {
        config.resolve.alias['next/link'] = path.resolve(__dirname, '../src/utils/next-link');
        config.resolve.alias['next/head'] = path.resolve(__dirname, '../node_modules/react-helmet');
        config.resolve.alias['next/dynamic'] = path.resolve(__dirname, '../src/utils/dynamic');
        config.resolve.alias[path.resolve(__dirname, '../src/dynamic-components')] = path.resolve(__dirname, './storybook-dynamic');
        return config;
    }
};
