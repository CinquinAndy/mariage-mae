import Image from 'next/image'

export function EventInfoComponent({
	title,
	time,
	address,
	imageSrc,
	imageAlt,
}) {
	return (
		<div className="relative col-span-2 flex flex-col items-start justify-start gap-2 text-start">
			{imageSrc && (
				<div className="w-full">
					<Image
						src={imageSrc}
						alt={imageAlt}
						quality={90}
						className="rounded object-cover shadow-lg"
						width={200}
						height={200}
					/>
				</div>
			)}
			<div className="flex flex-col">
				<p className="text-xl font-semibold">{title}</p>
				{time && <p className="text-sm italic">{time}</p>}
			</div>
			{address && <p className="text-xs">{address}</p>}
		</div>
	)
}
