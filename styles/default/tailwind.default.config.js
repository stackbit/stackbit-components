const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    purge: {
        enabled: false,
        content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/@stackbit/components/{base,layouts,components}/**/*.{js,ts,jsx,tsx}'],
        safelist: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e', 'colors-f']
    },
    darkMode: false,
    theme: {
        extend: {
            colors: {
                primary: '#28aaff',
                secondary: '#dfe3e7',
                base: '#282f36',
                'complimentary-1': '#e9f6ff',
                'complimentary-2': '#fffde2',
                info: '#ffa928'
            },
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.serif]
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
