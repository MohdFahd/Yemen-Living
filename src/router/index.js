// src/router.js

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import support from "../views/support.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/support", name: "support", component: support },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
