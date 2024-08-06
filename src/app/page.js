import Image from 'next/image'
import { CustomSvgComponent } from '@/components/CustomSvg.component'
import MariageMaeEtRomainComponent from '@/components/Landing/MariageMaeEtRomain.component'
// import ModalImportantComponent from '@/components/ModalImportant.component'

export default function Home() {
	return (
		<>
			{/*<ModalImportantComponent />*/}
			<div
				className={
					'relative -z-10 flex h-screen w-screen flex-col items-center justify-center'
				}
			>
				<Image
					src={'/willumarryme.jpg'}
					fill={true}
					className={'-z-50 hidden object-cover xl:block'}
					alt={'will u marry me'}
					quality={90}
				/>
				<Image
					src={'/willumarryme_tablet.jpg'}
					fill={true}
					className={'-z-50 hidden object-cover md:block xl:hidden'}
					alt={'will u marry me'}
					quality={90}
				/>
				<Image
					src={'/willumarryme_phone.jpg'}
					fill={true}
					className={'-z-50 block object-cover md:hidden'}
					alt={'will u marry me'}
					quality={90}
				/>
				<div
					className={
						'relative h-[85%] w-[90%] rounded border border-gray-100 shadow-2xl md:h-[70%] md:w-[70%] xl:h-[65%]'
					}
				>
					<div className={'absolute h-full w-full p-3'}>
						<div
							className={
								'relative flex h-full w-full items-center justify-center rounded bg-black/10'
							}
						>
							<h1
								className={
									'text-center text-5xl text-white shadow-black text-shadow-lg lg:text-7xl xl:text-9xl'
								}
							>
								Maeva & Romain
							</h1>
							<div
								className={
									'absolute bottom-32 left-1/2 -translate-x-1/2 transform px-4 py-2 md:bottom-8'
								}
							>
								<div className={'relative h-full w-full'}>
									<h2
										className={
											'text-center text-4xl text-white shadow-black text-shadow-lg'
										}
									>
										10 août 2024
									</h2>
									<div
										className={
											'absolute -right-[25px] -top-[15px] flex items-center justify-center'
										}
									>
										<CustomSvgComponent
											classNames={'w-[25px] h-[25px] bg-white/75'}
											url={'/party-horn.svg'}
										/>
									</div>
									<div
										className={
											'absolute -left-[25px] -top-[15px] flex items-center justify-center'
										}
									>
										<CustomSvgComponent
											classNames={
												'w-[25px] h-[25px] bg-white/75 transform scale-x-[-1]'
											}
											url={'/party-horn.svg'}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<Image
						src={'/background.jpg'}
						alt={'Wedding'}
						fill={true}
						className={'-z-10 object-cover grayscale'}
					/>
				</div>
			</div>
			<MariageMaeEtRomainComponent />
		</>
	)
}
