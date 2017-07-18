'use strict';

// Requirements
const path = require('path');
const generateComponentsMapping = require('./fractal_react/generate.js');
const fractal = require('@frctl/fractal').create();

// Title
fractal.set('project.title', 'Phenotypes');

// Paths
fractal.components.set('path', path.join(__dirname, 'components'));
fractal.docs.set('path', path.join(__dirname, 'guides'));
fractal.web.set('static.path', path.join(__dirname, 'fractal_assets'));

// React adapter for server-side rendering
const reactAdapter = require('fractal-react-adapter')({
  // renderMethod: 'renderToString',
  renderMethod: 'renderToStaticMarkup',
});
fractal.components.engine(reactAdapter);
fractal.components.set('ext', '.jsx');

// Make components available to client-side React
const generate = () => { generateComponentsMapping(fractal) };
fractal.components.on('loaded', generate);
fractal.components.on('updated', generate);

// Customize the base theme
const mandelbrot = require('@frctl/mandelbrot');
const customisedTheme = mandelbrot({
  "nav": ["docs", "components"],
  "scripts": ['default', "/js/theme.js"],
  "styles": ['default', '/css/Sailec_Basics.css', '/css/theme.css'],
  "panels": ["notes", "html", "view", "context", "resources", "info"]
});
fractal.web.theme(customisedTheme);

// Nomenclature config
fractal.docs.set('label', 'Guides');
fractal.components.set('label', 'Library');
fractal.components.set('statuses', {
    deprecated: {
        label: "Deprecated",
        description: "Going away someday.",
        color: "#F04D5D"
    },
    demo: {
        label: "Demo only",
        description: "Just showing off some stuff (not meant to be a real component).",
        color: "#853B94"
    },
    draft: {
        label: "Draft",
        description: "Work in progress.",
        color: "#FC8626"
    },
    stable: {
        label: "Stable",
        description: "Ready to go.",
        color: "#2DCFA1"
    }
});
fractal.docs.set('statuses', {
    draft: {
        label: 'Draft',
        description: 'Work in progress.',
        color: '#FC8626'
    },
    stable: {
        label: 'Stable',
        description: 'Ready for go.',
        color: '#2DCFA1'
    }
});
fractal.components.set('default.status', 'draft');
fractal.docs.set('default.status', 'draft');

// Export fractal app
module.exports = fractal;
