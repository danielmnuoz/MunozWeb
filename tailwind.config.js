/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helveticaNeue: 'helveticaNeue'
      },
      colors: {
        'beige' : '#EdEdE3',
        'taupe' : '#979691',
        'charcoal' : '#20201E',
      },
    },
  },
  plugins: [],
}