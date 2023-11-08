/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	extend: {
		fontFamily: {
			Rubik: "Rubik, sans-serif;"
		},
		textColor : {
			ModerateBlue: "hsl(238, 40%, 52%)",
			SoftRed: "hsl(358, 79%, 66%)",
			PaleRed: "hsl(357, 100%, 86%)",
			DarkBlue: "hsl(212, 24%, 26%)",
			GrayishBlue: "hsl(211, 10%, 45%)",
			VeryLightGray: "hsl(228, 33%, 97%)"
		},
		backgroundColor: {
			VeryLightGray: "hsl(228, 33%, 97%)",
			ModerateBlue: "hsl(238, 40%, 52%)"
		},
		fill: {
			LightGrayishBlue: "hsl(239, 57%, 85%)",
			GrayishBlue: "hsl(211, 10%, 45%)"
		},
		borderColor: {
			VeryLightGray: "hsl(228, 33%, 97%)"
		},
		gridTemplateColumns: {
			custom : '40px 1fr'
		},
		gridTemplateRows: {
			custom : '44px 1fr'
		}
	},
	},
	plugins: [],
}