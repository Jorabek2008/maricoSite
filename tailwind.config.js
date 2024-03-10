/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': "#326CF9",
      'white': "#FFFFFF",
      'kulrang': '#707070',
      'transparent': 'transparent',
      'green-light': '#0FC65C',
      'chernel': '#919191'
    },
    fontFamily: {
      poppins: ['"Poppins"','sans-serif'],
    },
    fontWeight: {
      bold: 700,
      regular: 500,
    },
  },
  plugins: [],
}
