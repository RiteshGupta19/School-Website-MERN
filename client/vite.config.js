import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_REACT_APP_API_URL,  // Use the API URL from the .env file
        changeOrigin: true,
        secure: false, // Disable SSL validation for local dev
      },
    },
  },
});
