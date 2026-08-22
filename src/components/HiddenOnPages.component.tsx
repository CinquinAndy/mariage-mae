'use client'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

type HiddenOnPagesProps = {
	pages: string[]
	children: ReactNode
}

/**
 * Ne rend pas ses enfants sur les chemins listés.
 * Sert à retirer l'habillage global (nav, footer...) sur une page précise.
 */
export function HiddenOnPagesComponent({ pages, children }: HiddenOnPagesProps) {
	const pathname = usePathname()
	if (pages.includes(pathname)) return null
	return children
}
