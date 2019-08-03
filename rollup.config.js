import typescript from "rollup-plugin-typescript2";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";
import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import copy from "rollup-plugin-copy";
import resolve from "rollup-plugin-node-resolve";

export default {
  input: ["./src/main.ts"],
  output: {
    format: "iife",
    dir: "dist"
  },

  plugins: [
    copy({
      targets: [
        { src: "src/index.html", dest: "dist" },
        {
          src:
            "node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js",
          dest: "dist"
        }
      ],
      copyOnce: true
    }),
    typescript({ objectHashIgnoreUnknownHack: true }),
    postcss({ plugins: [postcssImport] }),
    resolve(),
    serve({
      contentBase: "dist",
      open: true
    }),
    livereload({ watch: "dist" })
  ]
};
