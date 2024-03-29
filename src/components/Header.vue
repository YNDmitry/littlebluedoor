<script setup lang="ts">
const navList = ref([
  { name: "Bookings", path: "/bookings" },
  { name: "Itineraries", path: "/ltineraries" },
  { name: "Experiences", path: "/experiences" },
  { name: "Digital Guides", path: "/digital-guides" },
  { name: "About Us", path: "/about-us" },
  { name: "Contact Us", path: "/contact-us" },
]);

const show = ref(false);
</script>

<template>
  <header
    :class="{
      'min-h-screen': show,
    }"
    class="fixed z-50 w-full bg-bg"
  >
    <div class="px-[16px]">
      <div class="flex h-headerHeight items-center justify-between gap-6">
        <NuxtLink to="/">
          <NuxtImg src="/img/homePage/logo.png" class="w-[60px]" width="60" />
        </NuxtLink>

        <Burger :show="show" @update:show="show = $event" />

        <div
          :class="{
            'max-largeDesktop:visible max-largeDesktop:absolute  max-largeDesktop:top-[25px] max-largeDesktop:pt-headerHeight':
              show,
            'max-largeDesktop:hidden': !show,
          }"
          class="w-full largeDesktop:flex largeDesktop:max-w-[1000px] largeDesktop:justify-between"
        >
          <nav>
            <ul
              class="flex max-largeDesktop:flex-col max-largeDesktop:items-center max-largeDesktop:gap-3 largeDesktop:gap-6"
            >
              <li v-for="(item, index) in navList" :key="index">
                <NuxtLink
                  :to="item.path"
                  class="hover:text-mainColorHover transition-colors max-largeDesktop:text-[23px]"
                  >{{ item.name }}</NuxtLink
                >
              </li>
            </ul>
          </nav>

          <NuxtLink
            to="/"
            class="hover:text-mainColorHover flex items-center justify-center gap-2 max-largeDesktop:pt-[20px] max-largeDesktop:text-[20px] max-largeDesktop:text-[23px]"
          >
            <IconsWhatsapp customClasses="text-mainColor" />

            <span>PLAN YOUR JOURNEY</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>
