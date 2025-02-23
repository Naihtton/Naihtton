/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: { colors: 
      { Teal: '#008080',
        Chocolate: '#802F00',
        'Dark Teal': '#104040',
        'Thai Tea': '#D47B47',
        Turquoise: '#80FFFF' },},
  },
}
