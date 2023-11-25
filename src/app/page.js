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
						<div
							className={
								'flex h-full w-full items-center justify-center rounded bg-black/10'
							}
						>
							<h1
								className={
									'text-center text-5xl text-white shadow-black text-shadow-lg lg:text-7xl xl:text-9xl'
								}
							>
								Maeva & Romain
							</h1>
						</div>
					</div>
					<Image
						src={'/background.jpg'}
						alt={'Wedding'}
						fill={true}
						className={'pointer-events-none -z-10 object-cover grayscale'}
					/>
				</div>
			</main>
			<div className={'mx-auto max-w-7xl py-16'}>second bloc</div>
		</>
	)
}
