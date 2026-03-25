<script setup lang="ts">
import { MyButton, MyHeading, MyImage, MyInput } from '@my-lib/core'
</script>

<template>
  <main>
    <h1>Preview App</h1>
    <MyButton label="Yess" />
    <MyImage src="https://via.placeholder.com/150" alt="Placeholder Image" />
    <MyInput label="Click Me" />
    <MyHeading heading-class="dd" tag="ss">This is a Heading</MyHeading>
    <div>
      <h2>Another Button</h2>
      <MyButton />
    </div>
  </main>
</template>
