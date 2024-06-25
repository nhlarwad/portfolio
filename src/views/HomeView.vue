<script setup>
import FooterViewVue from "./FooterView.vue";
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="w-600 p-10 bg-white text-base md:text-lg lg:text-xl">
    <div class="text-3xl">
      <h1>Building Websites for 3+ Years.</h1>
      <div class="whitespace-normal text-gray-400">
        <h2>Empowering Innovation Across the Digital Landscape.</h2>
      </div>
    </div>

    <div class="text-sm text-gray-600 pt-2">
      <p>
        I'm Nihal Ariful, a seasoned Software Engineer with a decade-long journey
        sculpting digital landscapes to propel businesses worldwide. With expertise
        spanning web design and development, I thrive on creating user-centric solutions
        that seamlessly blend creativity with functionality. My forte lies in strategic
        optimization, ensuring every line of code contributes to enhanced user experiences
        and business success
      </p>
    </div>
    <div class="pt-2">
      <button
        class="bg-gray-100 text-gray-600 py-2 px-4 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        Get in Touch
      </button>
    </div>
    <hr class="border-gray-300 my-16 border-t" />

    <div class="">
      <div class="p-4">
        <i class="fas fa-lightbulb text-4xl"></i>
        <p class="">Ventures</p>
        <p class="text-gray-500">Projects I'm currently building.</p>
      </div>

      <div class="bg-gray-100 p-8 rounded-lg">
        <img
          class="w-full h-48 object-cover"
          src="https://images-platform.99static.com/GsFBsuk36Xy1f2mZeDLOxAiDAag=/999x318:2000x1319/500x500/top/smart/99designs-contests-attachments/129/129904/attachment_129904663"
        />
        <div class="flex space-x-3 pt-4">
          <i class="fas fa-desktop text-3xl"></i>
          <p class="text-lg text-gray-600">Recipe App</p>
        </div>
        <p class="text-sm text-gray-600 pb-4">
          A curated collection of elegant and practical recipes designed with care and
          passion.
        </p>
        <a href="#" class="text-gray-500 hover:underline">
          Brows to Github <i class="fas fa-external-link-alt"></i
        ></a>
      </div>
    </div>

    <div class="p-4">
      <div class="">
        <i class="fas fa-folder text-2xl text-gray-600"></i>
        <h1 class="text-2xl">Projects</h1>
        <p class="text-gray-500">Let's work together on your next amazing website.</p>
      </div>
    </div>

    <div class="pl-8 my-6 border rounded-md p-4 pt-3">
      <i class="fas fa-pencil-alt text-3xl text-gray-600 mb-4"></i>

      <p class="text-2xl">Bookg</p>
      <p class="text-sm text-gray-600">
        Need a sleek and user-friendly booking platform? Bookg is here to transform your
        reservation system into a seamless experience. From appointment scheduling to
        event reservations, Bookg offers a professionally designed interface that
        simplifies the booking process for both businesses and customers.
      </p>
      <div class="flex justify-center">
        <router-link
          class="text-gray-500 flex p-4 border bg-gray-100 rounded-lg my-2 py-1 px-4"
        >
          + More Info
        </router-link>
      </div>
    </div>

    <div class="pl-8 my-6 border rounded-md p-4 pt-3">
      <i class="fas fa-pencil-alt text-3xl text-gray-600 mb-4"></i>

      <p class="text-2xl">Tourist.oi</p>
      <p class="text-sm text-gray-600">
        Explore cities like never before with Tourist.oi. This comprehensive platform is
        designed to provide tourists with the best local experiences, from guided tours to
        hidden gems. With an intuitive design and rich content, Tourist.oi makes
        discovering new places easy and exciting. Let's collaborate to bring your travel
        platform to life!
      </p>
      <div class="flex justify-center">
        <button
          class="text-gray-500 flex p-4 border bg-gray-100 rounded-lg my-2 py-1 px-4"
        >
          + More Info
        </button>
      </div>
    </div>
    <div
      class="flex justify-center bg-gray-800 text-white py-2 px-4 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
    >
      <router-link to="/project" class="">View All</router-link>
    </div>

    <div class="p-4 text-base md:text-lg lg:text-xl">
      <div class="p-4">
        <div class="text-2xl">
          <i class="fas fa-layer-group"></i>
        </div>
        <div class="">
          <p class="text-2xl text-gray-800">Tech & Tools</p>
          <p class="text-sm text-gray-500">Some of the tools I use in my workflow.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-3 gap-10 my-4 p-6">
        <div class="flex items-center border rounded-lg">
          <img
            class="w-10 h-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          />

          <div class="text-sm font-gray-900 p-2">
            <p>BaaS platform</p>
            <p>(proficient)</p>
          </div>
        </div>

        <div class="flex items-center border rounded-lg">
          <img
            class="w-10 h-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg"
          />

          <div class="text-sm font-gray-900 p-2">
            <p>Frontend Framework</p>
            <p>(proficient)</p>
          </div>
        </div>

        <div class="flex items-center border rounded-lg">
          <img
            class="w-10 h-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
          />

          <div class="text-sm font-gray-900 p-2">
            <p>General Purpose Language</p>
            <p>(Mid Level Wizard)</p>
          </div>
        </div>

        <div class="flex items-center border rounded-lg">
          <img
            class="w-10 h-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
          />

          <div class="text-sm font-gray-900 p-2">
            <p>Frontend Framework</p>
            <p>(Mid Level Wizard)</p>
          </div>
        </div>

        <div class="flex items-center border rounded-lg">
          <img
            class="w-10 h-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
          />

          <div class="text-sm font-gray-900 p-2">
            <p>General Purpose Language</p>
            <p>(Mid Level Wizard)</p>
          </div>
        </div>

        <div class="flex items-center border rounded-lg">
          <img
            class="w-10 h-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg"
          />

          <div class="text-sm font-gray-900 p-2">
            <p>Utility First CSS Framework</p>
            <p>(proficient)</p>
          </div>
        </div>

        <div class="flex items-center border rounded-lg">
          <img
            class="w-10 h-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg"
          />

          <div class="text-sm font-gray-900 p-2">
            <p>Backend as a Service</p>
            <p>(Mild Level Wizard)</p>
          </div>
        </div>

        <div class="flex items-center border rounded-lg">
          <img
            class="w-10 h-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
          />

          <div class="text-sm font-gray-900 p-2">
            <p>UX/UI Design</p>
            <p>(proficient)</p>
          </div>
        </div>

        <div class="flex items-center border rounded-lg">
          <img
            class="w-10 h-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
          />

          <div class="text-sm font-gray-900 p-2">
            <p>Web Framework</p>
            <p>(Mid Level Wizard)</p>
          </div>
        </div>
      </div>
    </div>

    <div class="p-4">
      <i class="fas fa-hand-paper text-3xl"></i>
      <p class="text-2xl">Blogs</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      <div class="border rounded-md gap-10">
        <div class="">
          <img
            src="https://vueschool.io/_ipx/f_webp,q_100,w_1200/https://blog.vueschool.io/wp-content/uploads/2021/05/new-route-to-vue-router-scaled.gif"
            alt=""
          />
        </div>
        <div class="my-4 p-4">
          <a href="" class="text-3xl p-1 underline">The Effects of Stress on Your Body</a>
          <p class="my-2 text-gray-500 text-sm">
            Now that you've come this far, let's work together on your next website?
          </p>
        </div>
      </div>
      <div class="border rounded-md gap-10">
        <div class="">
          <img
            src="https://vueschool.io/_ipx/f_webp,q_100,w_1200/https://blog.vueschool.io/wp-content/uploads/2024/06/13.png"
            alt=""
          />
        </div>
        <div class="my-4 p-4">
          <a href="" class="text-3xl p-1 underline">The Effects of Stress on Your Body</a>
          <p class="my-2 text-gray-500 text-sm">
            Now that you've come this far, let's work together on your next website?
          </p>
        </div>
      </div>
    </div>
    <div>
      <FooterViewVue />
    </div>
  </div>
</template>

<style scoped></style>
