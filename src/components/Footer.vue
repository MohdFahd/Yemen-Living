<template>
  <div
    class="container mx-auto px-10 max-md:px-5 flex justify-between items-center mt-28"
  >
    <div class="flex flex-col w-full">
      <ButtonIcon
        title="+967 777 777 777"
        parentClass="text-black flex my-2 cursor-auto "
      >
        <img src="../assets/icons/phone.svg" alt=""
      /></ButtonIcon>
      <ButtonIcon
        title="Yemenliving@gmail.com"
        parentClass="text-black flex my-2 cursor-auto "
      >
        <img src="../assets/icons/email.svg" alt=""
      /></ButtonIcon>
      <ButtonIcon
        title="privacy policy"
        parentClass="text-black flex my-2 cursor-auto "
      >
        <img src="../assets/icons/privacy.svg" alt=""
      /></ButtonIcon>
    </div>
    <div class="flex max-md:hidden w-full justify-center">
      <img src="../assets/icons/youtube.svg" class="mx-3" alt="" />
      <img src="../assets/icons/x.svg" class="mx-3" alt="" />
      <img src="../assets/icons/instgram.svg" class="mx-3" alt="" />
      <img src="../assets/icons/facebook.svg" class="mx-3" alt="" />
    </div>
    <div class="flex w-full justify-end">
      <Logo logo="footer" />
    </div>
  </div>
  <div class="flex justify-center my-3 md:hidden">
    <img src="../assets/icons/youtube.svg" class="mx-3" alt="" />
    <img src="../assets/icons/x.svg" class="mx-3" alt="" />
    <img src="../assets/icons/instgram.svg" class="mx-3" alt="" />
    <img src="../assets/icons/facebook.svg" class="mx-3" alt="" />
  </div>
  <hr class="container mx-auto px-10 max-md:px-5 my-5" />
  <div
    class="container mx-auto px-10 max-md:px-5 flex justify-between max-md:flex-col-reverse max-md:justify-center max-md:items-center my-4"
  >
    <div class="flex items-center max-md:justify-center">
      <span class="bold max-md:text-xs">Powered by: </span>
      <img
        src="../assets/imgs/platfrom.svg"
        class="w-[30%] max-md:w-[25%] mx-5"
        alt=""
      />
    </div>
    <p class="bold max-md:text-xs mb-3">
      &copy; All rights reserved to Yemen living {{ date }}
    </p>
  </div>
</template>

<script setup>
import ButtonIcon from "../components/ButtonIcon.vue";
import Logo from "../components/logo.vue";

const date = new Date().getFullYear();
</script>

<style></style>
