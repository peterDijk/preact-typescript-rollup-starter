import typescript from 'rollup-plugin-typescript2';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

import htmlTemplate from 'rollup-plugin-generate-html-template';
import { uglify } from 'rollup-plugin-uglify';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import { generateSW } from 'rollup-plugin-workbox';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: './src/index.tsx',
  output: {
    file: `dist/app.bundle.js`,
    format: 'iife',
    name: 'bundle',
    sourcemap: true,
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.PUBLIC_URL': JSON.stringify('https://www.applesap.nl'),
    }),
    json(),
    postcss({
      plugins: [require('tailwindcss')],
    }),
    nodeResolve({ preferBuiltins: true, browser: true }),
    typescript(),
    commonjs(),
    globals(),
    builtins(),
    generateSW({
      swDest: 'dist/service-worker.js',
      globDirectory: 'dist',
    }),
    htmlTemplate({
      template: './template.html',
      target: 'index.html',
    }),
    copy({
      targets: [{ src: 'src/images', dest: 'dist' }],
    }),
    uglify(),
    !production &&
      (serve({
        contentBase: './dist',
        open: true,
        host: 'localhost',
        port: 3000,
      }),
      livereload({
        watch: 'dist',
      })),
  ],
};
