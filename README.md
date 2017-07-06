# Phenotypes

Phenotypes is Amino's design system—a set of guides and components that we use to design and build our products.

This repository contains the following resources:

* **Guides** — These document how to use the design system. Read about typography, color, and other concepts for designing and building Amino's products and assets.
* **Components** — React components that can be used in front-end projects.
* **Styles** — SASS and CSS stylesheets that can be used in front-end projects.

Phenotypes runs on [Fractal](http://fractal.build), a tool that hosts the guides, components, and styles, and displays them in a friendly web UI. Before contributing to Phenotypes components, familiarize yourself with [Fractal's documentation](http://fractal.build/guide). Just keep in mind that we're using React instead of Handlebars as our component rendering engine, so anything specific to Handlebars doesn't apply.

## Getting started

Here's how to get Phenotypes up and running locally:

* Have [Docker](https://www.docker.com) installed and working
* Clone this repo and `cd` into it.
* `make build`
* `make dev`
* Open [http://localhost:3000](http://localhost:3000) in a browser

While running, Fractal will watch your `components` and `guides` directories for changes. It will automatically reload itself and your browser as needed.

There are a couple other background watcher processes running that automatically compile JS and CSS as needed (`watch-js` and `watch-css`, respectively).

The `watch-js` script has Webpack automatically rebuild the client-side React bundle whenever components are changed. Here's the basic sequence of events:

* You update a component
* Fractal notices and fires an event on the server side
* We write out a mapping file of all components
* Webpack (via `watch-js`) detects that the component mapping file has changed and rebuilds the client-side rendering bundle

The `watch-css` script recompiles `phenotypes.css` whenever a SASS file in the `/styles` directory tree changes. Note: phenotypes.css is version controlled so that it can be used in a project without requiring SASS. It's also symlinked into `/fractal_assets/css` so that it can be used in the Fractal preview.

To stop the server, just hit `^C`. If something weird is going on, try `make clean && make dev`.

To run Phenotypes without all the syncing and watching (e.g. for deployment), just run it like so:

```
$ make run
```

## Developing components

Each React component should go in a subdirectory of `components`. For example, a generic button component would be `components/button/button.jsx`.

In addition to the .jsx file, a component's directory can contain additional files that define how it will function in the Fractal viewer. Most importantly, each component should have a config file and a README.

Take a look at an existing component or the [Fractal components](http://fractal.build/guide/components) documentation for more details.

### Testing

Unit tests for a component should go in a component's directory. In the example above, tests for a generic button component would be `components/button/button.spec.js`. Tests are run with [Mocha](https://mochajs.org/) using the [Chai](http://chaijs.com/) assertion library and Airbnb's [Enzyme](https://github.com/airbnb/enzyme) as a React testing utility. Because Enzyme's `mount` API requires a DOM, test commands first load a document into the global scope using [JSDOM](https://github.com/tmpvar/jsdom).

To run all the tests:
```
$ make test
```

To run tests matching a regex pattern, first run `make shell` to create a shell inside the container then `npm run test --grep '<pattern>'`. The pattern should match text for the `describe` or `it` blocks for the suite or tests you want to run.

## Developing styles

The SASS file organization scheme is loosely based on Bootstrap 4. The entry point file is phenotypes.scss, which goes on to import all the things:

1. Webfonts
2. Feature toggles
3. Modular scale
4. Variables and mixins
5. Reboot
6. Typography
7. Components
8. Utilities

Webfonts are imported first, because they're pulled in as a raw .css import. The webfont file has a CSS `@import` directive at the top, which must come first in the compiled stylesheet.

The next import is `_features.scss`, which contains a number of toggles for optional Phenotypes responsive utility modules, like flexbox, display, spacing, and text utilities. These utilities, which are all enabled by default, can create a LOT of compiled CSS, so they can be worth turning off if your project doesn't need them. To turn off a utility, override the corresponding variable before importing Phenotypes:

```
// _config.scss
$enable-spacing-utilities: false;

// main.scss
@import "config";
@import "phenotypes";
```

Modular scale helpers come next, since these variables and functions need to be defined for the subsequent files to function properly.

Variables that are used throughout Phenotypes are organized in `_variables.scss`. All variables are flagged as `!default`, which means they can be overridden similarly to the feature toggles:

```
// _config.scss
$grid-breakpoints: (
  xs: 0,
  md: 900px
);

// main.scss
@import "config";
@import "phenotypes";
```

The `_mixins.scss` file contains imports for functions and mixins that are used by other modules and components. Actual implementations should go in `styles/mixins`. E.g. `styles/mixins/_type.scss` contains both functions and mixins that help with typography.

Phenotypes uses a slightly modified version of Bootstrap 4's reboot. [Read more about that.](https://v4-alpha.getbootstrap.com/content/reboot/)

The main `_type.scss` file contains styles for basic typographic and HTML elements. These styles should be lightweight and flexible so that they are easily overridden by more specific module and component styles. Note that there are also `mixins/_type.scss` and `utilities/_type.scss` for typography mixins and utilities, respectively.

Component styles are imported next. Each component should get its own stylesheet. TODO: more documentation once we have component styles.

Finally, utilities are imported. Similarly to mixins, each utility gets its own file in `styles/utilities`. E.g. `styles/utilities/_spacing.scss` contains spacing utilities. The utility files are aggregated together into `_utilities.scss`, which is imported into the main `phenotypes.scss` file.

The compiled CSS is provided as `styles/phenotypes.css`. Using the SASS stylesheet is preferred, as you'll get access to all the variables and mixins. But for a simple project, it might make more sense to just use the pre-baked CSS.

## Using Phenotypes components and styles in a project

The following command will install Phenotypes into `node_modules/@aminohealth/phenotypes`:

```
$ npm install @aminohealth/phenotypes --save --production
```

The `--production` flag indicates that you just want the Phenotypes codebase and no development dependencies (like Fractal). React components will be in `node_modules/@aminohealth/phenotypes/components` and SCSS/css will be in `node_modules/@aminohealth/phenotypes/styles`. You'll be responsible for setting up node_sass, webpack, or whatever else will be utilizing these resources in your project.
