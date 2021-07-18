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
                primary: '#ffffff',
                secondary: kitwindTheme.theme.extend.colors.teal['accent-400']
            }),
            textColor: (theme) => ({
                ...theme('colors'),
                primary: kitwindTheme.theme.extend.colors['deep-purple']['accent-400'],
                'primary-hover': kitwindTheme.theme.extend.colors['deep-purple']['800'],
                dark: kitwindTheme.theme.extend.colors.gray['800'],
                'dark-hover': kitwindTheme.theme.extend.colors['deep-purple']['accent-700'],
                light: kitwindTheme.theme.extend.colors.gray['700'],
                'secondary-foreground': kitwindTheme.theme.extend.colors.teal['900'],
                paragraph: kitwindTheme.theme.extend.colors.gray['700'],
            })
        }
    },
    variants: kitwindTheme.variants,
    plugins: kitwindTheme.plugins.concat([
        plugin(function({ addComponents, theme }) {
            addComponents({
                '.header-2': {
                    "@apply font-sans text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl sm:leading-none": {}
                },
                '.btn': {
                    padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
                    borderRadius: theme('borderRadius.md'),
                    fontWeight: theme('fontWeight.600'),
                },
                '.btn-indigo': {
                    backgroundColor: theme('colors.indigo.500'),
                    color: theme('colors.white'),
                    '&:hover': {
                        backgroundColor: theme('colors.indigo.600')
                    },
                },
            })
        })
    ])
};
