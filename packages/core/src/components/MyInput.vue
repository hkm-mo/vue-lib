<template>
  <button class="my-lib-btn" @click="$emit('click')">
    {{ label }}
  </button>
</template>
<script lang="ts">
/**
 * A button component that displays customizable text and emits a click event.
 * It serves as a reusable UI element for triggering actions in the application.
 */
export default {
  emits: ['click'],
  props: {
    /**
     * The text to display inside the button.
     *
     * If not provided, the component renders a default label.
     *
     * @type {string}
     * @default 'Default Label'
     */
    label: {
      type: String,
      default: 'Default Label'
    }
  }
}

</script>

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
