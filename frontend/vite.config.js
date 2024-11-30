import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.USE_PRODUCTION_API ? 'https://brnrot-ai-backend.vercel.app' : 'http://localhost:3010');

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: process.env.USE_PRODUCTION_API ? 'https://brnrot-ai-backend.vercel.app' : 'http://localhost:3010',
        changeOrigin: true,
        rewrite: (path) => {
          console.log(`Rewriting path: ${path}`);
          return path.replace(/^\/api/, '/api');
        },
      },
    },
  },
});