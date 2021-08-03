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
          border: `2px solid ${theme('colors.neutral-variant')}`,
        },
        '.sb-badge': {
          backgroundColor: theme('colors.accent'),
          color: theme('colors.base-900'),
          fontWeight: theme('fontWeight.medium'),
          letterSpacing: theme('letterSpacing.wider'),
          padding: `${theme('spacing[0.5]')} ${theme('spacing.2')}`
        },
        '.sb-btn': {
          borderWidth: '2px',
          fontWeight: theme('fontWeight.normal'),
          letterSpacing: theme('letterSpacing.wider'),
          padding: `${theme('spacing[2.5]')} ${theme('spacing.5')}`
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
          '.sb-btn-primary': {
            backgroundColor: theme('colors.primary'),
            borderColor: theme('colors.primary'),
            color: theme('colors.base-900'),
            '&:hover': {
              opacity: '0.8'
            },
          },
          '.sb-btn-secondary': {
            borderColor: theme('colors.neutral-variant'),
            color: theme('colors.neutral-variant'),
            '&:hover': {
              opacity: '0.8'
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
          '.sb-btn-primary': {
            backgroundColor: theme('colors.neutral-variant'),
            borderColor: theme('colors.neutral-variant'),
            color: theme('colors.base-50'),
            '&:hover': {
              opacity: '0.8'
            },
          },
          '.sb-btn-secondary': {
            borderColor: theme('colors.neutral-variant'),
            color: theme('colors.base-50'),
            '&:hover': {
              opacity: '0.8'
            },
          },
          '.sb-card': {
            backgroundColor: theme('colors.neutral-variant'),
          }
        },
        '.colors-c': {
          backgroundColor: theme('colors.neutral'),
          color: theme('colors.secondary-variant'),
          'input,textarea,select,hr': {
            borderColor: theme('colors.neutral-variant')
          },
          '::placeholder': {
            color: theme('colors.primary')
          },
          '.sb-btn-primary': {
            backgroundColor: theme('colors.neutral-variant'),
            borderColor: theme('colors.neutral-variant'),
            color: theme('colors.base-50'),
            '&:hover': {
              opacity: '0.8'
            },
          },
          '.sb-btn-secondary': {
            borderColor: theme('colors.neutral-variant'),
            color: theme('colors.base-50'),
            '&:hover': {
              opacity: '0.8'
            },
          },
          '.sb-card': {
            backgroundColor: theme('colors.neutral-variant'),
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
          '.sb-btn-primary': {
            backgroundColor: theme('colors.neutral-variant'),
            borderColor: theme('colors.neutral-variant'),
            color: theme('colors.base-50'),
            '&:hover': {
              opacity: '0.8'
            },
          },
          '.sb-btn-secondary': {
            borderColor: theme('colors.neutral-variant'),
            color: theme('colors.neutral-variant'),
            '&:hover': {
              opacity: '0.8'
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
          '.sb-btn-primary': {
            backgroundColor: theme('colors.neutral-variant'),
            borderColor: theme('colors.neutral-variant'),
            color: theme('colors.base-50'),
            '&:hover': {
              opacity: '0.8'
            },
          },
          '.sb-btn-secondary': {
            borderColor: theme('colors.neutral-variant'),
            color: theme('colors.neutral-variant'),
            '&:hover': {
              opacity: '0.8'
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
