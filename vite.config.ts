import { defineConfig } from 'vite';
export default defineConfig({
  server: {
    allowedHosts: 'devserver-preview--anychar.netlify.app',
  },
});
