<script setup lang="ts">
	import { components } from '../slices'
	const prismic = usePrismic()

	const { data: page } = await useAsyncData('home', async () => {
		const document = await prismic.client.getSingle('home')

		if (document) {
			return document
		} else {
			throw createError({ statusCode: 404, message: 'Page not found' })
		}
	})

	useSeoMeta({
		title: page?.value?.data?.meta_title || 'Littlebluedoor',
		ogTitle: page?.value?.data?.meta_title || 'Littlebluedoor',
		description: page?.value?.data?.meta_description || null,
		ogDescription: page?.value?.data?.meta_description || null,
		ogImage: page?.value?.data?.meta_image?.url || null,
		twitterCard: 'summary_large_image',
	})
</script>

<template>
	<div>
		<SliceZone wrapper="main" :components="components" :slices="page?.data?.slices || []" />
	</div>
</template>
