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
                headlines: '#303941',
                primary: '#9bc1bc',
                secondary: '#f4f1bb',
                neutral: '#332e40',
                'complementary': '#8a8499',
                'complementary-alt': '#dce3d4',
                info: '#ed6a5a',
                success: '#9bed72',
                warning: '#df1c2e'
            },
            fontFamily: {
                body: defaultTheme.fontFamily.serif,
                headlines: defaultTheme.fontFamily.sans
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
