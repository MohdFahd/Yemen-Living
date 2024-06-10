<template>
  <div>
    <NavBar />
    <section id="hero" class="flex justify-between items-center mt-5">
      <hero />
    </section>
    <section id="hero" class="mt-5">
      <h1 class="bold text-center text-3xl">Yemen Living Features</h1>
      <div class="grid grid-cols-3 justify-between items-center mt-16">
        <div class="flex">
          <radioTap />
          <ul class="bg-[#83868B] h-[33vh] w-1 rounded-lg ml-64">
            <li
              id="current-slide-indicator"
              class="bg-[#D9D9D9] rounded-xl"
              style="height: 5vh"
            ></li>
          </ul>
        </div>
        <div class="relative flex justify-center items-center">
          <div class="absolute z-0">
            <vector />
          </div>
          <img
            src="../assets/imgs/phone.webp"
            class="z-10"
            width="50%"
            alt=""
          />
        </div>
        <div class="text-xl bold w-64 ml-10">
          <h2>Yemeni Premium for home easy login</h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import vector from "../components/svg/vector.vue";
import NavBar from "../components/NavBar.vue";
import radioTap from "../components/radioTap.vue";
import hero from "../components/hero.vue";
</script>

<style></style>
