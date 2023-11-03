/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        vkColor:"#4B6A9B",
        graniteGray:"#2B3442",
        cobaltDarkBlue:"#141D2F",
        oceanDarkBlue: "#1E2A47"
      }
    },
  },
  plugins: [],
}