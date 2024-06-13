<template>
  <div :class="['rounded-xl flex w-72 mt-6 bold cursor-pointer', parentClass]">
    <slot />

    <span class="mx-3">{{ title }}</span>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  parentClass: {
    type: String,
    default: "", // Default class if none is provided
  },
});
</script>

<style></style>
