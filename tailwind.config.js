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
      },
      padding: {
        "24-48": "clamp(1.5rem, 0.069rem + 6.11vw, 3rem)",
        "12-20": "clamp(0.75rem, -0.20rem + 4.07vw, 1.75rem)",
      },
      margin: {
        "24-48": "clamp(1.5rem, 0.069rem + 6.11vw, 3rem)",
      }
    },
  },
  plugins: [],
}
