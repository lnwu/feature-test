import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

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
};

export default config;
