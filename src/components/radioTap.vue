<template>
  <div>
    <div v-for="(tab, index) in tabs" :key="index">
      <input
        type="radio"
        class="border-2 border-gray-500 rounded-lg p-2 m-2"
        :id="tab.tap"
        v-model="selected"
        :name="groupName"
        :value="tab.tap"
        @change="updateSelection(tab)"
      />
      <label :for="tab.tap" class="mx-2">{{ tab.tap }}</label
      ><br />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";
const props = defineProps({
  tabs: Array,
});
const emit = defineEmits(["update"]);
const updateSelection = (tab) => {
  emit("update", tab);
};
const selected = ref(props.tabs[0]?.tap || ""); // Default to the first tab if available
const groupName = "featureTabs"; // Group name for the radio buttons
</script>
