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
		class="py-[100px]"
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
	>
		<div class="px-4 mx-auto max-w-[1300px]">
			<h2 class="px-4 text-center font-[500] uppercase max-tablet:text-[26px] text-[28px]">
				{{ slice?.primary.title }}
			</h2>

			<Swiper
				class="pt-[40px] mt-8"
				:breakpoints="{
					320: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					615: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					991: {
						slidesPerView: 3,
						spaceBetween: 35,
					},
				}"
			>
				<SwiperSlide v-for="item in slice?.items" :key="item">
					<div class="flex flex-col bg-white min-h-[417px]">
						<NuxtImg
							provider="prismic"
							:quality="80"
							:src="item?.image?.url"
							v-if="item?.image?.url"
							width="400"
							height="200"
							format="webp"
							class="h-[200px] object-cover w-full"
						/>
						<div class="px-[25px] py-8">
							<h3 class="text-[20px] font-medium">{{ item?.title }}</h3>

							<p class="tablet:font-medium mt-4">
								{{ item?.paragraph }}
							</p>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	</section>
</template>
