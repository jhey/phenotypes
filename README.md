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
* `npm install`
* Start Fractal (see below)
* Open [http://localhost:3000](http://localhost:3000) in a browser

### Starting Fractal

Starting Fractal can happen one of two ways.

Option 1: globally install the Fractal CLI tool:

```
$ npm i -g @frctl/fractal  # only do this once
$ fractal start --sync     # so handy
```

Option 2: just use the Fractal binary from `node_modules`:

```
$ ./node_modules/@frctl/fractal/bin/fractal start --sync
```

Note: the `--sync` flag tells Fractal to watch your components and guides directories for changes. It will automatically reload itself and your browser as needed.

## Contributing

TK (CSS and JS build/watch tools)
TK (Naming conventions)

## Using Phenotypes components in a project

TK