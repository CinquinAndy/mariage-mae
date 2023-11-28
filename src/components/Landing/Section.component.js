import Image from 'next/image'

export function SectionComponent({
	isReverse = false,
	title,
	text,
	imageSrc,
	imageAlt,
}) {
	return (
		<div
			className={
				'relative grid w-full grid-cols-12 gap-4 px-8 md:gap-8 md:px-16 xl:px-32'
			}
		>
			<div
				className={`relative col-span-12 flex min-h-[150px] items-center justify-center md:col-span-6 md:min-h-[250px] ${
					isReverse
						? 'md:col-start-7 md:row-start-1'
						: 'md:col-start-1 md:row-start-1'
				}`}
			>
				<Image
					src={imageSrc}
					alt={imageAlt}
					width={500}
					height={350}
					quality={80}
					className={'rounded shadow-2xl'}
				/>
			</div>
			<div
				className={`col-span-12 flex flex-col items-start justify-center gap-4 md:col-span-6 ${
					isReverse
						? 'md:col-start-1 md:row-start-1'
						: 'md:col-start-7 md:row-start-1'
				}`}
			>
				<p className={'text-xl font-semibold tracking-wider'}>{title}</p>
				<div className={'h-[2px] w-[20px] rounded bg-mae-950/80'} />
				{text}
			</div>
		</div>
	)
}
