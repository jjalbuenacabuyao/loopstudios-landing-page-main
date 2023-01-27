/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",],
  theme: {
    extend: {
      colors: {
        "dark-gray-100": "#8c8c8c",
        "dark-gray-200": "#696969",
      },
      fontFamily: {
        "alata": ["Alata", "sans-serif"],
        "josefin": ["Josefin Sans", "sans-serif"],
      },
      fontSize: {
        "15px": "0.9375rem",
      }
    },
  },
  plugins: [],
}
