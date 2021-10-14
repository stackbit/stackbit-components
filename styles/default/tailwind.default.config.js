const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    purge: {
        enabled: false,
        content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/@stackbit/components/{base,layouts,components}/**/*.{js,ts,jsx,tsx}'],
        safelist: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e', 'colors-f', 'colors-g', 'colors-h', 'colors-i']
    },
    darkMode: false,
    theme: {
        extend: {
            colors: {
                body: '#414c58',
                headline: '#303941',
                primary: '#28aaff',
                secondary: '#dfe3e7',
                neutral: '#282f36',
                'complementary': '#e9f6ff',
                'complementary-alt': '#fffde2',
                info: '#ffa928',
                success: '#9bed72',
                warning: '#df1c2e'
            },
            fontFamily: {
                heading: ['Myriad Pro', 'Myriad', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
                body: ['Myriad Pro', 'Myriad', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
            },
            spacing: {
                '1/1': '100%',
                '1/3': '33.333%',
                '1/2': '50%',
                '2/3': '66.667%'
            },
            minHeight: {
                '2/3-screen': '66vh',
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
