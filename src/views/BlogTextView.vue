<script setup>
import { useRoute } from "vue-router";
import blogs from "../data/blogs.json";

const route = useRoute();

// const blog = blogs.find((blog) => blog.id === route.params.id);
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
</template>

<style scoped></style>
