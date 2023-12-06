import Image from 'next/image'
import { CustomSvgComponent } from '@/components/CustomSvg.component'
import Link from 'next/link'

export default function Page() {
	return (
		<>
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
					<div className="col-span-12 flex h-full -translate-y-[40px] transform items-center justify-evenly md:-translate-y-[0px] xl:col-span-8 ">
						<section
							className={
								'grid h-full w-full grid-cols-12 gap-2 md:gap-4 xl:gap-8'
							}
						>
							<div className="col-span-12 flex h-auto w-full flex-col gap-4 rounded-lg bg-white p-8 shadow-xl md:col-span-6 md:h-[500px]">
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
							<div className="col-span-12 flex h-auto w-full flex-col gap-4 rounded-lg bg-white p-8 shadow-xl md:col-span-6 md:h-[500px]">
								<div
									className={
										'flex h-[200px] w-[200px] items-center justify-center'
									}
								>
									<Image
										src={'/image00013.jpeg'}
										width={200}
										height={200}
										alt={'romain'}
										className={'rounded-full object-cover'}
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
			<div className={'h-[100px] w-full'}></div>
			<div
				className={
					'relative flex h-screen w-screen flex-col items-center justify-center '
				}
			>
				<Link
					href={'/'}
					className={
						'group relative h-[85%] w-[90%] rounded-xl border border-gray-100 shadow-2xl transition-all hover:scale-105 hover:cursor-pointer hover:border-2 hover:border-gray-200 hover:shadow-2xl md:h-[70%] md:w-[70%] xl:h-[65%]'
					}
				>
					<div className={'absolute h-full w-full p-3'}>
						<div
							className={
								'relative flex h-full w-full items-center justify-center rounded-xl bg-black/10'
							}
						>
							<div
								className={
									'absolute bottom-32 left-1/2 -translate-x-1/2 transform px-4 py-2 md:bottom-8'
								}
							>
								<div className={'relative h-full w-full'}>
									<h2
										className={
											'text-center text-4xl text-white underline shadow-black text-shadow-lg'
										}
									>
										je viens →
									</h2>
									<div
										className={
											'absolute -right-[25px] -top-[15px] flex items-center justify-center'
										}
									>
										<CustomSvgComponent
											classNames={'w-[25px] h-[25px] bg-white/75'}
											url={'/party-horn.svg'}
										/>
									</div>
									<div
										className={
											'absolute -left-[25px] -top-[15px] flex items-center justify-center'
										}
									>
										<CustomSvgComponent
											classNames={
												'w-[25px] h-[25px] bg-white/75 transform scale-x-[-1]'
											}
											url={'/party-horn.svg'}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<Image
						src={'/wedding_roses.jpg'}
						alt={'Wedding roses'}
						fill={true}
						quality={100}
						className={
							'-z-10 rounded-xl object-cover grayscale transition-all group-hover:grayscale-0'
						}
					/>
				</Link>
			</div>
		</>
	)
}
