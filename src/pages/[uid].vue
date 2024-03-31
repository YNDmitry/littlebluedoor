<script setup lang="ts">
	import { components } from '../slices'
	const prismic = usePrismic()
	const route = useRoute()

	const { data: page } = await useAsyncData(route.params.uid, async () => {
		const document = await prismic.client.getByUID('page', route.params.uid)

		if (document) {
			return document
		} else {
			throw createError({ statusCode: 404, message: 'Page not found' })
		}
	})

	useHead({
		title: page?.value?.data?.meta_title,
	})
</script>

<template>
	<SliceZone wrapper="main" :components="components" :slices="page?.data?.slices || []" />
</template>
