/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        header: '#141414',
        modal: '#27292E',
        marker: '#77BC58',
      },
    },
  },
  plugins: [],
}
