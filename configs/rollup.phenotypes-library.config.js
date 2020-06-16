import path from 'path';

import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import {WORKSPACE_ROOT} from './constants.js';
import packageJSON from '../package.json';

const commonRollupConfig = {
    input: path.resolve(WORKSPACE_ROOT, 'public_api.js'),

    plugins: [
        babel({
            extensions: ['.js', '.jsx'],
            babelHelpers: 'bundled'
        }),
        resolve(),
        commonjs(),
    ],
    // do not bundle peer dependencies.
    // these are dependencies that are required to run,
    // however, these should be installed by the consuming
    // application and not bundled with the library
    external: [
        ...Object.keys(packageJSON.peerDependencies)
    ]
};

export default [
    {
        ...commonRollupConfig,
        output: {
            file: path.resolve(WORKSPACE_ROOT, packageJSON.module),
            // for modern bundlers like webpack 2+ and rollup
            // output esm format
            format: 'esm'
        },
    },
    {
        ...commonRollupConfig,
        output: {
            file: path.resolve(WORKSPACE_ROOT, packageJSON.main),
            // output commonjs format for older workflows
            format: 'cjs'
        },
    },
];
