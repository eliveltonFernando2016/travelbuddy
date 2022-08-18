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
        'silver-sand': '#C4C4C4',
        'antiflash-white': '#F3F3F3',
        'dim-gray': '#696969',
        'granite-gray': '#626262',
        'arsenic': '#434343',
        'mikado-yellow': '#FEC710',
        'mystic-red': '#FF5403',
        'lava': '#DA1212',
        'blue-de-france': '#2D93EA',
        'ucla-blue': '#51728E',
        'violet-blue': '#3045A5',
        'space-cadet': '#19224D',
        'cool-black': '#041562',
        'cetacean-blue': '#000B3E'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [],
}
