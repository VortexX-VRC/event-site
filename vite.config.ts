import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  plugins: [
    tailwindcss(),
    enhancedImages(),
    sveltekit()
  ],
  resolve: {
    alias: {
      $img: mode === 'dev' ? '/images' : '/event-site/images'
    }
  }
}));
