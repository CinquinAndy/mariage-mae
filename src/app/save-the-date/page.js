import Image from 'next/image'

export default function Page() {
	return (
		<>
			<div
				className={
					'relative -z-10 flex h-[calc(100vh-100px)] w-screen flex-col items-center justify-center'
				}
			>
				<Image
					src={'/willumarryme.jpg'}
					fill={true}
					className={'-z-10 hidden object-cover opacity-50 xl:block'}
					alt={'will u marry me'}
					quality={90}
				/>
				<Image
					src={'/willumarryme_tablet.jpg'}
					fill={true}
					className={'-z-10 hidden object-cover opacity-50 md:block xl:hidden'}
					alt={'will u marry me'}
					quality={90}
				/>
				<Image
					src={'/willumarryme_phone.jpg'}
					fill={true}
					className={'-z-10 block object-cover opacity-50 md:hidden'}
					alt={'will u marry me'}
					quality={90}
				/>
				<div
					className={
						'mx-auto grid h-full w-full max-w-7xl grid-cols-12 py-16 md:px-4'
					}
				>
					<div className={'col-span-4 flex h-full items-center justify-start'}>
						<h1
							className={
								'custom-title-color-gradient px-4 text-[8rem] leading-[8rem] md:text-[10rem] md:leading-[10rem] xl:text-[15rem] xl:leading-[15rem]'
							}
						>
							Save the Dates
						</h1>
					</div>
				</div>
			</div>
			{/*<div className={'mx-auto max-w-7xl px-2 py-16 md:px-4 xl:px-8'}>*/}
			{/*	second bloc*/}
			{/*</div>*/}
		</>
	)
}
