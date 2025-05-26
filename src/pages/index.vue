<script setup lang="ts">
import { useCacheData } from "~/composables/useCachedData";
import { components } from "../slices";
const prismic = usePrismic();
const route = useRoute();

const { data: page } = await useAsyncData(
  "home",
  async () => {
    const document = await prismic.client.getSingle("home");

    if (document) {
      return document;
    } else {
      throw createError({ statusCode: 404, message: "Page not found" });
    }
  },
  { getCachedData: useCacheData },
);

useSeoMeta({
  title: page?.value?.data?.meta_title || "Littlebluedoor",
  ogTitle: page?.value?.data?.meta_title || "Littlebluedoor",
  description: page?.value?.data?.meta_description || null,
  ogDescription: page?.value?.data?.meta_description || null,
  ogUrl: "https://www.littlebluedoor.com" + route.path,
  ogImage: page?.value?.data?.meta_image?.url || null,
  twitterTitle: page?.value?.data?.meta_title || "Littlebluedoor",
  twitterDescription: page?.value?.data?.meta_description || null,
  twitterImage: page?.value?.data?.meta_image?.url || null,
  twitterCard: "summary_large_image",
});

defineRouteRules({
  prerender: true,
});

onMounted(() => {
  document.body.classList.remove("custom");
});
</script>

<template>
  <div>
    <SliceZone
      wrapper="main"
      :components="components"
      :slices="page?.data?.slices || []"
    />
  </div>
</template>
