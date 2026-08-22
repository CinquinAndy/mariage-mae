'use client'
import { useEffect, useRef, useState } from 'react'
import {
	FRAGMENT_SHADER,
	VERTEX_SHADER,
} from '@/components/Surprise/revealShader'

const easeInOutCubic = t =>
	t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

function compileShader(gl, type, source) {
	const shader = gl.createShader(type)
	gl.shaderSource(shader, source)
	gl.compileShader(shader)
	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		const log = gl.getShaderInfoLog(shader)
		gl.deleteShader(shader)
		throw new Error(`Shader : ${log}`)
	}
	return shader
}

function createProgram(gl) {
	const program = gl.createProgram()
	gl.attachShader(program, compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER))
	gl.attachShader(
		program,
		compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER)
	)
	gl.linkProgram(program)
	if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
		throw new Error(`Programme : ${gl.getProgramInfoLog(program)}`)
	}
	return program
}

// Facteur UV pour caler l'image dans le canvas, centrée.
function imageScale(canvasAspect, imageAspect, fit) {
	const wider = canvasAspect > imageAspect
	if (fit === 'contain') {
		return wider
			? [canvasAspect / imageAspect, 1]
			: [1, imageAspect / canvasAspect]
	}
	return wider
		? [1, imageAspect / canvasAspect]
		: [canvasAspect / imageAspect, 1]
}

/**
 * Phase 2 de la surprise : le shader de révélation dessine une tache d'encre
 * qui grandit depuis le centre et laisse voir `image` à travers le noir.
 * `image` est un ImageBitmap (ou un <img> chargé) préparé par le loader ;
 * `imageUrl` sert au repli sans WebGL.
 * La timeline tourne sur le temps réel des frames (onglet masqué = pause).
 */
export function SurpriseRevealComponent({
	image,
	imageUrl,
	fit = 'cover',
	delay = 0.8,
	duration = 8,
	onDone,
}) {
	const canvasRef = useRef(null)
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
			alpha: false,
			antialias: false,
			depth: false,
			stencil: false,
		})
		if (!gl) {
			fallBackToImage()
			return
		}

		let program, texture, buffer
		try {
			program = createProgram(gl)
		} catch (error) {
			console.error(error)
			fallBackToImage()
			return
		}
		gl.useProgram(program)

		// Un triangle qui couvre tout l'écran
		buffer = gl.createBuffer()
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
		gl.bufferData(
			gl.ARRAY_BUFFER,
			new Float32Array([-1, -1, 3, -1, -1, 3]),
			gl.STATIC_DRAW
		)
		const aPosition = gl.getAttribLocation(program, 'aPosition')
		gl.enableVertexAttribArray(aPosition)
		gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0)

		// L'image en texture (taille libre : clamp + linéaire, pas de mipmap)
		texture = gl.createTexture()
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

		const imageWidth = image.naturalWidth || image.width
		const imageHeight = image.naturalHeight || image.height
		const imageAspect = imageWidth / imageHeight
		const state = { elapsed: 0, progress: 0, last: null, raf: 0, done: false }

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

		const draw = (progress, time) => {
			gl.uniform1f(u.progress, progress)
			gl.uniform1f(u.time, time)
			gl.drawArrays(gl.TRIANGLES, 0, 3)
		}

		const frame = now => {
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
					for (let i = 0; i < pixels.length; i += 4) {
						if (Math.max(pixels[i], pixels[i + 1], pixels[i + 2]) > 24) lit++
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

	if (fallback) {
		// Sans WebGL : l'image, simplement
		return (
			// eslint-disable-next-line @next/next/no-img-element
			<img
				src={imageUrl}
				alt={''}
				className={`absolute inset-0 h-full w-full ${
					fit === 'contain' ? 'object-contain' : 'object-cover'
				} bg-black`}
			/>
		)
	}

	return (
		<canvas
			ref={canvasRef}
			className={
				'absolute inset-0 h-full w-full opacity-100 transition-opacity duration-1000 ease-in-out starting:opacity-0'
			}
		/>
	)
}
