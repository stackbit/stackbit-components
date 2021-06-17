const kitwindTheme = require('./kitwind');

module.exports = {
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
                primary: kitwindTheme.theme.extend.colors.gray['900'],
                secondary: kitwindTheme.theme.extend.colors['deep-purple']['accent-700']
            }),
            textColor: (theme) => ({
                ...theme('colors'),
                primary: kitwindTheme.theme.extend.colors.teal['accent-400'],
                dark: kitwindTheme.theme.extend.colors.gray['100'],
                light: kitwindTheme.theme.extend.colors.gray['100'],
                'secondary-foreground': kitwindTheme.theme.extend.colors.indigo['100']
            })
        }
    },
    variants: kitwindTheme.variants,
    plugins: kitwindTheme.plugins
};
