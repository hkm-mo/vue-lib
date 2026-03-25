<template>
  <component :is="tag" :class="headingClass">
    <slot />
  </component>
</template>

<script>
/**
 * MyHeading component
 * 
 * @prop {string} tag - The HTML tag to use for the heading (e.g., 'h1', 'h2', 'h3'). Default: 'h1'
 * @prop {string} headingClass - Optional CSS class for styling the heading.
 */
export default {
  name: 'MyHeading',
  props: {
    /**
     * The HTML tag to use for the heading.
     */
    tag: {
      type: String,
      default: 'h1'
    },
    /**
     * Optional CSS class for styling the heading.
     */
    headingClass: {
      type: String,
      default: ''
    }
  }
}
</script>