<script setup lang="ts">
	import { type Content } from '@prismicio/client'

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	defineProps(
		getSliceComponentProps<Content.TwoCardsWithTitleSlice>(['slice', 'index', 'slices', 'context'])
	)
</script>

<template>
	<section
		class="pb-[150px] pt-[170px] max-tablet:pb-[80px] max-tablet:pt-[130px]"
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
	>
		<div class="mx-auto max-w-[1165px] px-4">
			<h1
				v-motion-fade-in
				class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]"
			>
				{{ slice?.primary?.title }}
			</h1>

			<div class="flex items-center justify-between gap-8 pt-[45px] max-tablet:flex-col">
				<div class="flex flex-col w-full" v-for="item in slice?.items" :key="item">
					<NuxtImg
						v-motion-fade-in
						provider="prismic"
						class="w-full object-cover"
						:src="item?.image?.url"
						v-if="item?.image?.url"
					/>

					<div v-motion-fade-in class="flex flex-col items-center gap-4 pt-[15px]">
						<p class="text-center font-[500] uppercase max-tablet:text-[20px] tablet:text-[25px]">
							{{ item?.title }}
						</p>

						<span v-motion-fade-in>{{ item?.paragraph }}</span>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
