<script setup>
import { onMounted, ref, nextTick } from "vue";
import gsap from "gsap";
import Home from "../components/home.vue";

const isLoading = ref(true);

onMounted(async () => {
  await nextTick(); // Ensure the DOM is fully rendered before starting animations
  const tl = gsap.timeline();
  const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
  const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
  tl.from(".loader-wrap-heading h1", {
    delay: 0.5,
    y: 200,
    skewY: 10,
  })
    .to(".loader-wrap-heading h1", {
      delay: 1.5,
      y: -200,
    })
    .to(".svg path", {
      duration: 0.8,
      attr: { d: curve },
      ease: "power2.easeIn",
    })
    .to(".svg path", {
      duration: 0.8,
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
});
</script>

<template>
  <div
    class="loader-wrap absolute z-30 h-screen w-full flex overflow-hidden items-center justify-center bg-transparent"
  >
    <svg
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
      class="svg fill-black opacity-95 absolute top-0 w-[100vw] h-[110vh] max-md:w-[200vw] max-md:ml-[-50vw]"
    >
      <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
    </svg>

    <div class="loader-wrap-heading">
      <span>
        <h1
          class="relative text-3xl z-20 text-[#e0e0e0] uppercase flex justify-center items-center"
        >
          <span class="absolute top-0 right-0 text-xs">&copy;</span>
          <svg
            width="44"
            height="66"
            viewBox="0 0 44 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.43189 21.6228L21.8268 0H0V17.9537V46.1965V65.6648H21.8268L1.43189 45.0083V21.6228Z"
              fill="white"
            />
            <path d="M22.1729 0L43.9996 23.3236V0H22.1729Z" fill="white" />
            <path
              d="M43.6532 65.6649V43.7766L22.1729 65.6649H43.6532Z"
              fill="white"
            />
            <path
              d="M22.2615 24.2627L12.9658 34.049L22.2615 43.8352L31.5572 34.049L22.2615 24.2627Z"
              fill="white"
            />
            div
          </svg>
          <div class="text-center mx-4 overflow-hidden">
            Yemen <br />
            Living
          </div>
        </h1></span
      >
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
