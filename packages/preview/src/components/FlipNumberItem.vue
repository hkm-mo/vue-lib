<template>
  <div class="flip-number-item">
    <div class="flip" :class="animationClass" :style="cssVariables">
      <div class="digital front" :class="'number' + frontCount"></div>
      <div class="digital back" :class="'number' + backCount"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps({
  value: {
    type: Number,
    required: true
  },
  speed: {
    type: Number,
    default: 1200
  },
  width: {
    type: String,
    default: '60px'
  }
})

const frontCount = ref(0)
const backCount = ref(props.value)
const animationClass = ref('')
const isFlipping = ref(false)

// Timing parameters
const animDuration = ref(0.3)
const stepTimeout = ref(1200)

// Computed style mapping component properties directly into standard CSS variables
const cssVariables = computed(() => {
  return {
    '--flip-width': props.width,
    '--flip-anim-duration': `${animDuration.value}s`
  }
})

watch(() => props.value, (newVal, oldVal) => {
  if (newVal === oldVal) return

  let totalSteps = Math.abs(newVal - oldVal)

  // Direct 1-step fix condition for boundary rollover wrapping (0 <-> 9)
  if ((oldVal === 0 && newVal === 9) || (oldVal === 9 && newVal === 0)) {
    totalSteps = 1
  }

  // Calculate standard window per transition sequence
  const durationMs = props.speed / totalSteps
  stepTimeout.value = durationMs

  // Quadratic ease-out interpolation formula
  const progress = totalSteps / 9
  const easeOutProgress = 1 - Math.pow(1 - progress, 2)
  const dynamicDuration = 0.1 + (0.3 - 0.1) * easeOutProgress

  // Clamp animation boundaries
  animDuration.value = Math.max(0.1, Math.min(0.3, dynamicDuration))

  // Execute movement paths
  if (oldVal === 0 && newVal === 9) {
    flipUp(newVal, oldVal, true)
  } else if (oldVal === 9 && newVal === 0) {
    flipDown(newVal, oldVal, true)
  } else if (newVal < oldVal) {
    flipUp(newVal, oldVal, false)
  } else if (newVal > oldVal) {
    flipDown(newVal, oldVal, false)
  }
})

const flipDown = async (newVal, oldVal, isBoundaryDirect) => {
  if (isBoundaryDirect) {
    await flipDownOne(oldVal)
    return
  }
  let current = oldVal
  while (newVal > current) {
    await flipDownOne(current)
    current++
  }
}

const flipUp = async (newVal, oldVal, isBoundaryDirect) => {
  if (isBoundaryDirect) {
    await flipUpOne(oldVal)
    return
  }
  let current = oldVal
  while (newVal < current) {
    await flipUpOne(current)
    current--
  }
}

const flipDownOne = async (num) => {
  if (isFlipping.value) return false
  frontCount.value = num
  backCount.value = frontCount.value >= 9 ? 0 : frontCount.value + 1
  animationClass.value = 'flip-down'
  isFlipping.value = true
  await resetClass()
}

const flipUpOne = async (num) => {
  if (isFlipping.value) return false
  frontCount.value = num
  backCount.value = frontCount.value <= 0 ? 9 : frontCount.value - 1
  animationClass.value = 'flip-up'
  isFlipping.value = true
  await resetClass()
}

const resetClass = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      animationClass.value = ''
      isFlipping.value = false
      frontCount.value = backCount.value
      setTimeout(() => {
        resolve()
      }, 0)
    }, stepTimeout.value)
  })
}
</script>

