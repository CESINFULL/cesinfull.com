/** @type {import('tailwindcss').Config} */
import fb from 'flowbite/plugin';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './node_modules/flowbite-react/lib/esm/**/*.js',
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        floating: 'floating 5s infinite',
      },
      keyframes: {
        floating: {
          '0% 100%': {
            'animation-timing-function': 'cubic-bezier(0.5, 0, 0.5, 1)',
            transform: 'translateY(12px)',
          },
          '50%': {
            'animation-timing-function': 'cubic-bezier(0.5, 0, 0.5, 1)',
            transform: 'translateY(-12px)',
          },
        },
      },
    },
    screens: {
      '2xs': '320px',
      ...defaultTheme.screens,
    },
  },
  plugins: [fb],
};
