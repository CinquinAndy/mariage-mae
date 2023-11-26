'use client'
import Link from 'next/link'
import { CustomSvgComponent } from '@/components/CustomSvg.component'
import { useState } from 'react'

export function NavPhoneComponent() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<>
			<nav
				className={`${
					isMenuOpen
						? 'hidden'
						: 'flex h-[100px] w-full items-center justify-center border-b border-gray-300 bg-white py-8 md:hidden'
				}`}
			>
				<div
					className={
						'mx-auto h-full w-full max-w-xl px-4 md:px-6 xl:max-w-3xl xl:px-8'
					}
				>
					<div
						className={
							'flex h-full w-full items-center justify-between px-4 text-sm uppercase tracking-widest text-mae-950 no-underline'
						}
					>
						<Link href={'/'}>
							<CustomSvgComponent
								classNames={'w-[50px] h-[50px] bg-mae-950'}
								url={'/typoLogo.svg'}
							></CustomSvgComponent>
						</Link>
						<button
							className={'focus:outline-none'}
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							<i className="fi fi-br-menu-burger text-xl"></i>
						</button>
					</div>
				</div>
			</nav>
			<nav
				className={`${
					isMenuOpen ? 'fixed h-screen w-screen bg-white md:hidden' : 'hidden'
				}`}
			>
				<div
					className={
						'relative flex h-full w-full flex-col items-center justify-start gap-16 pt-32'
					}
				>
					<div>
						<button
							className={
								'absolute right-0 top-0 p-8 text-mae-950 focus:outline-none'
							}
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							<i className="fi fi-br-cross text-xl"></i>
						</button>
					</div>
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
			</nav>
		</>
	)
}
