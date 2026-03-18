import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        multiply: resolve(__dirname, 'multiply/index.html'),
        divide: resolve(__dirname, 'divide/index.html'),
      },
    },
  },
});
