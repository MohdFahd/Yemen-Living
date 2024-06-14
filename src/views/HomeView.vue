<template>
  <div>
    <NavBar />
    <section id="hero" class="md:mt-5">
      <div
        class="container mx-auto px-10 max-md:px-5 flex justify-between items-center md:relative z-10 max-[1023px]:flex-col max-[1023px]:justify-center max-[1023px]:items-center"
      >
        <hero />
      </div>
      <div
        class="absolute inset-x-0 top-96 w-full h-20 bg-pattern -translate-y-full max-md:top-0"
      >
        <svg
          width="533"
          height="1553"
          viewBox="0 0 533 1553"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[533px] h-1[1553px] max-md:w-[300px] max-md:h-[1153px] left-0"
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
    <Features id="Features" />
    <div class="mt-5">
      <patten />
    </div>
    <section id="Brands" ref="brandSection" class="mt-5 relative">
      <svg
        width="617"
        height="1553"
        viewBox="0 0 617 1553"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute top-0 left-0"
      >
        <path
          d="M448.662 916.995C242.658 1017.37 -89.1861 1161.88 -64.6649 879.028C-33.46 519.083 470.685 260.219 143.115 224.81"
          stroke="#E1E1E1"
        />
        <path
          d="M367.885 911.249C161.881 1011.63 -169.963 1156.13 -145.442 873.282C-114.237 513.337 389.907 254.473 62.3377 219.064"
          stroke="#E1E1E1"
        />
        <path
          d="M286.901 910.511C80.8977 1010.89 -250.947 1155.39 -226.426 872.544C-195.221 512.599 308.924 253.735 -18.6457 218.326"
          stroke="#E1E1E1"
        />
        <path
          d="M206.096 915.885C0.0930294 1016.26 -331.752 1160.77 -307.23 877.918C-276.025 517.973 228.119 259.109 -99.4504 223.7"
          stroke="#E1E1E1"
        />
        <path
          d="M126.104 928.579C-79.8992 1028.96 -411.744 1173.46 -387.223 890.612C-356.018 530.667 148.127 271.803 -179.443 236.394"
          stroke="#E1E1E1"
        />
        <path
          d="M47.8836 949.563C-158.12 1049.94 -489.964 1194.44 -465.443 911.596C-434.238 551.651 69.9062 292.787 -257.663 257.378"
          stroke="#E1E1E1"
        />
        <path
          d="M-27.4553 979.251C-233.459 1079.63 -565.303 1224.13 -540.782 941.284C-509.577 581.339 -5.43267 322.475 -333.002 287.066"
          stroke="#E1E1E1"
        />
        <path
          d="M-99.0403 1017.13C-305.044 1117.51 -636.888 1262.01 -612.367 979.166C-581.162 619.221 -77.0176 360.357 -404.587 324.948"
          stroke="#E1E1E1"
        />
        <path
          d="M-166.55 1061.86C-372.553 1162.24 -704.398 1306.74 -679.877 1023.89C-648.672 663.95 -144.527 405.086 -472.097 369.677"
          stroke="#E1E1E1"
        />
      </svg>

      <div
        class="container mx-auto px-10 max-md:px-5 text-center flex flex-col justify-center items-center py-24"
      >
        <div class="w-full flex justify-center text-center">
          <h2 class="bold text-center w-full text-3xl max-md:text-2xl max-w-xs">
            We works best with your favorite platform
          </h2>
        </div>
        <p
          class="text-zinc-500 text-base max-md:text-[14px] font-medium leading-10"
        >
          Join over 4000 businesses worldwide
        </p>
        <div class="flex justify-center items-center"></div>
        <div
          class="relative flex flex-wrap justify-center items-center md:w-[60%] max-md:w-full"
        >
          <div class="absolute z-0 top-10">
            <!-- Assuming vectorSmall is a component or SVG, adjust as necessary -->
            <vectorSmall />
          </div>
          <div
            v-for="(brand, index) in brands"
            :key="index"
            class="mx-4 w-20 h-20 max-md:w-16 max-md:h-16 bg-white rounded-md shadow mt-5 p-2 z-10 flex justify-center items-center"
          >
            <img :src="brand.src" alt="" class="" />
          </div>
        </div>
      </div>
    </section>
    <section id="Download" ref="download" class="mt-5 bg-[#FDFDFD] p-5">
      <div class="container mx-auto px-10 max-md:px-5">
        <h1
          class="bold text-center text-3xl my-16 max-md:text-xl"
          ref="downloadTitle"
        >
          Download Yemen Living App
        </h1>
        <div class="flex justify-center items-center max-[1023px]:flex-col">
          <div ref="downloadCard1">
            <card
              title="Android"
              Desc="Download app for Android today - it's free"
            >
              <ButtonIcon
                title="Download for Android"
                parentClass="hover:bg-gray-500 hover:text-white bg-white p-4 mt-6"
              >
                <img src="../assets/icons/google-play.svg" alt=""
              /></ButtonIcon>
              <img
                src="../assets/imgs/Andriod.webp"
                class="overflow-hidden mt-5"
                alt=""
              />
            </card>
          </div>
          <div ref="downloadCard2">
            <card
              title="IOS"
              Desc="Download app for Android today - it's free"
              parentClass="bg-[#E5F3FF]"
            >
              <ButtonIcon
                title="Download for IOS"
                parentClass="bg-[#345A8A] text-white text-center rounded-xl flex  w-72 p-4 mt-6 bold cursor-pointer hover:bg-black hover:text-white "
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
        </div>
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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";

const brands = [
  {
    src: "public/brands/1.png",
  },
  {
    src: "public/brands/2.png",
  },
  {
    src: "public/brands/3.png",
  },
  {
    src: "public/brands/4.png",
  },
  {
    src: "public/brands/5.png",
  },
  {
    src: "public/brands/6.png",
  },
  {
    src: "public/brands/7.png",
  },
  {
    src: "public/brands/8.png",
  },
  {
    src: "public/brands/9.png",
  },
  {
    src: "public/brands/10.png",
  },
];
const brandSection = ref(null);
const download = ref(null);
const downloadTitle = ref(null);
const downloadCard1 = ref(null);
const downloadCard2 = ref(null);
onMounted(() => {
  gsap.fromTo(
    brandSection.value,
    { y: 300 },
    {
      y: 0,
      duration: 1.5,
      ease: "power1.inOut",
      scrollTrigger: {
        // scroller: "cont",
        trigger: "#Features",
        start: "top top",
        toggleActions: "play none none reset",
      },
    }
  );
  gsap.fromTo(
    downloadTitle.value,
    { y: 300 },
    {
      y: 0,
      duration: 1.5,
      ease: "power1.inOut",
      scrollTrigger: {
        // scroller: "cont",
        trigger: "#Features",
        start: "top top",
        toggleActions: "play none none reset",
      },
    }
  );
  gsap.fromTo(
    downloadCard1.value,
    { x: -300, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power1.inOut",
      scrollTrigger: {
        // scroller: "cont",
        trigger: "#Brands",
        start: "top bottom",
        toggleActions: "play none none reset",
      },
    }
  );
  gsap.fromTo(
    downloadCard2.value,
    { x: 300, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power1.inOut",
      scrollTrigger: {
        // scroller: "cont",
        trigger: "#Brands",
        start: "top bottom",
        toggleActions: "play none none reset",
      },
    }
  );
});
</script>
<style scoped></style>
