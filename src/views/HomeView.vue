<template>
  <div>
    <NavBar />
    <section
      id="hero"
      class="flex justify-between items-center mt-5 relative z-10"
    >
      <hero />
      <div
        class="absolute inset-x-0 top-96 w-full h-20 bg-pattern -translate-y-full"
      >
        <svg
          width="533"
          height="1553"
          viewBox="0 0 533 1553"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M364.662 916.995C158.658 1017.37 -173.186 1161.88 -148.665 879.028C-117.46 519.083 386.685 260.219 59.1151 224.81"
            stroke="#E1E1E1"
          />
          <path
            d="M283.885 911.249C77.8811 1011.63 -253.963 1156.13 -229.442 873.282C-198.237 513.337 305.907 254.473 -21.6623 219.064"
            stroke="#E1E1E1"
          />
          <path
            d="M202.901 910.511C-3.10228 1010.89 -334.947 1155.39 -310.426 872.544C-279.221 512.599 224.924 253.735 -102.646 218.326"
            stroke="#E1E1E1"
          />
          <path
            d="M122.096 915.885C-83.907 1016.26 -415.752 1160.77 -391.23 877.918C-360.025 517.973 144.119 259.109 -183.45 223.7"
            stroke="#E1E1E1"
          />
          <path
            d="M42.1043 928.579C-163.899 1028.96 -495.744 1173.46 -471.223 890.612C-440.018 530.667 64.1269 271.803 -263.443 236.394"
            stroke="#E1E1E1"
          />
          <path
            d="M-36.1164 949.563C-242.12 1049.94 -573.964 1194.44 -549.443 911.596C-518.238 551.651 -14.0938 292.787 -341.663 257.378"
            stroke="#E1E1E1"
          />
          <path
            d="M-111.455 979.251C-317.458 1079.63 -649.303 1224.13 -624.782 941.284C-593.577 581.339 -89.4322 322.475 -417.002 287.066"
            stroke="#E1E1E1"
          />
        </svg>
      </div>
    </section>
    <Features />
    <div class="mt-5">
      <patten />
    </div>
    <section
      id="Brands"
      class="mt-5 text-center flex flex-col justify-center items-center"
    >
      <div class="w-full flex justify-center text-center">
        <h2 class="bold text-center w-full text-3xl max-w-xs">
          We works best with your favorite platform
        </h2>
      </div>
      <p class="text-zinc-500 text-base font-medium leading-10">
        Join over 4000 businesses worldwide
      </p>
      <div class="flex justify-center items-center"></div>
      <div class="flex justify-center flex-wrap w-1/2 relative">
        <div class="absolute z-0 top-10">
          <vectorSmall />
        </div>
        <div
          v-for="(brand, index) in brands"
          :key="index"
          class="w-20 h-20 bg-white rounded-md shadow mx-4 mt-5 p-2 z-10"
        >
          <img :src="brand.src" alt="" class="" />
        </div>
      </div>
    </section>
    <section id="Download" class="mt-5">
      <h1 class="bold text-center text-3xl my-16">Download Yemen Living App</h1>
      <div class="flex justify-center items-center">
        <card title="Android" Desc="Download app for Android today - it's free">
          <ButtonIcon title="Download for Android">
            <img src="../assets/icons/google-play.svg" alt=""
          /></ButtonIcon>
          <img
            src="../assets/imgs/Andriod.webp"
            class="overflow-hidden mt-5"
            alt=""
          />
        </card>
        <card
          title="IOS"
          Desc="Download app for Android today - it's free"
          parentClass="bg-[#E5F3FF]"
        >
          <ButtonIcon
            title="Download for IOS"
            parentClass="bg-[#345A8A] text-white text-center rounded-xl flex bg-white w-72 p-4 mt-6 bold cursor-pointer"
          >
            <img src="../assets/icons/ios.svg" alt=""
          /></ButtonIcon>
          <img
            src="../assets/imgs/iPhone.webp"
            class="overflow-hidden mt-5"
            alt=""
          />
        </card>
      </div>
    </section>
    <div class="mt-5">
      <patten />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import vectorSmall from "../components/svg/vectorSmall.vue";
import vector from "../components/svg/vector.vue";
import patten from "../components/svg/patten.vue";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

import Features from "../components/Features.vue";

import hero from "../components/hero.vue";
import card from "../components/card.vue";
import ButtonIcon from "../components/ButtonIcon.vue";

const brands = [
  {
    src: "/src/assets/imgs/brands/1.png",
  },
  {
    src: "/src/assets/imgs/brands/1.png",
  },
  {
    src: "/src/assets/imgs/brands/1.png",
  },
  {
    src: "/src/assets/imgs/brands/1.png",
  },
  {
    src: "/src/assets/imgs/brands/1.png",
  },
  {
    src: "/src/assets/imgs/brands/1.png",
  },
  {
    src: "/src/assets/imgs/brands/1.png",
  },
  {
    src: "/src/assets/imgs/brands/1.png",
  },
  {
    src: "/src/assets/imgs/brands/1.png",
  },
  {
    src: "/src/assets/imgs/brands/1.png",
  },
];
</script>

<style></style>
