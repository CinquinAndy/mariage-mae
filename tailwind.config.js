/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react')
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	safelist: [
		{
			pattern: /font-(kanit|updock)/,
		},
	],
	theme: {
		extend: {
			fontFamily: {
				kanit: 'var(--font-kanit)',
				updock: 'var(--font-updock)',
			},
		},
	},
	darkMode: 'class',
	plugins: [
		require('@tailwindcss/typography'),
		nextui({
			themes: {
				// fixme replace primary, secondary etc
				dark: {
					colors: {
						primary: {
							50: '#f0f9ff',
							100: '#e0f2fe',
							200: '#bae6fd',
							300: '#7dd3fc',
							400: '#38bdf8',
							500: '#0ea5e9',
							600: '#0284c7',
							700: '#0369a1',
							800: '#075985',
							900: '#0c4a6e',
							DEFAULT: '#082f49',
							foreground: '#fff',
						},
						focus: '#082f49',
					},
				},
				light: {
					colors: {
						primary: {
							50: '#f0f9ff',
							100: '#e0f2fe',
							200: '#bae6fd',
							300: '#7dd3fc',
							400: '#38bdf8',
							500: '#0ea5e9',
							600: '#0284c7',
							700: '#0369a1',
							800: '#075985',
							900: '#0c4a6e',
							DEFAULT: '#082f49',
							foreground: '#fff',
						},
						focus: '#082f49',
					},
				},
			},
		}),
	],
}
