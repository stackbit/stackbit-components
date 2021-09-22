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
                primary: '#512D6D',
                secondary: '#F8485E',
                base: '#EEEEEE',
                'complimentary-1': '#e8f3ee',
                'complimentary-2': '#e2e4ff',
                info: '#00C1D4'
            },
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.serif]
            },
            spacing: {
                '1/1': '100%',
                '1/3': '33.333%',
                '1/2': '50%',
                '2/3': '66.667%'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
