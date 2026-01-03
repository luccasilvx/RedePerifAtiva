/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#3FA9F5',
          green: '#7AC943',
          orange: '#FF931E',
          red: '#FF1D25',
          pink: '#FF7BAC',
          dark: '#1A1A1A',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Bungee', 'cursive'],
      },
    },
  },
  plugins: [],
}

