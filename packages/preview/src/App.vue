<script setup lang="ts">
import { MyButton, MyHeading, MyImage, MyInput } from '@my-lib/core'
import FlipNumber from './components/FlipNumber.vue'
import { ref } from 'vue';

const value = ref('12345')

</script>

<template>
  <main>
    <h1>Preview App</h1>
    <FlipNumber :value="value" :speed="700"></FlipNumber>
    <button @click="value = (parseInt(value) + 1).toString()">Increment</button>
    <button @click="value = '59013'">Set number 59013</button>
    <button @click="value = '19099'">Set number 19099</button>

  </main>
</template>
