import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 9529,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
    // extensions: [".js", ".vue", ".ts"],
  },
});
