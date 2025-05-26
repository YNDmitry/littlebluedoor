<script lang="ts" setup>
interface Props {
  image: string;
  name: string;
  title: string;
  buttonTitle: string;
  link: string;
}
defineProps<Props>();
</script>

<template>
  <NuxtLink
    v-if="link"
    :to="link"
    class="inline-flex group flex-col items-center w-full"
    v-motion-fade-in
  >
    <div class="relative w-full rounded-lg overflow-hidden">
      <NuxtImg
        :src="image"
        provider="prismic"
        placeholder
        format="avif"
        width="600"
        height="600"
        class="aspect-square w-full object-cover"
      />
      <div
        v-if="link"
        class="absolute top-0 group-hover:opacity-80 opacity-0 transition-opacity duration-700 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-bg2"
      ></div>
      <div
        class="flex absolute rounded-t-lg bottom-0 left-0 right-0 px-4 py-2 flex-col items-center bg-bg2 bg-opacity-50 backdrop-blur-md"
      >
        <p class="text-[18px] text-white">{{ name }}</p>
        <div class="text-[18px] text-white">
          <p>{{ title }}</p>
        </div>
      </div>
    </div>
    <button
      v-if="buttonTitle"
      type="button"
      class="hover:bg-primary-20 hover:text-white rounded-lg uppercase py-2 px-7 bg-white text-[1rem] max-tablet:text-[0.75rem] font-regular text-bg transition-colors mt-4"
    >
      {{ buttonTitle }}
    </button>
  </NuxtLink>
</template>
