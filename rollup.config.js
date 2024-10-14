import json from "@rollup/plugin-json";

export default {
  input: "src/loader.js",
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [json()],
};
