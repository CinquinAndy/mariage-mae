/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			// fixme replace that with your own url ( here is an example )
			{
				protocol: 'https',
				hostname: '**.andy-cinquin.fr',
			},
		],
	},
	i18n: {
		localeDetection: false,
		locales: ['fr', 'en'],
		defaultLocale: 'fr',
		// fixme replace that with your own url ( here is an example )
		domains: [
			{
				domain: 'localhost:8080',
				defaultLocale: 'fr',
				locales: ['fr'],
			},
			{
				domain: 'localhost:8080',
				defaultLocale: 'en',
				locales: ['en'],
			},
		],
	},
}

module.exports = nextConfig
