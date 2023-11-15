/** @type {import('tailwindcss').Config} */

/** @type {import('tailwindcss').Config} */
const {colors: defaultColors} = require('tailwindcss/defaultTheme');
module.exports = {
  darkMode: 'class',
  content: ['./*.html', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      spacing: {
        big: '48rem',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      colors: {
        'beach-green': '#96ceb4',
        'beach-pale-yellow': '#ffeead',
        'beach-red': '#ff6f69 ',
        'beach-egg-yellow': '#ffcc5c',
        'beach-sea-green': '#88d8b0',
        'gray-blue-1': '#3385c6',
        'creative-blue': '#5bccf6',
        'creative-yellow': '#fcde67',
        'creative-lilac': '#d1adcc',
        'jest-red': '#99425b',
        'supa-green': '#3ecf8e',
        'styled-violet': '#9f70b8',
        'aws-orange': '#ff9a00',
        'react-blue': '#007bcd',
      },
    },
   
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
    },
  },

  plugins: [require('tailwind-scrollbar'), require('flowbite/plugin')],
};
