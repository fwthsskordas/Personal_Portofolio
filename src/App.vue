<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Home from './views/Home.vue';


</script>

<template>
  <div class="bg-slate-800 h-screen w-screen">
    <Navbar />
    <RouterView />
  </div>
</template>

<style scoped>

</style>
