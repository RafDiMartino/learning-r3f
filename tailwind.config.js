/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        primary: "#272727",
        secondary: "#343536",
        accent: "#C09E6B"
      },
      fontFamily: {
        josefin: ['var(--font-josefin-sans)'],
        playfair: ['var(--font-playfair-display)']
      }
    },
  },
  plugins: [],
}
