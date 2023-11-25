import Image from 'next/image'

export default function Home() {
	return (
		<>
			<main
				className={
					'relative flex h-screen w-screen flex-col items-center justify-center'
				}
			>
				<div
					className={
						'relative h-[75vh] w-[80vw] rounded border border-gray-100 shadow-2xl'
					}
				>
					<div className={'absolute h-full w-full p-3'}>
						<div className={'h-full w-full rounded bg-black/10'}></div>
					</div>
					<Image
						src={'/background.jpg'}
						alt={'Wedding'}
						fill={'true'}
						className={'pointer-events-none -z-10 object-cover grayscale'}
					/>
				</div>
				<h1 className={'text-center text-5xl uppercase text-white'}>
					Maeva et romain
				</h1>
			</main>
			<div className={'mx-auto max-w-7xl py-16'}>second bloc</div>
		</>
	)
}
