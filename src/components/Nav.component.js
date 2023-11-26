'use client'
import Link from 'next/link'
import { CustomSvgComponent } from '@/components/CustomSvg.component'
import { NavPhoneComponent } from '@/components/NavPhone.component'
import useVisitedPagesStore from '@/stores/visitedPagesStore'

const navLinks = [
	{ href: '/adresse', label: 'Adresse' },
	{ href: '/save-the-date', label: 'Save the date' },
	{ href: '/', label: 'Home', isCustomSvg: true },
	{ href: '/lune-de-miel', label: 'Lune de miel' },
	{ href: '/contact', label: 'Contact' },
]

export function NavComponent() {
	const { visitedPages, addVisitedPage, removeVisitedPageIndicator } =
		useVisitedPagesStore()

	const handleClick = page => {
		addVisitedPage(page)
		removeVisitedPageIndicator(page)
	}

	return (
		<>
			{/* Phone version */}
			<NavPhoneComponent navLinks={navLinks} />
			{/* Desktop version */}
			<nav className="hidden h-[100px] w-full items-center justify-center border-b border-gray-300 bg-white py-8 md:flex">
				<div className="mx-auto h-full w-full max-w-xl px-4 md:px-6 xl:max-w-3xl xl:px-8">
					<div className="flex h-full w-full items-center justify-between text-xs uppercase tracking-wider text-mae-950 no-underline xl:text-sm xl:tracking-widest">
						{navLinks.map(({ href, label, isCustomSvg }) => (
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
										{visitedPages[href] !== true && (
											<span className="absolute -right-2.5 -top-0 h-1.5 w-1.5 rounded-full bg-red-700"></span>
										)}
									</>
								)}
							</Link>
						))}
					</div>
				</div>
			</nav>
		</>
	)
}
