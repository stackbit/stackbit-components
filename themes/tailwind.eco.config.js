const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: {
      enabled: true,
      content: ['./src/**/*.{js,ts,jsx,tsx}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary':           '#4bc2a1',
        'primary-variant':   '#3aab8c',
        'secondary':         '#d6c9bb',
        'secondary-variant': '#c0ab96',
        'accent':            '#C6D6D2',
        'accent-variant':    '#AFC6C0',
        'neutral':           '#4A4F59',
        'neutral-variant':   '#383C44',
        'base-50':           '#FFFFFF',
        'base-100':          '#F5F5F5',
        'base-200':          '#E1E1E1',
        'base-900':          '#333333',
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
      },
      spacing: {
        '1/2': '50%',
        '1/1': '100%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function({ addComponents, theme }) {
      addComponents({
        '.sb-badge': {
          backgroundColor: theme('colors.accent'),
          color: theme('colors.base-900'),
          fontWeight: theme('fontWeight.medium'),
          letterSpacing: theme('letterSpacing.wider'),
          padding: `${theme('spacing[0.5]')} ${theme('spacing.2')}`,
          borderRadius: theme('borderRadius.md'),
          textTransform: 'uppercase'
        },
        '.sb-btn': {
          fontWeight: theme('fontWeight.normal'),
          letterSpacing: theme('letterSpacing.wider'),
          padding: `${theme('spacing[2.5]')} ${theme('spacing.5')}`,
          borderRadius: theme('borderRadius.md'),
          boxShadow: theme('boxShadow.xl'),
          textTransform: 'uppercase'
        },
        '.sb-card': {
          boxShadow: theme('boxShadow.xl'),
          borderRadius: theme('borderRadius.md')
        },
        'a.sb-card': {
          transition: 'transform .3s',
          '&:hover': {
            transform: 'translateY(-0.25rem)'
          }
        },
        '.sb-highlight': {
          color: theme('colors.accent')
        },
        '.sb-avatar': {
          boxShadow: theme('boxShadow.xl'),
          borderRadius: theme('borderRadius.md')
        },
        '.colors-a': {
          backgroundColor: theme('colors.base-50'),
          color: theme('colors.base-900'),
          'input,textarea,select,hr': {
            borderColor: theme('colors.base-900')
          },
          '::placeholder': {
            color: theme('colors.base-900')
          },
          '.sb-btn': {
            backgroundColor: theme('colors.primary'),
            color: theme('colors.white'),
            '&:hover': {
              color: theme('colors.white'),
              backgroundColor: theme('colors.primary-variant'),
              boxShadow: theme('boxShadow.none'),
            },
          },
          '.sb-card': {
            backgroundColor: theme('colors.secondary')
          }
        },
        '.colors-b': {
          backgroundColor: theme('colors.neutral'),
          color: theme('colors.base-50'),
          'input,textarea,select,hr': {
            borderColor: theme('colors.neutral-variant')
          },
          '::placeholder': {
            color: theme('colors.base-200')
          },
          '.sb-btn': {
            backgroundColor: theme('colors.neutral-variant'),
            color: theme('colors.base-50'),
            '&:hover': {
              backgroundColor: theme('colors.base-900'),
              boxShadow: theme('boxShadow.none'),
            },
          },
          '.sb-card': {
            backgroundColor: theme('colors.neutral-variant')
          }
        },
        '.colors-c': {
          backgroundColor: theme('colors.neutral'),
          color: theme('colors.primary'),
          'input,textarea,select,hr': {
            borderColor: theme('colors.neutral-variant')
          },
          '::placeholder': {
            color: theme('colors.primary')
          },
          '.sb-btn': {
            backgroundColor: theme('colors.neutral-variant'),
            color: theme('colors.primary'),
            '&:hover': {
              backgroundColor: theme('colors.base-900'),
              boxShadow: theme('boxShadow.none')
            },
          },
          '.sb-card': {
            backgroundColor: theme('colors.neutral-variant')
          }
        },
        '.colors-d': {
          backgroundColor: theme('colors.primary'),
          color: theme('colors.base-900'),
          'input,textarea,select,hr': {
            borderColor: theme('colors.base-900')
          },
          '::placeholder': {
            color: theme('colors.base-900')
          },
          '.sb-btn': {
            backgroundColor: theme('colors.neutral-variant'),
            color: theme('colors.base-50'),
            '&:hover': {
              backgroundColor: theme('colors.base-900'),
              boxShadow: theme('boxShadow.none')
            },
          },
          '.sb-card': {
            backgroundColor: theme('colors.primary-variant')
          }
        },
        '.colors-e': {
          backgroundColor: theme('colors.secondary'),
          color: theme('colors.base-900'),
          'input,textarea,select,hr': {
            borderColor: theme('colors.base-900')
          },
          '::placeholder': {
            color: theme('colors.base-900')
          },
          '.sb-btn': {
            backgroundColor: theme('colors.neutral-variant'),
            color: theme('colors.base-50'),
            '&:hover': {
              backgroundColor: theme('colors.base-900'),
              boxShadow: theme('boxShadow.none')
            },
          },
          '.sb-card': {
            backgroundColor: theme('colors.secondary-variant')
          }
        }
      })
    }
  ],
};
