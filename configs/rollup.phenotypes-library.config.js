import path from 'path';

import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { WORKSPACE_ROOT } from './constants.js';
import packageJSON from '../package.json';

const commonRollupConfig = {
  input: path.resolve(WORKSPACE_ROOT, 'public_api.js'),
  plugins: [
    babel({
      extensions: ['.js', '.jsx'],
      // for the library build we want babel helpers
      // to not be included in the bundle.
      // we want it to be the consuming application's
      // responsibility to provide the @babel/runtime
      // This is why we also override the babel preset
      // here. The airbnb babel preset by default includes
      // @babel/plugin-transform-runtime, which makes
      // @babel/runtime a peer dependency of the application.
      // This is what we want for the library but not for the
      // fractal application.
      babelHelpers: 'runtime',
      presets: ['airbnb'],
    }),
    resolve(),
    commonjs(),
  ],
  // do not bundle peer dependencies.
  // these are dependencies that are required to run,
  // however, these should be installed by the consuming
  // application and not bundled with the library
  external: [...Object.keys(packageJSON.peerDependencies)],
};

export default [
  {
    ...commonRollupConfig,
    output: {
      file: path.resolve(WORKSPACE_ROOT, packageJSON.module),
      // for modern bundlers like webpack 2+ and rollup
      // output esm format
      format: 'esm',
      sourcemap: true,
    },
  },
  {
    ...commonRollupConfig,
    output: {
      file: path.resolve(WORKSPACE_ROOT, packageJSON.main),
      // output commonjs format for older workflows
      format: 'cjs',
      sourcemap: true,
    },
  },
];
