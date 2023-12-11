/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        josefin: "'Josefin Sans', sans-serif"
      },
      backgroundImage: {
        headerBgDark : 'url(./src/assets/images/bg-desktop-dark.jpg)',
        headerBgLight : 'url(./src/assets/images/bg-desktop-light.jpg)',
        headerBgDarkMobile: 'url(./src/assets/images/bg-mobile-dark.jpg)',
        headerBgLightMobile: 'url(./src/assets/images/bg-mobile-light.jpg)'
      },
      backgroundColor: {
        veryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
        veryDarkBlue: 'hsl(235, 21%, 11%)'
      },
      colors: {
        lightGrayishBlue: 'hsl(234, 39%, 85%)',
        darkGrayishBlue: 'hsl(234, 11%, 52%)',
        veryDarkGrayishBlue : 'hsl(233, 14%, 35%)'
      }
    },
  },
  plugins: [],
}