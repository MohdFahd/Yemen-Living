<template>
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="name == 'menu'"
  >
    <path
      d="M12 14H28"
      stroke="#111827"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 20H28"
      stroke="#111827"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 26H28"
      stroke="#111827"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-else-if="name == 'logo'"
    width="32"
    height="46"
    viewBox="0 0 32 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.04139 15.1473L15.8743 0H0V12.577V32.3619V46H15.8743L1.04139 31.5295V15.1473Z"
      fill="#191919"
    />
    <path d="M16.126 0L32.0003 16.3388V0H16.126Z" fill="#191919" />
    <path d="M31.7483 46V30.6667L16.126 46H31.7483Z" fill="#191919" />
    <path
      d="M16.1913 16.9966L9.43066 23.8521L16.1913 30.7077L22.9519 23.8521L16.1913 16.9966Z"
      fill="#191919"
    />
  </svg>
  <!-- More svg -->
</template>

<script setup>
defineProps({
  name: String,
  required: true,
});
</script>

<style></style>
