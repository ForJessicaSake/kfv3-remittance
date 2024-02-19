/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1440px',
      },
      colors: {
        primary: '#fdba0b',
        'primary-light': '#F9D57F',
        'dark-blue': '#181818',
        'bluish-white': '#F8F9FE',
        'gray-300': '#F9F9F9',
        'gray-400': '#F3F3F3',
        'gray-500': '#E8E8E8',
        'gray-600': '#DDDDDD',
        'gray-700': '#D1D1D1',
        'gray-800': '#8C8C8C',
        'gray-900': '#6F6F6F',
        'c-777': '#777777',
        'brand-red': '#F33060',
        'system-error': '#FF5C5C',
        'light-system-error': '#FFECE9',
        'spanish-gray': '#979797',
        'system-success': '#21D184',
      },
    },
  },
  plugins: [],
};
