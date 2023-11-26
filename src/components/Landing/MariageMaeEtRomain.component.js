import TitleOrnementedComponent from '@/components/Landing/TitleOrnemented.component'
import { CustomSvgComponent } from '@/components/CustomSvg.component'
import Image from 'next/image'

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
					'relative grid w-full grid-cols-12 gap-4 px-8 md:gap-8 md:px-16 xl:px-32'
				}
			>
				<div
					className={
						'relative col-span-3 flex flex-col items-center justify-center gap-4'
					}
				>
					<p className={'text-xl'}>Date</p>
					<p>10 août 2024</p>
					<p className={'text-xs'}>
						La réception débute a 14:15 , la soirée a 18:00
					</p>
				</div>
				<div
					className={
						'relative col-span-3 flex flex-col items-center justify-center gap-4'
					}
				>
					<p className={'text-xl'}>Mairie</p>
					<p>10h00</p>
					<p className={'text-xs'}>1 rue du Mollard, 74200 Anthy</p>
				</div>
				<div
					className={
						'relative col-span-3 flex flex-col items-center justify-center gap-4'
					}
				>
					<p className={'text-xl'}>Eglise</p>
					<p>12h00</p>
					<p className={'text-xs'}>1 rue du Mollard, 74200 Anthy</p>
				</div>
				<div
					className={
						'relative col-span-3 flex flex-col items-center justify-center gap-4'
					}
				>
					<p className={'text-xl'}>Soirée</p>
					<p>18h00</p>
					<p className={'text-xs'}>15 rue des pécheurs, 74200 Anthy</p>
				</div>
			</div>
		</div>
	)
}

export default MariageMaeEtRomainComponent
