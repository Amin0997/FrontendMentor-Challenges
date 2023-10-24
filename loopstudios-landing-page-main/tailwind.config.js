/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        textWhiteBg: 'rgba(255, 255, 255, 0.75)'
      },
      backgroundImage: {
        textGreyBg : 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%)',
        'headerBgDesktop': "url('./src/images/desktop/image-hero.jpg')",
        mainInteractiveDesktop: "url('./src/images/desktop/image-interactive.jpg')",
        mainInteractiveMobile: "url('./src/images/mobile/image-interactive.jpg')"
      },
      fontFamily: {
        Alata : ['Alata', 'sans-serif'],
        Josefin: ['Josefin Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}

