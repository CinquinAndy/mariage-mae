import { CustomSvgComponent } from '@/components/CustomSvg.component'

export default function TitleOrnementedComponent({ title }) {
	return (
		<div
			className={
				'flex w-full items-center justify-center gap-2 md:gap-6 xl:gap-8'
			}
		>
			<CustomSvgComponent
				classNames={
					'!w-[75px] md:!w-[150px] md:!h-[125px] xl:!w-[200px] !h-[75px] xl:!h-[150px] bg-mae-950 transform scale-x-[-1]'
				}
				url={'vintage.svg'}
			/>
			<h2 className={'text-center text-3xl md:text-4xl xl:text-6xl'}>
				{title}
			</h2>
			<CustomSvgComponent
				classNames={
					'!w-[75px] md:!w-[150px] md:!h-[125px] xl:!w-[200px] !h-[75px] xl:!h-[150px] bg-mae-950'
				}
				url={'vintage.svg'}
			/>
		</div>
	)
}
