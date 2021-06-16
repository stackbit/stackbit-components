const kitwindTheme = require('./kitwind');

module.exports = {
    purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
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
                dark: kitwindTheme.theme.extend.colors.gray['800'],
                light: kitwindTheme.theme.extend.colors.gray['700'],
                'secondary-foreground': kitwindTheme.theme.extend.colors.teal['900']
            })
        }
    },
    variants: kitwindTheme.variants,
    plugins: kitwindTheme.plugins
};
