/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'cafe-bege': '#f5e9da',
          'cafe-marrom': '#6f4e37',
        },
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }