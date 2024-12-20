'use client'
import Link from 'next/link'
import { CustomSvgComponent } from '@/components/CustomSvg.component'
import { NavPhoneComponent } from '@/components/NavPhone.component'
import useVisitedPagesStore from '@/stores/visitedPagesStore'

const navLinks = [
	{ href: '/contact', label: 'Contact', isNotifActive: false },
	{ href: '/save-the-date', label: 'Save the date', isNotifActive: true },
	{ href: '/', label: 'Home', isCustomSvg: true, isNotifActive: false },
	{ href: '/lune-de-miel', label: 'Lune de miel', isNotifActive: true },
	{ href: '/adresse', label: 'Adresses', isNotifActive: true },
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
			<nav className="relative z-[100] hidden h-[100px] w-full items-center justify-center border-b border-gray-300 bg-white py-8 md:flex">
				<div
					className={'absolute right-8 top-8 flex items-center justify-center'}
				>
					<Link
						href={'/photos'}
						className="flex h-10 w-10 items-center justify-center rounded-full bg-mae-950 p-2"
					>
						<i className="fi fi-rr-camera text-md text-white"></i>
					</Link>
				</div>
				<div className="mx-auto h-full w-full max-w-xl px-4 md:px-6 xl:max-w-3xl xl:px-8">
					<div className="flex h-full w-full items-center justify-between text-xs uppercase tracking-wider text-mae-950 no-underline xl:text-sm xl:tracking-widest">
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
				</div>
			</nav>
		</>
	)
}
