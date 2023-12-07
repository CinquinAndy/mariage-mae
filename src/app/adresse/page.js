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
								Adresses
							</h1>
						</div>
					</div>
					<Image
						src={'/adresses.png'}
						alt={'adresses'}
						fill={true}
						className={'-z-10 object-cover opacity-90 grayscale'}
					/>
				</div>
			</div>
			<div
				className={
					'mx-auto flex max-w-7xl flex-col gap-32 px-2 py-16 md:px-4 xl:px-8'
				}
			>
				<TitleOrnementedComponent
					title={'Les adresses importantes'}
					ornement={true}
				/>

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

				<SectionComponent
					imageSrc={'/disney.jpg'}
					imageAlt={'disney'}
					title={'Disney World'}
					isReverse={true}
					text={
						<p className={''}>
							Prochaine escale de notre aventure en Floride :
							<br />
							<br />
							le monde enchanté de Disney World ! <br />
							Là où la magie rencontre la réalité, nous nous préparons à plonger
							dans un univers de contes de fées, de parades éblouissantes et de
							moments féeriques.
							<br />
							<br />
							Nous sommes impatients de partager avec vous la joie et
							l&apos;émerveillement de cette étape fantastique de notre voyage.
						</p>
					}
				/>

				<SectionComponent
					imageSrc={'/universal.jpg'}
					imageAlt={'universal'}
					title={'Universal Studios'}
					isReverse={false}
					text={
						<p className={''}>
							Suite à notre escapade enchantée à Disney World, nous poursuivons
							notre aventure en Floride en nous dirigeant vers
							l&apos;époustouflant univers d&apos;Universal Studios Orlando.
							<br />
							<br />
							Là, nous plongerons ensemble dans un monde où les films prennent
							vie, où chaque tournant révèle une nouvelle aventure palpitante.
							<br />
							<br />
							Nous sommes impatients de déambuler dans les allées thématiques,
							de nous émerveiller devant les spectacles éblouissants et de
							ressentir l&apos;excitation des montagnes russes à couper le
							souffle.
						</p>
					}
				/>
			</div>
		</>
	)
}
