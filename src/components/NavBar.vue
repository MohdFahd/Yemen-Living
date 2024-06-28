<template>
  <div class="">
    <div
      class="container mx-auto px-10 flex justify-between items-center mt-5 max-md:hidden"
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
      <div>
        <label>
          <div
            class="w-9 h-10 cursor-pointer flex flex-col items-center justify-center"
          >
            <input
              class="hidden"
              v-model="menu"
              :class="{ peer: menu }"
              @click="menu = !menu"
              type="checkbox"
            />
            <div
              class="w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem]"
              :class="{
                'peer-checked:rotate-[-45deg]': menu,
              }"
            ></div>
            <div
              class="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center peer-checked:hidden"
            ></div>
            <div
              class="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem]"
              :class="{
                ' peer-checked:rotate-[45deg]': menu,
              }"
            ></div>
          </div>
        </label>
      </div>
    </div>
    <transition-group name="slide" mode="out-in">
      <div class="mt-5 md:hidden" v-if="menu">
        <NavLinks @close-menu="menu = false" />
      </div>
    </transition-group>
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
@keyframes slide-in-top {
  0% {
    transform: translateY(-100px);

    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes slide-out-down {
  0% {
    transform: translateY(0px);
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    transform: translateY(-100px);
    opacity: 0;
  }
}

.slide-enter-active {
  /* transition: all 0.4s ease; */
  animation: slide-in-top 0.4s both;
  /* position: absolute; */
}

.slide-leave-active {
  /* transition: all 0.4s ease; */
  animation: slide-out-down 0.2s both;
  position: absolute;
  left: 40%;
}
.slide-move {
  transition: all 0.4s ease;
}
</style>
