import Image from 'next/image'

export default function Page() {
	return (
		<div
			className={
				'relative -z-10 flex h-[calc(100vh-200px)] w-screen flex-col items-center justify-center xl:h-[calc(100vh-100px)]'
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
					'mx-auto grid h-full w-full grid-cols-12 px-4 sm:py-16 md:px-8 xl:px-32'
				}
			>
				<div
					className={
						'col-span-12 flex h-full items-center justify-start xl:col-span-4'
					}
				>
					<h1
						className={
							'custom-title-color-gradient px-4 text-[6rem] leading-[6rem] md:text-[10rem] md:leading-[10rem] xl:text-[15rem] xl:leading-[15rem]'
						}
					>
						Contact
					</h1>
				</div>
				<div className="col-span-12 flex h-full transform items-center justify-evenly xl:col-span-8 ">
					<section
						className={
							'grid h-full w-full grid-cols-12 grid-rows-1 gap-2 md:gap-4 xl:grid-rows-3 xl:gap-8'
						}
					>
						<div className="col-span-12 flex h-auto w-full flex-col gap-4 rounded-lg bg-white p-8 shadow-xl md:col-span-6 md:h-[400px] xl:row-start-1">
							<Image
								src={'/image00013.jpeg'}
								width={180}
								height={180}
								alt={'romain'}
								className={'-rotate-3 rounded-xl object-cover'}
							/>
							<h2 className={'text-3xl md:text-4xl lg:text-5xl'}>Romain</h2>
							<p>
								-&nbsp;<span className={'font-bold'}>Téléphone :</span>
								&nbsp;06 78 00 73 39
							</p>
							<p>
								-&nbsp;<span className={'font-bold'}>Email :</span>
								&nbsp;rchallan74@gmail.com
							</p>
						</div>
						<div className="col-span-12 flex h-auto w-full flex-col gap-4 rounded-lg bg-white p-8 shadow-xl md:col-span-6 md:h-[400px] xl:row-start-1">
							<div
								className={
									'flex h-[180px] w-[180px] items-center justify-center'
								}
							>
								<Image
									src={'/image00013.jpeg'}
									width={180}
									height={180}
									alt={'romain'}
									className={'rotate-3 rounded-xl object-cover'}
								/>
							</div>
							<h2 className={'text-3xl md:text-4xl lg:text-5xl'}>Maeva</h2>
							<p>
								-&nbsp;<span className={'font-bold'}>Téléphone :</span>
								&nbsp;06 16 62 51 37
							</p>
							<p>
								-&nbsp;<span className={'font-bold'}>Email :</span>
								&nbsp;maevacinquin1@gmail.com
							</p>
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}
