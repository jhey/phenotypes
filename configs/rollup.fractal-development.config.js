import path from 'path';

import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import { WORKSPACE_ROOT } from './constants.js';

export default {
  input: path.resolve(WORKSPACE_ROOT, 'fractal_react', 'client.jsx'),
  output: {
    file: path.resolve(WORKSPACE_ROOT, 'fractal_assets', 'js', 'bundle.js'),
    // output as an Immediately Invoked Function Expression
    format: 'iife',
  },
  plugins: [
    // transform the files through babel
    babel({
      extensions: ['.js', '.jsx'],
      babelHelpers: 'bundled',
    }),
    // rollup by default knows how to handle ECMAScript imports.
    // Because third party libraries imported through node_modules
    // are imported through the node module resolution algorithm
    // which is not part of the ECMAScript spec the following plugin
    // teaches rollup how to import node_modules.
    resolve(),
    // rollup by default handles ES modules imports and exports.
    // the following plugin tells rollup how to handle commonjs
    // style imports and exports (require and module.exports)
    commonjs(),
    // replace occurances of 'process.env.NODE_ENV' with "production"
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};
