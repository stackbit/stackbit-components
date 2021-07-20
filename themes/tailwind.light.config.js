const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')
const { scale, fontFamily, fontWeight, flex } = require('tailwindcss/defaultTheme');

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
        'base':              '#0A0A0A',
        'base-50':           '#FFFFFF',
        'base-100':          '#F5F5F5',
        'base-200':          '#E1E1E1',
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
  plugins: [],
};
