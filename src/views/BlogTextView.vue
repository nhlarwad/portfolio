<script setup>
import { useRoute } from "vue-router";
import blogs from "../data/blogs.json";

const route = useRoute();

const blog = blogs.find((blog) => blog.id === route.params.id);
</script>

<template>
  <div class="my-4">
    <div class="">
      <img :src="blog.img" alt="blog image" class="min-w-90" />
    </div>
    <div class="p-6">
      <h1>{{ blog.title }}</h1>
      <p>{{ blog.text }}</p>
      <p class="">{{ blog.fullText }}</p>
    </div>
    <div>
      <FooterViewVue />
    </div>
  </div>
  <div class="p-4 text-base md:text-lg lg:text-xl">
    <div class="">
      <div class="">
        <p class="text-2xl text-gray-800">Tools Used</p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-3 gap-10 my-4 p-6">
      <div class="flex items-center">
        <img
          class="w-10 h-10"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        />
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-3 gap-10 my-4 p-6">
      <div class="flex items-center">
        <img
          class="w-10 h-10"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
