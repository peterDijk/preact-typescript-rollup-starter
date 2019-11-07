import typescript from "rollup-plugin-typescript2";
import replace from "rollup-plugin-replace";
import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import htmlTemplate from "rollup-plugin-generate-html-template";
import { uglify } from "rollup-plugin-uglify";
import copy from "rollup-plugin-copy";

export default {
  input: "./src/index.tsx",
  output: {
    file: `dist/app.bundle.js`,
    format: "iife",
    name: "bundle",
    sourcemap: true,
    treeshake: true
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({
      objectHashIgnoreUnknownHack: true
    }),
    htmlTemplate({
      template: "./template.html",
      target: "index.html"
    }),
    copy({
      targets: [{ src: "src/css", dest: "dist" }]
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    uglify(),
    serve({
      contentBase: "./dist",
      open: true,
      host: "localhost",
      port: 9080
    }),
    livereload()
  ]
};
