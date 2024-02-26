<template>
  <div class="flex justify-between items-center flex-row font-mono h-5/6 w-5/6 ml-14 mr-14
  xl:flex-row xl:justify-between xl:items-center xl:gap-0
  lg:flex-row lg:justify-between lg:items-center lg:gap-0
  md:flex-row md:justify-between md:items-center md:gap-0
  sm:flex-row sm:justify-between sm:items-center sm:gap-0
  ls:flex-col ls:justify-center ls:items-center ls:gap-10
  ">
    <div class="lg:w-2/4 flex-col space-y-4 md:w-2/4 sm:w-2/4 text-white ls:w-4/6">
      <div class="fade-In">
        <h1 class="text-lg text-teal-500 ml-1">Hi, my name is</h1>
      </div>
      <div class="fade-in-from-right">
        <h2 class="lg:text-5xl ls:text-3xl sm:text-3xl">Fotis Skordas,</h2>
      </div>
      <div class="fade-in-from-left">
        <h3 class="text-1xl opacity-60 ml-1 sm:text-sm ls:text-sm">
          I'm a dedicated 25-year-old professional, proficient in the realms of
          3D design and front-end development. Merging artistic vision with
          technical expertise. With a commitment to
          excellence, I bring digital concepts to life, ensuring a seamless
          blend of creativity and functionality.
        </h3>
      </div>
    </div>
    <div class="flex items-center flex-col justify-between border border-solid border-teal-500 shadow-sm rounded-md p-2
      xl:flex-col xl:gap-4 xl:mr-0 ml-9 
      lg:flex-col lg:gap-4 lg:mr-0 
      md:flex-col md:gap-4 md:mr-0 
      sm:flex-col sm:gap-4 sm:mr-0 
      ls:flex-row ls:gap-6 ls:mr-48 ls:mt-6 ls:text-justify">
      <a href="https://github.com/fwthsskordas" target="_blank"><svg width="32"
          class="hover:fill-orange-600 hover:cursor-pointer" height="32" preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 512 512" fill="white">
          <path
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
        </svg></a>
      <a href="https://www.instagram.com/snap_3ds/" target="_blank">
        <svg class="ml-1 hover:fill-orange-600 hover:cursor-pointer" width="32" height="32"
          preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" fill="white">
          <path
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg></a>
      <a href="https://www.linkedin.com/in/%CF%86%CF%8E%CF%84%CE%B7%CF%82-%CF%83%CE%BA%CE%BF%CF%81%CE%B4%CE%AC%CF%82-99b119226/"
        target="_blank">
        <svg class="ml-1 hover:fill-orange-600 hover:cursor-pointer" width="25" height="25"
          preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" fill="white">
          <path
            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
        </svg></a>
    </div>
  </div>
  <div>
    <!-- <SkillHolder/> -->
  </div>
</template>

<script setup>
import SkillHolder from '../components/SkillHolder.vue';
</script>

<style scoped>
@keyframes fadeInFromRight {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fade-in-from-right {
  animation: fadeInFromRight 1s ease-in-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }

}

.fade-In {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeInFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fade-in-from-left {
  animation: fadeInFromLeft 1s ease-in-out;
}
</style>
