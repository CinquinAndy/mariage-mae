import Image from 'next/image'
import { NavComponent } from '@/components/Nav.component'

export default function Home() {
	return (
		<>
			<NavComponent></NavComponent>
			<main
				className={
					'relative flex h-screen w-screen flex-col items-center justify-center'
				}
			>
				<h2
					className={
						'absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 ' +
						'special-title -z-10 h-screen w-screen -rotate-12 transform items-center justify-center overflow-hidden text-center text-black/10'
					}
				>
					Will you <br />
					Marry me ?
				</h2>
				<div
					className={
						'relative mt-16 h-[75vh] w-[70vw] rounded border border-gray-100 shadow-2xl'
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
			<div className={'mx-auto max-w-7xl px-2 py-16 md:px-4 xl:px-8'}>
				second bloc
			</div>
		</>
	)
}
