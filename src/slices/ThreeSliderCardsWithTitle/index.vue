<script setup lang="ts">
import { isFilled } from "@prismicio/client";
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ThreeSliderCardsWithTitleSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section
    class="py-[100px] max-tablet:py-[50px]"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="mx-auto max-w-[1400px] px-4">
      <h2
        v-motion-fade-in
        class="text-center font-[500] uppercase max-tablet:text-[20px] text-[28px]"
      >
        {{ slice?.primary?.title }}
      </h2>

      <div
        v-if="slice?.variation === 'default'"
        class="grid gap-x-6 gap-y-20 pt-[45px] mobile:grid-cols-lbdOffer"
      >
        <div
          class="flex w-full flex-col items-center"
          v-for="(item, idx) in slice?.items"
          :key="idx"
        >
          <NuxtLink
            v-motion-fade-in
            :to="
              item?.button_link?.url ||
              '/experiences/' + item?.button_link?.uid ||
              null
            "
            class="relative w-full rounded-lg overflow-hidden group"
          >
            <NuxtImg
              provider="prismic"
              class="object-cover aspect-square max-tablet:aspect-auto max-tablet:h-[500px] w-full"
              :src="item?.image?.url"
              width="300"
            />
            <div
              class="absolute bottom-0 bg-bg2/50 backdrop-blur-md p-4 rounded-t-lg z-10 flex flex-col gap-0 transition-[gap] duration-500 group-hover:gap-6 max-tablet:gap-4"
            >
              <h3
                class="text-[1.25rem] max-tablet:text-[1rem] text-white font-medium uppercase text-center"
              >
                {{ item?.title }}
              </h3>

              <p
                class="m-0 text-center text-white overflow-hidden max-h-0 transition-[max-height] duration-700 group-hover:max-h-96 text-[0.875rem] max-tablet:text-[0.75rem] max-tablet:max-h-full"
              >
                <span>{{ item?.paragraph }}</span>
                <span class="block text-[14px]">{{
                  item?.days_and_nights
                }}</span>
              </p>
            </div>
          </NuxtLink>
          <div
            v-motion-fade-in
            class="flex flex-col items-center justify-end mt-4"
          >
            <NuxtLink
              v-if="isFilled.link(item?.button_link)"
              :to="
                item?.button_link?.url ||
                '/experiences/' + item?.button_link?.uid ||
                null
              "
              class="hover:bg-primary-20 hover:text-white uppercase py-2 px-7 bg-white text-[1rem] max-tablet:text-[0.75rem] font-regular rounded-lg text-bg transition-colors"
            >
              find out more
            </NuxtLink>
          </div>
        </div>
      </div>

      <div
        v-if="slice?.variation === 'commingSoon'"
        class="grid gap-y-10 items-start gap-x-6 pt-[45px] mobile:grid-cols-lbdOffer"
      >
        <article
          class="flex flex-col items-center h-full"
          v-for="(item, idx) in slice?.items"
          :key="idx"
        >
          <div
            v-motion-fade-in
            v-if="isFilled.linkToMedia(item?.image)"
            class="w-full"
          >
            <NuxtImg
              provider="prismic"
              class="object-cover w-full aspect-square h-[300px]"
              :src="item?.image?.url"
            />
          </div>

          <div
            v-if="item?.title || item?.days_and_nights"
            v-motion-fade-in
            class="flex flex-col justify-between gap-4 pt-[20px] h-full"
          >
            <h3
              v-if="item?.title"
              class="text-[20px] font-medium uppercase text-center"
            >
              {{ item?.title }}
            </h3>

            <span
              v-if="item?.days_and_nights"
              class="text-center text-[14px] font-medium uppercase"
              >{{ item?.days_and_nights }}</span
            >
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
