'use client'
import { usePathname } from 'next/navigation'

/**
 * Ne rend pas ses enfants sur les chemins listés.
 * Sert à retirer l'habillage global (nav, footer...) sur une page précise.
 */
export function HiddenOnPagesComponent({ pages, children }) {
	const pathname = usePathname()
	if (pages.includes(pathname)) return null
	return children
}
