<template>
  <svg
    :class="className"
    viewBox="0 0 571 462"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M222.95 2.77206C307.312 -11.9743 389.359 34.0108 448.789 95.6751C516.983 166.433 600.256 263.001 560.259 352.764C521.199 440.426 391.889 410.397 298.571 432.805C242.956 446.16 190.747 473.756 136.919 454.421C75.4654 432.347 14.6432 390.272 1.87782 326.234C-10.6393 263.442 42.1869 213.294 78.3151 160.433C120.653 98.4861 149.037 15.6919 222.95 2.77206Z"
      fill="#AFAFAF"
      fill-opacity="0.22"
    />
  </svg>
</template>
<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  className: {
    type: String,
    default: "w-[100%] max-md:w-[60%] crical",
  },
});
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
