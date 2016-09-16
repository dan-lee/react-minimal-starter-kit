# react-minimal-starter-kit

I've seen a lot of bootstrap or minimal React setups for developers. But they all seem kinda bloated.

All I wanted is the minimal setup with: 
* React
* Babel
* webpack

No server side rendering, configuration frameworks, routers, stores or other libraries.

It'll just get you started. Everything is up to you.

## How to install

Execute `git clone --depth=1 --branch=master https://github.com/dan-lee/react-minimal-starter-kit.git yourProject`.
  
You may now remove the following files in the new project directory, to 'eject' from the original repository:
* `${yourProject}/.git`
* `${yourProject}/README.md`
* `${yourProject}/LICENSE`

## Information

- Static HTML entry is in `static/index.html`
- React entry point is `src/App.jsx`.
- Built JS output file is `static/js/bundle.js`
- Builds can be configured in `webpack.config.js`

## Build

* Run `npm run build` for a single build
* Run `npm start`/`npm run build:watch` for a continuous build while editing files
