/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ea2a33',
        "background-light": "#f8f7f6",
        "background-dark": "#221810",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Noto Serif"', 'serif'],
      },
    },
  },
  plugins: [],
}
