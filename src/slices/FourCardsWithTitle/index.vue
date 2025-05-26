<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.FourCardsWithTitleSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="py-[70px] max-tablet:py-[50px]"
  >
    <div class="mx-auto max-w-[1415px] px-4 pb-5">
      <h2
        v-motion-fade-in
        class="text-center font-[500] uppercase max-tablet:text-[20px] text-[28px]"
        v-if="slice?.primary?.title"
      >
        {{ slice?.primary?.title }}
      </h2>

      <p
        v-motion-fade-in
        class="pt-4 text-center max-tablet:max-w-[340px] max-tablet:mx-auto"
        v-if="slice?.primary?.paragraph"
      >
        {{ slice?.primary?.paragraph }}
      </p>

      <div
        class="grid gap-5 max-tablet:gap-y-12 pt-8 mt-9 max-laptop:grid-cols-2 max-tablet:grid-cols-1 laptop:grid-cols-4"
      >
        <template v-for="item in slice?.items" :key="item.id">
          <UiCard :title="item.title" :body="item.body" :image="item.image" />
        </template>
      </div>
    </div>
  </section>
</template>
