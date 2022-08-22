/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#EDF7FA',
        buttonColor: '#FF6464',
        darkText: '#21243D',
        darkBlue: '#142850',
        lightBlue: '#00A8CC',
        lightGray: '#8695A4',
      },
      fontFamily: {
        heebo: ['Heebo', 'sans-serif']
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
