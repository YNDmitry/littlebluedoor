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
			<h2
				v-motion-fade-in
				class="px-4 text-center font-[500] uppercase max-tablet:text-[26px] text-[28px]"
			>
				{{ slice?.primary.title }}
			</h2>

			<div
				v-motion-fade-in
				class="grid grid-cols-3 gap-[35px] max-tablet:gap-[20px] mt-11 max-laptop:grid-cols-1"
			>
				<template v-for="(item, idx) in slice?.items" :key="idx">
					<div
						class="relative group flex flex-col text-white min-h-[417px] rounded-lg overflow-hidden"
					>
						<NuxtImg
							provider="prismic"
							:quality="80"
							:src="item?.image?.url"
							v-if="item?.image?.url"
							width="600"
							height="600"
							format="webp"
							class="h-full object-cover w-full max-tablet:aspect-auto max-tablet:h-[600px]"
							placeholder
						/>
						<div
							class="px-[25px] pt-4 rounded-t-lg absolute bottom-0 left-0 right-0 backdrop-blur-md bg-bg2 bg-opacity-50"
						>
							<h3 class="text-[20px] font-medium">{{ item?.title }}</h3>

							<p
								class="tablet:font-medium my-4 max-h-0 max-tablet:max-h-full overflow-hidden group-hover:max-h-96 duration-500 transition-all"
							>
								{{ item?.paragraph }}
							</p>
						</div>
					</div>
				</template>
			</div>
		</div>
	</section>
</template>
