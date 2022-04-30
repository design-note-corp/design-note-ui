const path = require("path");
const react = require("@vitejs/plugin-react");
const { defineConfig } = require("vite");
const { peerDependencies } = require("./package.json");
const { vanillaExtractPlugin } = require("@vanilla-extract/vite-plugin");

/**
 * @type {import('vite').UserConfig}
 */
module.exports = defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  build: {
    lib: {
      sourcemap: true,
      name: "design-note-ui",
      entry: path.resolve(__dirname, "src", "index.ts"),
      fileName: (format) => `main.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
