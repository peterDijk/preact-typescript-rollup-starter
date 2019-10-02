import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
    input: './dist/es7/index.js',
    output: {
        file: `dist/app.bundle.js`,
        format: 'esm', // what is iife
        sourcemap: true,
        // treeshake: true, // what why?

    },
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
          }),
        //   babel({
        //     exclude: 'node_modules/**' // only transpile our source code
        //   }),
        resolve(),
        // resolve({
        //     jsnext: true,
        //     // module: false,
        //     // browser: true,
        //     main: true,
        //     extensions: ['.js', '.jsx'],
        //     // preferBuiltins: true,
        //   }),
        commonjs(),
        // uglify.uglify({
        //     compress: {
        //       screw_ie8: true,
        //       warnings: false
        //     },
        //     output: {
        //       comments: false
        //     },
        //     sourcemap: false,
        //   }),
    ],
}