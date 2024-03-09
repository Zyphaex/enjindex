import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
    server: {
      proxy: {
        '/api': {
          target: 'https://pro-api.coinmarketcap.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '/v1')
        }
      }
    }
  };

  return config;
});
