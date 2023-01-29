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
        "20-30": "clamp(1.25rem, 1.05rem + 0.87vw, 1.875rem)",
        "36-54": "clamp(2.25rem, 1.89rem + 1.55vw, 3.375rem)",
        "24-36": "clamp(1.5rem, 1.26rem + 1.034vw, 2.25rem)",
      },
      padding: {
        "24-48": "clamp(1.5rem, 0.069rem + 6.11vw, 3rem)",
        "24-44": "clamp(1.5rem, 1.06rem + 1.88vw, 2.75rem)",
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
