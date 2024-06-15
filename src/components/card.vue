<template>
  <div
    :class="[
      'w-[520px] max-md:max-w-[350px]  max-[1023px]:mb-5 rounded-tl-[20px] rounded-[20px] p-6 !pb-0 mx-10',
      parentClass,
    ]"
  >
    <h3 class="bold text-3xl">{{ title }}</h3>
    <p class="text-base mt-2">{{ Desc }}</p>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  title: String,
  Desc: String,
  parentClass: {
    type: String,
    default: "bg-stone-200", // Default class if none is provided
  },
});
</script>

<style></style>
