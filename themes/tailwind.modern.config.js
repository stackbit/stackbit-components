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
        'primary':         '#00E5FF',
        'primary-light':   '#6EFFFF',
        'primary-dark':    '#00B2CC',
        'secondary':       '#F5F6F9',
        'secondary-light': '#FFFFFF',
        'secondary-dark':  '#C2C3C6',
        'neutral':         '#1F2833',
        'neutral-light':   '#47505C',
        'neutral-dark':    '#00000C',
        'base':            '#212121',
        'base-light':      '#757575',
        'base-dark':       '#00000C',
        'info':            '#FF2D0D',
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
  lights: {
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, addComponents, theme }) {
      addBase({
        'h1,h2,h3,h4,h5,h6': {
          '@apply font-sans font-medium': {}
        },
        'b,strong': {
          '@apply font-medium': {}
        }
      })
      addComponents({
        '.sb-avatar': {
          'img': {
            '@apply h-full object-cover w-full': {}
          }
        },
        '.sb-badge': {
          '@apply bg-info font-normal px-3 py-0.5 rounded text-white tracking-wider': {}
        },
        '.sb-btn': {
          '@apply border-2 font-medium inline-flex items-center justify-center no-underline px-5 py-2.5 rounded text-center tracking-wider transition duration-200 ease-in': {}
        },
        '.sb-link': {
          '@apply inline-flex items-center justify-center no-underline transition-opacity duration-300 hover:opacity-80': {}
        },
        '.sb-card': {
          '@apply rounded': {}
        },
        'a.sb-card': {
          '@apply transition transform duration-300 hover:-translate-y-1': {}
        },
        '.sb-divider': {
          '@apply flex items-center h-4': {},
          '&:before': {
            content: '""',
            '@apply flex-grow h-px': {}
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
          '@apply bg-white px-3 py-3 rounded text-neutral w-full focus:outline-none': {}
        },
        '.sb-checkbox': {
          '@apply align-middle appearance-none bg-origin-border bg-white cursor-pointer flex-shrink-0 inline-block h-6 rounded select-none w-6 checked:bg-center checked:bg-no-repeat checked:bg-contain': {},
          '&:checked': {
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 24 24\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath fill=\'white\' d=\'M19.293 5.293l-10.293 10.293-4.293-4.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0l11-11c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z\'%3E%3C/path%3E%3C/svg%3E")'
          }
        },
        '.sb-select': {
          '@apply appearance-none bg-no-repeat cursor-pointer pr-6': {},
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 24 24\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z\'%3E%3C/path%3E%3C/svg%3E")',
          backgroundPosition: 'center right 0.5em',
          backgroundSize: '1em 1em'
        },
        '.colors-a': {
          '@apply bg-white text-base-dark': {},
          '.sb-input,.sb-select,.sb-textarea,.sb-checkbox': {
            '@apply border border-base-light': {}
          },
          '.sb-input,.sb-textarea': {
            '@apply placeholder-base-light': {}
          },
          '.sb-checkbox': {
            '@apply checked:bg-base-light': {}
          },
          '.sb-btn-primary': {
            '@apply bg-primary border-primary text-neutral hover:bg-primary-dark hover:border-primary-dark': {},
          },
          '.sb-btn-secondary': {
            '@apply border-primary text-neutral hover:border-primary-dark hover:text-neutral-dark': {},
          },
          '.sb-divider': {
            '&:before': {
              '@apply bg-neutral-dark': {}
            }
          },
          '.sb-card': {
            '@apply bg-secondary': {}
          }
        },
        '.colors-b': {
          '@apply bg-neutral text-white': {},
          '.sb-input,.sb-select,.sb-textarea,.sb-checkbox': {
            '@apply bg-secondary': {}
          },
          '.sb-input,.sb-textarea': {
            '@apply placeholder-base-dark': {}
          },
          '.sb-checkbox': {
            '@apply checked:bg-primary': {}
          },
          '.sb-btn-primary': {
            '@apply bg-primary border-primary text-neutral hover:bg-primary-dark hover:border-primary-dark': {},
          },
          '.sb-btn-secondary': {
            '@apply border-primary text-primary hover:border-primary-dark hover:text-primary-dark': {},
          },
          '.sb-divider': {
            '&:before': {
              '@apply bg-neutral-light': {}
            }
          },
          '.sb-card': {
            '@apply bg-neutral-light': {}
          }
        },
        '.colors-c': {
          '@apply bg-neutral text-primary': {},
          '.sb-input,.sb-select,.sb-textarea,.sb-checkbox': {
            '@apply bg-secondary': {}
          },
          '.sb-input,.sb-textarea': {
            '@apply placeholder-base-dark': {}
          },
          '.sb-checkbox': {
            '@apply checked:bg-primary': {}
          },
          '.sb-btn-primary': {
            '@apply bg-primary border-primary text-neutral hover:bg-primary-dark hover:border-primary-dark': {},
          },
          '.sb-btn-secondary': {
            '@apply border-primary text-primary hover:border-primary-dark hover:text-primary-dark': {},
          },
          '.sb-divider': {
            '&:before': {
              '@apply bg-neutral-light': {}
            }
          },
          '.sb-card': {
            '@apply bg-neutral-light': {}
          }
        },
        '.colors-d': {
          '@apply bg-primary text-base-dark': {},
          '.sb-input,.sb-select,.sb-textarea,.sb-checkbox': {
            '@apply bg-secondary': {}
          },
          '.sb-input,.sb-textarea': {
            '@apply placeholder-base-dark': {}
          },
          '.sb-checkbox': {
            '@apply checked:bg-base-dark': {}
          },
          '.sb-btn-primary': {
            '@apply bg-neutral border-neutral text-white hover:bg-neutral-dark hover:border-neutral-dark': {},
          },
          '.sb-btn-secondary': {
            '@apply border-neutral text-neutral hover:border-neutral-dark hover:text-neutral-dark': {},
          },
          '.sb-divider': {
            '&:before': {
              '@apply bg-base-dark': {}
            }
          },
          '.sb-card': {
            '@apply bg-secondary-light': {}
          }
        },
        '.colors-e': {
          '@apply bg-secondary text-base-dark': {},
          '.sb-input,.sb-select,.sb-textarea,.sb-checkbox': {
            '@apply bg-secondary-light': {}
          },
          '.sb-input,.sb-textarea': {
            '@apply placeholder-base-light': {}
          },
          '.sb-checkbox': {
            '@apply checked:bg-primary': {}
          },
          '.sb-btn-primary': {
            '@apply bg-primary border-primary text-neutral hover:bg-primary-dark hover:border-primary-dark': {},
          },
          '.sb-btn-secondary': {
            '@apply border-primary text-neutral hover:border-primary-dark hover:text-neutral-dark': {},
          },
          '.sb-divider': {
            '&:before': {
              '@apply bg-neutral-dark': {}
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
