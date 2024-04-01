<script setup lang="ts">
	import { type Content } from '@prismicio/client'

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	defineProps(
		getSliceComponentProps<Content.TestimonialsSlice>(['slice', 'index', 'slices', 'context'])
	)
</script>

<template>
	<section
		class="py-[60px]"
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
	>
		<div class="px-4 mx-auto max-w-[1300px]">
			<h2 class="px-4 text-center font-[500] uppercase max-tablet:text-[26px] text-[28px]">
				{{ slice?.primary.title }}
			</h2>

			<div
				class="grid grid-cols-3 gap-[35px] max-tablet:gap-[20px] mt-11 max-laptop:grid-cols-2 max-mobile:grid-cols-1"
			>
				<template v-for="(item, idx) in slice?.items" :key="idx">
					<div class="flex flex-col bg-white min-h-[417px]">
						<NuxtImg
							provider="prismic"
							:quality="80"
							:src="item?.image?.url"
							v-if="item?.image?.url"
							width="400"
							height="200"
							format="webp"
							class="h-[200px] object-cover w-full max-tablet:aspect-square"
						/>
						<div class="px-[25px] py-8 h-full">
							<h3 class="text-[20px] font-medium">{{ item?.title }}</h3>

							<p class="tablet:font-medium mt-4">
								{{ item?.paragraph }}
							</p>
						</div>
					</div>
				</template>
			</div>
		</div>
	</section>
</template>
