<template>
  <section id="Features" class="mt-5">
    <h1 class="bold text-center text-3xl">Yemen Living Features</h1>
    <div class="grid grid-cols-3 justify-between items-center mt-16">
      <div class="flex justify-between z-50">
        <radioTap :tabs="Features" @update="handleUpdate" />
        <div>
          <ul class="bg-[#83868B] h-[33vh] w-1 rounded-lg ml-64">
            <li
              id="current-slide-indicator"
              class="bg-[#D9D9D9] rounded-xl"
              style="height: 5vh"
            ></li>
          </ul>
        </div>
      </div>
      <div class="relative flex justify-center items-center">
        <div class="absolute z-0">
          <vector class="w-[350px] h-[250px]" />
        </div>
        <transition name="slide-fade">
          <img
            :src="selectedFeature.img"
            class="z-10 OnAppear"
            width="50%"
            alt=""
            :key="selectedFeature.img"
          />
        </transition>
      </div>
      <div class="text-xl bold w-64 ml-10">
        <h2>{{ selectedFeature.title }}</h2>
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
    title: "Yemeni Premium for home easy for Devloping",
    img: "src/assets/imgs/Features/ph2.png",
    tap: "ForHome",
  },
  {
    title: "Yemeni Premium for home easy login",
    img: "src/assets/imgs/Features/ph3.png",
    tap: "EasyPayment",
  },
  {
    title: "Yemeni Premium for home easy login",
    img: "src/assets/imgs/Features/ph4.png",
    tap: "OrderTracing",
  },
  {
    title: "Yemeni Premium for home easy login",
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
/* Transition for entering (new image) */
.slide-fade-enter-active {
  transition: transform 1s ease-in-out, opacity 1s ease-in-out;
}
.slide-fade-enter {
  transform: translateX(100%) rotate(90deg);
  opacity: 0;
}
.slide-fade-enter-to {
  transform: translateX(0) rotate(0deg);
  opacity: 1;
}

/*Transition for leaving (old image) */
.slide-fade-leave-active {
  transition: transform 1s ease-in-out, opacity 0.3s ease-in-out;
  position: absolute;
}
.slide-fade-leave-to {
  transform: translateX(-100%) rotate(-90deg);
  opacity: 0;
}

.OnAppear {
  animation: slideInAndRotate 2s ease-out forwards;
}

@keyframes slideInAndRotate {
  0% {
    transform: translateX(30%) rotate(90deg);
    opacity: 1;
  }
  50% {
    transform: translate(0%, -10%) rotate(-45deg);
    opacity: 1;
  }
  100% {
    transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
}
</style>
