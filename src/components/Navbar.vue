<script setup>
import { ref } from 'vue'

const showMenu = ref(false)

const links = [
  { number: '01', name: 'Home', link: '/' },
  { number: '02', name: 'Projects', link: '/projects' },
  { number: '03', name: 'Contact', link: '/contact' },
]
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      <span class="logo-bracket">&lt;</span>
      FS
      <span class="logo-bracket">/&gt;</span>
    </div>

    <ul class="links">
      <li v-for="link in links" :key="link.name">
        <a :href="link.link">
          <span class="num">{{ link.number }}.</span>
          {{ link.name }}
        </a>
      </li>
    </ul>

    <button class="burger" @click="showMenu = !showMenu">
      <svg v-if="!showMenu" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="5" width="16" height="1.5" rx="1" fill="#1D9E75"/>
        <rect x="6" y="9.25" width="12" height="1.5" rx="1" fill="#1D9E75"/>
        <rect x="2" y="13.5" width="16" height="1.5" rx="1" fill="#1D9E75"/>
      </svg>
      <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none">
        <line x1="4" y1="4" x2="16" y2="16" stroke="#1D9E75" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="16" y1="4" x2="4" y2="16" stroke="#1D9E75" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </button>

    <div class="mobile-menu" :class="{ open: showMenu }">
      <ul>
        <li v-for="(link, i) in links" :key="link.name" :style="`--i: ${i}`" @click="showMenu = false">
          <a :href="link.link">
            <span class="num">{{ link.number }}.</span>
            {{ link.name }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5vw;
  background: #0d1117;
  font-family: 'Courier New', monospace;
}

.logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  font-weight: 500;
  color: #e8edf3;
  letter-spacing: 0.08em;
  display: flex;
  align-items: center;
  gap: 2px;
}

.logo-bracket {
  color: #1D9E75;
  font-size: 14px;
}

.links {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0; padding: 0;
  margin-left: auto;
}

.links a {
  text-decoration: none;
  font-size: 13px;
  color: #7a8694;
  letter-spacing: 0.06em;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 4px;
}

.links a:hover {
  color: #e8edf3;
}

.links .num {
  color: #1D9E75;
  font-size: 11px;
}

.burger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  margin-left: auto;
}

.mobile-menu {
  display: none;
  position: absolute;
  top: 64px; left: 0; right: 0;
  background: #0d1117;
  border-top: 1px solid rgba(29,158,117,0.15);
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.35s ease;
}

.mobile-menu.open {
  max-height: 300px;
}

.mobile-menu ul {
  list-style: none;
  margin: 0; padding: 0.5rem 0;
}

.mobile-menu li {
  opacity: 0;
  transform: translateX(-10px);
  transition: opacity 0.3s calc(var(--i) * 0.07s), transform 0.3s calc(var(--i) * 0.07s);
}

.mobile-menu.open li {
  opacity: 1;
  transform: translateX(0);
}

.mobile-menu a {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 5vw;
  text-decoration: none;
  color: #7a8694;
  font-size: 14px;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  transition: color 0.2s, background 0.2s;
}

.mobile-menu a:hover {
  color: #e8edf3;
  background: rgba(29,158,117,0.05);
}

.mobile-menu .num {
  color: #1D9E75;
  font-size: 11px;
}

@media (max-width: 768px) {
  .links { display: none; }
  .burger { display: flex; }
  .mobile-menu { display: block; }
  .logo { position: static; transform: none; }
}
</style>