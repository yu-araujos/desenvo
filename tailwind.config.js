/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        chillaxSemibold: ["Chillax SemiBold"],
        chillaxMedium: ["Chillax Medium"]
      },
      colors: {
        'primary': '#5b4ef0',
        'secondary': '#ffd000', 
        'gray': '#6d6d6d',
        'secondaryGray': '#222223'
      },
      cursor: {
        'move': 'url(/src/Images/cursor-move.svg), move',
      }
    },
  },
  plugins: [],
}