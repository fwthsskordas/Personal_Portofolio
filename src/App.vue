<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Home from './views/Home.vue';

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");
})
</script>

<template>
  <div class="bg-slate-800 h-screen w-screen overflow-hidden">
    <Navbar />
    <RouterView />
    <div class="loader"></div>
  </div>

</template>

<style scoped>

.loader{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(65, 75, 110);
  
  transition: opacity 0.75s, visibility 0.75s;
}

.loader-hidden {
  opacity: 0;
  visibility: hidden;
}

.loader::after {
  content: "";
  width: 75px;
  height: 75px;
  border: 15px solid #dddddd;
  border-top-color: #ea580c;
  border-radius: 50%;
  animation: loading 0.5s ease infinite;
}

@keyframes loading{
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
}
</style>
