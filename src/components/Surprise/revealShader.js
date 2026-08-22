// Shader de révélation : une tache d'encre qui grandit depuis le centre et
// laisse voir l'image à travers le noir. Porté depuis
// https://www.shadertoy.com/view/lssBRM (bruit simplex 3D : XsX3zB).
//
// Uniforms :
//   uResolution  taille du canvas en pixels
//   uTime        secondes écoulées (anime le bord de la tache)
//   uProgress    0 → 1, croissance de la tache (1 = page entièrement révélée)
//   uImage       l'image à révéler
//   uImageScale  facteur UV pour l'ajustement cover/contain

export const VERTEX_SHADER = /* glsl */ `
attribute vec2 aPosition;
void main() {
	gl_Position = vec4(aPosition, 0.0, 1.0);
}
`

export const FRAGMENT_SHADER = /* glsl */ `
precision highp float;

uniform vec2 uResolution;
uniform float uTime;
uniform float uProgress;
uniform sampler2D uImage;
uniform vec2 uImageScale;

const float F3 = 0.3333333;
const float G3 = 0.1666667;
const float PI = 3.1415926534;

vec3 random3(vec3 c) {
	float j = 4096.0 * sin(dot(c, vec3(17.0, 59.4, 15.0)));
	vec3 r;
	r.z = fract(512.0 * j);
	j *= .125;
	r.x = fract(512.0 * j);
	j *= .125;
	r.y = fract(512.0 * j);
	return r - 0.5;
}

float simplex3d(vec3 p) {
	vec3 s = floor(p + dot(p, vec3(F3)));
	vec3 x = p - s + dot(s, vec3(G3));

	vec3 e = step(vec3(0.0), x - x.yzx);
	vec3 i1 = e * (1.0 - e.zxy);
	vec3 i2 = 1.0 - e.zxy * (1.0 - e);

	vec3 x1 = x - i1 + G3;
	vec3 x2 = x - i2 + 2.0 * G3;
	vec3 x3 = x - 1.0 + 3.0 * G3;

	vec4 w, d;
	w.x = dot(x, x);
	w.y = dot(x1, x1);
	w.z = dot(x2, x2);
	w.w = dot(x3, x3);
	w = max(0.6 - w, 0.0);

	d.x = dot(random3(s), x);
	d.y = dot(random3(s + i1), x1);
	d.z = dot(random3(s + i2), x2);
	d.w = dot(random3(s + 1.0), x3);

	w *= w;
	w *= w;
	d *= w;
	return dot(d, vec4(52.0));
}

float fbm(vec3 p) {
	float f = 0.0;
	float frequency = 1.0;
	float amplitude = 0.5;
	for (int i = 0; i < 4; i++) {
		f += simplex3d(p * frequency) * amplitude;
		amplitude *= 0.5;
		frequency *= 2.0 + float(i) / 100.0;
	}
	return min(f, 1.0);
}

float random(in vec2 st) {
	return fract(sin(dot(st.xy, vec2(12.9798, 78.323))) * 43858.5563313);
}

// Coordonnées polaires : angle déroulé sur la largeur, rayon normalisé
// (0 au centre, 1 dans les coins) pour que la couverture finale ne dépende
// pas du format de l'écran.
vec2 rectToPolar(vec2 p, vec2 ms) {
	p -= ms / 2.0;
	float r = length(p) / length(ms / 2.0);
	float a = ((atan(p.y, p.x) / PI) * 0.5 + 0.5) * ms.x;
	return vec2(a, r);
}

// Un segment comme masque, 'f' est l'adoucissement des bords.
float line(float v, float from, float to, float f) {
	float d = max(from - v, v - to);
	return 1.0 - smoothstep(0.0, f, d);
}

float effect(vec2 p, float o) {
	p *= 2.0;
	float f1 = simplex3d(vec3(p * vec2(1.0, 5.0), uTime * 0.05)) * 0.5 + 0.5;
	float e = fbm(vec3(p * vec2(15.0, 1.0) + vec2(f1 * 0.85, o), uTime * .005));
	e = abs(e) * sqrt(p.y / 5.0);
	float c2 = simplex3d(vec3(p * vec2(6.0, 2.0), uTime * 0.05));
	c2 = (c2 * 0.5) + 0.5;
	c2 *= 0.5;
	e += c2;
	return e * 0.5;
}

// La tache : un rayon bruité qui grandit avec uProgress.
float sw(vec2 p, vec2 ms) {
	p = rectToPolar(p, ms);
	p.x = mod(p.x + 0.5, ms.x);

	// Masque de la couture angulaire, pour fondre deux bruits décalés
	const float b = 0.5;
	const float d = 0.04;
	float seem = line(p.x, -1.0, d, b) + line(p.x, ms.x - d, ms.x + 1.0, b);
	seem = min(seem, 1.0);

	float s1 = effect(p, 0.0);
	p.x = mod(p.x + 0.6, ms.x);
	float s2 = effect(p, -1020.0);
	float s = mix(s1, s2, seem);

	// Croissance organique (perc), puis une poussée finale (push) qui garantit
	// que les coins sont couverts quand uProgress atteint 1. Réglages à l'œil :
	// le facteur de perc étale la montée, l'exposant de push retarde la fin.
	float perc = uProgress * 1.2;
	float push = pow(uProgress, 6.0) * 3.0;
	float m = line(p.y, -0.1, perc * 0.25 + s * perc + push, 0.2);

	// La tache naît du noir : fondu sur le tout début de la progression
	float birth = smoothstep(0.0, 0.08, uProgress);
	return smoothstep(0.31, 0.6, m) * birth;
}

void main() {
	vec2 p = gl_FragCoord.xy / uResolution.yy;
	vec2 ms = vec2(uResolution.x / uResolution.y, 1.0);
	float s = sw(p, ms);

	// L'image, ajustée (cover/contain) et centrée ; noir hors de l'image
	// (y inversé : les textures sont téléversées ligne du haut en premier)
	vec2 uv = gl_FragCoord.xy / uResolution;
	vec2 iuv = 0.5 + (uv - 0.5) * uImageScale;
	iuv.y = 1.0 - iuv.y;
	float inside = step(0.0, iuv.x) * step(iuv.x, 1.0) * step(0.0, iuv.y) * step(iuv.y, 1.0);
	vec3 img = texture2D(uImage, iuv).rgb * inside;

	vec3 col = mix(vec3(0.0), img, s);

	// Un léger grain vivant dans le noir
	float grain = random(p * 4.0 + fract(uTime * 0.37));
	col += (1.0 - s) * grain * 0.035;

	gl_FragColor = vec4(col, 1.0);
}
`
