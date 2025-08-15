import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: true,
    port: 3000,
    watch: {
      usePolling: false,
      ignored: ["**/node_modules/**", "**/dist/**", '**/*.glb', '**/*.gltf','**/src/assetsEnum.ts' ],

    },
  },
  build: {
    target: "esnext",
    minify: false,
    sourcemap: true,
  },
  assetsInclude: ["**/*.glb", "**/*.gltf", "**/*.bin", "**/*.jpg", "**/*.png"]
});
