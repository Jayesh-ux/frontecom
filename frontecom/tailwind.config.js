/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      textColor: {
        DEFAULT: '#000000',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}