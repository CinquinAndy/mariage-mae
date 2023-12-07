import Image from 'next/image'
import TitleOrnementedComponent from '@/components/Landing/TitleOrnemented.component'
import { SectionComponent } from '@/components/Landing/Section.component'
import { CustomSvgComponent } from '@/components/CustomSvg.component'

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
			<div
				className={
					'mx-auto flex max-w-7xl flex-col gap-16 px-2 py-16 md:px-4 xl:px-8'
				}
			>
				<TitleOrnementedComponent title={'Voyage à Orlando'} ornement={true} />
				<div
					className={
						'relative flex w-full items-center justify-center px-8 md:px-16 xl:px-32'
					}
				>
					<CustomSvgComponent
						classNames={
							'absolute -top-4 left-4 !w-[25px] !h-[25px] md:!w-[35px] md:!h-[35px] xl:!w-[50px] xl:!h-[50px] bg-mae-950'
						}
						url={'inverted-commas.svg'}
					/>
					<p className={'text-center'}>
						{`
							Alors que nous nous apprêtons à entrelacer nos vies en un lien éternel de mari et femme, notre cœur bat à l'unisson pour une lune de miel de rêve sous les cieux ensoleillés de Floride, aux États-Unis.
						`}
						<br />
						<br />
						{`
							Votre soutien, tel un fil d'or tissé dans le tapis de notre avenir, serait un présent inestimable, aidant à réaliser ce doux rêve qui brillera dans nos souvenirs comme une étoile intemporelle.
						`}
						<br />
						<br />
						{`	
							Chaque geste, grand ou petit, est une caresse de l'amour, nous guidant vers cet instant magique où nos âmes danseront au rythme des vagues floridiennes.
						`}
						<br />
						<br />
						{`	
							Nous vous remercions du plus profond de notre être, pour tisser avec nous les fils de cette aventure inoubliable qui marquera le début de notre vie à deux.
						`}
					</p>
					<CustomSvgComponent
						classNames={
							'absolute right-4 -bottom-4 !w-[25px] !h-[25px] md:!w-[35px] md:!h-[35px] xl:!w-[50px] xl:!h-[50px] bg-mae-950 transform scale-x-[-1]'
						}
						url={'inverted-commas.svg'}
					/>
				</div>

				<SectionComponent
					imageSrc={'/florida.jpg'}
					imageAlt={'Floride'}
					title={'Floride'}
					isReverse={false}
					text={
						<p className={''}>
							Notre prochain chapitre commence sous les palmiers et le soleil
							éclatant de la Floride !
							<br />
							<br />
							Cette terre de merveilles, connue pour ses plages de sable fin,
							ses eaux cristallines et son ambiance ensoleillée, sera le théâtre
							de notre aventure romantique.
							<br />
							<br />
							Nous sommes impatients de vivre ces moments magiques et de les
							partager avec vous à notre retour. Préparez-vous à entendre des
							histoires passionnantes et à voir des photos éblouissantes de
							notre escapade ensoleillée en Floride !
						</p>
					}
				/>
			</div>
		</>
	)
}
