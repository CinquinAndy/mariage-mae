import Link from 'next/link'
import { CustomSvgComponent } from '@/components/CustomSvg.component'

export function NavComponent() {
	return (
		<nav
			className={
				'flex h-[100px] w-full items-center justify-center border-b border-gray-300 bg-white py-8'
			}
		>
			<div className={'mx-auto h-full w-full max-w-xl px-4 md:px-6 xl:px-8'}>
				<div
					className={
						'text-md flex h-full w-full items-center justify-evenly uppercase text-mae-950 no-underline'
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
	)
}
