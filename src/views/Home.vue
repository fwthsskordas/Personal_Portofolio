<template>
  <section class="hero">
    <div class="status">
      <span class="dot"></span>
      Open to work
    </div>

    <div class="left">
      <p class="greeting fade-up" style="--d:0.1s">Hi, my name is</p>
      <h1 class="name fade-up" style="--d:0.25s">
        Fotis Skordas<span class="cursor"></span>
      </h1>
      <p class="tagline fade-up" style="--d:0.4s">3D Designer &amp; Front-End Developer</p>
      <div class="divider fade-up" style="--d:0.5s"></div>
      <p class="bio fade-up" style="--d:0.6s">
        I'm a creative professional merging artistic vision with technical
        expertise — from interactive front-end experiences to detailed 3D design.
        I bring digital concepts to life with a commitment to both craft and functionality.
      </p>
      <div class="tags fade-up" style="--d:0.7s">
        <span class="tag" v-for="skill in skills" :key="skill">{{ skill }}</span>
      </div>
      <nav class="social fade-up" style="--d:0.85s">
        <a href="https://github.com/fwthsskordas" target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" viewBox="0 0 512 512" fill="currentColor">
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"/>
          </svg>
          GitHub
        </a>
        <a href="https://www.instagram.com/snap_3ds/" target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
          </svg>
          Instagram
        </a>
        <a href="https://www.linkedin.com/in/%CF%86%CF%8E%CF%84%CE%B7%CF%82-%CF%83%CE%BA%CE%BF%CF%81%CE%B4%CE%AC%CF%82-99b119226/" target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor">
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
          </svg>
          LinkedIn
        </a>
      </nav>
    </div>

    <div class="right fade-in" style="--d:0.5s">
      <div class="canvas-wrap">
        <canvas ref="canvasRef"></canvas>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const skills = ['Vue.js', 'Tailwind CSS', 'Three.js', 'Blender', 'Motion design', 'UI/UX']
const canvasRef = ref(null)
let animId = null

onMounted(() => {
  const canvas = canvasRef.value
  const ctx = canvas.getContext('2d')
  const W = 420, H = 420
  canvas.width = W
  canvas.height = H

  const TEAL = '#1D9E75'

  const verts = [
    [-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],
    [-1,-1, 1],[1,-1, 1],[1,1, 1],[-1,1, 1]
  ].map(v => v.map(n => n * 90))

  const edges = [
    [0,1],[1,2],[2,3],[3,0],
    [4,5],[5,6],[6,7],[7,4],
    [0,4],[1,5],[2,6],[3,7]
  ]

  let t = 0

  function draw() {
    ctx.clearRect(0, 0, W, H)

    ctx.strokeStyle = '#1a2530'
    ctx.lineWidth = 1
    for (let r = 60; r <= 200; r += 40) {
      ctx.beginPath()
      ctx.arc(W / 2, H / 2, r, 0, Math.PI * 2)
      ctx.stroke()
    }

    const rotY = t * 0.4
    const rotX = Math.sin(t * 0.2) * 0.3
    const cosX = Math.cos(rotX), sinX = Math.sin(rotX)
    const cosY = Math.cos(rotY), sinY = Math.sin(rotY)

    const projected = verts.map(([x, y, z]) => {
      const x1 = x * cosY - z * sinY
      const z1 = x * sinY + z * cosY
      const y1 = y * cosX - z1 * sinX
      const z2 = y * sinX + z1 * cosX
      const scale = 380 / (380 + z2)
      return { px: W / 2 + x1 * scale, py: H / 2 + y1 * scale, z: z2 }
    })

    edges.forEach(([a, b]) => {
      const pa = projected[a], pb = projected[b]
      const depth = (pa.z + pb.z) / 2
      const alpha = 0.15 + 0.7 * Math.max(0, Math.min(1, (depth + 100) / 200))
      ctx.beginPath()
      ctx.moveTo(pa.px, pa.py)
      ctx.lineTo(pb.px, pb.py)
      ctx.strokeStyle = `rgba(29,158,117,${alpha})`
      ctx.lineWidth = 1.5
      ctx.stroke()
    })

    projected.forEach(p => {
      const alpha = 0.3 + 0.7 * Math.max(0, Math.min(1, (p.z + 100) / 200))
      ctx.beginPath()
      ctx.arc(p.px, p.py, 4, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(29,158,117,${alpha})`
      ctx.fill()
    })

    ctx.beginPath()
    ctx.arc(W / 2, H / 2, 4, 0, Math.PI * 2)
    ctx.fillStyle = TEAL
    ctx.fill()

    t += 0.012
    animId = requestAnimationFrame(draw)
  }

  draw()
})

onUnmounted(() => {
  if (animId) cancelAnimationFrame(animId)
})
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.hero {
  background: #0d1117;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 0 5vw;
  gap: 2rem;
  font-family: 'Courier New', monospace;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #1D9E75, transparent);
}

.status {
  position: absolute;
  top: 2rem;
  right: 5vw;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #7a8694;
  letter-spacing: 0.06em;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #1D9E75;
  animation: pulse 2s ease-in-out infinite;
}

.left {
  display: flex;
  flex-direction: column;
  z-index: 1;
}

.greeting {
  font-size: 14px;
  color: #1D9E75;
  letter-spacing: 0.1em;
  margin-bottom: 12px;
}

.name {
  font-size: clamp(2.2rem, 4vw, 3.8rem);
  font-weight: 500;
  color: #e8edf3;
  line-height: 1.1;
  margin-bottom: 8px;
}

.cursor {
  display: inline-block;
  width: 3px;
  height: clamp(1.8rem, 3.2vw, 3rem);
  background: #1D9E75;
  margin-left: 6px;
  vertical-align: middle;
  animation: blink 1.1s step-end infinite;
}

.tagline {
  font-size: 14px;
  color: #1D9E75;
  letter-spacing: 0.06em;
  margin-bottom: 24px;
}

.divider {
  width: 40px;
  height: 1px;
  background: #1D9E75;
  opacity: 0.5;
  margin-bottom: 24px;
}

.bio {
  font-size: 15px;
  color: #7a8694;
  line-height: 1.8;
  max-width: 480px;
  margin-bottom: 28px;
  font-family: sans-serif;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 36px;
}

.tag {
  font-size: 12px;
  padding: 5px 14px;
  border: 0.5px solid #1D9E75;
  color: #1D9E75;
  border-radius: 20px;
  letter-spacing: 0.04em;
  transition: background 0.2s, color 0.2s;
  cursor: default;
}

.tag:hover {
  background: #1D9E75;
  color: #0d1117;
}

.social {
  display: flex;
  gap: 24px;
  align-items: center;
}

.social a {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: #7a8694;
  font-size: 13px;
  transition: color 0.2s;
  letter-spacing: 0.04em;
}

.social a:hover {
  color: #1D9E75;
}

.right {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.canvas-wrap {
  position: relative;
  width: min(420px, 42vw);
  aspect-ratio: 1;
}

.canvas-wrap canvas {
  width: 100%;
  height: 100%;
}

.badge {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  background: #131a22;
  border: 0.5px solid #1D9E75;
  color: #1D9E75;
  font-size: 11px;
  padding: 6px 16px;
  border-radius: 20px;
  letter-spacing: 0.08em;
  white-space: nowrap;
  font-family: 'Courier New', monospace;
}

.fade-up {
  opacity: 0;
  animation: fadeUp 0.6s var(--d, 0s) forwards;
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s var(--d, 0s) forwards;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(0.85); }
}

@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 6rem 2rem 3rem;
  }
  .right {
    display: none;
  }
}
</style>