<template>
  <div :class="['', parentClass]">
    <slot />

    <span class="mx-3">{{ title }}</span>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  parentClass: {
    type: String,
    default: "rounded-xl flex bg-white w-72 p-4 mt-6 bold cursor-pointer", // Default class if none is provided
  },
});
</script>

<style></style>
