import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  proxy: {
    "/api": {
      //target: "http://localhost:3080:3080", // Ganti dengan alamat IP atau domain backend Anda
      target: "http://192.168.100.183:3080",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
});
