<script setup lang="ts">

</script>

<template>
    <div class="fade-in-from-top">
        <div class=" relative max-w-sm mx-auto overflow-hidden rounded-lg mt-3 font-mono hover:cursor-pointer">
            <a href="https://github.com/fwthsskordas/e-Shop" target="_blank">
                <img class=" w-full h-32 object-cover hover:scale-x-150 hover:scale-y-150 transition-transform duration-300"
                    src="../assets/4cef2e1b153ad24e27c5ed956f31d749.jpg" alt="Project image">
                <svg width="20" style="position: absolute; top: 0; right: 0;" height="20" class="mr-2 mt-2"
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" fill="white">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
                <div class="wrapper bg-white opacity-100 flex flex-col p-2 hover:opacity-100 gap-1">
                    <div>
                        <p class="opacity-0">1</p>
                    </div>
                    <div class="font-bold text-lg text-gray-700">
                        Project Overview:
                    </div>
                    <div class=" uppercase tracking-wide text-xs text-gray-500">
                        Vue.js e-shop with Tailwind, Typescript, Nuxt, and pages for dynamic online experience.
                    </div>
                    <div class="text-sm text-gray-400">
                        Start date: 4 / 10 / 2023
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>


<style scoped>
@keyframes fadeInFromTop {
    0% {
        opacity: 0;
        transform: translateY(-30px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.fade-in-from-top {
    animation: fadeInFromTop 1s ease-in-out;
}
</style>