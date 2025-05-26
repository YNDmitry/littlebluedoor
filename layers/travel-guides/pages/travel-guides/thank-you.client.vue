<script setup lang="ts">
import { PrismicLink } from "#components";
import { isFilled } from "@prismicio/client";

definePageMeta({
  middleware: "travel-success",
});

useSeoMeta({
  title: "Thank you | Littlebluedoor",
});

onMounted(() => {
  document.body.classList.remove("custom");
});

const settings = useSettings();
</script>

<template>
  <div class="max-w-[40rem] mx-auto text-center pt-[10rem] pb-[5rem]">
    <h1 class="text-[2rem]">Thank you!</h1>
    <p class="mt-2">
      Check your email, a PDF file will be sent there.<br /><br />If you have
      not received the PDF file, please write to us by
      <PrismicLink
        v-if="isFilled.link(settings?.data?.email)"
        :field="'mailto:' + settings?.data?.email?.url"
        class="underline"
        >email</PrismicLink
      >
      or
      <PrismicLink
        v-if="isFilled.link(settings?.data?.whatsapp)"
        :field="settings?.data?.whatsapp"
        target="_blank"
        class="underline"
        >WhatsApp</PrismicLink
      >.
    </p>
    <NuxtLink
      to="/"
      class="hover:bg-primary-20 hover:text-white min-w-[300px] text-center inline-block mx-auto bg-white text-[16px] py-[16px] px-[25px] font-medium text-bg2 rounded-lg transition-colors mt-[40px] uppercase"
      >Homepage</NuxtLink
    >
  </div>
</template>
