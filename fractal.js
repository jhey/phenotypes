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

// Export fractal app
module.exports = fractal;
