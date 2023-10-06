/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      maxWidth:{
        'container' : '1140px',
      },
      fontFamily: {
        'openSans': ['Open Sans', ' sans-serif'],
      },
      backgroundImage: {
        'banner': "url(../img/banner.jpg)",
        'counter': "url(../img/counter.jpg)",
        'quote': "url(../img/quote.jpg)",
        'linkSlider': "url(../img/linkSlider-bg.jpg)",
      },
      colors: {
        'rgbColor': 'rgba(0, 0, 0, 0.6)',
        'commonRed': '#cd3a54'
      },
    },
  },
  plugins: [],
}

