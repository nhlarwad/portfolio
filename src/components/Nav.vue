<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
const showProfile = ref(true);
</script>

<template>
  <body class="bg-white pt-16 container p-4 text-base md:text-lg lg:text-xl shadow-md">
    <nav
      class="container mx-auto flex items-center justify-between flex-col space-y-2 mb-4 md:flex-row md:space-y-0 md:space-x-6 md:mb-0"
    >
      <div class="flex items-center space-x-4">
        <div class="space-x-4 w-12 h-12 rounded-full hidden md:block md:mb-0">
          <a href="">
            <img
              src="https://framerusercontent.com/images/gYDT9wUC3mA2KHw7VbaVkbE3yGg.jpg?scale-down-to=512"
            />
          </a>
        </div>
        <div>
          <h1 class="text-xl font-semibold">Nial Ariful</h1>
          <p class="text-sm text-gray-800">Software Engineer</p>
        </div>
        <!-- <div v-if="showProfile" class="absolute top-40 left-1/2 transform -translate-x-1/2 w-80 h-auto z-50 bg-gray-100 shadow-lg rounded-lg p-6">
          <div class="flex items-center space-x-4 justify-between py-4">
            <div class="flex space-x-4 w-12 h-12 rounded-full">
              <img
                src="https://framerusercontent.com/images/gYDT9wUC3mA2KHw7VbaVkbE3yGg.jpg?scale-down-to=512"
              />
            </div>

            <div class="border rounded-full w-8 h-8">
              <h1></h1>
              <button @click="showProfile = true">X</button>
            </div>
          </div>
          <div class="pt-10">
            <p class="text-2xl text-gray-800">
              👋 Nice to see you here, I'm Nial Ariful.
            </p>
          </div>
        </div> -->
      </div>

      <div class="flex space-x-4">
        <RouterLink class="text-gray-800" to="/">Home</RouterLink>
        <RouterLink class="text-gray-800" to="/about">Blog</RouterLink>
        <RouterLink class="text-gray-800" to="/project">Project</RouterLink>
      </div>

      <div class="flex space-x-4">
        <div class="h-6 border-l border-gray-600 hidden md:block"></div>
        <a href="#"><i class="fab fa-linkedin text-gray-800"></i></a>
        <a href="#"><i class="fab fa-github text-gray-800"></i></a>
        <a href="#"><i class="fab fa-dribbble text-gray-800"></i></a>
      </div>
    </nav>
  </body>
</template>

<style scoped></style>
