import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import { uglify } from 'rollup-plugin-uglify';
import htmlTemplate from 'rollup-plugin-generate-html-template';

export default {
    input: './dist/es5/index.js',
    output: {
        file: `dist/app.bundle.js`,
        format: 'iife', // what is iife
        sourcemap: true,
        treeshake: true, // what why?

    },
    plugins: [
        htmlTemplate({
            template: './template.html',
            target: 'index.html',
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
          }),
          babel({
            exclude: 'node_modules/**' // only transpile our source code
          }),
        resolve(),
        commonjs(),
        serve({
            host: 'localhost',
            port: 8000,
        }),
        uglify(),
    ],
}