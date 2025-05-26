<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header
      class="motion-blur-in-[30px] motion-opacity-in-[0%] motion-duration-[500ms]/opacity"
    />

    <div
      class="h-full flex-1 overflow-x-clip motion-blur-in-[30px] motion-opacity-in-[0%] motion-duration-[500ms]/opacity"
    >
      <slot />
    </div>

    <Footer />
    <ClientOnly>
      <Toast
        :pt="{
          container: 'p-2 bg-[red] rounded-md text-white',
          buttoncontainer: 'absolute right-2 top-2',
          summary: 'text-[1rem]',
          text: 'mt-2',
          detail: 'text-[0.7rem]',
        }"
      />
      <SpeedInsights />
    </ClientOnly>
  </div>
</template>
