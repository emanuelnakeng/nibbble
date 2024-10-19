/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false,
	theme: {
		extend: {
			margin: {
				'50px': '50px',
				'100px': '100px',
				'150px': '150px',
			},
			fontFamily: {
				charmonman: ['Charmonman', 'cursive'],
			},
			colors: {
				'bg-clr': '#f9f9f9',
				'border-clr': '#e8e8e8',
				'text-light': '#7f7f7f',
				'accent-clr': '#ff642f',
				'accent-clr-light': '#ffd7c9',
				'dark-clr': '#180b06',
			},
		},
	},
	plugins: [],
};
