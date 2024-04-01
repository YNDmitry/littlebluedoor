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
		class="flex flex-col items-center py-[100px]"
	>
		<div class="pb-[50px]">
			<NuxtImg src="/img/homePage/logo.png" />
		</div>

		<p class="max-w-[650px] text-center tablet:text-[20px]">
			At Little Blue Door, we curate your ideal journey from start to finish. Simply share your
			vision with us, and we'll bring it to life.
		</p>
	</section>
</template>
