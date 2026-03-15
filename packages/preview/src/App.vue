<script setup>
import { MyButton, MyImage, MyInput } from '@my-lib/core'
</script>

<template>
  <main>
    <h1>Preview App</h1>
    <MyButton label="Yess" />
    <MyImage src="https://via.placeholder.com/150" alt="Placeholder Image" />
    <MyInput label="Click Me" />
    <div>
      <h2>Another Button</h2>
      <MyButton />
    </div>
  </main>
</template>
