// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	srcDir: 'src/',
	modules: ['@nuxtjs/tailwindcss', 'nuxt-swiper', '@nuxt/fonts', '@nuxt/image', 'nuxt-lenis'],
	css: ['~/assets/css/global.css'],
})
