<template>
  <div
    class="flex justify-center items-center md:gap-10 max-md:gap-5 w-full max-md:flex-col"
  >
    <router-link
      to="/"
      class="text-black md:text-[22px] max-md:text-lg font-normal font-['Roboto Slab'] cursor-pointer z-10 link"
      >Home</router-link
    >
    <router-link
      to="/#Features"
      class="text-black md:text-[22px] max-md:text-lg font-normal font-['Roboto Slab'] cursor-pointer z-10 link"
      @click="closeMenu"
      >Features</router-link
    >
    <router-link
      to="/#Brands"
      class="text-black md:text-[22px] max-md:text-lg font-normal font-['Roboto Slab'] cursor-pointer z-10 link"
      @click="closeMenu"
      >Brands</router-link
    >

    <router-link
      to="/support"
      class="text-black md:text-[22px] max-md:text-lg font-normal font-['Roboto Slab'] cursor-pointer z-10 link"
      @click="closeMenu"
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
