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
    screens: {
      xs: '480px',
      sm: '768px',
      md: '940px',
      lg: '1200px',
      xl: '1600px',
    },
    fontSize: {
      'xs': ['14px', '24px'],
      'sm': ['16px', '24px'],
      'base': ['18px', '30px'],
      'lg': ['22px', '32px'],
      'xl': ['26px', '36px'],
      '2xl': ['30px', '38px'],
      '3xl': ['42px', '46px'],
      '4xl': ['50px', '52px'],
      '5xl': ['60px', '64px'],
      '6xl': ['72px', '74px'],
    },
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
        '.sb-badge': {
          backgroundColor: theme('colors.accent'),
          color: theme('colors.base-900'),
          fontWeight: theme('fontWeight.medium'),
          letterSpacing: theme('letterSpacing.wider'),
          padding: `${theme('spacing[0.5]')} ${theme('spacing.2')}`
        },
        '.sb-btn': {
          fontWeight: theme('fontWeight.normal'),
          letterSpacing: theme('letterSpacing.wider'),
          padding: `${theme('spacing[2.5]')} ${theme('spacing.5')}`
        },
        '.sb-card': {
          border: `2px solid ${theme('colors.base-900')}`
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
          border: `2px solid ${theme('colors.base-900')}`
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
              backgroundColor: theme('colors.base-900')
            },
          },
          '.sb-card': {
            backgroundColor: theme('colors.neutral-variant'),
            borderColor: theme('colors.base-50')
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
          '.sb-avatar': {
            borderColor: theme('colors.primary')
          },
          '.sb-card': {
            backgroundColor: theme('colors.neutral-variant'),
            borderColor: theme('colors.primary')
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
