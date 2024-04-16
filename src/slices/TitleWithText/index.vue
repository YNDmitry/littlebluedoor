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
		class="py-[60px]"
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
	>
		<h2
			v-motion-fade-in
			v-if="slice?.primary?.title"
			class="text-center font-[500] uppercase max-tablet:text-[25px] text-[28px] pb-[45px]"
		>
			{{ slice?.primary?.title }}
		</h2>

		<div v-motion-fade-in class="mx-auto flex max-w-[747px] flex-col items-center px-4">
			<PrismicRichText
				:field="slice?.primary?.body"
				v-if="slice?.primary?.body"
				class="text-center"
			/>

			<div v-motion-fade-in class="block text-center mt-[40px]" v-if="slice.primary.button_link">
				<NuxtLink
					:to="slice.primary.button_link.url || ''"
					class="hover:bg-mainColorHover inline-block mx-auto bg-mainColor text-[16px] py-[16px] px-[25px] font-medium text-bg transition-colors uppercase"
					>{{ slice.primary.button_label }}</NuxtLink
				>
			</div>

			<div
				v-motion-fade-in
				v-if="slice?.variation === 'textWithButtonAndIcon' && slice?.primary?.image?.url"
				class="block mt-[70px]"
			>
				<NuxtImg
					provider="prismic"
					:src="slice?.primary?.image?.url"
					:quality="80"
					width="200"
					class="w-full"
				/>
			</div>
		</div>
	</section>
</template>
