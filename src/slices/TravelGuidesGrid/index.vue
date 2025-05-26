<script setup lang="ts">
import type { Content } from "@prismicio/client";
import { isFilled } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TravelGuidesGridSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const prismic = usePrismic();
const { data: cards } = await useAsyncData(
  "[travel_guides]",
  () => {
    const documents = prismic.client.getAllByType("travel_guide");
    return documents;
  },
  { getCachedData: useCacheData },
);
</script>

<template>
  <section
    class="py-[5rem] max-tablet:py-[3rem]"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="max-w-[81.25rem] w-[95%] mx-auto">
      <h2
        v-if="isFilled.keyText(slice.primary.title)"
        class="text-center mb-[2.8125rem] font-[500] uppercase max-tablet:text-[20px] text-[28px]"
        style="transform: translateZ(0px); opacity: 1"
      >
        {{ slice.primary.title }}
      </h2>
      <div
        v-if="cards && cards.length > 0"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <UiCardSecond
          v-for="card in cards"
          :key="card.id"
          :name="card.data.slices[0]?.primary.name"
          :title="'€' + card.data.slices[0]?.primary.price"
          :image="card.data.slices[0]?.primary.images[0]?.image.url"
          :link="card.url"
          buttonTitle="Purchase"
        />
      </div>
    </div>
  </section>
</template>
