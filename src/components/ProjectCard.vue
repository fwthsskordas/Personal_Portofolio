<script setup lang="ts">
defineProps<{
  title: string
  description: string
  date: string
  image: string
  github: string
  tags: string[]
}>()
</script>

<template>
  <article class="card">
    <a :href="github" target="_blank" rel="noopener noreferrer" class="card-link">
      <div class="image-wrap">
        <img :src="image" :alt="title" class="card-img" />
        <div class="image-overlay">
          <svg width="18" height="18" viewBox="0 0 512 512" fill="white">
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"/>
          </svg>
          <span>View on GitHub</span>
        </div>
      </div>
      <div class="card-body">
        <h3 class="card-title">{{ title }}</h3>
        <p class="card-desc">{{ description }}</p>
        <div class="card-tags">
          <span class="tag" v-for="tag in tags" :key="tag">{{ tag }}</span>
        </div>
        <p class="card-date">// {{ date }}</p>
      </div>
    </a>
  </article>
</template>

<style scoped>
.card {
  background: #111820;
  border: 1px solid rgba(29,158,117,0.15);
  border-radius: 10px;
  overflow: hidden;
  font-family: 'Courier New', monospace;
  transition: border-color 0.3s, transform 0.3s;
  animation: fadeUp 0.6s ease both;
}

.card:hover {
  border-color: rgba(29,158,117,0.5);
  transform: translateY(-4px);
}

.card-link {
  text-decoration: none;
  display: flex;
  flex-direction: column;
}

.image-wrap {
  position: relative;
  width: 100%;
  height: 160px;
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  display: block;
}

.card:hover .card-img {
  transform: scale(1.06);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: rgba(13,17,23,0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  opacity: 0;
  transition: opacity 0.3s;
  color: white;
  font-size: 13px;
  letter-spacing: 0.06em;
}

.card:hover .image-overlay {
  opacity: 1;
}

.card-body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card-title {
  font-size: 15px;
  font-weight: 500;
  color: #e8edf3;
  letter-spacing: 0.04em;
}

.card-desc {
  font-size: 12px;
  color: #7a8694;
  line-height: 1.6;
  font-family: sans-serif;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
}

.tag {
  font-size: 11px;
  padding: 3px 10px;
  border: 1px solid rgba(29,158,117,0.3);
  color: #1D9E75;
  border-radius: 20px;
  letter-spacing: 0.04em;
}

.card-date {
  font-size: 11px;
  color: rgba(122,134,148,0.5);
  margin-top: 4px;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>