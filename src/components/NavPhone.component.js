'use client'
import Link from 'next/link'
import { CustomSvgComponent } from '@/components/CustomSvg.component'
import { useEffect, useState } from 'react'
import useVisitedPagesStore from '@/stores/visitedPagesStore'

export function NavPhoneComponent({ navLinks }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const { visitedPages, addVisitedPage, removeVisitedPageIndicator } =
		useVisitedPagesStore()

	const handleClick = page => {
		addVisitedPage(page)
		removeVisitedPageIndicator(page)
		setIsMenuOpen(false)
	}

	const countUnvisitedPages = () => {
		return navLinks.reduce((count, link) => {
			if (!visitedPages[link.href] && !link.isCustomSvg && link.isNotifActive) {
				count++
			}
			return count
		}, 0)
	}

	return (
		<>
			<nav
				className={`${
					isMenuOpen
						? 'hidden'
						: 'z-50 flex h-[100px] w-full items-center justify-center border-b border-gray-300 bg-white py-8 md:hidden'
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
						<div className="flex items-center">
							<Link
								href={'/photos'}
								className="relative mr-6 flex h-9 w-9 items-center justify-center rounded-full bg-mae-950"
							>
								<i className="fi fi-rr-camera translate-y-[2px] transform text-sm text-white"></i>
							</Link>
							<button
								className={'relative focus:outline-none'}
								onClick={() => setIsMenuOpen(!isMenuOpen)}
							>
								<i className="fi fi-br-menu-burger text-xl"></i>
								{countUnvisitedPages() !== 0 && (
									<span className="animate-custom-blup-blup absolute -right-3.5 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-red-700 text-center text-xs text-white">
										{countUnvisitedPages()}
									</span>
								)}
							</button>
						</div>
					</div>
				</div>
			</nav>
			<nav
				className={`${
					isMenuOpen
						? 'fixed z-50 h-screen w-screen bg-white md:hidden'
						: 'hidden'
				}`}
			>
				<div className="relative flex h-full w-full flex-col items-center justify-start gap-16 pt-32">
					<div>
						<button
							className="absolute right-0 top-0 p-8 text-mae-950 focus:outline-none"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							<i className="fi fi-br-cross text-xl"></i>
						</button>
					</div>
					{navLinks.map(({ href, label, isCustomSvg, isNotifActive }) => (
						<Link
							href={href}
							key={href}
							className="relative"
							onClick={() => handleClick(href)}
						>
							{isCustomSvg ? (
								<CustomSvgComponent
									classNames="w-[50px] h-[50px] bg-mae-950"
									url="/typoLogo.svg"
								/>
							) : (
								<>
									{label}
									{visitedPages[href] !== true && isNotifActive && (
										<span className="animate-custom-blup-blup absolute -right-2.5 -top-0 h-1.5 w-1.5 rounded-full bg-red-700"></span>
									)}
								</>
							)}
						</Link>
					))}
				</div>
			</nav>
		</>
	)
}
