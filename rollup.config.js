import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
// import uglify from 'rollup-plugin-uglify';

export default {
    input: './dist/es7/index.js',
    output: {
        file: `dist/app.bundle.js`,
        format: 'iife', // what is iife
        sourcemap: true,
        treeshake: true, // what why?

    },
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
          }),
          babel({
            exclude: 'node_modules/**' // only transpile our source code
          }),
        resolve(),
        commonjs(),
        serve({
            // Launch in browser (default: false)
            open: true,
           
            // Page to navigate to when opening the browser.
            // Will not do anything if open=false.
            // Remember to start with a slash.
            openPage: '/index.html',
            host: 'localhost',
            port: 8000,
        })
        // uglify ? 
    ],
}