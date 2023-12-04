import TitleOrnementedComponent from '@/components/Landing/TitleOrnemented.component'
import { CustomSvgComponent } from '@/components/CustomSvg.component'
import { EventInfoComponent } from '@/components/Landing/EventInfo.component'
import { SectionComponent } from '@/components/Landing/Section.component'
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
			<div
				className={
					'relative grid w-full grid-cols-4 gap-4 px-8 text-center md:grid-cols-8 md:gap-8 md:px-16 xl:px-32'
				}
			>
				<EventInfoComponent
					title="Date"
					time="10 août 2024"
					address="La réception débute à 14:15, la soirée à 18:00"
					imageSrc="/calendar_icon.png"
					imageAlt="Calendar"
				/>
				<EventInfoComponent
					title="Mairie"
					time="10h00"
					address="1 rue du Mollard, 74200 Anthy"
					imageSrc="/town_icon.png"
					imageAlt="town hall"
				/>
				<EventInfoComponent
					title="Eglise"
					time="12h00"
					address="1 rue du Mollard, 74200 Anthy"
					imageSrc="/church_icon.png"
					imageAlt="church"
				/>
				<EventInfoComponent
					title="Soirée"
					time="18h00"
					address="15 rue des pécheurs, 74200 Anthy"
					imageSrc="/party_icon.png"
					imageAlt="party"
				/>
			</div>
			<div
				className={
					'relative grid w-full grid-cols-12 gap-8 px-8 text-center md:gap-8 md:px-16 xl:px-32'
				}
			>
				<div
					className={
						'col-span-6 flex w-full flex-col items-center justify-center gap-16'
					}
				>
					<Image
						src={'/image00056.jpeg'}
						alt={'mae'}
						width={500}
						height={500}
						quality={100}
						className={'h-[350px] rounded object-cover shadow-2xl md:h-auto'}
					/>
					<div className={'flex flex-col items-center justify-center gap-8'}>
						<div className={'flex flex-col items-center justify-center gap-4'}>
							<p className={'text-xl font-semibold tracking-wider'}>
								La mariée
							</p>
							<div className={'h-[2px] w-[20px] rounded bg-mae-950/30'} />
						</div>
						<h2 className={'text-5xl'}>Cinquin Maeva</h2>
					</div>
				</div>
				<div
					className={
						'col-span-6 flex w-full flex-col items-center justify-center gap-16'
					}
				>
					<Image
						src={'/image00057.jpeg'}
						alt={'mae'}
						width={500}
						height={500}
						quality={100}
						className={'h-[350px] rounded object-cover shadow-2xl md:h-auto'}
					/>
					<div className={'flex flex-col items-center justify-center gap-8'}>
						<div className={'flex flex-col items-center justify-center gap-4'}>
							<p className={'text-xl font-semibold tracking-wider'}>Le marié</p>
							<div className={'h-[2px] w-[20px] rounded bg-mae-950/30'} />
						</div>
						<h2 className={'text-5xl'}>Challande Romain</h2>
					</div>
				</div>
				<div className={'col-span-12 grid w-full grid-cols-12 gap-4 pt-16'}>
					<div
						className={
							'col-span-12 flex h-full w-full items-center justify-center md:col-span-6 xl:col-span-4'
						}
					>
						<Image
							src={'/image00015.jpeg'}
							alt={'mae'}
							width={300}
							height={500}
							quality={100}
							className={
								'h-[400px] rounded object-cover shadow-2xl md:h-[350px] xl:h-[500px]'
							}
						/>
					</div>
					<div
						className={
							'col-span-12 flex h-full w-full items-center justify-center md:col-span-6 xl:col-span-4'
						}
					>
						<Image
							src={'/image00021.jpeg'}
							alt={'mae'}
							width={300}
							height={500}
							quality={100}
							className={
								'h-[250px] rounded object-contain shadow-2xl md:h-[350px] xl:h-[500px]'
							}
						/>
					</div>
					<div
						className={
							'col-span-12 flex h-full w-full items-center justify-center md:col-span-6 xl:col-span-4'
						}
					>
						<Image
							src={'/image00016.jpeg'}
							alt={'mae'}
							width={300}
							height={500}
							quality={100}
							className={
								'h-[400px] rounded object-cover shadow-2xl md:h-[350px] xl:h-[500px]'
							}
						/>
					</div>
				</div>
			</div>
			<TitleOrnementedComponent title={'Nos témoins'} ornement={false} />
			<div
				className={
					'relative grid w-full grid-cols-12 gap-8 px-8 text-start md:gap-8 md:px-16 xl:px-32'
				}
			>
				<div className={'col-span-12 flex flex-col'}>
					<h2 className={'text-4xl'}>
						{`
							Nos amis, les trésors de notre cœur !
						`}
					</h2>
					<p className={''}>
						{`
							Nos témoins, les piliers de notre grand jour. Gardiens de notre amour,
							ils ont vu notre histoire fleurir et grandir. Ils sont le symbole de
							l’amitié véritable, de l’amour sincère et du soutien inébranlable,
							éclairant notre chemin comme des étoiles dans la nuit.
						`}
					</p>
				</div>
				<div className={'col-span-12 flex flex-col gap-4 md:col-span-6'}>
					<div>
						<h2 className={'text-4xl'}>Témoins de la mariée</h2>
						<p className={''}>
							{`
							Deux femmes extraordinaires, chacune un univers
							à part entière. Avec des cœurs aussi vastes que l'océan, et des
							esprits aussi brillants que les étoiles filantes
						`}
							<br />
							{`
							Ensemble, elles forment une constellation éblouissante, illuminant
							notre journée spéciale de leur sagesse et de leur amour.
						`}
						</p>
					</div>
					<div className={'flex h-full w-full items-end justify-start gap-8'}>
						<Image
							src={'/image00055.jpeg'}
							alt={'nanou'}
							className={'h-[100px] w-[100px] rounded-full object-cover'}
							width={150}
							height={150}
						></Image>
						<Image
							src={'/image00058.jpeg'}
							alt={'alice'}
							className={'h-[100px] w-[100px] rounded-full object-cover'}
							width={150}
							height={150}
						></Image>
					</div>
				</div>
				<div className={'col-span-12 flex h-full flex-col gap-4 md:col-span-6'}>
					<div>
						<h2 className={'text-4xl'}>Témoins du marié</h2>
						<p className={''}>
							{`
							 Éclats de deux mondes merveilleux, 
							 apportent avec eux une symphonie de rires et de joie, 
							 illuminant notre union de leur esprit pétillant et de leur bonne humeur contagieuse.
						 `}
						</p>
					</div>
					<div className={'flex h-full w-full items-end justify-start gap-8'}>
						<Image
							src={'/image00059.jpeg'}
							alt={'françois'}
							className={'h-[100px] w-[100px] rounded-full object-cover'}
							width={150}
							height={150}
						></Image>
						<Image
							src={'/image00060.jpeg'}
							alt={'andy'}
							className={'h-[100px] w-[100px] rounded-full object-cover'}
							width={150}
							height={150}
						></Image>
					</div>
				</div>
			</div>
			<TitleOrnementedComponent title={'Les directives !'} ornement={false} />
			<div
				className={
					'relative grid w-full grid-cols-12 gap-8 px-8 text-center md:gap-8 md:px-16 xl:px-32'
				}
			>
				<div className={'col-span-12 grid w-full grid-cols-12 gap-8'}>
					<div className={'col-span-6 flex items-center justify-end'}>
						<Image
							src={'/suit_icon.webp'}
							alt={'Dress Code'}
							width={200}
							height={200}
							quality={90}
							className={'h-[200px] rounded object-cover shadow-2xl md:h-auto'}
						/>
					</div>
					<div className={'col-span-6 flex flex-col gap-4 text-left'}>
						<div className={'flex flex-col'}>
							<h2 className={'text-3xl'}>Dress code</h2>
							<p className={'font-semibold'}>→ Romantique chic</p>
						</div>
						<p className={'italic'}>
							{`Tenue requise : Romantique chic,`}
							<br />
							{`où 'Cendrillon rencontre James Bond'.`}
							<br />
							{`Pantoufles en verres non fournies.`}
						</p>
					</div>
				</div>
				<div
					className={'col-span-12 grid w-full grid-cols-12 gap-8 pt-8 md:pt-16'}
				>
					<div className={'col-span-6 flex flex-col gap-4 text-right'}>
						<div className={'flex flex-col'}>
							<h2 className={'text-3xl'}>Thème couleur</h2>
							<p className={'font-semibold'}>→ Blanc & bordeaux</p>
						</div>
						<p className={'italic'}>
							{`Imaginez que vous êtes le bouquet final d'un grand cru :`}
							<br />
							{`éclatant de bordeaux avec des notes de blanc.`}
						</p>
					</div>
					<div className={'col-span-6 flex items-center justify-start'}>
						<Image
							src={'/palet_icon.webp'}
							alt={'Dress Code'}
							width={200}
							height={200}
							quality={90}
							className={'h-[200px] rounded object-cover shadow-2xl md:h-auto'}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MariageMaeEtRomainComponent
