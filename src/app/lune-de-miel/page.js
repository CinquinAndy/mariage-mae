import Image from 'next/image'
import TitleOrnementedComponent from '@/components/Landing/TitleOrnemented.component'
import { SectionComponent } from '@/components/Landing/Section.component'

export default function Page() {
	return (
		<>
			<div
				className={
					'relative -z-10 flex h-screen w-screen flex-col items-center justify-center'
				}
			>
				<Image
					src={'/willumarryme.jpg'}
					fill={true}
					className={'-z-10 hidden object-cover xl:block'}
					alt={'will u marry me'}
					quality={90}
				/>
				<Image
					src={'/willumarryme_tablet.jpg'}
					fill={true}
					className={'-z-10 hidden object-cover md:block xl:hidden'}
					alt={'will u marry me'}
					quality={90}
				/>
				<Image
					src={'/willumarryme_phone.jpg'}
					fill={true}
					className={'-z-10 block object-cover md:hidden'}
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
								Lune de miel
							</h1>
						</div>
					</div>
					<Image
						src={'/honeymoon.png'}
						alt={'Wedding'}
						fill={true}
						className={'-z-10 object-cover opacity-90 grayscale'}
					/>
				</div>
			</div>
			<div className={'mx-auto max-w-7xl px-2 py-16 md:px-4 xl:px-8'}>
				<TitleOrnementedComponent
					title={'Voyage à Orlando !'}
					ornement={true}
				/>
				<SectionComponent
					imageSrc={'/image00014.jpeg'}
					imageAlt={'Mariage de Mae et Romain'}
					title={'On se dit oui !'}
					isReverse={false}
					text={
						<p className={''}>
							{`Le 10 août 2024, nous nous dirons oui pour la vie,`}
							<br />
							{`Et nous vous invitons à célébrer avec nous,`}
							<br />
							{`Ce jour qui sera le plus beau de notre vie,`}
							<br />
							{`En espérant que vous serez des nôtres,`}
							<br />
							{`Pour partager avec nous, ce moment de bonheur,`}
							<br />
							{`Et nous accompagner dans notre vie de tous les jours.`}
						</p>
					}
				/>
			</div>
		</>
	)
}
