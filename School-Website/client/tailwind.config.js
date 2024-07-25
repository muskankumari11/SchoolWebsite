/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4285F4",
        secondary: "#FFFC00",
        tertiary: "#B5FF33",
      },
    },

    screens: {
      'sm': '1000px',

      'lg': '2023px',


    }
  },
  plugins: [],
} 

