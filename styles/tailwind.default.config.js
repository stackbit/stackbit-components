const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    purge: {
        enabled: false,
        content: [
            './src/**/*.{js,ts,jsx,tsx}',
            './node_modules/@stackbit/components/src/{base,layouts,components,utils}/**/*.{js,ts,jsx,tsx}',
            './content/**/*'
        ],
        safelist: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e', 'colors-f', 'colors-g', 'colors-h', 'colors-i']
    },
    darkMode: false,
    theme: {
        extend: {
            colors: {
                main: '#ffffff',
                light: '#ffffff',
                'on-light': '#303941',
                dark: '#282f36',
                'on-dark': '#ffffff',
                primary: '#28aaff',
                'on-primary': '#303941',
                secondary: '#dfe3e7',
                'on-secondary': '#303941',
                complementary: '#e9f6ff',
                'on-complementary': '#303941',
                'complementary-alt': '#fffde2',
                'on-complementary-alt': '#303941'
            },
            spacing: {
                '1/1': '100%',
                '2/3': '66.666%',
                '3/2': '150%',
                '3/4': '75%',
                '4/3': '133.333%',
                '9/16': '56.25%'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [
        plugin(function ({ addBase, addComponents, theme }) {
            addBase({
                h1: {
                    fontSize: theme('fontSize.5xl'),
                    fontWeight: 'bold',
                    letterSpacing: 'normal',
                    textDecoration: 'none',
                    textTransform: 'none'
                },
                h2: {
                    fontSize: theme('fontSize.4xl'),
                    fontWeight: 'bold',
                    letterSpacing: 'normal',
                    textDecoration: 'none',
                    textTransform: 'none'
                },
                h3: {
                    fontSize: theme('fontSize.3xl'),
                    fontWeight: 'bold',
                    letterSpacing: 'normal',
                    textDecoration: 'none',
                    textTransform: 'none'
                },
                h4: {
                    fontSize: theme('fontSize.2xl'),
                    fontWeight: 'bold',
                    letterSpacing: 'normal',
                    textDecoration: 'none',
                    textTransform: 'none'
                },
                h5: {
                    fontSize: theme('fontSize.xl'),
                    fontWeight: 'bold',
                    letterSpacing: 'normal',
                    textDecoration: 'none',
                    textTransform: 'none'
                },
                h6: {
                    fontSize: theme('fontSize.lg'),
                    fontWeight: 'bold',
                    letterSpacing: 'normal',
                    textDecoration: 'none',
                    textTransform: 'none'
                }
            }),
            addComponents({
                '.sb-component-button-primary': {
                    borderRadius: '0',
                    boxShadow: 'none',
                    fontWeight: 'normal',
                    letterSpacing: 'normal',
                    padding: '12px 24px',
                    textTransform: 'none'
                },
                '.sb-component-button-secondary': {
                    borderRadius: '0',
                    borderStyle: 'solid',
                    boxShadow: 'none',
                    fontWeight: 'normal',
                    letterSpacing: 'normal',
                    padding: '12px 24px',
                    textTransform: 'none'
                },
                '.sb-component-link': {
                    fontWeight: 'normal',
                    letterSpacing: 'normal',
                    textTransform: 'none'
                }
            });
        })
    ]
};
