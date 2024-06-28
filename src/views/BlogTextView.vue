<script setup>
import { useRoute } from "vue-router";
import blogs from "../data/blogs.json";
import FooterViewVue from "./FooterView.vue";

const route = useRoute();

const blog = blogs.find((blog) => blog.id === route.params.id);
</script>

<template>
  <div class="my-2">
    <div class="">
      <img :src="blog.img" alt="blog image" class="min-w-90" />
    </div>
    <div class="">
      <h1 class="text-2xl pt-2">{{ blog.title }}</h1>
      <br />
      <p>{{ blog.text }}</p>
      <!-- <p class="">{{ blog.fullText }}</p> -->
    </div>
    <br />
    <div>
      <a href="https://github.com/nhlarwad" class="text-gray-500 hover:underline pt-8">
        Browse to Github <i class="fas fa-external-link-alt"></i
      ></a>
    </div>
    <div>
      <FooterViewVue />
    </div>
  </div>
</template>

<style scoped></style>
