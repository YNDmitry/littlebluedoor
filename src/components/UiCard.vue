<script lang="ts" setup>
import type {
  RichTextField,
  ImageField,
  NumberField,
  KeyTextField,
} from "@prismicio/client";
import { isFilled } from "@prismicio/client";

interface Props {
  title?: KeyTextField | string | undefined;
  image?: ImageField | undefined;
  body?: KeyTextField | RichTextField | undefined;
  link?: string | undefined | null;
  price?: NumberField | number | undefined;
}

defineProps<Props>();
</script>

<template>
  <NuxtLink
    v-if="link"
    :to="link"
    v-motion-fade-in
    class="flex group flex-col gap-[15px] max-laptop:items-center"
  >
    <div class="relative rounded-lg overflow-hidden">
      <h3
        v-if="isFilled.keyText(title)"
        class="absolute top-0 text-white left-0 w-full text-center text-[20px] font-[500] uppercase px-4 py-2 bg-bg2 bg-opacity-50 backdrop-blur-md rounded-b-md"
      >
        {{ title }}
      </h3>

      <NuxtImg
        v-if="isFilled.image(image)"
        :src="image.url"
        :alt="image.alt || ''"
        format="avif"
        class="w-full aspect-square object-cover"
      />
      <div
        class="flex group-hover:max-h-96 group-hover:mb-0 -mb-10 max-tablet:mb-0 max-h-0 transition-all duration-700 max-tablet:!max-h-none flex-col gap-[10px] max-tablet:text-center absolute bottom-0 left-0 right-0 bg-bg2 bg-opacity-50 backdrop-blur-md rounded-t-lg p-4"
        v-if="body"
      >
        <PrismicRichText :field="body" v-if="body.length > 1 && body" />
        <div class="!text-white" v-else>
          {{ body }}
        </div>
      </div>
    </div>
    <div v-if="price" class="text-center text-[1rem]">€{{ price }}</div>
    <button
      class="hover:bg-primary-20 hover:text-white mx-auto rounded-lg bg-white text-[0.875rem] py-[0.5rem] px-[3.5rem] font-medium text-bg2 transition-colors uppercase"
    >
      Buy
    </button>
  </NuxtLink>

  <div
    v-else
    v-motion-fade-in
    class="flex group flex-col gap-[15px] max-laptop:items-center"
  >
    <div class="relative rounded-lg overflow-hidden">
      <h3
        v-if="title"
        class="absolute top-0 text-white left-0 w-full text-center text-[20px] font-[500] uppercase px-4 py-2 bg-bg2 bg-opacity-50 backdrop-blur-md rounded-b-md"
      >
        {{ title }}
      </h3>

      <NuxtImg
        v-if="isFilled.image(image)"
        :src="image.url"
        :alt="image.alt || ''"
        width="700"
        format="avif"
        class="w-full aspect-square object-cover"
      />
      <div
        class="flex group-hover:max-h-96 group-hover:mb-0 -mb-10 max-tablet:mb-0 max-h-0 transition-all duration-700 max-tablet:!max-h-none flex-col gap-[10px] max-tablet:text-center absolute bottom-0 left-0 right-0 bg-bg2 bg-opacity-50 backdrop-blur-md rounded-t-lg p-4"
        v-if="body"
      >
        <div class="!text-white">
          {{ body.length > 0 ? body[0].text : body }}
        </div>
      </div>
    </div>
    <div v-if="price" class="text-center">€{{ price }}</div>
  </div>
</template>
