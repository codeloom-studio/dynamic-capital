/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  safelist: [
    'lightBlue',
    'white',
    'blue',
    'dullBlue',
    'offWhite',
    'lightWhite',
    'green',
    'grey'
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        blue: '#164271',
        lightBlue: '#0093D0',
        dullBlue: '#D5E3FD',
        offWhite: '#F0F0F2',
        lightWhite: '#FCFCFC',
        green: '#09954E',
        grey: '#515260',
        normBlack: '#151515',
        darkGrey: '#515260',
        lightGrey: '#E3E6EE',
        extraLightGreen: '#88DD9B',
      },
      fontFamily: {
        taviraj: ["Taviraj", "serif"],
        onest: ["Onest", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
