const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
const { borderRadius } = require('tailwindcss/defaultTheme');

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
        'primary':           '#FFC329',
        'primary-variant':   '#FFD362',
        'secondary':         '#FFF7E3',
        'secondary-variant': '#FFECBC',
        'accent':            '#EA5234',
        'accent-variant':    '#E03817',
        'neutral':           '#282828',
        'neutral-variant':   '#3D404C',
        'base-50':           '#FFFFFF',
        'base-100':          '#F5F5F5',
        'base-200':          '#E1E1E1',
        'base-900':          '#0A0A0A',
      },
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans]
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
        '.sb-avatar': {
            borderRadius: theme('borderRadius.full')
        },
        '.sb-badge': {
          backgroundColor: theme('colors.accent'),
          color: theme('colors.base-900'),
          fontWeight: theme('fontWeight.medium'),
          letterSpacing: theme('letterSpacing.wider'),
          padding: `${theme('spacing[0.5]')} ${theme('spacing.2')}`,
          textTransform: 'uppercase'
        },
        '.sb-btn': {
          fontWeight: theme('fontWeight.normal'),
          letterSpacing: theme('letterSpacing.wider'),
          padding: `${theme('spacing[2.5]')} ${theme('spacing.5')}`
        },
        '.sb-card': {
          boxShadow: theme('boxShadow.xl')
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
            color: theme('colors.base-900')
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
            color: theme('colors.base-50')
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
            color: theme('colors.base-50')
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
            color: theme('colors.base-50')
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
            color: theme('colors.base-50')
          },
          '.sb-card': {
            backgroundColor: theme('colors.secondary-variant')
          }
        }
      })
    }
  ],
};
