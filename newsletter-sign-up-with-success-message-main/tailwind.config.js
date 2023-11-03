/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['roboto', 'sans-serif']
      },
      backgroundColor: {
        darkSlateGrey : 'hsl(234, 29%, 20%)',
      },
      boxShadow: {
        btnShadow: '0 10px 30px #e23a80'
      }
    },
  },
  plugins: [],
}
