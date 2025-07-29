// /** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.jsx"
  ],
  content: [
      "./index.html",     
    "./src/**/*.{html,js}"],

  theme: {
    extend: {
      inset: {
        '1/9': '11.111%',
        '1/4':'25%',
        '1/6':'15%',
        '1/20':'5%',
      },
      colors: {
        hepatic: '#D08181',
        paleBlue:'#5E9BAE',
        nileBlue:'#52797C',
      },
       width: {
      '250': '250px',
      '280':'280px',
    },
     margin: {
        '50': '50px',
      }
     
    },
    screens: {
      '2xl': { 'max': '1439px' },
      // => @media (max-width: 1439px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '575px' },
      // => @media (max-width: 575px) { ... }

      'xs': { 'max': '474px' },
      // => @media (max-width: 474px) { ... }

      'ss': { 'max': '374px' },
      // => @media (max-width: 374px) { ... }
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
      x: '1em',
      m:'0.5rem',
      s:'0.25rem'
    },



  },
  plugins: [],
}
