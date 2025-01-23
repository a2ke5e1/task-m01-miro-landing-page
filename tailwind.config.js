/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        "large": "1440px",
        "medium": "1380px",
      },
      colors: {
        "accent": "#4262FF"
      }
    },
  },
  plugins: [],
};
