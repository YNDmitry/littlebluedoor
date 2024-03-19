<template>
  <svg
    :class="customClasses"
    xmlns="http://www.w3.org/2000/svg"
    width="28px"
    height="28px"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      d="M5 12H19M19 12L13 6M19 12L13 18"
      stroke="#000000"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
  export default {
    props: {
      customClasses: {
        type: String,
        default: "",
      },
    },
  };
</script>
