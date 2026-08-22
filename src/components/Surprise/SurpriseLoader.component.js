/**
 * Écran de chargement de la page surprise, affiché avant toute chose.
 * Purement visuel : l'état vient de SurpriseExperienceComponent.
 */
export function SurpriseLoaderComponent({ status, progress, onStart }) {
	const isHidden =
		status === 'playing' || status === 'reveal' || status === 'revealed'
	const percent = Math.round(progress * 100)

	return (
		<div
			aria-hidden={isHidden}
			className={`absolute inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black text-white transition-opacity duration-700 ease-in-out ${
				isHidden ? 'pointer-events-none opacity-0' : 'opacity-100'
			}`}
		>
			{status === 'error' && (
				<p className={'text-center text-sm tracking-widest uppercase'}>
					Le chargement a échoué
				</p>
			)}

			{status === 'blocked' && (
				<button
					type={'button'}
					onClick={onStart}
					className={
						'font-updock cursor-pointer text-5xl text-white transition-transform hover:scale-105'
					}
				>
					Lancer
				</button>
			)}

			{status === 'loading' && (
				<>
					<p className={'font-updock text-4xl'}>Chargement</p>
					<div
						role={'progressbar'}
						aria-valuemin={0}
						aria-valuemax={100}
						aria-valuenow={percent}
						className={'h-px w-48 overflow-hidden bg-white/20'}
					>
						<div
							className={'h-full bg-white transition-[width] duration-300'}
							style={{ width: `${percent}%` }}
						/>
					</div>
				</>
			)}
		</div>
	)
}
