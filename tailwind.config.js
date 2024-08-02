/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        secondary: ['EB Garamond', 'serif'],
      },
      colors: {
        'off-black': '#181818',
        primary: '#0023f5',
      },
    },
  },
  plugins: [],
};
