# Phenotypes

Phenotypes is Amino's design system—a set of guides and components that we use to design and build our products.

This repository contains the following resources:

* **Guides** — These document how to use the design system. Read about typography, color, and other concepts for designing and building Amino's products and assets.
* **Components** — React components that can be used in front-end projects.
* **Styles** — SASS and CSS stylesheets that can be used in front-end projects.

Phenotypes runs on [Fractal](http://fractal.build), a tool that hosts the guides, components, and styles, and displays them in a friendly web UI. Before contributing to Phenotypes components, familiarize yourself with [Fractal's documentation](http://fractal.build/guide). Just keep in mind that we're using React instead of Handlebars as our component rendering engine, so anything specific to Handlebars doesn't apply.

## Getting started

Here's how to get Phenotypes up and running locally: 

* Clone this repo and `cd` into it.
* `docker build -t phenotypes .`
* `docker run -it -p 3000:3000 phenotypes`
* Open [http://localhost:3000](http://localhost:3000) in a browser

While running, Fractal will watch your `components` and `guides` directories for changes. It will automatically reload itself and your browser as needed.

## Development

If you're working on components, you'll need to spin up a couple more processes in addition to running the Fractal server:

```
$ npm run watch-js
$ npm run watch-css
```

The `watch-js` script has Webpack automatically rebuild the client-side React bundle whenever components are changed. Here's the basic sequence of events:

* You update a component
* Fractal notices and fires an event on the server side
* We write out a mapping file of all components
* Webpack (via `watch-js`) detects that the component mapping file has changed and rebuilds the client-side rendering bundle

The `watch-css` script recompiles `phenotypes.css` whenever a SASS file in the `/styles` directory tree changes. Note: phenotypes.css is version controlled so that it can be used in a project without requiring SASS. It's also symlinked into `/fractal_assets/css` so that it can be used in the Fractal preview.

## Using Phenotypes components in a project

TK
