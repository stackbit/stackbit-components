# Stackbit Components Library

Check out the components at [https://components.stackbit.com/](https://components.stackbit.com/)


## Import Component Library into a Next.js site

1. You can import this component library into existing Next.js site that uses Tailwind or follow [these steps](https://tailwindcss.com/docs/guides/nextjs) to create a new one.
1. Install Stackbit components library by running

   ```shell
   npm install @stackbit/components
   ```

1. Add one of the Stackbit component tailwind presets into your `tailwind.config.js`:

   ```js
   module.exports = {
     presets: [require('@stackbit/components/themes/tailwind.bold.config')],
     ...
   }
   ```

1. Import and use components in your code. You can import specific component:

   ```js
   import Button from '@stackbit/components/components/button'
   ```
   
   Or a full page layout with components in it:

   ```js
   import Advanced from '@stackbit/components/layouts/advanced'
   ```
   
   You can also use destructing imports - if you do, make sure your build has tree-shaking enabled otherwise you might end up with bundling all library components:
   
   ```js
   import { components, layouts } from '@stackbit/components'
   ```

For full list of components, and their props please visit  [https://components.stackbit.com/](https://components.stackbit.com/).


## Develop locally

1. Clone the repo
1. run `npm install`
1. run `npm run storybook` or `npm run develop` to watch for `themes/tailwind.{theme_name}.config.js` files and rebuild them.
1. Navigate to http://localhost:6006/ to open Storybook

If you run `npm run storybook`, you will need to run `npm run build-themes` every time you change one of the tailwind configs inside `themes`.


## Building Storybook

To build Storybook run `npm build`, the generated files will be written to `storybook-static` folder.


## Building and Publishing Component Library

1. Check that all files are committed and there are no outstanding git changes.
1. Run `npm run version-patch` to update the patch `v0.1.0` => `v0.1.1` or run `npm run version-minor` to update the minor `v0.1.1` => `v0.2.0`. This script updates the versions of `package.json` and `package-lock.json`, commits the changes and applies a git tag with new version.
1. Run `npm run build-dist`. This scripts builds the component library and puts it into the `dist` folder.
1. Run `cd dist` and then run `npm publish` to publish the package.
1. Push changes to `main` branch


## Linking Component Library to a Next.js site locally.

Use the local components library when developing components instead of having to publish to NPM every time.

You have 2 ways to use the components library locally.


## Npm Localpaths

1. Put the component library and Next.js site in sibling folders:

```
.
├── stackbit-components
└── nextjs-site
```

1. edit the `nextjs-site/package.json` and replace the package with a localpath

```json
"@stackbit/components": "file:../stackbit-components/dist"
```

1. edit the `nextjs-site/next.config.js` to use alias. This fixes the symlink problem.
  
```js
  // next.config.js
  module.exports = {
  ...
  webpack: (config, { webpack, isServer }) => {
    config.resolve.alias['react'] = path.resolve('./node_modules/react');
    config.resolve.alias['react-dom'] = path.resolve('./node_modules/react');
    return config;
  },
    ...
  };
```

### Npm Link

1. Put the component library and Next.js site in sibling folders:

```
.
├── stackbit-components
└── nextjs-site
```

1. Follow the steps above to import the component library into a Next.js site
1. Run `npm run build-dist` inside `stackbit-components`, this will build the component library and save the artifacts into the `dist` folder
1. Run `npm link` inside `stackbit-components/dist`
1. Run `npm link @stackbit/components` inside `nextjs-site`
1. Edit the webpack config in the Next.js site `next.config.js` to not follow symlinks:

```js
  // next.config.js
  module.exports = {
    ...
    webpack: (config) => {
        config.resolve.symlinks = false;
        return config;
    },
    ...
  };
```

## Themes

Every component can be rendered with a different theme. To change a theme in Storybook, click on the toolbar button with the "image" icon:

![Change theme](docs/changing-themes.png)

Every theme has a matching Tailwind config file in the `themes` folder. The configs files have the following format:

```
themes/tailwind.{theme_name}.config.js
```

Where the `{theme_name}` is an ID of a theme.

To build all tailwind configs run:

```shell
npm run build-themes
```

The generated CSS files will be written to `public/css/tailwind.{theme_name}.css`. These CSS files are only used by Storybook. When importing this library from your project, import tailwind config of a particular theme directly and use it as a preset:

```js
// tailwind.config.js
module.exports = {
  presets: [
    require('@stackbit/components/themes/tailwind.classic.config.js')
  ],
  // ...
}
```


## Variants

Some components might have several variants. To switch the variant, change the value of the component property responsible for the variant:

![Change theme](docs/changing-variants.png)
