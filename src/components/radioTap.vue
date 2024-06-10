<template>
  <div>
    <div v-for="(value, key) in options" :key="key">
      <input
        type="radio"
        class="border-2 border-gray-500 rounded-lg p-2 m-2"
        :id="key"
        v-model="selected"
        :name="groupName"
        :value="value"
      />
      <label :for="key" class="mx-2">{{ key }}</label
      ><br />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

// Define your options object
const options = {
  YemeniPremium: "Yemeni Premium",
  ForHome: "For home ",
  EasyPayment: "Easy payment",
  OrderTracing: "Order Tracing",
  shipWorldwide: "ship worldwide",
};
const selected = ref(options.YemeniPremium);
</script>
