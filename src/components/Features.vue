<template>
  <section id="Features" class="mt-5 bg-[#FDFDFD]">
    <div class="container mx-auto px-10 max-md:px-5 py-5">
      <h1 class="bold text-center text-3xl max-md:text-xl">
        Yemen Living Features
      </h1>
      <div
        class="grid grid-cols-3 justify-between items-center mt-16 max-md:grid-cols-1"
      >
        <div class="flex justify-between z-50 max-md:items-center text-center">
          <radioTap :tabs="Features" @update="handleUpdate" />
          <h3 class="bold text-lg text-center w-full md:hidden">
            {{ selectedFeature.tap }}
          </h3>
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
        <div class="relative flex justify-center items-center max-md:my-5">
          <div class="absolute z-0">
            <vector />
          </div>
          <transition name="slide-fade" mode="out-in">
            <img
              :src="selectedFeature.img"
              class="z-10"
              width="50%"
              alt=""
              :key="selectedFeature.img"
            />
          </transition>
        </div>

        <div
          class="text-xl bold w-full md:ml-10 max-md:text-center max-md:flex max-md:justify-center"
        >
          <h2
            class="w-64"
            v-if="selectedFeature.title"
            :key="selectedFeature.title"
          >
            {{ selectedFeature.title }}
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import radioTap from "../components/radioTap.vue";
import vector from "../components/svg/vector.vue";

const Features = ref([
  {
    title: "Yemeni Premium for home easy login",
    img: "src/assets/imgs/Features/ph1.png",
    tap: "YemeniPremium",
  },
  {
    title: "Yemeni Premium for home easy for Developing",
    img: "src/assets/imgs/Features/ph2.png",
    tap: "ForHome",
  },
  {
    title: "Yemeni Premium for login",
    img: "src/assets/imgs/Features/ph3.png",
    tap: "EasyPayment",
  },
  {
    title: "Yemeni Premium for home Yemeni Premium ",
    img: "src/assets/imgs/Features/ph4.png",
    tap: "OrderTracing",
  },
  {
    title: "Yemeni Premium for home easy  home easy",
    img: "src/assets/imgs/Features/ph5.png",
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
  animation: slide-in-right 0.5s both;
}

.slide-fade-leave-active {
  animation: slide-out-left 0.5s both;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  transform: translateY(-30px);
}
.fade-enter-to,
.fade-leave {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  transform: translateY(0);
}
</style>
