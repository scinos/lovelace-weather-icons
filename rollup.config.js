import json from "@rollup/plugin-json";
import serve from "rollup-plugin-serve";

const isWatch = process.env.ROLLUP_WATCH;

export default {
  input: "src/loader.js",
  output: {
    file: "dist/weather-icons.js",
    format: "cjs",
  },
  plugins: [
    json(),
    isWatch &&
      serve({
        host: "0.0.0.0",
        contentBase: "dist",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }),
  ].filter(Boolean),
};
