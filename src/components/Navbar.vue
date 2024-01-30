<script setup>
import { ref, onMounted, watch } from "vue";
let showMenu = ref(false);
let burgerIconShouldBeVisible = ref(true);
// const screenWidth = ref(window.innerWidth);

let Links = [

  { number: "01.", name: "Home", link: "/" },
  //   { name: "02.About", link: "/about" },
  { number: "02.", name: "Projects", link: "/projects" },
  //   { name: "04.Skills", link: "/skills" },
  { number: "03.", name: "Contact", link: "/contact" },
];

function toggleNav() {
  showMenu.value = !showMenu.value
  burgerIconShouldBeVisible = false;
}

</script>

<template>
  <nav class="bg-slate-800  text-white py-6 px-6 shadow-xl font-mono flex justify-between">
    <div class="flex flex-row justify-center items-center gap-3">
      <svg class="h-4 w-4 bg-green-400 rounded-full " stroke="currentColor" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
      </svg>
      <span>Open to work</span>
    </div>
    <div class="flex justify-between items-center space-x-4 ">
      <ul :class="showMenu ? '' : 'hidden'" class="md:flex md:flex-row md:items-center md:space-x-5">
        <li v-for="link in Links">
          <a :href="link.link" class="hover:cursor-pointer ls:text-sm hover:text-orange-600">
            <span class="text-orange-600 text-sm">{{ link.number }}</span><span class="text-base">{{ link.name }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div @click="toggleNav" class="md:hidden">
      <button type="button" class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400 ">
        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
          <path fill-rule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
          </path>
        </svg>
      </button>
    </div>
  </nav>
</template>

<style scoped></style>
