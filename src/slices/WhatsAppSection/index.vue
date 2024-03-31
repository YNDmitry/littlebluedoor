<script setup lang="ts">
	import { type Content } from '@prismicio/client'
	import { useSettings } from '../../composables/useSettings'

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	defineProps(
		getSliceComponentProps<Content.WhatsAppSectionSlice>(['slice', 'index', 'slices', 'context'])
	)

	const settings = useSettings()
</script>

<template>
	<section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
		<NuxtLink
			:to="settings?.data?.whatsapp.url"
			:target="settings?.data?.whatsapp.target || ''"
			class="flex flex-col items-center justify-center gap-5 px-4 pb-[100px]"
		>
			<IconsWhatsapp class="h-[64px] w-[64px]" />

			<p class="text-center uppercase tablet:text-[20px]">{{ slice?.primary.title }}</p>
		</NuxtLink>
	</section>
</template>
