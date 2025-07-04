import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      external: ["recharts"], // 👈 Fix the import error for recharts
    },
  },
});
