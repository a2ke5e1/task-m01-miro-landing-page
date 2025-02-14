/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        "desktop-large": "1440px",
        "desktop-medium": "1380px",
        "desktop-small": "1120px",
      },
      colors: {
        secondary: "#050038", 
        accent: "#4262FF",
        "on-surface": "#05003899",
        tertiary: "#ffd02f",

      },
    },
  },
  plugins: [],
};
