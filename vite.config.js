import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite config for the IHCHS Election App
// This tells Vite how to bundle the React app for production
export default defineConfig({
  plugins: [react()],
  build: {
    // Output the built files to the "dist" folder (Vercel looks for this by default)
    outDir: "dist",
  },
});
