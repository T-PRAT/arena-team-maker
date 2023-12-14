/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'text': '#e9e8e6',
      'background': '#12110f',
      'primary': '#bfb8a7',
      'secondary': '#61583f',
      'accent': '#b3a47c',
    },

    fontFamily: {
      'sans': ['Righteous', 'Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

