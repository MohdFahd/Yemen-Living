<template>
  <div
    class="self-start md:pt-52 max-md:pt-10 relative max-md:flex max-md:justify-center max-md:items-center max-md:flex-col"
  >
    <svg
      width="183"
      height="171"
      viewBox="0 0 183 171"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="absolute -z-50 top-32 max-md:hidden crical"
    >
      <path
        opacity="0.7"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M90.969 170.967C116.02 171.891 136.012 153.233 152.282 134.095C169.482 113.863 188.134 90.0431 181.7 64.2447C175.348 38.7809 146.945 28.8756 123.26 17.7369C100.05 6.82182 75.6274 -5.99747 51.6458 3.08276C25.5024 12.9815 3.99807 36.4699 0.357296 64.2719C-3.02048 90.0656 18.2398 109.974 35.0552 129.774C50.834 148.353 66.6596 170.071 90.969 170.967Z"
        fill="#EEEEEE"
      />
    </svg>

    <p
      class="md:text-5xl max-w-5xl z-30 max-md:text-xl max-md:text-center"
      ref="textDiv"
    >
      <span class="bold max-md:text-3xl">Yemen Living</span>
      Convenience in shopping Quality in products and diversity in brands...
    </p>
    <div class="md:hidden">
      <Button />
    </div>
  </div>
  <div
    class="flex justify-end max-[1023px]:justify-center relative overflow-hidden"
    ref="image"
  >
    <vector class="absolute top-20 z-0 w-[60%]" />
    <img src="../assets/imgs/hero.webp" class="z-10" width="60%" alt="" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import vector from "../components/svg/vector.vue";
import Button from "./Button.vue";

const textDiv = ref(null);
const image = ref(null);

onMounted(() => {
  gsap.from(textDiv.value, {
    x: -200, // Adjust the value as needed
    opacity: 0,
    duration: 2.5,
    ease: "back.out",
  });

  gsap.from(image.value, {
    x: 500, // Adjust the value as needed
    y: 200,
    opacity: 0,
    rotation: 45,
    duration: 2.5,
    ease: "back.out",
  });
});
//animate ".box" from an opacity of 0 to an opacity of 0.5
</script>

<style scoped>
.crical {
  animation: rotate 10s linear infinite;
  display: inline-block;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
