import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Replace 3000 with your backend port if different
        changeOrigin: true,             // Ensures the correct origin in proxied requests
        rewrite: (path) => path.replace(/^\/api/, '/api'), // Optional if the backend expects `/api`
      },
    },
  },
});

