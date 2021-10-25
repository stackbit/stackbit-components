const TAILWIND_MAP = {
    fontSize: {
        'x-small': 'text-xs',
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
        'x-large': 'text-xl',
        'xx-large': 'text-2xl',
        'xxx-large': 'text-3xl'
    },
    fontStyle: {
        normal: 'non-italic',
        italic: 'italic'
    },
    fontWeight: {
        100: 'font-thin',
        200: 'font-extralight',
        300: 'font-light',
        400: 'font-normal',
        500: 'font-medium',
        600: 'font-semibold',
        700: 'font-bold',
        800: 'font-extrabold'
    },
    textAlign: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        justify: 'text-justify'
    },
    justifyContent: {
        'flex-start': 'justify-start',
        'flex-end': 'justify-end',
        center: 'justify-center'
    },
    alignItems: {
        'flex-start': 'items-start',
        'flex-end': 'items-end',
        center: 'items-center'
    },
    borderRadius: {
        none: 'rounded-none',
        'xx-small': 'rounded-sm',
        'x-small': 'rounded',
        small: 'rounded-md',
        medium: 'rounded-lg',
        large: 'rounded-xl',
        'x-large': 'rounded-2xl',
        'xx-large': 'rounded-3xl',
        full: 'rounded-full'
    },
    borderStyle: {
        none: 'border-none',
        solid: 'border-solid',
        dashed: 'border-dashed',
        dotted: 'border-dotted',
        double: 'border-double'
    }
};

export function mapStylesToClassNames(styles: Record<string, any>) {
    return Object.entries(styles)
        .map(([prop, value]) => {
            if (prop in TAILWIND_MAP && value in TAILWIND_MAP[prop]) {
                return TAILWIND_MAP[prop][value];
            } else {
                // if prop or value don't exist in the map, use the value as is,
                // useful for direct color values.
                return value;
            }
        })
        .join(' ');
}
