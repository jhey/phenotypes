const _ = require('lodash');
const Promise = require('bluebird');
const { Adapter } = require('@frctl/fractal');
const React = require('react');
const ReactDOM = require('react-dom/server');
const { prettyPrint } = require('html');
const babelReg = require('@babel/register');

/*
 * Adpater options
 * ---------------
 * These options can be overridden when the adapter is set up.
 * Syntax: ReactAdapter({ options })
 *
 * - babelConfig:  any configuration options for @babel/register
 *                 https://babeljs.io/docs/en/babel-register/
 *
 * - renderMethod: 'renderToStaticMarkup' or 'renderToString'
 *                 https://facebook.github.io/react/docs/react-dom-server.html
 */
const DEFAULT_OPTIONS = {
  babelConfig: {
    extensions: ['.jsx'],
    presets: ['@babel/preset-react'],
  },
  renderMethod: 'renderToStaticMarkup',
};

/*
 * React Adapter
 * -------------
 */
class ReactAdapter extends Adapter {
  constructor(source, app, options) {
    super(null, source);
    this.app = app;

    if (options.renderMethod === 'renderToString') {
      this.renderMethod = ReactDOM.renderToString;
    } else {
      this.renderMethod = ReactDOM.renderToStaticMarkup;
    }
  }

  render(path, str, context, meta) {
    const metaObject = meta || {};
    const defaultContext = {
      _self: metaObject.self,
      _target: metaObject.target,
      _env: metaObject.env,
      _config: this.app.config(),
    };

    const enhancedContext = _.assign(defaultContext, context);

    delete require.cache[path];
    const componentImport = require(path);
    const component = componentImport.default || componentImport;

    const element = React.createElement(component, enhancedContext);
    const renderedHtml = this.renderMethod(element);
    const prettyHtml = prettyPrint(renderedHtml);

    return Promise.resolve(prettyHtml);
  }
}

/*
 * Register Babel
 * --------------
 * This hooks into import/require statements and tells Babel
 * to compile according to user-configurable options.
 *
 * Call this whenever components have been parsed so we can
 * register all Fractal handles as import module aliases.
 *
 * Makes these possible:
 *
 * import Button from '@button';
 * const Button = require('@button');
 */
function registerBabel(app, config) {
  // Extract module aliases (e.g. '@button': '/path/to/button.jsx')
  const aliases = {};
  app.components.items().forEach(item => {
    aliases[`@${item.handle}`] = item.viewPath;
  });

  // Add resolver plugin aliases to babel config
  // https://github.com/tleunen/babel-plugin-module-resolver
  _.assign(config, {
    plugins: [['module-resolver', { alias: aliases }]],
  });

  // Hook up that babel
  babelReg(config);
}

/*
 * Adapter registration
 * --------------------
 */
module.exports = function(config = {}) {
  const options = _.assign({}, DEFAULT_OPTIONS, config);

  return {
    register(source, app) {
      const componentsReady = () => {
        registerBabel(app, options.babelConfig);
      };
      app.components.on('loaded', componentsReady);
      app.components.on('updated', componentsReady);

      return new ReactAdapter(source, app, options);
    },
  };
};
