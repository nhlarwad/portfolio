<script setup>
import blogs from "../data/blogs.json";
import FooterViewVue from "./FooterView.vue";
import { RouterLink } from "vue-router";
import ProfileView from "./ProfileView.vue";
</script>

<template>
  <div class="p-4">
    <div class="">
      <h1 class="text-2xl">Projects</h1>
      <p class="text-gray-500">Let's work together on your next amazing website.</p>
    </div>
  </div>

  <div v-for="blog in blogs" :key="blog.id" class="">
    <div class="pl-8 my-6 border rounded-md p-4 pb-10 pt-3">
      <i class="fas fa-pencil-alt text-3xl text-gray-600 mb-4"></i>

      <p class="text-2xl">{{ blog.title }}</p>
      <p class="text-sm text-gray-600">{{ blog.text }}</p>
      <div class="flex justify-center">
        <router-link
          :to="`/blog/${blog.id}`"
          class="text-gray-500 flex p-4 border bg-gray-100 rounded-lg my-2 py-1 px-4"
          >{{ blog.buttonText }}</router-link
        >
      </div>
    </div>

    <!-- <div class="mx-2 pt-20">
      <router-link
        :to="`/blog/${blog.id}`"
        class="text-3xl underline my-2 text-gray-800"
        >{{ blog.title }}</router-link
      >
      <div class="pt-2">
        <a href="" class="text-sm my-2">{{ blog.text }}</a>
      </div>
      <div class="flex justify-center py-3">
        <router-link :to="`/blog/${blog.id}`">{{
          blog.buttonText
        }}</router-link>
      </div>
    </div> -->

    <!-- <div><img class="" :src="blog.img" /></div> -->
  </div>

  <div><FooterViewVue /></div>
</template>

<style></style>
