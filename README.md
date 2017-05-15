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
* `docker-compose build`
* `docker-compose up`
* Open [http://localhost:3000](http://localhost:3000) in a browser

While running, Fractal will watch your `components` and `guides` directories for changes. It will automatically reload itself and your browser as needed.

There are a couple other background watcher processes running that automatically compile JS and CSS as needed (`watch-js` and `watch-css`, respectively).

The `watch-js` script has Webpack automatically rebuild the client-side React bundle whenever components are changed. Here's the basic sequence of events:

* You update a component
* Fractal notices and fires an event on the server side
* We write out a mapping file of all components
* Webpack (via `watch-js`) detects that the component mapping file has changed and rebuilds the client-side rendering bundle

The `watch-css` script recompiles `phenotypes.css` whenever a SASS file in the `/styles` directory tree changes. Note: phenotypes.css is version controlled so that it can be used in a project without requiring SASS. It's also symlinked into `/fractal_assets/css` so that it can be used in the Fractal preview.

To stop the server, just hit `^C`.

To run Phenotypes without all the syncing and watching (e.g. for deployment), just run it like so:

```
$ docker-compose -f docker-compose.yml -f docker-compose.prod.yml up
```

## Using Phenotypes components in a project

The following command will install the latest Phenotypes `master` branch into `node_modules/phenotypes`:

```
$ npm install git+ssh://git@github.com:parelabs/phenotypes.git --save --production
```

The `--production` flag indicates that you just want Phenotypes React components (`node_modules/phenotypes/components`) and SCSS/css (`node_modules/styles`), and you'll be responsible for setting up node_sass, webpack, or whatever else will be utilizing these resources in your project.

Like most git URLs, you can append a `#branch-name`, tag, or commit to the end of it to install a specific version of Phenotypes.
