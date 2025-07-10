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
      '@_components': path.resolve(__dirname, 'src/component'),
      '@_componentsModal': path.resolve(__dirname, 'src/component/modal'),
      '@_componentsOnboarding': path.resolve(__dirname, 'src/component/onboarding'),
      '@_util': path.resolve(__dirname, 'src/util'),
      '@_atom': path.resolve(__dirname, 'src/atom'),
      '@_pages': path.resolve(__dirname, 'src/pages'),
      '@_styles': path.resolve(__dirname, 'src/font.css'),
    }
  }
});