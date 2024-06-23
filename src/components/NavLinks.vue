<template>
  <div
    class="flex justify-center items-center md:gap-10 max-md:gap-5 w-full max-md:flex-col"
  >
    <a
      href="#hero"
      class="text-black md:text-[22px] max-md:text-lg font-normal font-['Roboto Slab'] cursor-pointer z-10 link"
      @click="closeMenu"
    >
      Home
    </a>
    <a
      class="text-black md:text-[22px] max-md:text-lg font-normal font-['Roboto Slab'] cursor-pointer z-10 link"
      href="#Features"
      @click="closeMenu"
    >
      Features
    </a>
    <a
      class="text-black md:text-[22px] max-md:text-lg font-normal font-['Roboto Slab'] cursor-pointer z-10 link"
      href="#Brands"
      @click="closeMenu"
    >
      Brands
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    closeMenu() {
      this.$emit("close-menu");
    },
  },
};
</script>

<style>
/* Add your styles here if needed */
</style>
