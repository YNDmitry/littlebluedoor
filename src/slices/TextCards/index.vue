<script setup lang="ts">
	import { type Content } from '@prismicio/client'

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	defineProps(
		getSliceComponentProps<Content.TextCardsSlice>(['slice', 'index', 'slices', 'context'])
	)
</script>

<template>
	<section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
		<div class="mx-auto max-w-[1300px] px-4">
			<div class="flex flex-col items-center pb-[70px] max-tablet:pt-[50px] tablet:pt-[100px]">
				<h2
					v-motion-fade-in
					class="text-center text-[28px] font-[500] uppercase max-tablet:text-[35px]"
				>
					{{ slice.primary.heading }}
				</h2>

				<div
					class="grid justify-items-center gap-x-3 max-tablet:gap-y-[35px] max-tablet:pt-[40px] tablet:grid-cols-2 tablet:gap-y-[50px] tablet:pt-[80px]"
				>
					<div
						v-motion-fade-in
						v-for="(card, idx) in slice.items"
						:key="idx"
						class="flex w-full flex-col text-center max-tablet:gap-[15px] tablet:px-4 tablet:py-2"
					>
						<h3 class="font-bold max-tablet:text-[18px] text-[20px]">{{ card.title }}</h3>
						<p class="mt-4">
							{{ card.paragraph }}
						</p>
					</div>
				</div>

				<NuxtLink
					v-motion-fade-in
					:to="slice.primary.link"
					class="hover:bg-mainColorHover inline-block mx-auto bg-mainColor text-[16px] py-[16px] px-[25px] font-medium text-bg transition-colors max-tablet:mt-[40px] tablet:mt-[70px] uppercase"
				>
					{{ slice.primary.link_label }}
				</NuxtLink>
			</div>
		</div>
	</section>
</template>
