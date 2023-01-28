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
        "48-164": "clamp(3rem, -5.29rem + 17.26vw, 10.25rem)",
        "80-160": "clamp(5rem, -0.71rem + 11.9vw, 10rem)",
        "80-95": "clamp(5rem, 3.93rem + 2.23vw, 5.9375rem)",
        "80-184": "clamp(5rem, -2.43rem + 15.48vw, 11.5rem)",
      },
      margin: {
        "24-48": "clamp(1.5rem, 0.069rem + 6.11vw, 3rem)",
        "48-164": "clamp(3rem, -5.29rem + 17.26vw, 10.25rem)",
        "80-95": "clamp(5rem, 3.93rem + 2.23vw, 5.9375rem)",
      }
    },
  },
  plugins: [],
}
