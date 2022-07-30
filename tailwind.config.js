/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dim-gray': '#696969',
        'silver-sand': '#C4C4C4',
        'antiflash-white': '#F3F3F3',
        'mystic-red': '#FF5403',
        'blue-de-france': '#2D93EA',
        'ucla-blue': '#51728E',
        'space-cadet': '#19224D',
        'cetacean-blue': '#000B3E'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [],
}
