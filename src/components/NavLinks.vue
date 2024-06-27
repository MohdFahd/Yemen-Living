<template>
  <div
    class="flex justify-center items-center md:gap-10 max-md:gap-5 w-full max-md:flex-col"
  >
    <router-link
      to="/"
      class="text-black md:text-[22px] max-md:text-lg font-normal font-['Roboto Slab'] cursor-pointer z-10 link"
      >Home</router-link
    >
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
    <router-link
      to="/support"
      class="text-black md:text-[22px] max-md:text-lg font-normal font-['Roboto Slab'] cursor-pointer z-10 link"
      >Support</router-link
    >
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
