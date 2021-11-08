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
                body: '#414c58',
                headlines: '#303941',
                primary: '#28aaff',
                secondary: '#dfe3e7',
                neutral: '#282f36',
                complementary: '#e9f6ff',
                'complementary-alt': '#fffde2'
            },
            fontFamily: {
                body: defaultTheme.fontFamily.sans,
                headlines: defaultTheme.fontFamily.sans
            },
            spacing: {
                '1/1': '100%',
                '9/16': '56.25%'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [
        plugin(function ({ addBase, addComponents }) {
            addBase({
                h1: {
                    fontWeight: 'bold',
                    letterSpacing: 'normal',
                    textDecoration: 'none',
                    textTransform: 'none',
                },
                h2: {
                    fontWeight: 'bold',
                    letterSpacing: 'normal',
                    textDecoration: 'none',
                    textTransform: 'none',
                },
                h3: {
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
                        fontWeight: 'bold',
                        letterSpacing: 'normal',
                        padding: '12px 24px',
                        textTransform: 'none'
                    },
                    '.sb-component-button-secondary': {
                        borderRadius: '0',
                        borderStyle: 'solid',
                        boxShadow: 'none',
                        fontWeight: 'bold',
                        letterSpacing: 'normal',
                        padding: '12px 24px',
                        textTransform: 'none'
                    }
                });
        })
    ]
};
