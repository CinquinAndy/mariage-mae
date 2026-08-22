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
			<SurpriseExperienceComponent
				video={'/surprise/disney-intro.mp4'}
				image={'/surprise/image.jpg'}
			/>
		</main>
	)
}
