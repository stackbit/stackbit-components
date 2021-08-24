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
        'primary':         '#9BC1BC',
        'primary-light':   '#CCF4EE',
        'primary-dark':    '#6C918C',
        'secondary':       '#F4F1BB',
        'secondary-light': '#FFFFEE',
        'neutral':         '#5D576B',
        'neutral-light':   '#8A8499',
        'neutral-dark':    '#332E40',
        'base':            '#484848',
        'base-light':      '#797979',
        'base-dark':       '#212121',
        'info':            '#ED6A5A',
      },
      fontFamily: {
        sans: ['Barlow', ...defaultTheme.fontFamily.sans]
      },
      spacing: {
        '1/1': '100%',
        '1/3': '33.333%',
        '1/2': '50%',
        '2/3': '66.667%',
      },
      zIndex: {
        '-10': '-10',
      }
    },
  },
  lights: {
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, addComponents, theme }) {
      addBase({
        'h1,h2,h3,h4,h5,h6': {
          '@apply font-sans font-bold uppercase': {}
        },
        'b,strong': {
          '@apply font-bold': {}
        }
      })
      addComponents({
        '.sb-avatar': {
          '@apply relative z-10': {},
          '&:before': {
            content: '""',
            '@apply absolute border-2 h-full left-2 top-2 w-full -z-10': {}
          },
          'img': {
            '@apply h-full object-cover w-full': {}
          }
        },
        '.sb-badge': {
          '@apply bg-info px-2 py-0.5 text-white tracking-wider uppercase': {}
        },
        '.sb-btn': {
          '@apply border-2 font-normal inline-flex items-center justify-center no-underline px-5 py-2.5 relative text-center uppercase': {}
        },
        '.sb-link': {
          '@apply inline-flex items-center justify-center no-underline hover:underline': {}
        },
        '.sb-divider': {
          '@apply flex items-center h-4': {},
          '&:before': {
            content: '""',
            '@apply flex-grow h-0.5': {}
          }
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
        '.sb-input,.sb-select,.sb-textarea': {
          '@apply bg-transparent border-b-2 pb-1.5 text-lg w-full focus:outline-none md:text-xl': {}
        },
        '.sb-checkbox': {
          '@apply align-middle appearance-none bg-origin-border border-2 cursor-pointer flex-shrink-0 inline-block h-6 select-none w-6 checked:bg-center checked:bg-no-repeat checked:bg-contain': {},
          '&:checked': {
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 24 24\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath fill=\'white\' d=\'M19.293 5.293l-10.293 10.293-4.293-4.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0l11-11c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z\'%3E%3C/path%3E%3C/svg%3E")'
          }
        },
        '.sb-select': {
          '@apply appearance-none bg-no-repeat cursor-pointer pr-6': {},
          backgroundImage: 'linear-gradient(45deg,transparent 50%,currentColor 0),linear-gradient(135deg,currentColor 50%,transparent 0)',
          backgroundPosition: 'calc(100% - 14px) 50%, calc(100% - 8px) 50%',
          backgroundSize: '6px 6px, 6px 6px'
        },
        '.colors-a': {
          '@apply bg-white text-base-dark': {},
          '.sb-avatar': {
            '&:before': {
              '@apply border-neutral-light': {}
            }
          },
          '.sb-input,.sb-select,.sb-textarea,.sb-checkbox': {
            '@apply border-neutral-light': {}
          },
          '.sb-input,.sb-textarea': {
            '@apply placeholder-base-light': {}
          },
          '.sb-checkbox': {
            '@apply checked:bg-neutral-light': {}
          },
          '.sb-btn-primary': {
            '@apply bg-primary border-primary text-white': {},
          },
          '.sb-btn-secondary': {
            '@apply border-primary text-primary': {}
          },
          '.sb-divider': {
            '&:before': {
              '@apply bg-neutral-light': {}
            }
          },
          '.sb-card': {
            '@apply bg-secondary-light': {}
          }
        },
        '.colors-b': {
          '@apply bg-neutral text-white': {},
          '.sb-avatar': {
            '&:before': {
              '@apply border-neutral-dark': {}
            }
          },
          '.sb-input,.sb-select,.sb-textarea,.sb-checkbox': {
            '@apply border-neutral-light': {}
          },
          '.sb-input,.sb-textarea': {
            '@apply placeholder-neutral-light': {}
          },
          '.sb-checkbox': {
            '@apply checked:bg-neutral-light': {}
          },
          '.sb-btn-primary': {
            '@apply bg-primary border-primary text-white': {},
          },
          '.sb-btn-secondary': {
            '@apply border-primary text-primary': {}
          },
          '.sb-divider': {
            '&:before': {
              '@apply bg-neutral-light': {}
            }
          },
          '.sb-card': {
            '@apply bg-neutral-light': {}
          },
        },
        '.colors-c': {
          '@apply bg-neutral text-primary': {},
          '.sb-avatar': {
            '&:before': {
              '@apply border-primary': {}
            }
          },
          '.sb-input,.sb-select,.sb-textarea,.sb-checkbox': {
            '@apply border-primary': {}
          },
          '.sb-input,.sb-textarea': {
            '@apply placeholder-primary-dark': {}
          },
          '.sb-checkbox': {
            '@apply checked:bg-primary': {}
          },
          '.sb-btn-primary': {
            '@apply bg-primary border-primary text-white': {},
          },
          '.sb-btn-secondary': {
            '@apply border-primary text-primary': {}
          },
          '.sb-divider': {
            '&:before': {
              '@apply bg-primary': {}
            }
          },
          '.sb-card': {
            '@apply bg-neutral-dark': {}
          },
        },
        '.colors-d': {
          '@apply bg-primary text-base-dark': {},
          '.sb-avatar': {
            '&:before': {
              '@apply border-primary-dark': {}
            }
          },
          '.sb-input,.sb-select,.sb-textarea,.sb-checkbox': {
            '@apply border-primary-dark': {}
          },
          '.sb-input,.sb-textarea': {
            '@apply placeholder-base-dark': {}
          },
          '.sb-checkbox': {
            '@apply checked:bg-primary-dark': {}
          },
          '.sb-btn-primary': {
            '@apply bg-neutral border-neutral text-white': {},
          },
          '.sb-btn-secondary': {
            '@apply border-neutral text-neutral': {}
          },
          '.sb-divider': {
            '&:before': {
              '@apply bg-primary-dark': {}
            }
          },
          '.sb-card': {
            '@apply bg-primary-light': {}
          },
        },
        '.colors-e': {
          '@apply bg-secondary text-base-dark': {},
          '.sb-avatar': {
            '&:before': {
              '@apply border-neutral-light': {}
            }
          },
          '.sb-input,.sb-select,.sb-textarea,.sb-checkbox': {
            '@apply border-neutral-light': {}
          },
          '.sb-input,.sb-textarea': {
            '@apply placeholder-base-light': {}
          },
          '.sb-checkbox': {
            '@apply checked:bg-neutral-light': {}
          },
          '.sb-btn-primary': {
            '@apply bg-neutral border-neutral text-white': {},
          },
          '.sb-btn-secondary': {
            '@apply border-neutral text-neutral': {}
          },
          '.sb-divider': {
            '&:before': {
              '@apply bg-neutral-light': {}
            }
          },
          '.sb-card': {
            '@apply bg-secondary-light': {}
          }
        }
      })
    })
  ],
};
