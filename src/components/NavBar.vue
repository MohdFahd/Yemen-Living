<template>
  <div>
    <div class="flex justify-between items-center mt-5 max-md:hidden">
      <Logo :phone="false" />
      <NavLinks />
      <Button />
    </div>
    <div class="flex justify-between mt-5 md:hidden">
      <Logo :phone="true" />
      <icon name="menu" />
    </div>
  </div>
</template>

<script setup>
import Logo from "./logo.vue";
import icon from "./icon.vue";
import NavLinks from "./NavLinks.vue";
import Button from "./Button.vue";
</script>

<style></style>
