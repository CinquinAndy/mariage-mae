import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import WrapNextUiProvider from '@/providers/WrapNextUiProvider'
import { Kanit, Updock } from 'next/font/google'

const kanit = Kanit({
	weight: ['100', '300', '400', '700', '900'],
	subsets: ['latin'],
	variable: '--font-kanit',
	style: ['normal', 'italic'],
})

const updock = Updock({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-updock',
	style: ['normal'],
})

export const metadata = {
	title: 'Here is the forhives template',
	description: 'Here is the forhives template',
	metadataBase: new URL('https://wedding.cinquin-maeva.com'),
	alternates: {
		canonical: '/',
		languages: {
			'fr-FR': 'wedding.cinquin-maeva.com',
		},
	},
}

export default function RootLayout({ children }) {
	return (
		<html className={`${kanit.variable} ${updock.variable} text-mae-950`}>
			<body>
				<WrapNextUiProvider>{children}</WrapNextUiProvider>
			</body>
		</html>
	)
}
