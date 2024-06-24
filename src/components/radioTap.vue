<template>
  <div>
    <div v-for="(tab, index) in tabs" :key="index" class="flex max-md:hidden">
      <input
        type="radio"
        class="border-2 border-gray-500 rounded-lg p-2 m-2"
        :id="tab.tap"
        :checked="selected === index"
        :name="groupName"
        @change="updateSelection(tab, index)"
      />
      <label
        :for="tab.tap"
        class="mx-2 cursor-pointer font-extrabold hoverBold hover:opacity-80"
        :class="{ bold: selected === index }"
        >{{ tab.tap }}
      </label>
      <br />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, onMounted } from "vue";

const props = defineProps({
  tabs: Array,
});
const emit = defineEmits(["update"]);
const selected = ref(0); // Start with the first tab
const groupName = "featureTabs"; // Group name for the radio buttons
let intervalId = null;

// Method to update selection and emit to parent
const updateSelection = (tab, index) => {
  selected.value = index;
  emit("update", tab);
  startAutoDisplay();
};

// Auto switch tabs every 4.5 seconds
const startAutoDisplay = () => {
  if (intervalId) clearInterval(intervalId);
  intervalId = setInterval(() => {
    selected.value = (selected.value + 1) % props.tabs.length;
    emit("update", props.tabs[selected.value]);
  }, 4500);
};

// Start auto switch tabs on component mount
onMounted(() => {
  startAutoDisplay();
});
</script>
<style scoped>
.bold:hover {
  font-weight: bold;
}
</style>
