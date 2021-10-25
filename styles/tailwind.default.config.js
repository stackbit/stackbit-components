const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    purge: {
        enabled: false,
        content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/@stackbit/components/src/{base,layouts,components,utils}/**/*.{js,ts,jsx,tsx}'],
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
                '1/3': '33.333%',
                '1/2': '50%',
                '2/3': '66.667%'
            },
            minHeight: {
                '2/3-screen': '66vh'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
