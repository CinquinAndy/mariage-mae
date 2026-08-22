'use client'
import { type ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { SurpriseLoaderComponent, type SurpriseStatus } from '@/components/Surprise/SurpriseLoader.component'
import { type RevealImage, SurpriseRevealComponent } from '@/components/Surprise/SurpriseReveal.component'

type ProgressReport = (received: number, total: number) => void

type SurpriseAssets = {
	videoUrl: string
	imageUrl: string
	image: RevealImage
}

type SurpriseExperienceProps = {
	video: string
	image: string
	children?: ReactNode
}

// Télécharge un fichier en entier en rapportant les octets reçus.
async function fetchBlob(url: string, signal: AbortSignal, onProgress: ProgressReport): Promise<Blob> {
	const response = await fetch(url, { signal })
	if (!response.ok || !response.body) {
		throw new Error(`${url} : HTTP ${response.status}`)
	}

	const total = Number(response.headers.get('content-length')) || 0
	const reader = response.body.getReader()
	const chunks: Uint8Array<ArrayBuffer>[] = []
	let received = 0

	for (;;) {
		const { done, value } = await reader.read()
		if (done) break
		chunks.push(value as Uint8Array<ArrayBuffer>)
		received += value.length
		onProgress(received, total)
	}
	return new Blob(chunks)
}

// Décode l'image hors du document (un onglet masqué ne décode pas les <img>),
// en appliquant l'orientation EXIF. Repli sur un <img> chargé.
async function decodeImage(blob: Blob, url: string): Promise<RevealImage> {
	if (typeof createImageBitmap === 'function') {
		return createImageBitmap(blob, { imageOrientation: 'from-image' })
	}
	const element = new Image()
	element.src = url
	await new Promise<void>((resolve, reject) => {
		element.onload = () => resolve()
		element.onerror = () => reject(new Error(`${url} : image illisible`))
	})
	return element
}

/**
 * Orchestre la page surprise.
 *
 * États : loading → playing → reveal → revealed, plus error (un fichier est
 * injoignable) et blocked (autoplay refusé : un geste de l'utilisateur relance).
 *
 * Phase 1 : la vidéo, lue une seule fois, sans loop.
 * Phase 2 : le shader de révélation fait apparaître l'image à travers le noir.
 *
 * Tout est téléchargé en entier pendant le loader (progression réelle) : la
 * vidéo est donnée au <video> en URL blob, l'image décodée (ImageBitmap) avant
 * la phase 2. `children` est rendu au-dessus des deux phases, sous le loader.
 */
export function SurpriseExperienceComponent({ video, image, children }: SurpriseExperienceProps) {
	const videoRef = useRef<HTMLVideoElement>(null)
	const [status, setStatus] = useState<SurpriseStatus>('loading')
	const [progress, setProgress] = useState(0)
	const [assets, setAssets] = useState<SurpriseAssets | null>(null)

	useEffect(() => {
		const controller = new AbortController()
		const urls: string[] = []
		const received: Record<string, number> = {}
		const totals: Record<string, number> = {}

		const report =
			(key: string): ProgressReport =>
			(bytes, total) => {
				received[key] = bytes
				totals[key] = total
				const sum = Object.values(totals).reduce((a, b) => a + b, 0)
				if (sum && Object.keys(totals).length === 2) {
					setProgress(Object.values(received).reduce((a, b) => a + b, 0) / sum)
				}
			}

		;(async () => {
			try {
				const [videoBlob, imageBlob] = await Promise.all([
					fetchBlob(video, controller.signal, report('video')),
					fetchBlob(image, controller.signal, report('image')),
				])

				const videoUrl = URL.createObjectURL(videoBlob)
				const imageUrl = URL.createObjectURL(imageBlob)
				urls.push(videoUrl, imageUrl)

				const bitmap = await decodeImage(imageBlob, imageUrl)

				setProgress(1)
				setAssets({ videoUrl, imageUrl, image: bitmap })
			} catch (error) {
				if (error instanceof Error && error.name === 'AbortError') return
				console.error(error)
				setStatus('error')
			}
		})()

		return () => {
			controller.abort()
			for (const url of urls) URL.revokeObjectURL(url)
		}
	}, [video, image])

	const play = useCallback(() => {
		const element = videoRef.current
		if (!element) return
		element.muted = true
		element
			.play()
			.then(() => setStatus('playing'))
			.catch(() => setStatus('blocked'))
	}, [])

	// Onglet masqué : le navigateur met la vidéo en pause ; on reprend au retour.
	useEffect(() => {
		if (status !== 'playing') return
		const resume = () => {
			const element = videoRef.current
			if (!document.hidden && element && element.paused && !element.ended) {
				element.play().catch(() => {})
			}
		}
		document.addEventListener('visibilitychange', resume)
		return () => document.removeEventListener('visibilitychange', resume)
	}, [status])

	const isRevealing = status === 'reveal' || status === 'revealed'

	return (
		<>
			{assets && (
				<video
					ref={videoRef}
					src={assets.videoUrl}
					muted
					playsInline
					preload={'auto'}
					onCanPlayThrough={play}
					onEnded={() => setStatus('reveal')}
					onError={() => setStatus('error')}
					className={'absolute inset-0 h-full w-full object-cover'}
				/>
			)}

			{assets && isRevealing && (
				<SurpriseRevealComponent image={assets.image} imageUrl={assets.imageUrl} onDone={() => setStatus('revealed')} />
			)}

			{children}

			<SurpriseLoaderComponent status={status} progress={progress} onStart={play} />
		</>
	)
}
