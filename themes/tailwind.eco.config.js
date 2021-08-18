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
        'primary':         '#5CDB94',
        'primary-light':   '#92FFC5',
        'secondary':       '#EDF5E0',
        'secondary-light': '#F5FAEE',
        'neutral':         '#05396B',
        'neutral-light':   '#42639A',
        'base':            '#263238',
        'base-light':      '#7B888F',
        'base-dark':       '#000A12',
        'info':            '#DB5CA4',
      },
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans]
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
    plugin(function({ addBase, addComponents, theme }) {
      addBase({
        'h1,h2,h3,h4,h5,h6': {
          '@apply font-sans font-bold': {}
        },
        'b,strong': {
          '@apply font-bold': {}
        }
      })
      addComponents({
        '.sb-avatar': {
          'img': {
            '@apply h-full object-cover rounded-full w-full': {}
          }
        },
        '.sb-badge': {
          '@apply bg-info font-normal px-3 py-0.5 rounded-full text-white tracking-wider': {}
        },
        '.sb-btn': {
          '@apply border font-normal inline-flex items-center justify-center no-underline px-5 py-2.5 rounded-full text-center transition duration-200 ease-in': {}
        },
        '.sb-card': {
          '@apply overflow-hidden rounded': {}
        },
        'a.sb-card': {
          '@apply transition transform duration-300': {},
          '&:hover': {
            transform: 'scale(1.02)'
          }
        },
        '.sb-divider': {
          '@apply flex items-center h-4 before:flex-grow before:h-px': {}
        },
        '.sb-highlight': {
          '@apply text-info': {}
        },
        '.sb-form-control': {
          '@apply mb-6': {}
        },
        '.sb-label': {
          '@apply font-normal': {}
        },
        '.sb-input,.sb-select': {
          '@apply bg-white font-normal placeholder-base-light px-4 py-3 rounded-full text-base-dark w-full focus:outline-none': {}
        },
        '.sb-textarea': {
          '@apply bg-white font-normal placeholder-base-light px-4 py-3 rounded text-base-dark w-full focus:outline-none': {}
        },
        '.sb-checkbox': {
          '@apply align-middle appearance-none bg-origin-border bg-white cursor-pointer flex-shrink-0 inline-block h-5 rounded-full select-none w-5 checked:bg-center checked:bg-no-repeat': {},
          '&:checked': {
            backgroundImage: `radial-gradient(${theme('colors.base-light')} 50%, #fff 51%)`,
            backgroundSize: '12px 12px'
          }
        },
        '.sb-select': {
          '@apply appearance-none bg-no-repeat cursor-pointer pr-6': {},
          backgroundImage: `linear-gradient(45deg,transparent 50%, ${theme('colors.base-light')} 0),linear-gradient(135deg, ${theme('colors.base-light')} 50%,transparent 0)`,
          backgroundPosition: 'calc(100% - 24px) 50%, calc(100% - 18px) 50%',
          backgroundSize: '6px 6px, 6px 6px'
        },
        '.colors-a': {
          '@apply bg-white text-base-dark': {},
          '.sb-input,.sb-select,.sb-textarea': {
            '@apply border border-base-light': {}
          },
          '.sb-checkbox': {
            '@apply border border-base-light': {}
          },
          '.sb-btn-primary': {
            '@apply bg-primary border-primary text-base-dark hover:bg-primary-light hover:border-primary-light': {},
          },
          '.sb-btn-secondary': {
            '@apply border-base-dark text-base-dark hover:border-base-light hover:text-base-light': {}
          },
          '.sb-divider': {
            '@apply before:bg-base-dark': {}
          },
          '.sb-card': {
            '@apply bg-secondary': {}
          }
        },
        '.colors-b': {
          '@apply bg-neutral text-white': {},
          '.sb-btn-primary': {
            '@apply bg-primary border-primary text-base-dark hover:bg-primary-light hover:border-primary-light': {},
          },
          '.sb-btn-secondary': {
            '@apply border-white text-white hover:border-base-light hover:text-base-light': {}
          },
          '.sb-divider': {
            '@apply before:bg-neutral-light': {}
          },
          '.sb-card': {
            '@apply bg-neutral-light': {}
          }
        },
        '.colors-c': {
          '@apply bg-neutral text-primary-light': {},
          '.sb-btn-primary': {
            '@apply bg-primary border-primary text-base-dark hover:bg-primary-light hover:border-primary-light': {},
          },
          '.sb-btn-secondary': {
            '@apply border-white text-white hover:border-base-light hover:text-base-light': {}
          },
          '.sb-divider': {
            '@apply before:bg-neutral-light': {}
          },
          '.sb-card': {
            '@apply bg-neutral-light': {}
          }
        },
        '.colors-d': {
          '@apply bg-primary text-base-dark': {},
          '.sb-btn-primary': {
            '@apply bg-neutral border-neutral text-white hover:bg-neutral-light hover:border-neutral-light': {},
          },
          '.sb-btn-secondary': {
            '@apply border-neutral text-neutral hover:border-neutral-light hover:text-neutral-light': {}
          },
          '.sb-divider': {
            '@apply before:bg-base-dark': {}
          },
          '.sb-card': {
            '@apply bg-primary-light': {}
          }
        },
        '.colors-e': {
          '@apply bg-secondary text-base-dark': {},
          '.sb-btn-primary': {
            '@apply bg-primary border-primary text-base-dark hover:bg-primary-light hover:border-primary-light': {},
          },
          '.sb-btn-secondary': {
            '@apply border-base-dark text-base-dark hover:border-base-light hover:text-base-light': {}
          },
          '.sb-divider': {
            '@apply before:bg-base-dark': {}
          },
          '.sb-card': {
            '@apply bg-secondary-light': {}
          }
        }
      })
    })
  ],
};
