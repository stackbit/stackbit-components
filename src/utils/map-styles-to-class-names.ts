const TAILWIND_MAP = {
    fontSize: {
        'x-small': 'text-xs',
        'small': 'text-sm',
        'medium': 'text-base',
        'large': 'text-lg',
        'x-large': 'text-xl',
        'xx-large': 'text-2xl',
        'xxx-large': 'text-3xl'
    },
    fontWeight: {
        '100': 'font-thin',
        '200': 'font-extralight',
        '300': 'font-light',
        '400': 'font-normal',
        '500': 'font-medium',
        '600': 'font-semibold',
        '700': 'font-bold',
        '800': 'font-extrabold'
    },
    textAlign: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        justify: 'text-justify'
    }
};

export function mapStylesToClassNames(styles: Record<string, any>) {
    if (!styles) {
        return styles;
    }
    return Object.entries(styles).map(([prop, value]) => {
        if (prop in TAILWIND_MAP && value in TAILWIND_MAP[prop]) {
            return TAILWIND_MAP[prop][value];
        } else {
            // if prop or value don't exist in the map, use the value as is,
            // useful for direct color values.
            return value;
        }
    }).join(' ');
}
