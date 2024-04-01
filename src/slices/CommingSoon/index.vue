<script setup lang="ts">
	import { type Content } from '@prismicio/client'

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	defineProps(
		getSliceComponentProps<Content.CommingSoonSlice>(['slice', 'index', 'slices', 'context'])
	)
</script>

<template>
	<section
		class="flex flex-col gap-[40px] py-[100px]"
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
	>
		<NuxtImg
			provider="prismic"
			v-if="slice?.primary?.image?.url"
			:quality="80"
			class="mx-auto w-[80px]"
			:src="slice?.primary?.image?.url"
			width="80"
		/>
		<p class="text-center uppercase max-tablet:text-[20px] tablet:text-[30px]">
			{{ slice?.primary?.title }}
		</p>
	</section>
</template>
