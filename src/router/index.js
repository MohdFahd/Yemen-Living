// src/router.js

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import support from "../views/support.vue";
import rights from "../views/rights.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/support", name: "support", component: support },
  { path: "/rights", name: "rights", component: rights },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
