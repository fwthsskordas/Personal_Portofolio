<template>
  <div class="flex justify-center items-center font-mono h-5/6 w-full">
    <div
      class="lg:w-2/4 flex-col space-y-4 md:w-2/4 sm:w-2/4 text-white ls:w-4/6"
    >
      <div class="fade-In">
        <h1 class="text-lg text-teal-500 ml-1">Hi, my name is</h1>
      </div>
      <div class="fade-in-from-right">
        <h2 class="lg:text-5xl ls:text-3xl sm:text-3xl">Fotis Skordas,</h2>
      </div>
      <div class="fade-in-from-left">
        <h3 class="text-1xl opacity-60 ml-1">
          I'm a dedicated 25-year-old professional, proficient in the realms of
          3D design and front-end development. Merging artistic vision with
          technical expertise. With a commitment to
          excellence, I bring digital concepts to life, ensuring a seamless
          blend of creativity and functionality.
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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
