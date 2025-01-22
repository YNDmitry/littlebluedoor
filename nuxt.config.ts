import Aura from '@primevue/themes/lara'
import * as prismic from '@prismicio/client'

const fetchRoutes = async (): Promise<string[]> => {
	const client = prismic.createClient('https://littlebluedoor.cdn.prismic.io/api/v2', {
		accessToken: process.env.PRISMIC_TOKEN,
	})

	const types = ['experiences', 'page']
	// Загружаем все документы по каждому типу
	const allRoutes = await Promise.all(
		types.map(async (type) => {
			const documents = await client.getAllByType(type)

			// Формируем маршруты для каждого документа
			return documents.map((doc) => {
				if (type === 'page') {
					// Убираем префикс для `page`
					return `/${doc.uid}`
				}
				// Для остальных типов добавляем префикс
				return `/${type}/${doc.uid}`
			})
		})
	)

	// Объединяем массивы маршрутов
	return allRoutes.flat()

	return routes
}

const routes = await fetchRoutes()

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
				{
					innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KD8FH474');`,
					type: 'text/javascript',
					charset: 'utf-8',
					hid: 'gtm-head',
					defer: true,
				},
			],
			noscript: [
				{
					innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KD8FH474"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
					tagPosition: 'bodyOpen',
					hid: 'gtm-noscript',
				},
			],
		},
	},

	nitro: {
		prerender: {
			routes,
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
		'@primevue/nuxt-module',
		'@formkit/auto-animate',
		'nuxt-mail',
		'@nuxtjs/robots',
		'@nuxtjs/sitemap',
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

	experimental: {
		inlineRouteRules: true,
	},

	fonts: {
		google: {
			families: [{ name: 'Montserrat', global: true, weights: [100, 800] }],
		},
	},

	primevue: {
		directives: {
			include: ['Tooltip'],
		},
		options: {
			theme: {
				preset: Aura,
			},
		},
		components: {
			include: ['Accordion', 'AccordionTab', 'DatePicker', 'Menu', 'Toast'],
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

	compatibilityDate: '2024-11-29',
})
