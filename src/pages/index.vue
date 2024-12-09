<script setup lang="ts">
	import { components } from '../slices'
	const prismic = usePrismic()

	const { data: page } = await useAsyncData(
		'home',
		async () => {
			const document = await prismic.client.getSingle('home')

			if (document) {
				return document
			} else {
				throw createError({ statusCode: 404, message: 'Page not found' })
			}
		},
		{
			getCachedData(key, nuxtApp) {
				return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
			},
		}
	)

	useSeoMeta({
		title: page?.value?.data?.meta_title || 'Littlebluedoor',
		ogTitle: page?.value?.data?.meta_title || 'Littlebluedoor',
		description: page?.value?.data?.meta_description || null,
		ogDescription: page?.value?.data?.meta_description || null,
		ogUrl: 'https://www.littlebluedoor.com' + useRoute().path,
		ogImage: page?.value?.data?.meta_image?.url || null,
		twitterTitle: page?.value?.data?.meta_title || 'Littlebluedoor',
		twitterDescription: page?.value?.data?.meta_description || null,
		twitterImage: page?.value?.data?.meta_image?.url || null,
		twitterCard: 'summary_large_image',
	})

	useHead({
		htmlAttrs: {
			lang: 'en',
		},
		link: [
			{
				rel: 'icon',
				type: 'image/png',
				href: '/favicon.png',
			},
		],
	})

	defineRouteRules({
		prerender: true,
	})
</script>

<template>
	<div>
		<SliceZone wrapper="main" :components="components" :slices="page?.data?.slices || []" />
	</div>
</template>
