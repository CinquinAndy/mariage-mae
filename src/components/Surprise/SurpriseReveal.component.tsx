'use client'
import { useEffect, useRef, useState } from 'react'
import { FRAGMENT_SHADER, VERTEX_SHADER } from '@/components/Surprise/revealShader'

export type RevealImage = ImageBitmap | HTMLImageElement
export type RevealFit = 'cover' | 'contain'

type RevealDebugHook = {
	renderAt: (progress: number, time?: number) => { width: number; height: number; coverage: number }
}

declare global {
	interface Window {
		__SURPRISE_REVEAL__?: RevealDebugHook
	}
}

type SurpriseRevealProps = {
	image: RevealImage
	imageUrl: string
	/** Classes du bloc (largeur, arrondi, marges…) ; par défaut pleine largeur du parent */
	className?: string
	fit?: RevealFit
	delay?: number
	duration?: number
	onDone?: () => void
}

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2)

function compileShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader {
	const shader = gl.createShader(type)
	if (!shader) throw new Error('Shader : création impossible')
	gl.shaderSource(shader, source)
	gl.compileShader(shader)
	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		const log = gl.getShaderInfoLog(shader)
		gl.deleteShader(shader)
		throw new Error(`Shader : ${log}`)
	}
	return shader
}

function createProgram(gl: WebGLRenderingContext): WebGLProgram {
	const program = gl.createProgram()
	if (!program) throw new Error('Programme : création impossible')
	gl.attachShader(program, compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER))
	gl.attachShader(program, compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER))
	gl.linkProgram(program)
	if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
		throw new Error(`Programme : ${gl.getProgramInfoLog(program)}`)
	}
	return program
}

// Facteur UV pour caler l'image dans le canvas, centrée.
function imageScale(canvasAspect: number, imageAspect: number, fit: RevealFit): [number, number] {
	const wider = canvasAspect > imageAspect
	if (fit === 'contain') {
		return wider ? [canvasAspect / imageAspect, 1] : [1, imageAspect / canvasAspect]
	}
	return wider ? [1, imageAspect / canvasAspect] : [canvasAspect / imageAspect, 1]
}

function imageSize(image: RevealImage): [number, number] {
	if (image instanceof HTMLImageElement) {
		return [image.naturalWidth, image.naturalHeight]
	}
	return [image.width, image.height]
}

/**
 * Phase 2 de la surprise : le shader de révélation dessine une tache d'encre
 * qui grandit depuis le centre et laisse voir `image`. Hors de la tache le
 * canvas est transparent : la vidéo en dessous reste le fond, l'image semble
 * en sortir.
 * `image` est un ImageBitmap (ou un <img> chargé) préparé par le loader ;
 * `imageUrl` sert au repli sans WebGL.
 * La timeline tourne sur le temps réel des frames (onglet masqué = pause).
 *
 * Rendu : un bloc de flux, dimensionné par son parent (largeur) et le ratio
 * de l'image (hauteur), coins arrondis ; le canvas le remplit. La tache naît
 * au centre du bloc et en couvre les coins à la fin. Tout se règle avec
 * `className` (ex. "w-1/2 rounded-3xl") ou en éditant le JSX ci-dessous.
 */
