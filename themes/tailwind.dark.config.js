const kitwindTheme = require('./kitwind');
const plugin = require('tailwindcss/plugin')

module.exports = {
    mode: 'jit',
    purge: {
        enabled: true,
        content: ['./src/**/*.{js,ts,jsx,tsx}']
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            ...kitwindTheme.theme.extend,
            backgroundColor: (theme) => ({
                ...theme('colors'),
                primary: kitwindTheme.theme.extend.colors.gray['900'],
                secondary: kitwindTheme.theme.extend.colors['deep-purple']['accent-700']
            }),
            textColor: (theme) => ({
                ...theme('colors'),
                primary: kitwindTheme.theme.extend.colors.teal['accent-400'],
                'primary-hover': kitwindTheme.theme.extend.colors.teal['accent-700'],
                dark: kitwindTheme.theme.extend.colors.gray['100'],
                'dark-hover': kitwindTheme.theme.extend.colors.teal['accent-700'],
                light: kitwindTheme.theme.extend.colors.gray['100'],
                'secondary-foreground': kitwindTheme.theme.extend.colors.indigo['100'],
                paragraph: kitwindTheme.theme.extend.colors.gray['400'],
            })
        }
    },
    variants: kitwindTheme.variants,
    plugins: kitwindTheme.plugins.concat([
        plugin(function({ addBase, addComponents }) {
            addBase({
                'body': { backgroundColor: kitwindTheme.theme.extend.colors.gray['900'] }
            })
            addComponents({
                '.header-2': {
                    "@apply font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none": {}
                }
            })
        })
    ])
};
