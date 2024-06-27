<script setup>
import { onMounted, ref, nextTick } from "vue";
import gsap from "gsap";
import Home from "../components/home.vue";
import logo from "../components/logo.vue";
import { useRouter } from "vue-router";

const isLoading = ref(true);
const runAnimation = async () => {
  await nextTick(); // Ensure the DOM is fully rendered before starting animations
  const tl = gsap.timeline();
  const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
  const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
  tl.from(".loader-wrap-heading h1", {
    y: 200,
    skewY: 10,
  })
    .to(".loader-wrap-heading h1", {
      y: -200,
    })
    .to(".svg path", {
      duration: 0.5,
      attr: { d: curve },
      ease: "power2.easeIn",
    })
    .to(".svg path", {
      duration: 0.5,
      attr: { d: flat },
      ease: "power2.easeOut",
      onComplete: () => {
        isLoading.value = false;
      },
    })
    .to(".loader-wrap", {
      y: -1500,
      duration: 0.5, // Reduce duration
    })
    .set(".loader-wrap", {
      zIndex: -1,
      display: "none",
    });
};
const resetAnimation = () => {
  gsap.set(".loader-wrap-heading h1", { y: 0, skewY: 0 });
  gsap.set(".svg path", {
    attr: { d: "M0,1005S175,995,500,995s500,5,500,5V0H0Z" },
  });
  gsap.set(".loader-wrap", { y: 0, zIndex: 10, display: "flex" });
  isLoading.value = true;
};
onMounted(() => {
  runAnimation();
});
const router = useRouter();

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    resetAnimation();
  }
  next();
});
</script>

<template>
  <div
    class="loader-wrap absolute z-30 h-screen w-full flex overflow-hidden items-center justify-center bg-transparent"
  >
    <svg
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
      class="svg fill-black absolute top-0 w-[100vw] h-[110vh] max-md:w-[200vw] max-md:ml-[-50vw]"
    >
      <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
    </svg>

    <div class="loader-wrap-heading">
      <span>
        <h1
          class="relative text-3xl z-20 uppercase flex justify-center items-center"
        >
          <logo logo="headerWhite" /></h1
      ></span>
    </div>
  </div>
  <div class="overflow-hidden relative homepage" v-if="!isLoading">
    <Home />
  </div>
</template>
<style scoped>
span {
  overflow: hidden;
  display: block;
}
</style>
