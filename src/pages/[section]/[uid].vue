<script setup lang="ts">
	import { components } from '../../slices'
	const prismic = usePrismic()
	const route = useRoute()

	const { data: page } = await useAsyncData(route.params.uid, async () => {
		const document = await prismic.client.getByUID('experiences', route.params.uid)

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
	<SliceZone wrapper="main" :components="components" :slices="page?.data?.slices || []" />
</template>
