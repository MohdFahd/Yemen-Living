<script setup>
import { onMounted, ref, nextTick } from "vue";
import gsap from "gsap";
import HomeView from "./views/HomeView.vue";
import NavBar from "./components/NavBar.vue";

const isLoading = ref(true);
</script>

<template>
  <router-view />
</template>
<style scoped>
span {
  overflow: hidden;
  display: block;
}
</style>
