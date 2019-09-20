import { terser } from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";

export default {
  input: "index.js",
  output: {
    file: "./dist/nuoUVTrack.min.js",
    format: "umd",
    name: "nuoUVTrack"
  },
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    terser()
  ]
};
