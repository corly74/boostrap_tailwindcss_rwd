/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [],
  content: ["./docs/CClouder/**/*.{html,js,jsx}"],
  theme: {
    // theme裡面清除預設 ,再新增
    extend: {
      // extend裡面繼承預設 , 另外新增
      colors: {
        'primary': {
          100: '#EFF2FF',
          200: '#CDD5FF',
          300: '#AAB9FF',
          400: '#889CFF',
          500: '#5E77EE',
          600: '#425ACC',
          700: '#2B41AA',
          800: '#192C88',
          900: '#0C1B66',
        },
      },
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
    
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

