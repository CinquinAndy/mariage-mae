import TitleOrnementedComponent from '@/components/Landing/TitleOrnemented.component'
import { CustomSvgComponent } from '@/components/CustomSvg.component'
import Image from 'next/image'
import { EventInfoComponent } from '@/components/Landing/EventInfo.component'

function MariageMaeEtRomainComponent() {
	return (
		<div
			className={
				'mx-auto flex max-w-7xl flex-col gap-16 px-2 py-16 md:gap-24 md:px-4 xl:gap-32 xl:px-8'
			}
		>
			<div className={'flex flex-col gap-16'}>
				<TitleOrnementedComponent title={'Mariage de Mae et Romain'} />
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
						{`Dans l'éclat d'un jour nouveau, deux âmes s'unissent,`}
						<br />
						{`Sous le ciel du tendre amour, un pacte se tisse. `}
						<br />
						{`Enlacés dans un serment, pur et infini,`}
						<br />
						{`Ils dansent vers l'horizon, mari et mariée bénis.`}
						<br />
						{`Leur union scelle un doux refrain, le mariage de deux destins.`}
					</p>
					<CustomSvgComponent
						classNames={
							'absolute right-4 -bottom-4 !w-[25px] !h-[25px] md:!w-[35px] md:!h-[35px] xl:!w-[50px] xl:!h-[50px] bg-mae-950 transform scale-x-[-1]'
						}
						url={'inverted-commas.svg'}
					/>
				</div>
			</div>
			<TitleOrnementedComponent title={'On se dit oui !'} ornement={false} />
			<div
				className={
					'relative grid w-full grid-cols-12 gap-4 px-8 md:gap-8 md:px-16 xl:px-32'
				}
			>
				<div
					className={
						'relative col-span-12 flex min-h-[150px] items-center justify-center md:col-span-6 md:min-h-[250px]'
					}
				>
					<Image
						src={'/image00014.jpeg'}
						alt={'on se dit oui'}
						width={500}
						height={350}
						quality={80}
						className={'rounded shadow-2xl'}
					/>
				</div>
				<div
					className={
						'col-span-12 flex flex-col items-start justify-center gap-4 md:col-span-6'
					}
				>
					<p className={'text-xl font-semibold tracking-wider'}>
						Oui pour la vie !
					</p>
					<div className={'h-[2px] w-[20px] rounded bg-mae-950/80'} />
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
				</div>
			</div>
			<div
				className={
					'relative grid w-full grid-cols-4 gap-4 px-8 text-center md:gap-8 md:px-16 lg:grid-cols-8 xl:px-32'
				}
			>
				<EventInfoComponent
					title="Date"
					time="10 août 2024"
					address="La réception débute à 14:15, la soirée à 18:00"
					imageSrc="/cinquinandy_calendar_icon_elegant_vector_in_the_style_of_playfu_c86f32b2-9eea-4fd5-94c3-7eb968f11940.png"
					imageAlt="Calendar"
				/>
				<EventInfoComponent
					title="Mairie"
					time="10h00"
					address="1 rue du Mollard, 74200 Anthy"
					imageSrc="/cinquinandy_town_hall_icon_elegant_vector_in_the_style_of_playf_e801c3c3-ad1b-4af6-81eb-9787e17e7e51.png"
					imageAlt="town hall"
				/>
				<EventInfoComponent
					title="Eglise"
					time="12h00"
					address="1 rue du Mollard, 74200 Anthy"
					imageSrc="/cinquinandy_church_icon_elegant_vector_in_the_style_of_playful__b47209db-59c0-4ace-bb03-dec9d08a37cf.png"
					imageAlt="church"
				/>
				<EventInfoComponent
					title="Soirée"
					time="18h00"
					address="15 rue des pécheurs, 74200 Anthy"
					imageSrc="/cinquinandy_party_icon_elegant_vector_in_the_style_of_playful_u_350983ac-d3f0-4f15-b86f-e62304cd7dcb.png"
					imageAlt="party"
				/>
			</div>
		</div>
	)
}

export default MariageMaeEtRomainComponent
