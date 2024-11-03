import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	srcDir: 'src/',
	serverDir: 'server/',

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
				{
					src: 'https://checkout.flywire.com/flywire-payment.js',
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
		'nuxt-mail',
		'@nuxtjs/robots',
		'@nuxtjs/sitemap',
		'nuxt-booster',
	],

	css: ['~/assets/css/global.css'],

	prismic: {
		endpoint: 'littlebluedoor',
		clientConfig: {
			routes: [
				{ type: 'home', path: '/' },
				{
					type: 'page',
					path: '/:uid',
				},
			],
		},
	},

	routeRules: {
		'/': {
			prerender: true,
		},
		'/contact-us': {
			prerender: true,
		},
		'/about-us': {
			prerender: true,
		},
		'/experiences': {
			prerender: true,
		},
		'/ltineraries': {
			prerender: true,
		},
	},

	experimental: {
		inlineRouteRules: true,
	},

	fonts: {
		families: [{ name: 'Montserrat', global: true, weights: [100, 800] }],
	},

	primevue: {
		options: {
			unstyled: true,
		},
		importPT: { from: path.resolve(__dirname, './src/assets/presets/lara/calendar/index') },
		components: {
			include: ['Accordion', 'AccordionTab', 'Calendar', 'Menu'],
		},
	},

	image: {
		format: ['webp'],
		quality: 75,
		prismic: {},
	},

	mail: {
		message: {
			to: process.env.MAIL_TO,
		},
		smtp: {
			service: 'gmail',
			auth: {
				user: process.env.MAIL_USER,
				pass: process.env.MAIL_PASSWORD,
			},
		},
	},
})
