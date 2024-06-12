<template>
  <div>
    <NavBar />
    <section id="hero" class="flex justify-between items-center mt-5">
      <hero />
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
