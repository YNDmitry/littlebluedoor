<script lang="ts" setup>
const props = defineProps({
  throttle: {
    type: Number,
    default: 200,
  },
  duration: {
    type: Number,
    default: 2000,
  },
  hideDelay: {
    type: Number,
    default: 500,
  },
  resetDelay: {
    type: Number,
    default: 400,
  },
  estimatedProgress: {
    type: Function as unknown as () => (
      duration: number,
      elapsed: number,
    ) => number,
    required: false,
  },
});

const { progress, isLoading, error, start, finish, clear } =
  useLoadingIndicator({
    duration: props.duration,
    throttle: props.throttle,
    hideDelay: props.hideDelay,
    resetDelay: props.resetDelay,
    estimatedProgress: props.estimatedProgress,
  });
</script>

<template>
  <div
    v-show="isLoading"
    v-auto-animate
    class="fixed top-0 left-0 bottom-0 right-0 h-screen z-[999] bg-opacity-50 backdrop-blur-lg bg-[#3c3f4a] transition-all"
    :class="{ opacity: isLoading.value ? 1 : 0 }"
  ></div>
</template>
