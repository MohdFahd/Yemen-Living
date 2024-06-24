<template>
  <section id="Features" class="mt-5 bg-[#FDFDFD] cont p-10" ref="container">
    <div class="container mx-auto px-10 max-md:px-5 py-5">
      <h1 class="bold text-center text-3xl max-md:text-xl" ref="title">
        Yemen Living Features
      </h1>
      <div
        class="grid grid-cols-3 justify-between items-center mt-16 max-md:grid-cols-1 futuresContainer"
      >
        <div
          class="flex justify-between z-50 max-md:items-center text-center"
          ref="firstDiv"
        >
          <radioTap :tabs="Features" @update="handleUpdate" />
          <transition name="skew-slide-fade">
            <h3 class="bold text-lg text-center w-full md:hidden">
              {{ selectedFeature.tap }}
            </h3>
          </transition>
          <!-- <div class="max-[1023px]:hidden ">
            <ul class="bg-[#83868B] h-[33vh] w-1 rounded-lg ml-64">
              <li
                id="current-slide-indicator"
                class="bg-[#D9D9D9] rounded-xl"
                style="height: 5vh"
              ></li>
            </ul>
          </div> -->
        </div>
        <div
          class="relative flex justify-center items-center max-md:my-5 h-[500px] z-0"
          ref="secondDiv"
        >
          <div class="absolute z-0">
            <vector />
          </div>
          <transition name="slide-fade" mode="out-in">
            <img
              :src="selectedFeature.img"
              class="z-10 md:w-[60%] max-md:w-[90%]"
              alt=""
              :key="selectedFeature.img"
            />
          </transition>
        </div>

        <div
          class="text-xl bold w-full md:ml-10 max-md:text-center max-md:flex max-md:justify-center overflow-hidden z-50"
          ref="thirdDiv"
        >
          <transition name="skew-slide-fade">
            <h2
              class="w-64"
              v-if="selectedFeature.title"
              :key="selectedFeature.title"
            >
              {{ selectedFeature.title }}
            </h2>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted, ref } from "vue";
import radioTap from "../components/radioTap.vue";
import vector from "../components/svg/vector.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Features = ref([
  {
    title: "Yemeni Premium for home easy login",
    img: "./Features/ph1.webp",
    tap: "YemeniPremium",
  },
  {
    title: "Yemeni Premium for home easy for Developing",
    img: "./Features/ph2.webp",
    tap: "ForHome",
  },
  {
    title: "Yemeni Premium for login",
    img: "./Features/ph3.webp",
    tap: "EasyPayment",
  },
  {
    title: "Yemeni Premium for home Yemeni Premium ",
    img: "./Features/ph4.webp",
    tap: "OrderTracing",
  },
  {
    title: "Yemeni Premium for home easy  home easy",
    img: "./Features/ph5.webp",
    tap: "shipWorldwide",
  },
]);

const selectedFeature = ref(Features.value[0]);

const handleUpdate = (tab) => {
  const feature = Features.value.find((feature) => feature.tap === tab.tap);
  if (feature) {
    selectedFeature.value = feature;
  }
};

// Gsap Animation
gsap.registerPlugin(ScrollTrigger);
const container = ref(null);
const title = ref(null);
const firstDiv = ref(null);
const secondDiv = ref(null);
const thirdDiv = ref(null);
const tl = gsap.timeline();

onMounted(() => {
  gsap.fromTo(
    title.value,
    { y: 100, opacity: 0 },
    {
      y: 0,
      delay: 0.23,
      opacity: 1,
      duration: 1.5,
      ease: "power1.inOut",
      scrollTrigger: {
        // scroller: "cont",
        trigger: title.value,
        start: "top bottom",
        // end: "bottom",

        toggleActions: "play none none reset",
      },
    }
  );
  gsap.fromTo(
    firstDiv.value,
    { x: -100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 2.5,
      delay: 0.23,
      ease: "power1.out",
      scrollTrigger: {
        trigger: firstDiv.value,
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play none none reset",
      },
    }
  );
  gsap.fromTo(
    secondDiv.value,
    { scale: 0.5 },
    {
      scale: 1,
      delay: 0.23,
      opacity: 1,
      duration: 3.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: container.value,
        start: "top 50%",
        end: "bottom top",
        toggleActions: "play none none reset",
        // scrub: true,
      },
    }
  );

  // Animation for the third div (come from the left)
  // gsap.fromTo(
  //   thirdDiv.value,
  //   { x: 100, opacity: 0 },
  //   {
  //     x: 0,
  //     opacity: 1,
  //     duration: 2.5,
  //     ease: "power1.out",
  //     scrollTrigger: {
  //       trigger: thirdDiv.value,
  //       start: "top bottom",
  //       end: "bottom top",
  //       toggleActions: "play none none reset",
  //       // markers: true,
  //     },
  //   }
  // );
});
</script>

<style scoped>
@keyframes slide-in-right {
  0% {
    transform: translateX(100%) rotate(30deg);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
}

@keyframes slide-out-left {
  0% {
    transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    transform: translateX(-100%) rotate(-30deg);
    opacity: 0;
  }
}

.slide-fade-enter-active {
  animation: slide-in-right 0.4s both;
}

.slide-fade-leave-active {
  animation: slide-out-left 0.4s both;
}
@keyframes skew-slide-fade-enter {
  0% {
    transform: translateY(100px) skewY(10deg);
    opacity: 0;
  }
  100% {
    transform: translateY(0px) skewY(0deg);
    opacity: 1;
  }
}

@keyframes skew-slide-fade-leave {
  0% {
    transform: translateY(0px) skewY(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) skewY(-10deg);
    opacity: 0;
  }
}

.skew-slide-fade-enter-active {
  animation: skew-slide-fade-enter 1s both;
  animation-delay: 0.3s; /* Adding a delay of 1 second */
}

.skew-slide-fade-leave-active {
  animation: skew-slide-fade-leave 0.2s both;
}
</style>
