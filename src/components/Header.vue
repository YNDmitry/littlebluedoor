<script setup lang="ts">
const settings = useSettings();

const isMobile = useMediaQuery("(max-width: 1200px)");

const activePopover = ref<number | null>(null);
const show = ref(false);
</script>

<template>
  <header
    class="fixed bg-opacity-50 z-[1000] top-2 left-2 right-2 rounded-lg backdrop-blur-lg bg-[#3c3f4a] text-white"
  >
    <div class="px-[16px]">
      <div
        id="nav"
        class="relative flex h-headerHeight items-center justify-between gap-6"
      >
        <NuxtLink
          to="/"
          class="z-[1000] hover:opacity-80 transition-all"
          @click="show = false"
        >
          <IconsLogo class="text-white w-[55px]" />
        </NuxtLink>

        <Burger :show="show" @click="show = !show" class="z-[1000]" />

        <div
          :class="{
            'max-largeDesktop:hidden': !show,
          }"
          class="max-largeDesktop:fixed max-largeDesktop:motion-opacity-in max-largeDesktop:rounded-lg max-largeDesktop:overflow-clip max-largeDesktop:h-[calc(100dvh-1rem)] max-largeDesktop:flex-col flex items-center max-largeDesktop:z-[999] max-largeDesktop:left-0 max-largeDesktop:right-0 max-largeDesktop:bottom-0 max-largeDesktop:top-0"
        >
          <div
            class="max-largeDesktop:bg-bg2 max-largeDesktop:pb-[8rem] max-largeDesktop:h-full overflow-y-auto max-largeDesktop:w-full max-largeDesktop:pb-8 max-largeDesktop:px-4 max-largeDesktop:rounded-b-lg max-largeDesktop:pt-[6.25rem] max-largeDesktop:rounded-lg flex items-center max-largeDesktop:flex-col"
          >
            <nav
              class="absolute max-largeDesktop:static max-largeDesktop:top-0 left-[50%] translate-x-[-50%] max-largeDesktop:translate-x-0"
            >
              <ul
                class="flex max-largeDesktop:flex-col max-largeDesktop:items-center max-largeDesktop:gap-7 largeDesktop:gap-6"
              >
                <li
                  v-for="(item, idx) in settings?.data?.navigation"
                  :key="idx"
                  @mouseenter="activePopover = idx"
                  @mouseleave="activePopover = null"
                  @click="isMobile && (show = !show)"
                  class="relative"
                >
                  <PrismicLink
                    :field="item.link[0]"
                    class="hover:opacity-70 max-largeDesktop:text-[1.25rem] transition-opacity relative z-20 whitespace-nowrap"
                  >
                    {{ item.link[0].text }}
                  </PrismicLink>

                  <div
                    v-show="
                      (item.link.length > 1 && activePopover === idx) ||
                      (isMobile && item.link.length > 1)
                    "
                    class="absolute max-largeDesktop:static z-10 top-0 bottom-0 largeDesktop:motion-opacity-in pt-10 max-largeDesktop:mt-0 max-largeDesktop:pt-0"
                  >
                    <ul
                      class="flex flex-col gap-2 bg-bg max-largeDesktop:text-center shadow-md rounded-md max-largeDesktop:gap-7 px-4 py-2 max-largeDesktop:shadow-none max-largeDesktop:bg-transparent max-largeDesktop:px-0 max-largeDesktop:pt-7"
                    >
                      <li
                        v-for="link in item.link.slice(1)"
                        :key="link.key"
                        @click="isMobile && (show = !show)"
                      >
                        <PrismicLink
                          @click="isMobile && (show = !show)"
                          :field="link"
                          class="whitespace-nowrap max-largeDesktop:text-[1.25rem]"
                        >
                          {{ link.text }}
                        </PrismicLink>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>

            <div
              class="max-largeDesktop:absolute max-largeDesktop:px-4 max-largeDesktop:z-10 max-largeDesktop:left-0 max-largeDesktop:right-0 max-largeDesktop:bottom-0 max-largeDesktop:bg-bg2 max-largeDesktop:py-4 max-largeDesktop:flex overflow-auto"
            >
              <NuxtLink
                v-if="settings?.data?.whatsapp?.url"
                :to="settings?.data?.whatsapp?.url"
                target="_blank"
                class="flex bg-white max-largeDesktop:w-full max-largeDesktop:mt-auto max-tablet:text-[0.875rem] rounded-lg hover:bg-white/80 transition-all px-4 py-1 text-[0.875rem] text-bg items-center justify-center gap-2 max-largeDesktop:text-[1rem]"
              >
                <IconsWhatsapp customClasses="text-bg" />

                <span class="uppercase">Plan your journey</span>
              </NuxtLink>
            </div>
            <div
              v-if="isMobile"
              class="absolute h-[10rem] pointer-events-none bg-gradient-to-t from-bg2 from-30% to-transparent bottom-0 w-full"
            ></div>
            <div
              v-if="isMobile"
              class="absolute h-[10rem] pointer-events-none bg-gradient-to-t from-transparent from-50% to-bg2 top-0 w-full"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
