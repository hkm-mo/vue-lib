<template>
  <div class="flip-number">
    <template v-for="(item, index) in numbersSplitted" :key="index">
      <template v-if="typeof item === 'number'">
        <FlipNumberItem :value="item" :speed="parsedSpeed" class="loop-item" />
      </template>
      <template v-else>
        <div class="loop-item sign">{{ item }}</div>
      </template>
    </template>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import FlipNumberItem from './FlipNumberItem.vue'

const props = defineProps({
  value: {
    type: String,
    required: true,
    default: '0'
  },
  speed: {
    type: [Number, String],
    default: 1200
  }
})

const numbersSplitted = ref([])

// Sanitize and parse speed prop safely
const parsedSpeed = computed(() => {
  let _speed = Number(props.speed)
  if (isNaN(_speed)) {
    console.error('the prop speed is not a number')
    return 1200
  }
  return _speed < 100 ? 100 : _speed
})

const splitValue = () => {
  numbersSplitted.value = []
  if (isNaN(Number(props.value))) {
    console.error('the prop must be a number')
    return
  }

  const valueSplittedArr = props.value.toString().split('')
  for (let i = 0; i < valueSplittedArr.length; i++) {
    const _val = valueSplittedArr[i]
    if (isNaN(Number(_val))) {
      numbersSplitted.value.push(_val)
    } else {
      numbersSplitted.value.push(Number(_val))
    }
  }
}

// Initial processing
splitValue()

// Watch for value shifts
watch(() => props.value, () => {
  splitValue()
})
</script>

<style lang="less" scoped>
.loop-item {
  display: inline-block;
}
</style>