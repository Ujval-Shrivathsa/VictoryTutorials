import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/VictoryTutorials/', // This ensures the base path is used during build
  build: {
    rollupOptions: {
      input: './index.html', // Ensure Vite uses the correct entry point
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // Retain this as per your original setup
  },
});
