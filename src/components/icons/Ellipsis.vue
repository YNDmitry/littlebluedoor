<template>
  <svg
    width="40"
    height="30"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    class="instagram__photos-item-head-icon"
  >
    <path d="M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
    <path d="M9 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
    <path d="M17 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
  </svg>
</template>

<script>
export default {
  props: {
    customClasses: {
      type: String,
    },
  },
};
</script>
