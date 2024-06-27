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
    </section>
    <Features id="Features" />
    <div class="mt-5">
      <patten />
    </div>
    <section id="Brands" class="mt-5 relative">
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
        ref="brandSection"
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
            class="mx-4 w-20 h-20 max-md:w-16 max-md:h-16 bg-white cursor-pointer rounded-[1px] shadow mt-5 p-2 z-10 flex justify-center items-center brand-card"
          >
            <img :src="brand.src" alt="" class="" />
          </div>
        </div>
      </div>
    </section>
    <section
      id="Download"
      ref="download"
      class="mt-5 bg-[#FDFDFD] p-10 relative"
    >
      <div class="container mx-auto px-10 max-md:px-5">
        <h1
          class="bold text-center text-3xl my-16 max-md:text-xl"
          ref="downloadTitle"
        >
          Download Yemen Living App
        </h1>
        <div class="flex justify-center items-center max-[1023px]:flex-col">
          <div ref="downloadCard1" class="z-50">
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
          <div ref="downloadCard2" class="z-50">
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
      <div class="absolute w-full my-5 bottom-0 z-10">
        <patten />
      </div>
    </section>

    <div class="mt-5">
      <Footer />
    </div>
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
    src: "./brands/1.png",
  },
  {
    src: "./brands/2.png",
  },
  {
    src: "./brands/3.png",
  },
  {
    src: "./brands/4.png",
  },
  {
    src: "./brands/5.png",
  },
  {
    src: "./brands/6.png",
  },
  {
    src: "./brands/7.png",
  },
  {
    src: "./brands/8.png",
  },
  {
    src: "./brands/9.png",
  },
  {
    src: "./brands/10.png",
  },
];
const brandSection = ref(null);
const download = ref(null);
const downloadTitle = ref(null);
const downloadCard1 = ref(null);
const downloadCard2 = ref(null);
onMounted(() => {
  gsap.set(brandSection.value, {
    y: 300,
    opacity: 0,
  });
  gsap.to(brandSection.value, {
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: "power1.inOut",
    scrollTrigger: {
      // scroller: "cont",
      trigger: brandSection.value,
      start: "20% 50%",
      end: "bottom top",
      toggleActions: "play none none none",
    },
  });
  gsap.fromTo(
    downloadTitle.value,
    { y: 100, opacity: 0 },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power1.inOut",
      scrollTrigger: {
        // scroller: "cont",
        trigger: downloadTitle.value,
        start: "50% 50%",
        toggleActions: "play none none none",
        // markers: true,
      },
    }
  );
  gsap.fromTo(
    downloadCard1.value,
    { x: -300, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 2,
      ease: "power1.inOut",
      scrollTrigger: {
        // scroller: "cont",
        trigger: downloadCard1.value,
        start: "50% 50%",
        toggleActions: "play none none none",
      },
    }
  );
  gsap.fromTo(
    downloadCard2.value,
    { x: 300, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 2,
      ease: "power1.inOut",
      scrollTrigger: {
        // scroller: "cont",
        trigger: downloadCard2.value,
        start: "50% 50%",
        toggleActions: "play none none none",
      },
    }
  );
});
</script>
<style scoped>
.brand-card {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.brand-card:hover {
  transform: scale(1.1);
  /* opacity: 0.9; */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Example of keyframe animation */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.brand-card {
  animation: fadeIn 0.5s ease-in-out;
}
</style>
