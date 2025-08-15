import { defineConfig } from "vite";

export default defineConfig({
  base: './',
  server: {
    host: true,
    port: 3000,
    watch: {
      usePolling: false,
      ignored: [
        "**/node_modules/**",
        "**/dist/**",
        '**/*.glb',
        '**/*.gltf',
        '**/src/assetsEnum.ts'
      ],
    },
  },
  build: {
    target: "esnext",
    minify: "terser",
    sourcemap: false,
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          tween: ['@tweenjs/tween.js']
        }
      }
    }
  },
  assetsInclude: ["**/*.glb", "**/*.gltf", "**/*.bin", "**/*.jpg", "**/*.png"]
});
