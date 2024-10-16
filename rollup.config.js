import json from "@rollup/plugin-json";

export default {
  input: "src/loader.js",
  output: {
    file: "dist/weather-icons.js",
    format: "cjs",
  },
  plugins: [json()],
};
