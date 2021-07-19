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
        /*
        "primary"            : "#718bfc",
        "primary-variant"    : "#849bfc",
        "primary-content"    : "#181A2A",


        "secondary"          : "#7B92B2",
        "secondary-variant"  : "#5C789D",
        "secondary-content"  : "#181A2A",

        "accent"             : "#67CBA0",
        "accent-variant"     : "#41BE88",
        "accent-content"     : "#181A2A",

        "neutral"           : "#181A2A",
        "neutral-variant"   : "#06060A",
        "neutral-content"   : "#EDF2F7",

        "base"              : "#ffffff",
        "base-100"          : "#F7FAFD",
        "base-200"          : "#EDF2F7",
        "base-content"      : "#181A2A",

        'info'              : '#82BFFF',
        'success'           : '#009485',
        'warning'           : '#FFEBEB',
        'error'             : '#DC4747',
        */

        "primary"            : "#FFC329",
        "primary-variant"    : "#FFD362",
        "primary-content"    : "#181830",


        "secondary"          : "#E0A82E",
        "secondary-variant"  : "#BF8C1D",
        "secondary-content"  : "#ffffff",

        "accent"             : "#ff5722",
        "accent-variant"     : "#111122",
        "accent-content"     : "#ffffff",

        "neutral"           : "#111122",
        "neutral-variant"   : "#212121",
        "neutral-content"   : "#ffffff",

        "base"              : "#ffffff",
        "base-100"          : "#F5F5F5",
        "base-200"          : "#E3E3E3",
        "base-content"      : "#181830",

        'info'              : '#82BFFF',
        'success'           : '#009485',
        'warning'           : '#FFEBEB',
        'error'             : '#DC4747',



        /*
        "primary"            : "#66CC8A",
        "primary-variant"    : "#40BF6C",
        "primary-content"    : "#ffffff",


        "secondary"          : "#377CFB",
        "secondary-variant"  : "#055BFA",
        "secondary-content"  : "#ffffff",

        "accent"             : "#EA5234",
        "accent-variant"     : "#D43616",
        "accent-content"     : "#ffffff",

        "neutral"           : "#333C4D",
        "neutral-variant"   : "#1F242E",
        "neutral-content"   : "#ffffff",

        "base"              : "#ffffff",
        "base-100"          : "#F9FAFB",
        "base-200"          : "#F2F2F2",
        "base-content"      : "#333C4D",

        'info'              : '#82BFFF',
        'success'           : '#009485',
        'warning'           : '#FFEBEB',
        'error'             : '#DC4747',
        */

        'sb-background': 'var(--background)',
        'sb-on-background': 'var(--on-background)',
        'sb-btn-background': 'var(--btn-background)',
        'sb-on-btn-background': 'var(--on-btn-background)',
        'sb-on-btn-background-alt': 'var(--on-btn-background-alt)',
        'sb-btn-border': 'var(--btn-border)',
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
