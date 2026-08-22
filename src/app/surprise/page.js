export const metadata = {
	title: 'Surprise — Le mariage de Maeva et Romain',
	description: 'Une petite surprise...',
	robots: { index: false, follow: false },
}

export default function Page() {
	return (
		<main
			className={
				'relative flex min-h-[calc(100vh-100px)] w-full flex-col items-center justify-center overflow-hidden'
			}
		>
			{/* Fond : à habiller (dégradé, image, particules...) */}
			<div className={'bg-mae-50 absolute inset-0 -z-10'} />

			{/* Contenu : le terrain de jeu pour la créa et les animations */}
			<section
				className={
					'mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-4 py-16 md:px-8 xl:px-16'
				}
			>
				<h1 className={'xl:text-10xl text-center text-6xl md:text-8xl'}>
					Surprise
				</h1>
			</section>
		</main>
	)
}
