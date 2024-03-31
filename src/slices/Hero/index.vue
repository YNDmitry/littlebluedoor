<script setup lang="ts">
	import { type Content } from '@prismicio/client'

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	defineProps(getSliceComponentProps<Content.HeroSlice>(['slice', 'index', 'slices', 'context']))
</script>

<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
		class="pt-headerHeight"
	>
		<div class="px-4 pt-2 pb-8">
			<h1 class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]">
				{{ slice.primary.heading }}
			</h1>
		</div>

		<div>
			<NuxtImg
				v-if="slice?.primary?.image?.url"
				:src="slice?.primary?.image?.url"
				class="w-full object-cover max-tablet:h-[250px] h-[440px]"
				width="1440"
				height="440"
			/>
		</div>
	</section>
</template>
