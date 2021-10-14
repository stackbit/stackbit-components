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
                primary: '#9BC1BC',
                secondary: '#F4F1BB',
                base: '#332E40',
                'complementary-1': '#8A8499',
                'complementary-2': '#DCE3D4',
                info: '#ED6A5A'
            },
            fontFamily: {
                heading: ['Myriad Pro', 'Myriad', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
                body: ['Constantia', 'Lucida Bright', 'Lucidabright', 'Lucida', 'Liberation Serif', 'Georgia', 'serif'],
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
