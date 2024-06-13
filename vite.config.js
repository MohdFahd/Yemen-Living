import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/YemenLiving/", // Set your base URL here
  plugins: [vue()],
});
