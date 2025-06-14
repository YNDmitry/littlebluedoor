<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { useSettings } from "../../composables/useSettings";
import { Pagination } from "swiper/modules";
import { isFilled } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.InstagramCardsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const settings = useSettings();

const swiperRef = ref<null>(null);
const swiper = useSwiper(swiperRef, {
  loop: true,
  autoplay: { delay: 5000 },
  modules: [Pagination],
  breakpoints: {
    320: {
      slidesPerView: "auto",
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 35,
    },
  },
  pagination: {
    clickable: true,
  },
});
const next = () => swiper.next();
</script>

<template>
  <section
    class="py-[60px] max-tablet:py-[50px]"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="px-4 mx-auto max-w-[81.25rem] w-[95%]">
      <h2
        v-motion-fade-in
        class="px-4 text-center text-[28px] font-[500] uppercase max-tablet:text-[25px] max-mobile:text-[20px]"
      >
        {{ slice?.primary?.title }}
      </h2>

      <div class="relative">
        <ClientOnly>
          <swiper-container
            ref="swiperRef"
            v-motion-fade-in
            id="instagram-slider"
            class="pt-[50px] mt-6 !ml-[-1rem] !pl-[1rem] !mr-[-1rem] !pr-[1rem]"
          >
            <swiper-slide
              v-for="(slide, idx) in slice?.items"
              :key="idx"
              class="max-largeDesktop:max-w-[450px] max-largeDesktop:mr-[20px] max-tablet:max-w-[300px]"
            >
              <NuxtLink
                v-if="isFilled.link(settings?.data?.instagram)"
                :to="settings?.data?.instagram?.url"
                target="_blank"
              >
                <div
                  class="flex justify-between items-center bg-white text-black px-3 py-3"
                >
                  <div class="flex items-center gap-3">
                    <div
                      class="rounded-[100%] overflow-hidden h-[30px] w-[30px]"
                      v-if="isFilled.link(slice?.primary?.avatar)"
                    >
                      <NuxtImg
                        provider="prismic"
                        :src="slice?.primary?.avatar?.url"
                        width="30"
                        height="30"
                        class="object-cover w-full h-full"
                        placeholder
                      />
                    </div>

                    <div class="instagram__photos-item-user">
                      <div class="text-[10px]">{{ slice?.primary?.title }}</div>
                      <div class="text-[10px]">{{ slide?.country || "" }}</div>
                    </div>
                  </div>

                  <IconsEllipsis />
                </div>

                <div v-if="isFilled.link(slide?.image)">
                  <NuxtImg
                    provider="prismic"
                    class="mx-auto object-cover w-full h-[250px]"
                    :src="slide?.image?.url"
                    width="350"
                    :quality="80"
                  />
                </div>
              </NuxtLink>
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<style>
#instagram-slider
  .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {
  position: relative;
}
</style>
