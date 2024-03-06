import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import WrapNextUiProvider from '@/providers/WrapNextUiProvider'
import { Kanit, Updock } from 'next/font/google'
import { NavComponent } from '@/components/Nav.component'
import { SignatureComponent } from '@/components/SignatureFooter.component'
import Script from 'next/script'

const kanit = Kanit({
	weight: ['100', '200', '300', '400', '700', '900'],
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
	title: 'Le mariage de Maeva et Romain',
	description:
		'Le plus beau jour de notre vie, notre mariage, toutes les infos ici !',
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
		<html className={`${kanit.variable} ${updock.variable}  text-mae-950`}>
			<Script
				async
				src="https://umami.wadefade.fr/script.js"
				strategy={'afterInteractive'}
				data-website-id="1bf392de-37c5-4bbc-b07e-0b18d94906b2"
			/>
			<body className={'relative'}>
				<NavComponent />
				<WrapNextUiProvider>{children}</WrapNextUiProvider>
				<SignatureComponent />
			</body>
		</html>
	)
}
