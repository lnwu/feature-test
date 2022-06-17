import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import TerserPlugin from "terser-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  mode: "production",
  devtool: "source-map",
  entry: "./src/entry.js",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: {
            defaults: true,
            unused: true,
          },
          mangle: false,
          format: {
            comments: "all",
            beautify: true,
          },
        },
      }),
    ],
  },
};

export default config;
