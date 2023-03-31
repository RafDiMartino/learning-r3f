/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "var(--color-black)",
        "white": "var(--color-white)",
        "primary": "var(--color-primary)",
        "accent": "var(--color-accent)",
      },
      fontFamily: {
        josefin: ['var(--font-josefin-sans)'],
        playfair: ['var(--font-playfair-display)'],
        fira: ["var(--font-fira-mono)"]
      }
    },
  },
  plugins: [],
}