<style lang="less" scoped>
.flip {
  --flip-height: calc(var(--flip-width) * 1.6666);
  --flip-line-height: var(--flip-height);
  --flip-font-size: calc(var(--flip-width) * 1.1);
  --flip-border-radius: calc(var(--flip-width) * 0.1666);
  --flip-perspective-depth: calc(var(--flip-width) * 2.6666);
  display: inline-block;
  position: relative;

  // Aspect ratio calculations configured inside CSS via calc()
  width: var(--flip-width);
  height: var(--flip-height);
  line-height: var(--flip-line-height);
  border: solid 1px #000;
  border-radius: var(--flip-border-radius);
  background: #fff;
  font-size: calc(var(--flip-font-size));
  color: #fff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
  text-align: center;
  font-family: 'Helvetica Neue';

  .digital {

    &:before,
    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      background: #000;
      overflow: hidden;
      box-sizing: border-box;
    }

    &:before {
      top: 0;
      bottom: 50%;
      border-radius: calc(var(--flip-border-radius)) calc(var(--flip-border-radius)) 0 0;
      border-bottom: solid 1px #666;
    }

    &:after {
      top: 50%;
      bottom: 0;
      border-radius: 0 0 calc(var(--flip-border-radius)) calc(var(--flip-border-radius));
      line-height: 0;
    }
  }

  /* 向下翻 */
  &.flip-down {
    .front:before {
      z-index: 3;
      transform-origin: 50% 100%;
      animation: frontFlipDown var(--flip-anim-duration) ease-out both;
      box-shadow: 0 -2px 6px rgba(255, 255, 255, 0.3);
      backface-visibility: hidden;
    }

    .back:after {
      z-index: 2;
      transform-origin: 50% 0%;
      transform: perspective(var(--flip-perspective-depth)) rotateX(180deg);
      animation: backFlipDown var(--flip-anim-duration) ease-out both;
    }

    .front:after,
    .back:before {
      z-index: 1;
    }
  }

  /* 向上翻 */
  &.flip-up {
    .front:after {
      z-index: 3;
      transform-origin: 50% 0;
      animation: frontFlipUp var(--flip-anim-duration) ease-out both;
      box-shadow: 0 2px 6px rgba(255, 255, 255, 0.3);
      backface-visibility: hidden;
    }

    .back:before {
      z-index: 2;
      transform-origin: 50% 100%;
      transform: perspective(var(--flip-perspective-depth)) rotateX(-180deg);
      animation: backFlipUp var(--flip-anim-duration) ease-out both;
    }

    .front:before,
    .back:after {
      z-index: 1;
    }
  }

  .number0 {

    &:before,
    &:after {
      content: '0';
    }
  }

  .number1 {

    &:before,
    &:after {
      content: '1';
    }
  }

  .number2 {

    &:before,
    &:after {
      content: '2';
    }
  }

  .number3 {

    &:before,
    &:after {
      content: '3';
    }
  }

  .number4 {

    &:before,
    &:after {
      content: '4';
    }
  }

  .number5 {

    &:before,
    &:after {
      content: '5';
    }
  }

  .number6 {

    &:before,
    &:after {
      content: '6';
    }
  }

  .number7 {

    &:before,
    &:after {
      content: '7';
    }
  }

  .number8 {

    &:before,
    &:after {
      content: '8';
    }
  }

  .number9 {

    &:before,
    &:after {
      content: '9';
    }
  }
}

@keyframes frontFlipDown {
  0% {
    transform: perspective(var(--flip-perspective-depth)) rotateX(0deg);
  }

  100% {
    transform: perspective(var(--flip-perspective-depth)) rotateX(-180deg);
  }
}

@keyframes backFlipDown {
  0% {
    transform: perspective(var(--flip-perspective-depth)) rotateX(180deg);
  }

  100% {
    transform: perspective(var(--flip-perspective-depth)) rotateX(0deg);
  }
}

@keyframes frontFlipUp {
  0% {
    transform: perspective(var(--flip-perspective-depth)) rotateX(0deg);
  }

  100% {
    transform: perspective(var(--flip-perspective-depth)) rotateX(180deg);
  }
}

@keyframes backFlipUp {
  0% {
    transform: perspective(var(--flip-perspective-depth)) rotateX(-180deg);
  }

  100% {
    transform: perspective(var(--flip-perspective-depth)) rotateX(0deg);
  }
}
</style>