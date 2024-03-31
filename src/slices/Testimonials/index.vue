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
			<h2 class="px-4 text-center font-[500] uppercase max-tablet:text-[35px] tablet:text-[42px]">
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
						<NuxtImg :src="item?.image?.url" class="h-[200px] bg-cover w-full" />
						<div class="px-[25px] py-8">
							<h3 class="text-[25px] font-medium">{{ item?.title }}</h3>

							<span class="tablet:text-[20px] tablet:font-medium">
								{{ item?.paragraph }}
							</span>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	</section>
</template>
