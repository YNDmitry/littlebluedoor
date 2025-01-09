<script setup lang="ts">
	import { components } from '../../slices'
	const prismic = usePrismic()
	const route = useRoute()

	const { data: page } = await useAsyncData(
		`section-${route.params.uid}`,
		async () => {
			const document = await prismic.client.getByUID('experiences', route.params.uid as string)

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
		ogUrl: 'https://www.littlebluedoor.com' + useRoute().path,
		ogDescription: page?.value?.data?.meta_description || null,
		ogImage: page?.value?.data?.meta_image?.url || null,
		twitterTitle: page?.value?.data?.meta_title || 'Littlebluedoor',
		twitterDescription: page?.value?.data?.meta_description || null,
		twitterImage: page?.value?.data?.meta_image?.url || null,
		twitterCard: 'summary_large_image',
	})

	useHead({
		htmlAttrs: {
			style: `
        --exp-background-color: ${page?.value?.data?.background_color};
        --exp-text-color: ${page?.value?.data?.text_color};
      `,
		},
	})
</script>

<template>
	<SliceZone wrapper="main" :components="components" :slices="page?.data?.slices || []" />
</template>

<style>
	body {
		background-color: var(--exp-background-color, #272b37) !important;
		color: var(--exp-text-color, #d9d9d9) !important;
	}
</style>
