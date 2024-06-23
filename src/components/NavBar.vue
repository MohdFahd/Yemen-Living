<template>
  <div>
    <div
      class="flex justify-between items-center mt-5 max-md:hidden container mx-auto px-10"
      ref="container"
    >
      <a ref="logo" href="/Yemen-Living/">
        <Logo logo="header" />
      </a>
      <div ref="navLinks">
        <NavLinks />
      </div>
      <div ref="button">
        <Button />
      </div>
    </div>
    <div
      class="container mx-auto px-5 flex justify-between mt-5 md:hidden relative"
    >
      <Logo logo="phone" />
      <icon name="menu" @click="menu = true" />
      <!-- <div class="absolute bottom-0 w-full">hithere</div> -->
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

const menu = ref(false);
</script>
<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter {
  transform: translateX(100%);
  opacity: 0;
}

.slide-fade-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-fade-leave {
  transform: translateX(0);
  opacity: 1;
}

.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
