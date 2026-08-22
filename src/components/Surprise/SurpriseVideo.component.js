'use client'
import { useEffect, useRef } from 'react'

/**
 * Vidéo plein écran en fond de la page surprise.
 * Composant client : le shader à venir aura besoin d'un ref sur l'élément,
 * et `muted` doit être posé côté client (React ne l'émet pas dans le HTML
 * serveur, ce qui bloque l'autoplay avant hydratation).
 */
export function SurpriseVideoComponent({ src }) {
	const videoRef = useRef(null)

	useEffect(() => {
		const video = videoRef.current
		if (!video) return
		video.muted = true
		video.play().catch(() => {
			// Autoplay refusé par le navigateur : la vidéo reste affichée, figée.
		})
	}, [])

	return (
		<video
			ref={videoRef}
			src={src}
			autoPlay
			muted
			loop
			playsInline
			preload="auto"
			className={'absolute inset-0 h-full w-full object-cover'}
		/>
	)
}
