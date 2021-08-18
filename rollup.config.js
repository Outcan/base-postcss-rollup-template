import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";

const production = !process.env.NODE_ENV === "production";

console.log(production);

export default {
  input: "src/main.js",
  output: [
    {
      file: "public/js/bundle.js",
      format: "iife",
      sourcemap: true,
      name: "***"
    },
    {
      file: "public/js/bundle.min.js",
      format: "iife",
      sourcemap: true,
      name: "***",
      plugins: [terser({ compress: { drop_console: true } })]
    }
  ],
  plugins: [
    resolve({ browser: true }),
    json(),
    commonjs() /*,
    production && terser({ compress: { drop_console: true } })*/
  ]
};
