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
			<div class="pb-[70px] max-tablet:pt-[50px] tablet:pt-[100px]">
				<h2 class="text-center font-[500] uppercase max-tablet:text-[35px] tablet:text-[42px]">
					{{ slice.primary.heading }}
				</h2>

				<div
					class="grid justify-items-center gap-x-3 max-tablet:gap-y-[35px] max-tablet:pt-[40px] tablet:grid-cols-2 tablet:gap-y-[50px] tablet:pt-[80px]"
				>
					<div
						v-for="card in slice.items"
						:key="card"
						class="flex w-full flex-col text-center max-tablet:gap-[15px] tablet:gap-[30px] tablet:px-4 tablet:py-2"
					>
						<h3 class="font-bold max-tablet:text-[22px] tablet:text-[27px]">{{ card.title }}</h3>
						<p class="tablet:text-[20px]">
							{{ card.paragraph }}
						</p>
					</div>
				</div>

				<NuxtLink
					:to="slice.primary.link"
					class="hover:bg-mainColorHover mx-auto flex items-center justify-center w-full bg-mainColor text-[25px] font-medium text-bg transition-colors max-tablet:mt-[40px] max-tablet:h-[55px] max-tablet:max-w-[200px] max-tablet:text-[20px] tablet:mt-[70px] tablet:h-[67px] tablet:max-w-[270px]"
				>
					{{ slice.primary.link_label }}
				</NuxtLink>
			</div>
		</div>
	</section>
</template>
