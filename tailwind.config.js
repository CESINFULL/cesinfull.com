/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      'bangers': ['Bangers', 'cursive'],
    },
    colors: {
      'background': '#404040',
      'cesinf-blue': '#6E91BB ',
    }
  },
  plugins: [],
};
