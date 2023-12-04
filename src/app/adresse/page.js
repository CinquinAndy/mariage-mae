import Image from 'next/image'

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
				></div>
			</div>
			<div className={'mx-auto max-w-7xl px-2 py-16 md:px-4 xl:px-8'}>
				second bloc
			</div>
		</>
	)
}
