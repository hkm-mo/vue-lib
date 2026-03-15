<template>
  <img :src="src" :alt="alt" :width="width" :height="height" />
</template>

<script setup lang="ts">
/**
 * An image component that renders an HTML img element with configurable source, alt text, width, and height.
 * It provides a convenient way to display images with optional dimension controls.
 */
interface MyImageProps {
  /** The source URL */
  src: string;
  /** The alt text for the image. */
  alt: string;
  /** The width of the image. Default is 'auto'. */
  width?: string;
  /** The height of the image. Default is 'auto'. */
  height?: string;
}

const props = withDefaults(defineProps<MyImageProps>(), {
  width: 'auto',
  height: 'auto'
});


</script>
