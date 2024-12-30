import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // The output directory for build
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5001', // Proxy API requests to backend on port 5001
    },
  },
});