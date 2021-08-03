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
        'primary':           '#F47B7A',
        'primary-variant':   '#F15756',
        'secondary':         '#FAEAEB',
        'secondary-variant': '#F2CACD',
        'accent':            '#98D8D9',
        'accent-variant':    '#1E8EA4',
        'neutral':           '#4A4F59',
        'neutral-variant':   '#383C44',
        'base-50':           '#FFFFFF',
        'base-100':          '#F5F5F5',
        'base-200':          '#E1E1E1',
        'base-900':          '#333333',
      },
      fontFamily: {
        sans: ['PT Serif', ...defaultTheme.fontFamily.serif]
      },
      spacing: {
        '1/1': '100%',
        '1/3': '33.333%',
        '1/2': '50%',
        '2/3': '66.667%',
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
          textTransform: 'uppercase',
          borderRadius: theme('borderRadius.full')
        },
        '.sb-btn': {
          fontWeight: theme('fontWeight.normal'),
          letterSpacing: theme('letterSpacing.wider'),
          padding: `${theme('spacing[2.5]')} ${theme('spacing.5')}`,
          borderRadius: theme('borderRadius.full')
        },
        '.sb-card': {
          borderRadius: theme('borderRadius.sm')
        },
        'a.sb-card': {
          transition: 'transform .3s',
          '&:hover': {
            transform: 'translateY(-0.25rem)'
          }
        },
        '.sb-checkbox': {
          position: 'relative',
          'input[type=checkbox]': {
            position: 'absolute',
            top: 0,
            left: 0,
            height: '1.25em',
            width: '1.25em',
            '-webkit-appearance': 'none',
            '-moz-appearance': 'none',
          },
          'label' : {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'flex-start',
            position: 'relative',
            '&:before': {
              border: '1px solid currentColor',
              content: '""',
              display: 'flex',
              flexShrink: 0,
              height: '1.25em',
              marginRight: '1em',
              pointerEvents: 'none',
              width: '1.25em'
            },
            '&:after': {
              borderStyle: 'solid',
              borderColor: 'currentColor',
              borderWidth: '0 2px 2px 0',
              content: '""',
              height: '0.75em',
              left: '0.375em',
              opacity: 0,
              pointerEvents: 'none',
              position: 'absolute',
              top: '0.25em',
              transform: 'rotate(45deg)',
              transition: '0.25s ease',
              width: '0.5em',
            },
          },
          'input[type=checkbox]:checked + label:after': {
            opacity: 1
          }
        },
        '.sb-highlight': {
          color: theme('colors.accent')
        },
        '.sb-select': {
          position: 'relative',
          'select': {
            paddingRight: '1.5em',
            '-webkit-appearance': 'none',
            '-moz-appearance': 'none',
          },
          '&:before': {
            borderColor: 'currentColor',
            borderStyle: 'solid',
            borderWidth: '0 2px 2px 0',
            boxSizing: 'border-box',
            content: '""',
            display: 'flex',
            flexShrink: 0,
            height: '0.75em',
            marginTop: '-0.5em',
            position: 'absolute',
            right: '0.75em',
            top: '50%',
            transform: 'rotate(45deg)',
            width: '0.75em',
            zIndex: '1',
          },
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
            color: theme('colors.base-900'),
            '&:hover': {
              backgroundColor: theme('colors.primary-variant')
            },
          },
          '.sb-card': {
            backgroundColor: theme('colors.secondary'),
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
              backgroundColor: theme('colors.base-900')
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
              backgroundColor: theme('colors.base-900')
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
              backgroundColor: theme('colors.base-900')
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
              backgroundColor: theme('colors.base-900')
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
