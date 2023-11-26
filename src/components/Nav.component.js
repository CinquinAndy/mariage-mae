import Link from 'next/link'
import { CustomSvgComponent } from '@/components/CustomSvg.component'
import { NavPhoneComponent } from '@/components/NavPhone.component'

export function NavComponent() {
	return (
		<>
			{/* Phone version */}
			<NavPhoneComponent />
			{/* Desktop version */}
			<nav
				className={
					'hidden h-[100px] w-full items-center justify-center border-b border-gray-300 bg-white py-8 md:flex'
				}
			>
				<div
					className={
						'mx-auto h-full w-full max-w-xl px-4 md:px-6 xl:max-w-3xl xl:px-8'
					}
				>
					<div
						className={
							'flex h-full w-full items-center justify-between text-xs uppercase tracking-wider text-mae-950 no-underline xl:text-sm xl:tracking-widest'
						}
					>
						<Link href={'/adresse'}>Adresse</Link>
						<Link href={'/save-the-date'}>Save the date</Link>
						<Link href={'/'}>
							<CustomSvgComponent
								classNames={'w-[50px] h-[50px] bg-mae-950'}
								url={'/typoLogo.svg'}
							></CustomSvgComponent>
						</Link>
						<Link href={'/lune-de-miel'}>Lune de miel</Link>
						<Link href={'/contact'}>Contact</Link>
					</div>
				</div>
			</nav>
		</>
	)
}
