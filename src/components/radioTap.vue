<template>
  <div>
    <div v-for="(tab, index) in tabs" :key="index" class="flex max-md:hidden">
      <input
        type="radio"
        class="border-2 border-gray-500 rounded-lg p-2 m-2"
        :id="tab.tap"
        :checked="selected === index"
        :name="groupName"
        @change="updateSelection(tab)"
      />
      <label
        :for="tab.tap"
        class="mx-2 cursor-pointer bold hover:text-blue-500"
        >{{ tab.tap }}</label
      >
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

// Method to update selection and emit to parent
const updateSelection = (tab) => {
  emit("update", tab);
};

// Auto switch tabs every 2 seconds
onMounted(() => {
  setInterval(() => {
    selected.value = (selected.value + 1) % props.tabs.length;
    updateSelection(props.tabs[selected.value]); // Emit the updated tab to parent
  }, 4500);
});
</script>
