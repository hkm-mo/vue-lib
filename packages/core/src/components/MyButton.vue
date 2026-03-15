<script setup lang="ts">
/**
 * A customizable button component that displays a label and emits a click event when interacted with.
 * It provides a simple way to create styled buttons with optional text.
 */
defineProps<{
  /**
   * A label
   */
  label?: string;
}>();

const emit = defineEmits(['click']);
</script>

<template>
  <button class="my-lib-btn" @click="emit('click')">
    {{ label || 'Default Label' }}
  </button>
</template>

<style scoped>
.my-lib-btn {
  background: #42b883;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
