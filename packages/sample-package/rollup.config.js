/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: "src/index.js",
  output: [
    {
      dir: "dist/es",
      format: "es",
      preserveModules: true,
    },
    {
      dir: "dist/cjs",
      format: "cjs",
      preserveModules: true,
    },
  ],
};

export default config;
