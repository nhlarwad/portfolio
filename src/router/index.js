import { createRouter, createWebHistory } from "vue-router";
import BlogTextView from "../views/BlogTextView.vue";
import BlogView from "../views/BlogView.vue";
import HomeView from "../views/HomeView.vue";
import ProfileView from "../views/ProfileView.vue";
import ProjectView from "../views/ProjectView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
  },
  {
    path: "/project",
    name: "project",
    component: ProjectView,
  },
  {
    path: "/blog/:id",
    name: "blog",
    component: BlogTextView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
