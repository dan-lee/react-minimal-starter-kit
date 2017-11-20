# react-minimal-starter-kit [![Build Status](https://travis-ci.org/dan-lee/react-minimal-starter-kit.svg?branch=master)](https://travis-ci.org/dan-lee/react-minimal-starter-kit) [![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovateapp.com/)


I've seen a lot of bootstrap or minimal React setups for developers. But they all seem kinda bloated. Even `create-react-app` is bloated as soon as you eject.

All I wanted is the minimal setup with: 

* React
* Babel
* webpack

No server side rendering, configuration frameworks, routers, stores or other libraries.

It'll just get you started. Everything else is up to you.

## How to install

Execute `git clone --depth=1 --branch=master https://github.com/dan-lee/react-minimal-starter-kit.git YOUR_PROJECT`, and then run `yarn`.
  
You may now remove the following files in the new project directory, to 'eject' from the original repository:

```sh
cd YOUR_PROJECT
rm -rf .git/ README.md LICENSE .travis.yml
``` 

## Information

- Static HTML entry is in `static/index.html`
- React entry point is `src/App.jsx`.
- Built JS output file is `static/js/bundle.js`
- Builds can be configured in `webpack.config.js`

## Build

* Run `yarn build` for a single build
* Run `yarn build:prod` for a minified build (minified by `UglifyJs` provided by `webpack`)
* Run `yarn start`/`yarn build:watch` for a continuous build while editing files

## Tests

* Run `yarn test`
