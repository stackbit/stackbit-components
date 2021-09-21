# Stackbit Components Library

View the Component Library at [https://components.stackbit.com/](https://components.stackbit.com/)

## Quickstart

1. run `npm install`
1. run `npm run dev`
1. Navigate to http://localhost:6006/ to open Storybook

## About

This repository contains the **components** and **styles** used by Stackbit themes. It is published as an NPM module [@stackbit/components](https://www.npmjs.com/package/@stackbit/components) 

You can edit components and styles and view the changes in Storybook. 


> To see local component changes in a theme without having to to publish to NPM every time use this repo: https://github.com/stackbit/stackbit-theme-utils

## Building Storybook

To build Storybook run `npm build`


## Building and Publishing Component Library

1. Make sure you are on the `main` branch
1. Check that all files are committed and there are no outstanding git changes.
1. Run `npm run version-patch` to update the patch `v0.1.0` => `v0.1.1` or run `npm run version-minor` to update the minor `v0.1.1` => `v0.2.0`. This script updates the versions of `package.json` and `package-lock.json`, commits the changes and applies a git tag with new version.
1. Run `git push origin main --tags`
1. Internal Stackbit CI/CD pipeline will publish the NPM package
