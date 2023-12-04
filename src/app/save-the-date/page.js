import Image from 'next/image'

export default function Page() {
	return (
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
					'mx-auto grid h-full w-full grid-cols-12 px-4 py-16 md:px-8 xl:px-32'
				}
			>
				<div
					className={
						'col-span-12 flex h-full items-center justify-start xl:col-span-4'
					}
				>
					<h1
						className={
							'custom-title-color-gradient px-4 text-[8rem] leading-[8rem] md:text-[10rem] md:leading-[10rem] xl:text-[15rem] xl:leading-[15rem]'
						}
					>
						Save the Dates
					</h1>
				</div>
				<div className="col-span-12 flex h-full -translate-y-[100px] transform items-center justify-evenly xl:col-span-8">
					<div
						className={
							'relative mx-1 h-[300px] w-[150px] rounded-full md:h-[350px] md:w-[200px] xl:h-[450px] xl:w-[250px]'
						}
					>
						<Image
							src={'/image00023.jpeg'}
							fill={true}
							className={'rounded-full object-cover'}
							alt={'Save the date'}
						/>
						<h2
							className={
								' absolute -right-8 bottom-8 z-10 text-10xl text-white mix-blend-exclusion shadow-black text-shadow-md'
							}
						>
							01.
						</h2>
						<section
							className={
								'absolute -bottom-[150px] left-0 flex w-full flex-col items-center justify-center'
							}
						>
							<div
								className={
									'h-[50px] w-[1px] rounded bg-gradient-to-b from-gray-300 to-gray-50'
								}
							/>
							<div className={'flex'}>
								<div
									className={
										'z-30 flex w-full flex-col items-center justify-center gap-2 '
									}
								>
									<p className={''}>24 juin 2023</p>
									<h2 className={'text-3xl'}>Mariage</h2>
								</div>
							</div>
						</section>
					</div>
					<div
						className={
							'relative mx-1 h-[300px] w-[150px] rounded-full md:h-[350px] md:w-[200px] xl:h-[450px] xl:w-[250px]'
						}
					>
						<Image
							src={'/image00025.jpeg'}
							fill={true}
							className={'z-10 rounded-full object-cover'}
							alt={'Save the date'}
						/>
						<h2
							className={
								'absolute -right-8 bottom-8 z-10 text-10xl text-white mix-blend-exclusion shadow-black text-shadow-md'
							}
						>
							02.
						</h2>
						<section
							className={
								'absolute -bottom-[150px] left-0 flex w-full flex-col items-center justify-center'
							}
						>
							<div
								className={
									'h-[50px] w-[1px] rounded bg-gradient-to-b from-gray-300 to-gray-50'
								}
							/>
							<div className={'flex'}>
								<div
									className={
										'z-30 flex w-full flex-col items-center justify-center gap-2 '
									}
								>
									<p className={''}>24 juin 2023</p>
									<h2 className={'text-3xl'}>Mariage</h2>
								</div>
							</div>
						</section>
					</div>
					<div
						className={
							'relative mx-1 h-[300px] w-[150px] rounded-full md:h-[350px] md:w-[200px] xl:h-[450px] xl:w-[250px]'
						}
					>
						<Image
							src={'/image00039.jpeg'}
							fill={true}
							className={'z-10 rounded-full object-cover'}
							alt={'Save the date'}
						/>
						<h2
							className={
								'absolute -right-8 bottom-8 z-10 text-10xl text-white mix-blend-exclusion shadow-black text-shadow-md'
							}
						>
							03.
						</h2>
						<section
							className={
								'absolute -bottom-[150px] left-0 flex w-full flex-col items-center justify-center'
							}
						>
							<div
								className={
									'h-[50px] w-[1px] rounded bg-gradient-to-b from-gray-300 to-gray-50'
								}
							/>
							<div className={'flex'}>
								<div
									className={
										'z-30 flex w-full flex-col items-center justify-center gap-2 '
									}
								>
									<p className={''}>24 juin 2023</p>
									<h2 className={'text-3xl'}>Mariage</h2>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	)
}
