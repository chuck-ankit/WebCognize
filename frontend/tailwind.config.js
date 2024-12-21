/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Added ts,tsx for TypeScript support
  theme: {
    extend: {
      colors: {
        'chetwode-blue': {
          '50': '#f1f5fc',
          '100': '#e6ecf9',
          '200': '#d1dbf4',
          '300': '#b5c4ec',
          '400': '#97a5e2',
          '500': '#8690d9',
          '600': '#6469c7',
          '700': '#5355af',
          '800': '#46498d',
          '900': '#3e4271',
          '950': '#242542',
        },
      },
    },
  },
  plugins: [],
};
