<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
import eshopImg from '../../src/assets/4cef2e1b153ad24e27c5ed956f31d749.jpg'

const projects = [
  {
    title: 'Vue.js e-Shop',
    description: 'Full e-commerce experience built with Vue.js, Nuxt, Tailwind CSS and TypeScript. Dynamic product pages, cart, and checkout flow.',
    date: '4 / 10 / 2023',
    image: eshopImg,
    github: 'https://github.com/fwthsskordas/e-Shop',
    tags: ['Vue.js', 'Nuxt', 'Tailwind', 'TypeScript'],
  },
]
</script>

<template>
  <section class="projects-section">
    <div class="section-header">
      <p class="section-label">// my work</p>
      <h2 class="section-title">Projects</h2>
      <div class="section-line"></div>
    </div>
    <div class="grid">
      <ProjectCard
          v-for="(project, i) in projects"
          :key="i"
          v-bind="project"
          :style="`animation-delay: ${i * 0.1}s`"
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
  margin-bottom: 16px;
}

.section-line {
  width: 40px;
  height: 1px;
  background: #1D9E75;
  opacity: 0.5;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 380px));
  gap: 24px;
}
</style>