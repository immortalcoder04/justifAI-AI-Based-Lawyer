import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/upload': 'http://localhost:5000',
      '/predict': 'http://localhost:5000',
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
