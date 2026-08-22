import { SurpriseVideoComponent } from '@/components/Surprise/SurpriseVideo.component'

export const metadata = {
	title: 'Surprise — Le mariage de Maeva et Romain',
	description: 'Une petite surprise...',
	robots: { index: false, follow: false },
}

export default function Page() {
	return (
		<main className={'relative h-dvh w-screen overflow-hidden bg-black'}>
			<SurpriseVideoComponent src={'/surprise/disney-intro.mp4'} />

			{/* Calque au-dessus de la vidéo : shader, titre, animations à venir */}
			<div className={'absolute inset-0'} />
		</main>
	)
}
