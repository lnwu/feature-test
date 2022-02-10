import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  mode: "production",
  entry: "./src/entry.js",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
