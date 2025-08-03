/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
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
    // screens: {
      // '3xl': { 'max': '1560px' },
       // => @media (min-width: 1560px) { ... }
      // 'max-2xl': { 'max': '1439px' },
      // => @media (max-width: 1439px) { ... }

      // 'max-xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      // 'max-lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      // 'max-md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      // 'max-sm': { 'max': '575px' },
      // => @media (max-width: 575px) { ... }

      // 'max-xs': { 'max': '474px' },
      // => @media (max-width: 474px) { ... }

      // 'max-ss': { 'max': '374px' },
      // => @media (max-width: 374px) { ... }
    // },
    textShadow: {
        sm: '1px 1px 2px rgba(0,0,0,0.25)',
        md: '2px 2px 4px rgba(0,0,0,0.45)',
        lg: '4px 4px 6px rgba(0,0,0,0.5)',
      },
    
  },
  plugins: [
    require('@tailwindcss/typography'),
     plugin(function({ addUtilities, theme }) {
  const shadows = theme('textShadow');
  const newUtilities = Object.entries(shadows).reduce((acc, [key, value]) => {
    acc[`.text-shadow-${key}`] = { textShadow: value };
    return acc;
  }, {});
  addUtilities(newUtilities);
    }),
  ],
}