export function SurpriseRevealComponent({
	image,
	imageUrl,
	className = 'w-full max-h-full rounded-2xl',
	fit = 'cover',
	delay = 0,
	duration = 8,
	onDone,
}: SurpriseRevealProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const onDoneRef = useRef(onDone)
	const [fallback, setFallback] = useState(false)

	useEffect(() => {
		onDoneRef.current = onDone
	}, [onDone])

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas || !image) return
		// Bascule sur l'image simple, hors du rendu en cours
		const fallBackToImage = () => queueMicrotask(() => setFallback(true))
		const gl = canvas.getContext('webgl', {
			alpha: true,
			premultipliedAlpha: true,
			antialias: false,
			depth: false,
			stencil: false,
		})
		if (!gl) {
			fallBackToImage()
			return
		}

		let program: WebGLProgram
		try {
			program = createProgram(gl)
		} catch (error) {
			console.error(error)
			fallBackToImage()
			return
		}
		// biome-ignore lint/correctness/useHookAtTopLevel: gl.useProgram est une méthode WebGL, pas un hook React
		gl.useProgram(program)

		// Un triangle qui couvre tout l'écran
		const buffer = gl.createBuffer()
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
		const aPosition = gl.getAttribLocation(program, 'aPosition')
		gl.enableVertexAttribArray(aPosition)
		gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0)

		// L'image en texture (taille libre : clamp + linéaire, pas de mipmap)
		const texture = gl.createTexture()
		gl.activeTexture(gl.TEXTURE0)
		gl.bindTexture(gl.TEXTURE_2D, texture)
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image)
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)

		const u = {
			resolution: gl.getUniformLocation(program, 'uResolution'),
			time: gl.getUniformLocation(program, 'uTime'),
			progress: gl.getUniformLocation(program, 'uProgress'),
			image: gl.getUniformLocation(program, 'uImage'),
			imageScale: gl.getUniformLocation(program, 'uImageScale'),
		}
		gl.uniform1i(u.image, 0)

		const [imageWidth, imageHeight] = imageSize(image)
		const imageAspect = imageWidth / imageHeight
		const state = {
			elapsed: 0,
			progress: 0,
			last: null as number | null,
			raf: 0,
			done: false,
		}

		const resize = () => {
			const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
			const width = Math.round(canvas.clientWidth * dpr)
			const height = Math.round(canvas.clientHeight * dpr)
			if (canvas.width !== width || canvas.height !== height) {
				canvas.width = width
				canvas.height = height
			}
			gl.viewport(0, 0, width, height)
			gl.uniform2f(u.resolution, width, height)
			gl.uniform2fv(u.imageScale, imageScale(width / height, imageAspect, fit))
		}

		const draw = (progress: number, time: number) => {
			gl.uniform1f(u.progress, progress)
			gl.uniform1f(u.time, time)
			gl.drawArrays(gl.TRIANGLES, 0, 3)
		}

		const frame = (now: number) => {
			if (state.last !== null) {
				state.elapsed += Math.min((now - state.last) / 1000, 0.1)
			}
			state.last = now
			const t = Math.min(Math.max((state.elapsed - delay) / duration, 0), 1)
			state.progress = easeInOutCubic(t)
			resize()
			draw(state.progress, state.elapsed)
			if (t >= 1) {
				state.done = true
				onDoneRef.current?.()
				return
			}
			state.raf = requestAnimationFrame(frame)
		}

		const onResize = () => {
			resize()
			if (state.done) draw(state.progress, state.elapsed)
		}

		resize()
		draw(0, 0)
		state.raf = requestAnimationFrame(frame)
		window.addEventListener('resize', onResize)

		// En dev : rendu à un instant donné + taux de couverture, pour tester
		// le shader sans attendre la timeline.
		if (process.env.NODE_ENV === 'development') {
			window.__SURPRISE_REVEAL__ = {
				renderAt(progress, time = 0) {
					resize()
					draw(progress, time)
					const { width, height } = canvas
					const pixels = new Uint8Array(width * height * 4)
					gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels)
					let lit = 0
					for (let i = 3; i < pixels.length; i += 4) {
						if (pixels[i] > 24) lit++
					}
					return { width, height, coverage: lit / (width * height) }
				},
			}
		}

		return () => {
			cancelAnimationFrame(state.raf)
			window.removeEventListener('resize', onResize)
			if (process.env.NODE_ENV === 'development') {
				delete window.__SURPRISE_REVEAL__
			}
			gl.deleteTexture(texture)
			gl.deleteBuffer(buffer)
			gl.deleteProgram(program)
			// Pas de loseContext() : le canvas garde le même contexte d'un montage
			// à l'autre (mode strict), il serait perdu pour le suivant.
		}
	}, [image, fit, delay, duration])

	const [imageWidth, imageHeight] = imageSize(image)

	return (
		<div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: `${imageWidth} / ${imageHeight}` }}>
			{fallback ? (
				// biome-ignore lint/performance/noImgElement: repli sans WebGL, image blob locale
				<img
					src={imageUrl}
					alt={''}
					className={`absolute inset-0 h-full w-full ${fit === 'contain' ? 'object-contain' : 'object-cover'} opacity-100 transition-opacity duration-1000 ease-in-out starting:opacity-0`}
				/>
			) : (
				<canvas ref={canvasRef} className={'absolute inset-0 h-full w-full'} />
			)}
		</div>
	)
}
