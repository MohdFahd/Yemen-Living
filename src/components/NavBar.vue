<template>
  <div>
    <div
      class="flex justify-between items-center mt-5 max-md:hidden container mx-auto px-10"
      ref="container"
    >
      <div ref="logo">
        <Logo logo="header" />
      </div>
      <div ref="navLinks">
        <NavLinks />
      </div>
      <div ref="button">
        <Button />
      </div>
    </div>
    <div class="container mx-auto px-5 flex justify-between mt-5 md:hidden">
      <Logo logo="phone" />
      <icon name="menu" />
    </div>
  </div>
</template>

<script setup>
import Logo from "./logo.vue";
import icon from "./icon.vue";
import NavLinks from "./NavLinks.vue";
import Button from "./Button.vue";
import { gsap } from "gsap";
import { onMounted, ref } from "vue";

const tl = gsap.timeline();

const container = ref(null);
const logo = ref(null);
const navLinks = ref(null);
const button = ref(null);

onMounted(() => {
  tl.from(logo.value, { x: 100, opacity: 0, duration: 1 })
    .from(navLinks.value, { x: 100, opacity: 0, duration: 1 }, "-=0.5")
    .from(button.value, { x: 100, opacity: 0, duration: 1 }, "-=0.5");
});
</script>
