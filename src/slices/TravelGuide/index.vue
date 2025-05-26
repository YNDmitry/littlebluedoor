<script setup lang="ts">
import type { Content } from "@prismicio/client";
import { isFilled } from "@prismicio/client";
import { Pagination } from "swiper/modules";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.TravelGuideSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const linkResolver = (doc: any) => "/" + doc.uid;

const serializer = {
  heading2: ({ children }: any) =>
    `<h2 class="first:mt-0 font-[500] uppercase max-tablet:text-[1.25rem] text-[1.25rem] mb-[1.25rem] mt-[1.5625rem]">${children}</h2>`,
  heading3: ({ children }: any) =>
    `<h3 class="text-[20px] mb-[15px] mt-[20px] uppercase font-[500]">${children}</h3>`,
  paragraph: ({ children }: any) =>
    `<p class="my-[15px] first:mt-0 last:m-0">${children}</p>`,
  strong: ({ children }: any) => `<strong >${children}</strong>`,
  em: ({ children }: any) => `<em>${children}</em>`,
  listItem: ({ children }: any) => `<li>• ${children}</li>`,
  oListItem: ({ children }: any) => `<li>• ${children}</li>`,
  list: ({ children }: any) => `<ul>${children}</ul>`,
  oList: ({ children }: any) => `<ol>${children}</ol>`,
  hyperlink: ({ node, children }: any) => {
    const target = node.data.target
      ? `target="${node.data.target}" rel="noopener"`
      : "";
    const url = linkResolver(node.data);
    return `<a ${target} href="${url}">${children}</a>`;
  },
  label: ({ node, children }: any) => {
    return `<span class="${node.data.label}">${children}</span>`;
  },
  span: ({ text }: any) => (text ? text : ""),
};

const prismic = usePrismic();
const route = useRoute();
const currentUid = route.params.uid;

const recommendationsGuides = await prismic.client.getAllByType(
  `travel_guide`,
  {
    pageSize: 6,
  },
);

const recommendations = recommendationsGuides
  ?.filter((g) => g.uid !== currentUid)
  .slice(0, 5)
  .map((card: any) => ({
    id: card.id,
    title: card?.data?.slices?.[0].primary.name,
    slug: card.url,
    description: card?.data?.slices?.[0].primary.card_description,
    price: card.data.slices?.[0].primary.price,
    image: card.data.slices?.[0].primary.images[0].image,
  }));

const swiperRef = ref<null>(null);
const swiper = useSwiper(swiperRef, {
  modules: [Pagination],
  pagination: {
    el: "pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: "auto",
    },
    1200: {
      slidesPerView: recommendations.length,
      spaceBetween: 35,
    },
  },
});
const next = () => swiper.next();

const handlePayment = () => {
  usePayBalance(
    props.slice.primary.price,
    props.slice.primary.currency?.split("-")[0],
    props.slice.primary.currency?.split("-")[1],
    "/travel-guides/thank-you",
  );
};

const swiperMainRef = ref<null>(null);
const swiperMain = useSwiper(swiperMainRef, {
  loop: true,
  modules: [Pagination],
  slidesPerView: 1,
  pagination: {
    clickable: true,
  },
});
const nextMain = () => swiperMain.next();

const isLarge = useMediaQuery(
  "(max-width: 768px)",
  { ssrWidth: 768 }, // Will enable SSR mode and render like if the screen was 768px wide
);
</script>

<template>
  <section
    class="flex items-center relative flex-col max-tablet:min-h-[20rem] min-h-[33rem] py-[10rem] max-tablet:pb-[5rem] max-tablet:pt-[6rem]"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div
      class="mx-auto flex max-w-[75rem] w-[95%] gap-16 max-tablet:gap-8 max-tablet:flex-col"
    >
      <div class="flex flex-col w-full gap-8">
        <template
          v-for="(item, idx) in slice.primary.images"
          :key="idx"
          v-if="!isLarge || slice.primary.images.length <= 1"
        >
          <NuxtImg
            v-if="isFilled.image(item.image)"
            :src="item.image.url"
            format="avif"
            width="1000"
            height="1000"
          />
        </template>
        <ClientOnly v-else-if="slice.primary.images.length >= 1">
          <swiper-container ref="swiperMainRef" class="w-full">
            <swiper-slide
              v-for="(item, idx) in slice.primary.images"
              :key="idx"
            >
              <NuxtImg
                v-if="isFilled.image(item.image)"
                :src="item.image.url"
                :alt="item.image.alt || ''"
                format="avif"
                width="1000"
                height="1000"
              />
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
      </div>
      <div class="max-w-[30rem] max-tablet:max-w-none w-full">
        <div class="py-8 sticky top-20 max-tablet:static max-tablet:pt-4">
          <h1
            class="font-[500] text-white uppercase leading-none max-tablet:text-[1.5625rem] tablet:text-[2.1875rem]"
          >
            {{ slice.primary.name }}
          </h1>
          <div class="text-white/50 text-[1rem] mt-4">
            €{{ slice.primary.price }}
          </div>
          <div class="py-4">
            <PrismicRichText
              :field="slice?.primary?.description"
              :serializer="serializer"
            />
          </div>
          <button
            @click="handlePayment"
            class="hover:bg-primary-20 hover:text-white w-full mx-auto rounded-lg bg-white py-[1rem] px-[1.5625rem] font-medium text-bg2 transition-colors uppercase"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
    <div class="pt-32 max-tablet:pt-18 w-[95%] max-w-[75rem] mx-auto">
      <h2
        class="font-[500] text-center uppercase max-tablet:text-[1.25rem] text-[1.25rem]"
      >
        You Might Also Like
      </h2>
      <ClientOnly>
        <swiper-container
          v-motion-fade-in
          ref="swiperRef"
          class="pt-[3.125rem]"
        >
          <swiper-slide
            v-for="(card, idx) in recommendations"
            :key="idx"
            class="max-largeDesktop:max-w-[28.125rem] max-largeDesktop:mr-[1.25rem] max-tablet:max-w-[18.75rem]"
          >
            <UiCardSecond
              :name="card.title"
              :title="'€' + card.price"
              :image="card.image.url"
              :link="card.slug"
              buttonTitle="Purchase"
            />
          </swiper-slide>
          <div id="pagination"></div>
        </swiper-container>
      </ClientOnly>
    </div>
  </section>
</template>
