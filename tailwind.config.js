/** @type {import('tailwindcss').Config} */
import fb from 'flowbite/plugin';

export default {
  content: [
    './node_modules/flowbite-react/lib/esm/**/*.js',
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [fb],
  darkMode: 'media',
};
