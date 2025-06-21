import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@_assets': path.resolve(__dirname, 'src/assets'),
      '@_icons': path.resolve(__dirname, 'src/assets/icon'),
      '@_modalImages': path.resolve(__dirname, 'src/assets/modal'),
      '@_components': path.resolve(__dirname, 'src/components'),
      '@_menu': path.resolve(__dirname, 'src/components/Menu'),
      '@_modal': path.resolve(__dirname, 'src/components/Modal'),
      '@_navbar': path.resolve(__dirname, 'src/components/NavBar'),
      '@_notfound': path.resolve(__dirname, 'src/components/NotFound'),
      '@_slide': path.resolve(__dirname, 'src/components/Slide'),
      '@_pages': path.resolve(__dirname, 'src/page'),
      '@_main': path.resolve(__dirname, 'src/page/Main'),
      '@_notice': path.resolve(__dirname, 'src/page/Notice'),
      '@_styles': path.resolve(__dirname, 'src/App.css'),
    }
  }
});
