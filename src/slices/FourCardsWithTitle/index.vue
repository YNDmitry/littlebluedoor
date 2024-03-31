<script setup lang="ts">
	import { type Content } from '@prismicio/client'

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	defineProps(
		getSliceComponentProps<Content.FourCardsWithTitleSlice>(['slice', 'index', 'slices', 'context'])
	)
</script>

<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
		class="pt-[100px] pb-[100px]"
	>
		<div class="mx-auto max-w-[1315px] px-4 pb-5">
			<h2 class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]">
				{{ slice?.primary?.title }}
			</h2>

			<p class="pt-4 text-center">
				{{ slice?.primary?.paragraph }}
			</p>

			<div class="grid gap-5 pt-8 max-laptop:grid-cols-2 max-tablet:grid-cols-1 laptop:grid-cols-4">
				<div
					class="flex flex-col gap-[15px] max-laptop:items-center"
					v-for="item in slice?.items"
					:key="item"
				>
					<NuxtImg class="w-[300px] object-cover" :src="item?.image?.url" alt="" />

					<div class="flex flex-col gap-[10px]">
						<p class="text-center">
							{{ item?.paragraph }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
