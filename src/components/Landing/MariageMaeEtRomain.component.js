import TitleOrnementedComponent from '@/components/Landing/TitleOrnemented.component'
import { CustomSvgComponent } from '@/components/CustomSvg.component'

function MariageMaeEtRomainComponent() {
	return (
		<div className={'mx-auto max-w-7xl px-2 py-16 md:px-4 xl:px-8'}>
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
	)
}

export default MariageMaeEtRomainComponent
