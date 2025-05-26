<script setup lang="ts">
import { useCacheData } from "~/composables/useCachedData";
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();
const { data: page } = await useAsyncData(
  "[travel_guides_home]",
  () => prismic.client.getSingle("travel_guides_home"),
  { getCachedData: useCacheData },
);

useSeoMeta({
  title: page?.value?.data?.meta_title || "Littlebluedoor",
  ogTitle: page?.value?.data?.meta_title || "Littlebluedoor",
  description: page?.value?.data?.meta_description || null,
  ogDescription: page?.value?.data?.meta_description || null,
  ogUrl: "https://www.littlebluedoor.com" + route.path,
  ogImage: computed(() => prismic.asImageSrc(page.value?.data.meta_image)),
  twitterTitle: page?.value?.data?.meta_title || "Littlebluedoor",
  twitterDescription: page?.value?.data?.meta_description || null,
  twitterImage: page?.value?.data?.meta_image?.url || null,
  twitterCard: "summary_large_image",
});
</script>

<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
