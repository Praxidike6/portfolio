/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    extend: {
      spacing: {
        big: "48rem",
      },
      colors: {
        "beach-green": "#96ceb4",
        "beach-pale-yellow": "#ffeead",
        "beach-red": "#ff6f69 ",
        "beach-egg-yellow": "#ffcc5c",
        "beach-sea-green": "#88d8b0",
        "gray-blue-1": "#3385c6",
        "creative-blue": "#5bccf6",
        "creative-yellow": "#fcde67",
        "creative-lilac": "#d1adcc",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
