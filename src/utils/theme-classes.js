export default function themeClassGetter(classes) {
    return function getThemeClasses(prop) {
        if (!themeProvider.theme) {
            return '';
        }
        const theme = themeProvider.theme;
        if (!(theme in classes)) {
            return '';
        }
        const themeClasses = classes[theme];
        if (!(prop in themeClasses)) {
            return '';
        }
        return themeClasses[prop];
    };
}
