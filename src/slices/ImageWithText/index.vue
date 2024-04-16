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
		class="flex flex-col items-center pt-[60px] px-4"
	>
		<div v-motion-fade-in class="pb-[50px]" v-if="slice?.primary?.image?.url">
			<NuxtImg :src="slice?.primary?.image?.url || ''" width="80" />
		</div>

		<div v-motion-fade-in v-if="slice?.primary?.paragraph.length > 0">
			<PrismicRichText
				:field="slice?.primary?.paragraph"
				class="max-w-[650px] max-tablet:px-8 text-center"
				:style="[`padding: 0 ${slice?.primary?.spacing}`]"
			/>
		</div>

		<NuxtLink
			v-motion-fade-in
			v-if="slice.primary.button_label"
			:to="slice.primary.button_link?.url"
			class="hover:bg-mainColorHover inline-block mx-auto bg-mainColor text-[16px] py-[16px] px-[25px] font-medium text-bg transition-colors mt-[40px] uppercase"
		>
			{{ slice.primary.button_label }}
		</NuxtLink>
	</section>
</template>
