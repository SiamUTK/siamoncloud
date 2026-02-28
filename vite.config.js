import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

const isBuild = process.env.npm_lifecycle_event === "build";

export default defineConfig({
  plugins: [
    react(),
    isBuild &&
      visualizer({
        filename: "stats.html",
        open: false,
        gzipSize: true,
        brotliSize: true,
      }),
  ].filter(Boolean),
  build: {
    target: "es2017",
    sourcemap: false,
    minify: "esbuild",
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom", "lucide-react"],
        },
      },
    },
  },
});
