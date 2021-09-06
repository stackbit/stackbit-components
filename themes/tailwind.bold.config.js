const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: {
    enabled: false,
    content: ['./src/**/*.{js,ts,jsx,tsx}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FFC329',
        secondary: '#FFF7E3',
        base: '#262626',
        'complimentary-1': '#e8f3ee',
        'complimentary-2': '#e2e4ff',
        info: '#EA5234'
      },
      fontFamily: {
        serif: ['PT Serif', ...defaultTheme.fontFamily.serif],
      },
      spacing: {
        '1/1': '100%',
        '1/3': '33.333%',
        '1/2': '50%',
        '2/3': '66.667%'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    plugin(function ({ addBase, addComponents, theme }) {
      addBase({
        'h1,h2,h3,h4,h5,h6': {
          '@apply font-serif font-bold': {}
        },
        'b,strong': {
          '@apply font-medium': {}
        }
      });
      addComponents({
        '.sb-avatar': {
          img: {
            '@apply h-full object-cover w-full': {}
          }
        },
        '.sb-badge': {
          '@apply bg-info font-medium px-2 py-0.5 text-white tracking-wider': {}
        },
        '.sb-btn': {
          '@apply border-2 font-medium inline-flex items-center justify-center no-underline px-5 py-2.5 text-center tracking-wider transition duration-200 ease-in': {}
        },
        '.sb-link': {
          '@apply inline-flex items-center justify-center no-underline hover:underline': {}
        },
        'a.sb-card': {
          '@apply transition transform duration-300 hover:-translate-y-1': {}
        },
        '.sb-divider': {
          '@apply flex items-center h-4 before:flex-grow before:h-px': {}
        },
        '.sb-highlight': {
          '@apply text-info': {}
        },
        '.sb-form-control': {
          '@apply mb-8': {}
        },
        '.sb-label': {
          '@apply font-light': {}
        },
        '.sb-input,.sb-select,.sb-textarea': {
          '@apply bg-transparent border-b font-light pb-1.5 text-lg w-full focus:outline-none md:text-xl': {}
        },
        '.sb-checkbox': {
          '@apply align-middle appearance-none bg-origin-border border border-current cursor-pointer flex-shrink-0 inline-block h-4 select-none w-4 checked:bg-center checked:bg-no-repeat':
            {},
          '&:checked': {
            backgroundImage: 'linear-gradient(currentColor, currentColor)',
            backgroundSize: '60% 60%'
          }
        },
        '.sb-select': {
          '@apply appearance-none bg-no-repeat cursor-pointer pr-6': {},
          backgroundImage: 'linear-gradient(45deg,transparent 50%,currentColor 0),linear-gradient(135deg,currentColor 50%,transparent 0)',
          backgroundPosition: 'calc(100% - 14px) 50%, calc(100% - 8px) 50%',
          backgroundSize: '6px 6px, 6px 6px'
        },
        '.colors-a': {
          '@apply bg-white text-base': {},
          '.sb-input,.sb-select,.sb-textarea': {
            '@apply border-base placeholder-base': {}
          },
          '.sb-btn-primary': {
            '@apply bg-primary border-primary text-base hover:bg-opacity-70 hover:border-opacity-70': {}
          },
          '.sb-btn-secondary': {
            '@apply border-base text-base hover:border-opacity-70 hover:text-base': {}
          },
          '.sb-divider': {
            '@apply before:bg-base': {}
          },
          '.sb-card': {
            '@apply bg-secondary': {}
          }
        },
        '.colors-b': {
          '@apply bg-white text-primary': {},
          '.sb-input,.sb-select,.sb-textarea': {
            '@apply border-primary placeholder-primary': {}
          },
          '.sb-btn-primary': {
            '@apply bg-primary border-primary text-base hover:bg-opacity-70 hover:border-opacity-70': {}
          },
          '.sb-btn-secondary': {
            '@apply border-base text-base hover:border-opacity-70 hover:text-base': {}
          },
          '.sb-divider': {
            '@apply before:bg-primary': {}
          },
          '.sb-card': {
            '@apply bg-secondary': {}
          }
        },
        '.colors-c': {
          '@apply bg-base text-white': {},
          '.sb-input,.sb-select,.sb-textarea': {
            '@apply border-white placeholder-white placeholder-opacity-50': {}
          },
          '.sb-btn-primary': {
            '@apply bg-primary border-primary text-base hover:bg-opacity-70 hover:border-opacity-70': {}
          },
          '.sb-btn-secondary': {
            '@apply border-white text-white hover:border-opacity-70 hover:text-white': {}
          },
          '.sb-divider': {
            '@apply before:bg-white': {}
          },
          '.sb-card': {
            '@apply bg-base': {}
          }
        },
        '.colors-d': {
          '@apply bg-base text-primary': {},
          '.sb-input,.sb-select,.sb-textarea': {
            '@apply border-primary placeholder-primary placeholder-opacity-50': {}
          },
          '.sb-btn-primary': {
            '@apply bg-primary border-primary text-base hover:bg-opacity-70 hover:border-opacity-70': {}
          },
          '.sb-btn-secondary': {
            '@apply border-white text-white hover:bg-opacity-70 hover:border-opacity-70': {}
          },
          '.sb-divider': {
            '@apply before:bg-primary': {}
          },
          '.sb-card': {
            '@apply bg-base': {}
          }
        },
        '.colors-e': {
          '@apply bg-primary text-base': {},
          '.sb-input,.sb-select,.sb-textarea': {
            '@apply border-base placeholder-base': {}
          },
          '.sb-btn-primary': {
            '@apply bg-base border-base text-white hover:bg-opacity-70 hover:border-opacity-70': {}
          },
          '.sb-btn-secondary': {
            '@apply border-base text-base hover:border-opacity-60 hover:text-base': {}
          },
          '.sb-divider': {
            '@apply before:bg-base': {}
          },
          '.sb-card': {
            '@apply bg-secondary': {}
          }
        },
        '.colors-f': {
          '@apply bg-secondary text-base': {},
          '.sb-input,.sb-select,.sb-textarea': {
            '@apply border-base placeholder-base': {}
          },
          '.sb-btn-primary': {
            '@apply bg-primary border-primary text-base hover:bg-opacity-70 hover:border-opacity-70': {}
          },
          '.sb-btn-secondary': {
            '@apply border-base text-base hover:border-opacity-70 hover:text-base': {}
          },
          '.sb-divider': {
            '@apply before:bg-base': {}
          },
          '.sb-card': {
            '@apply bg-secondary': {}
          }
        },
        '.colors-g': {
          '@apply bg-secondary text-primary': {},
          '.sb-input,.sb-select,.sb-textarea': {
            '@apply border-primary placeholder-primary': {}
          },
          '.sb-btn-primary': {
            '@apply bg-primary border-primary text-base hover:bg-opacity-70 hover:border-opacity-70': {}
          },
          '.sb-btn-secondary': {
            '@apply border-base text-base hover:border-opacity-70 hover:text-base': {}
          },
          '.sb-divider': {
            '@apply before:bg-primary': {}
          },
          '.sb-card': {
            '@apply bg-secondary': {}
          }
        },
        '.colors-h': {
          '@apply bg-complimentary-1 text-base': {},
          '.sb-input,.sb-select,.sb-textarea': {
            '@apply border-base placeholder-base': {}
          },
          '.sb-btn-primary': {
            '@apply bg-base border-base text-white hover:bg-opacity-70 hover:border-opacity-70': {}
          },
          '.sb-btn-secondary': {
            '@apply border-base text-base hover:border-opacity-70 hover:text-base': {}
          },
          '.sb-divider': {
            '@apply before:bg-base': {}
          },
          '.sb-card': {
            '@apply bg-primary': {}
          }
        },
        '.colors-i': {
          '@apply bg-complimentary-2 text-base': {},
          '.sb-input,.sb-select,.sb-textarea': {
            '@apply border-base placeholder-base': {}
          },
          '.sb-btn-primary': {
            '@apply bg-base border-base text-white hover:bg-opacity-70 hover:border-opacity-70': {}
          },
          '.sb-btn-secondary': {
            '@apply border-base text-base hover:border-opacity-70 hover:text-base': {}
          },
          '.sb-divider': {
            '@apply before:bg-base': {}
          },
          '.sb-card': {
            '@apply bg-secondary': {}
          }
        }
      });
    })
  ]
};
