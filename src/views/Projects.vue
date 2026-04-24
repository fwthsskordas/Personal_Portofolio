<script setup>
import {ref} from 'vue'
import ProjectCardEshop from '../components/ProjectCardEshop.vue'

const projects = [
  {
    title: 'Vue.js e-Shop',
    description: 'Vue.js e-shop with Tailwind, TypeScript, Nuxt, and pages for dynamic online experience.',
    date: '4 / 10 / 2023',
    image: new URL('../assets/4cef2e1b153ad24e27c5ed956f31d749.jpg', import.meta.url).href,
    github: 'https://github.com/fwthsskordas/e-Shop',
    tags: ['Vue.js', 'Nuxt', 'Tailwind', 'TypeScript'],
  },
  {
    title: 'Messy e-Shop',
    description: 'Vue.js e-shop with Nuxt, and pages for dynamic online experience.',
    date: '1 / 8 / 2025',
    image: new URL('../assets/4cef2e1b153ad24e27c5ed956f31d749.jpg', import.meta.url).href,
    github: 'https://github.com/fwthsskordas/MessyShop',
    tags: ['Vue.js', 'Nuxt', 'TypeScript'],
  },
  {
    title: 'Task Manager',
    description: 'Task Manager app made with javascript',
    date: '4 / 4 / 2024',
    image: new URL('../assets/4cef2e1b153ad24e27c5ed956f31d749.jpg', import.meta.url).href,
    github: 'https://github.com/fwthsskordas/Task_Manager',
    tags: ['Javascript', 'HTML', 'CSS'],
  },
]
</script>

<template>
  <section class="projects-section">
    <div class="section-header">
      <p class="section-label">// my work</p>
      <h2 class="section-title">Projects</h2>
      <div class="section-line"></div>
      <p class="section-count">{{ projects.length }} projects</p>
    </div>

    <div class="grid">
      <ProjectCardEshop
          v-for="(project, i) in projects"
          :key="project.title"
          v-bind="project"
          :style="`--i: ${i}`"
      />
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  min-height: 100vh;
  background: #0d1117;
  padding: 120px 5vw 80px;
  font-family: 'Courier New', monospace;
}

.section-header {
  margin-bottom: 48px;
}

.section-label {
  font-size: 13px;
  color: #1D9E75;
  letter-spacing: 0.1em;
  margin-bottom: 8px;
}

.section-title {
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  font-weight: 500;
  color: #e8edf3;
  margin-bottom: 12px;
}

.section-line {
  width: 40px;
  height: 1px;
  background: #1D9E75;
  opacity: 0.5;
  margin-bottom: 12px;
}

.section-count {
  font-size: 12px;
  color: rgba(122, 134, 148, 0.5);
  letter-spacing: 0.08em;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>