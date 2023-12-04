/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react')
const plugin = require('tailwindcss/plugin')
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
			fontSize: {
				'10xl': '10.5rem',
				'11xl': '14rem',
				'12xl': '17.5rem',
				'13xl': '21rem',
			},
			textShadow: {
				sm: '0 1px 2px var(--tw-shadow-color)',
				md: '0 4px 8px rgba(0,0,0,0.25)',
				DEFAULT: '0 2px 4px var(--tw-shadow-color)',
				lg: '0 8px 16px var(--tw-shadow-color)',
			},
			colors: {
				mae: {
					50: '#fdf2f8',
					100: '#fce7f2',
					200: '#fad0e7',
					300: '#f7aad1',
					400: '#f175b2',
					500: '#e94b94',
					600: '#d72b71',
					700: '#bb1b59',
					800: '#9a1a4a',
					900: '#811a40',
					950: '#4a0820',
				},
			},
			fontFamily: {
				kanit: 'var(--font-kanit)',
				updock: 'var(--font-updock)',
			},
		},
	},
	darkMode: 'class',
	plugins: [
		require('@tailwindcss/typography'),
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow': value => ({
						textShadow: value,
					}),
				},
				{ values: theme('textShadow') }
			)
		}),
		nextui({
			themes: {
				dark: {
					colors: {
						primary: {
							50: '#fdf2f8',
							100: '#fad0e7',
							200: '#f7aad1',
							300: '#f175b2',
							400: '#e94b94',
							500: '#d72b71',
							600: '#bb1b59',
							700: '#9a1a4a',
							800: '#811a40',
							900: '#4a0820',
							DEFAULT: '#4a0820',
							foreground: '#fff',
						},
						focus: '#4a0820',
					},
				},
				light: {
					colors: {
						primary: {
							50: '#fdf2f8',
							100: '#fad0e7',
							200: '#f7aad1',
							300: '#f175b2',
							400: '#e94b94',
							500: '#d72b71',
							600: '#bb1b59',
							700: '#9a1a4a',
							800: '#811a40',
							900: '#4a0820',
							DEFAULT: '#4a0820',
							foreground: '#fff',
						},
						focus: '#4a0820',
					},
				},
			},
		}),
	],
}
