<template>
  <div class="bg-slate-800 text-white py-3 px-6 shadow-xl font-mono">
    <nav class="container px-2 py-4 mx-auto md:flex md:justify-between sm:flex sm:justify-between sm:mx-auto">
      <div class="flex items-center justify-between">
        <!-- <span class="font-mono tracking-wider md:text-lg ls:text-sm">Fotis Skordas</span> -->
        <div class="flex flex-row justify-center items-center gap-3 font-mono">
          <svg class="flex items-center justify-center h-4 w-4 bg-green-400 rounded-full text-white" fill="none"
            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          </svg>
          <span>Open to work</span>
        </div>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="md:hidden">
          <button type="button"
            class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400 ls:float-right">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
              </path>
            </svg>
          </button>
        </div>
      </div>
      <ul :class="showMenu ? 'flex ' : 'hidden'" class="flex-col
          mt-8
          space-y-2
          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
          ">
        <li v-for="link in Links">
          <a :href="link.link" class="hover:cursor-pointer ls:text-sm hover:text-orange-600 ">
            {{ link.name }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
let showMenu = ref(false);

let Links = [

  { name: "01.Home", link: "/" },
  //   { name: "02.About", link: "/about" },
  { name: "02.Projects", link: "/projects" },
  //   { name: "04.Skills", link: "/skills" },
  { name: "03.Contact", link: "/contact" },
];

const toggleNav = () => (showMenu.value = !showMenu.value);
</script>

<style scoped></style>
