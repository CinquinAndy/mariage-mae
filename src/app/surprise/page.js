import { SurpriseExperienceComponent } from '@/components/Surprise/SurpriseExperience.component'

export const metadata = {
	title: 'Surprise — Le mariage de Maeva et Romain',
	description: 'Une petite surprise...',
	robots: { index: false, follow: false },
}

export default function Page() {
	return (
		<main
			data-fullscreen-page
			className={'fixed inset-0 overflow-hidden bg-black'}
		>
			<SurpriseExperienceComponent src={'/surprise/disney-intro.mp4'}>
				{/* Calque au-dessus de la vidéo : shader, titre, animations à venir */}
				<div className={'absolute inset-0'} />
			</SurpriseExperienceComponent>
		</main>
	)
}
