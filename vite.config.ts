import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const production = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: production ? 'terser' : 'esbuild',
    terserOptions: {
      format: {
        comments: false,
      },
    },
  },
});
