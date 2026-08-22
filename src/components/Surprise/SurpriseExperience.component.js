'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import { SurpriseLoaderComponent } from '@/components/Surprise/SurpriseLoader.component'

/**
 * Orchestre la page surprise : chargement complet de la vidéo, puis lecture
 * unique. États : loading → playing → ended, avec error (fichier injoignable)
 * et blocked (autoplay refusé : un geste de l'utilisateur relance).
 *
 * La vidéo est récupérée en entier via fetch avant d'être donnée au <video>
 * (URL blob) : la progression est réelle et la lecture ne peut pas caler.
 * `children` est rendu au-dessus de la vidéo, sous le loader (shader, etc.).
 */
export function SurpriseExperienceComponent({ src, children }) {
	const videoRef = useRef(null)
	const [status, setStatus] = useState('loading')
	const [progress, setProgress] = useState(0)
	const [blobUrl, setBlobUrl] = useState(null)

	useEffect(() => {
		const controller = new AbortController()
		let url = null

		;(async () => {
			try {
				const response = await fetch(src, { signal: controller.signal })
				if (!response.ok) throw new Error(`HTTP ${response.status}`)

				const total = Number(response.headers.get('content-length')) || 0
				const reader = response.body.getReader()
				const chunks = []
				let received = 0

				for (;;) {
					const { done, value } = await reader.read()
					if (done) break
					chunks.push(value)
					received += value.length
					if (total) setProgress(received / total)
				}

				url = URL.createObjectURL(new Blob(chunks, { type: 'video/mp4' }))
				setProgress(1)
				setBlobUrl(url)
			} catch (error) {
				if (error.name !== 'AbortError') setStatus('error')
			}
		})()

		return () => {
			controller.abort()
			if (url) URL.revokeObjectURL(url)
		}
	}, [src])

	const play = useCallback(() => {
		const video = videoRef.current
		if (!video) return
		video.muted = true
		video
			.play()
			.then(() => setStatus('playing'))
			.catch(() => setStatus('blocked'))
	}, [])

	// Onglet masqué : le navigateur met la vidéo en pause ; on reprend au retour.
	useEffect(() => {
		if (status !== 'playing') return
		const resume = () => {
			const video = videoRef.current
			if (!document.hidden && video && video.paused && !video.ended) {
				video.play().catch(() => {})
			}
		}
		document.addEventListener('visibilitychange', resume)
		return () => document.removeEventListener('visibilitychange', resume)
	}, [status])

	return (
		<>
			{blobUrl && (
				<video
					ref={videoRef}
					src={blobUrl}
					muted
					playsInline
					preload={'auto'}
					onCanPlayThrough={play}
					onEnded={() => setStatus('ended')}
					onError={() => setStatus('error')}
					className={'absolute inset-0 h-full w-full object-cover'}
				/>
			)}

			{children}

			<SurpriseLoaderComponent
				status={status}
				progress={progress}
				onStart={play}
			/>
		</>
	)
}
