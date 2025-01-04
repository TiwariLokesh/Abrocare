/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",       // HTML entry point
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JSX/TSX files in the `src` folder
  ],
  theme: {
    extend: {
      colors: {
        'blue-400': '#2A4DC7',
        'blue-300': '#6982D9',
        'blue-200': '#d6ecfb',
      },
    },
  },
  plugins: [],
};
