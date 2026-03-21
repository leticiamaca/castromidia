/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold:           '#C9A84C',
        'gold-light':   '#E8C97A',
        'gold-dark':    '#8B6914',
        rose:           '#C4899A',
        'rose-light':   '#E8B4C0',
        black:          '#050505',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
