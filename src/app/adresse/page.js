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
					imageSrc={'/townhall_bg.png'}
					imageAlt={'townhall'}
					title={'La cérémonie civile'}
					isReverse={false}
					text={
						<>
							<h2 className={'text-3xl'}>Mairie de Sciez</h2>
							<div className={'flex flex-col'}>
								<p className={'text-sm italic opacity-80'}>14h15 - 15h30</p>
								<p className={'text-sm'}>
									614 avenue de sciez , 74140 Sciez Sur Leman
								</p>
							</div>
							<p className={''}>
								Dans la noble enceinte de la mairie de Sciez, notre histoire
								d&apos;amour se verra couronnée d&apos;un engagement solennel.
								Sous le regard bienveillant de ceux qui nous sont chers, nous
								tisserons les fils dorés de nos vies en une seule trame,
								échangeant nos vœux dans un élan de joie et d&apos;espoir.
							</p>
						</>
					}
				/>

				<SectionComponent
					imageSrc={'/church_bg.png'}
					imageAlt={'church'}
					title={'La cérémonie religieuse'}
					isReverse={true}
					text={
						<>
							<h2 className={'text-3xl'}>Saint Barthélémy</h2>
							<div className={'flex flex-col'}>
								<p className={'text-sm italic opacity-80'}>16h00 - 17h30</p>
								<p className={'text-sm'}>
									1 Rue Du Mollard, 74200 Anthy Sur Leman
								</p>
							</div>
							<p className={''}>
								Au cœur de l&apos;église, là où la lumière danse à travers les
								vitraux, nos âmes se joindront dans une harmonie céleste. Entre
								ces murs sacrés, imprégnés d&apos;amour éternel, nous avancerons
								vers l&apos;autel, bénis par la grâce et enveloppés dans un
								amour pur et infini.
							</p>
						</>
					}
				/>

				<SectionComponent
					imageSrc={'/reception_bg.png'}
					imageAlt={'reception_bg'}
					title={'La soirée'}
					isReverse={false}
					text={
						<>
							<h2 className={'text-3xl'}>Salle d&apos;Anthy sur Leman</h2>
							<div className={'flex flex-col'}>
								<p className={'text-sm italic opacity-80'}>
									18h00 jusqu&apos;au bout de la nuit
								</p>
								<p className={'text-sm'}>
									15 Rue Des Pêcheurs, 74200 Anthy Sur Leman
								</p>
							</div>
							<p className={''}>
								Et lorsque le soir viendra, nous nous rassemblerons pour une
								célébration empreinte de joie et d&apos;éclat. Dans
								l&apos;ambiance festive de notre réception, entourés par
								l&apos;affection et les sourires de nos proches, nous danserons
								au rythme de notre bonheur partagé, illuminant la nuit de notre
								amour rayonnant.
							</p>
						</>
					}
				/>
			</div>
		</>
	)
}
