// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	srcDir: 'src/',

	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
		layoutTransition: { name: 'layout', mode: 'out-in' },

		head: {
			htmlAttrs: {
				lang: 'en',
			},
			link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
			script: [
				{
					async: true,
					defer: true,
					src: 'https://static.cdn.prismic.io/prismic.js?new=true&repo=littlebluedoor',
				},
			],
		},
	},

	runtimeConfig: {
		public: {
			motion: {
				directives: {
					'fade-in': {
						initial: {
							opacity: 0,
						},
						visibleOnce: {
							opacity: 1,
							decay: 0.8,
						},
					},
				},
			},
		},
	},

	modules: [
		'@nuxtjs/tailwindcss',
		'nuxt-swiper',
		'@nuxt/fonts',
		'@nuxt/image',
		'nuxt-lenis',
		'@nuxtjs/prismic',
		'@vueuse/nuxt',
		'@vueuse/motion/nuxt',
		'@vee-validate/nuxt',
		'nuxt-primevue',
		'@formkit/auto-animate',
	],

	css: ['~/assets/css/global.css'],

	prismic: {
		endpoint: 'littlebluedoor',
		clientConfig: {
			routes: [
				{
					type: 'page',
					path: '/:uid',
				},
			],
		},
	},

	primevue: {
		options: {
			unstyled: true,
		},
		components: {
			include: ['Accordion', 'AccordionTab'],
		},
	},

	image: {
		format: ['webp'],
		quality: 75,
		prismic: {},
	},
})
