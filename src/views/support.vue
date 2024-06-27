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
          Support
        </h1></span
      >
    </div>
  </div>
  <div class="overflow-hidden relative homepage" v-if="!isLoading">
    <Navbar />
    <div
      class="absolute inset-x-0 top-96 w-full h-20 bg-pattern -translate-y-full max-md:top-0 -z-10"
    >
      <svg
        width="204"
        height="367"
        viewBox="0 0 204 367"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute max-md:w-[30%] max-md:h-[1153px] left-0 top-32 max-md:top-0"
      >
        <g clip-path="url(#clip0_232_326)">
          <path
            d="M364.661 715.995C158.657 816.372 -173.187 960.877 -148.666 678.028C-117.461 318.083 386.684 59.2193 59.1141 23.8103"
            stroke="#E1E1E1"
          />
          <path
            d="M283.884 710.249C77.8801 810.625 -253.964 955.131 -229.443 672.282C-198.238 312.337 305.906 53.4731 -21.6633 18.064"
            stroke="#E1E1E1"
          />
          <path
            d="M202.9 709.511C-3.10326 809.887 -334.948 954.393 -310.427 671.544C-279.222 311.599 224.923 52.735 -102.647 17.326"
            stroke="#E1E1E1"
          />
          <path
            d="M122.096 714.885C-83.907 815.262 -415.752 959.767 -391.23 676.918C-360.025 316.973 144.119 58.1092 -183.45 22.7001"
            stroke="#E1E1E1"
          />
          <path
            d="M42.1033 727.579C-163.9 827.956 -495.745 972.461 -471.224 689.612C-440.019 329.667 64.1259 70.8031 -263.444 35.3941"
            stroke="#E1E1E1"
          />
          <path
            d="M-36.1164 748.563C-242.12 848.939 -573.964 993.445 -549.443 710.596C-518.238 350.651 -14.0938 91.7869 -341.663 56.3779"
            stroke="#E1E1E1"
          />
          <path
            d="M-111.455 778.251C-317.459 878.628 -649.303 1023.13 -624.782 740.284C-593.577 380.339 -89.4327 121.475 -417.002 86.0661"
            stroke="#E1E1E1"
          />
        </g>
        <defs>
          <clipPath id="clip0_232_326">
            <rect width="204" height="367" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
    <section class="my-5 flex justify-center" ref="support">
      <supportComponent />
    </section>
    <div class="mt-5">
      <Footer />
    </div>
  </div>
</template>

Copy code
<script setup>
import { onMounted, ref, nextTick, onBeforeUnmount } from "vue";
import gsap from "gsap";
import Navbar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import supportComponent from "../components/supportComponent.vue";
import { useRouter } from "vue-router";

const isLoading = ref(true);
const support = ref(null);

const resetAnimation = () => {
  gsap.set(".loader-wrap-heading h1", { y: 0, skewY: 0 });
  gsap.set(".svg path", {
    attr: { d: "M0,1005S175,995,500,995s500,5,500,5V0H0Z" },
  });
  gsap.set(".loader-wrap", { y: 0, zIndex: 10, display: "flex" });
  isLoading.value = true;
};

const runAnimation = async () => {
  await nextTick(); // Ensure the DOM is fully rendered before starting animations
  const tl = gsap.timeline();
  const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
  const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
  tl.from(".loader-wrap-heading h1", {
    delay: 0.2,
    y: 200,
    skewY: 10,
  })
    .to(".loader-wrap-heading h1", {
      delay: 0.5,
      y: -200,
    })
    .to(".svg path", {
      duration: 0.8,
      attr: { d: curve },
      ease: "power1.ease",
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

<style scoped>
span {
  overflow: hidden;
  display: block;
}
</style>
