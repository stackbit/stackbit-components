# Stackbit Components Library


## Run locally

1. Clone the repo
1. run `npm install`
1. run `npm run build-theme-css`
1. run `mpm run storybook`
1. Navigate to http://localhost:6006/ to open Storybook


## Themes

Every component can be rendered with a different theme. To change a theme in Storybook, click on the toolbar button with the "image" icon

![Change theme](./docs/changing-themes.png)

Every theme has a Tailwind config file in `themes` folder. The configs files are named after theme names `tailwind.{theme_name}.config.js`. When working on Tailwind configs, you need to rebuild them every time you make a change (to be improved). To build all tailwind configs run `npm run build-theme-css`. The generated CSS files will be written to `public/css/tailwind.{theme_name}.css`. 

These CSS files are only used by Storybook. When using this library from your project, a particular tailwind config should be used directly.


## Variants

Some components might have several variants. To switch the variant, change the value of the component property responsible for the variant:

![Change theme](./docs/changing-variants.png)


## Building

To build Storybook run `npm build`, the generated files will be written to `storybook-static` folder 
