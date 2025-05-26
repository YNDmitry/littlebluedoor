<script setup lang="ts">
import { isFilled } from "@prismicio/client";
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TestimonialsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section
    class="py-[60px]"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="px-4 mx-auto max-w-[81.25rem] w-[95%]">
      <h2
        v-motion-fade-in
        class="px-4 text-center font-[500] uppercase max-tablet:text-[26px] text-[28px]"
      >
        {{ slice?.primary.title }}
      </h2>

      <div
        v-motion-fade-in
        class="grid grid-cols-3 gap-[35px] max-tablet:gap-[20px] mt-11 max-laptop:grid-cols-1"
      >
        <template v-for="(item, idx) in slice?.items" :key="idx">
          <div
            class="relative group flex flex-col text-white min-h-[417px] rounded-lg overflow-hidden"
          >
            <NuxtImg
              provider="prismic"
              :quality="80"
              :src="item?.image?.url"
              v-if="isFilled.image(item?.image)"
              width="600"
              height="600"
              format="webp"
              class="h-full object-cover w-full max-tablet:aspect-auto max-tablet:h-[600px]"
              placeholder
            />
            <div
              class="absolute bottom-0 bg-bg2/50 backdrop-blur-md p-4 rounded-t-lg z-10 flex flex-col gap-0 group-hover:gap-6 transition-all max-tablet:gap-4"
            >
              <h3 class="text-[1.25rem] font-medium">
                {{ item?.title }}
              </h3>

              <p
                class="tablet:font-medium max-h-0 max-tablet:max-h-full overflow-hidden group-hover:max-h-96 duration-500 transition-all"
              >
                <span>{{ item?.paragraph }}</span>
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
