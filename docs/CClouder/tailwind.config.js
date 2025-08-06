/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  // content: [],
  content: ["./docs/CClouder/**/*.{html,js,jsx}"],
  safelist: ['w-full',],
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
      screens: {


        'xs': { 'max': '474px' },
        // => @media (max-width: 474px) { ... }

        'ss': { 'max': '374px' },
        // => @media (max-width: 374px) { ... }
      },
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.25)',
        md: '2px 2px 4px rgba(0, 0, 0, 0.25)',
        lg: '3px 3px 6px rgba(0, 0, 0, 0.3)',
      },
        width: {
        '9/10': '90%',
      },
    },

  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addUtilities, theme }) {
      const shadows = theme('textShadow');
      const newUtilities = Object.entries(shadows).reduce((acc, [key, value]) => {
        acc[`.text-shadow-${key}`] = { textShadow: value };
        return acc;
      }, {});
      addUtilities(newUtilities);
    }),
  ],
}

