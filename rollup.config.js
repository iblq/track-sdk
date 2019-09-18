import { terser } from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";

export default {
  input: "index.js",
  output: {
    file: "./dist/nuoTrack.js",
    format: "umd",
    name: "nuoTrack"
  },
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    terser()
  ]
};
