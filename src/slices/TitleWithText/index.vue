<script setup lang="ts">
	import { type Content } from '@prismicio/client'

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	defineProps(
		getSliceComponentProps<Content.TitleWithTextSlice>(['slice', 'index', 'slices', 'context'])
	)
</script>

<template>
	<section
		class="pb-[120px]"
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
	>
		<h2
			v-if="slice?.primary?.title"
			class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]"
		>
			{{ slice?.primary?.title }}
		</h2>

		<div class="mx-auto flex max-w-[747px] flex-col items-center px-4 pt-[45px]">
			<PrismicRichText
				:field="slice?.primary?.body"
				v-if="slice?.primary?.body"
				class="text-center"
			/>

			<div class="block text-center my-[70px]" v-if="slice.primary.button_link">
				<NuxtLink
					:to="slice.primary.button_link || ''"
					class="inline-block uppercase hover:bg-mainColorHover mx-auto px-8 py-4 bg-mainColor text-[25px] font-medium text-bg transition-colors max-tablet:mt-[40px] max-tablet:h-[55px] max-tablet:text-[20px] tablet:h-[67px]"
					>{{ slice.primary.button_label }}</NuxtLink
				>
			</div>

			<div v-if="slice?.variation === 'textWithButtonAndIcon'" class="block">
				<NuxtImg :src="slice?.primary?.image?.url" width="200" class="w-full" />
			</div>
		</div>
	</section>
</template>
