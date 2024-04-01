<script setup lang="ts">
	import { type Content } from '@prismicio/client'

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	defineProps(
		getSliceComponentProps<Content.ImageWithTextSlice>(['slice', 'index', 'slices', 'context'])
	)
</script>

<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
		class="flex flex-col items-center pt-[60px]"
	>
		<div class="pb-[50px]">
			<NuxtImg src="/img/homePage/logo.png" width="80" />
		</div>

		<div v-if="slice?.primary?.paragraph.length > 0">
			<PrismicRichText :field="slice?.primary?.paragraph" class="max-w-[650px] text-center" />
		</div>
	</section>
</template>
