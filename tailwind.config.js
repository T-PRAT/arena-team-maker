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
    extend: {
      keyframes: {
        slideR: {
          "0%": { opacity: 0, transform: "translateX(100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" }
        },
        slideL: {
          "0%": { opacity: 0, transform: "translateX(-100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" }
        }
      },
      animation: {
        slideR: "slideR 1s ease-in-out forwards",
        slideL: "slideL 1s ease-in-out forwards"
      }
    },
  },
  plugins: [],
}

