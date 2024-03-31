<script setup lang="ts">
	import { type Content } from '@prismicio/client'

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	defineProps(
		getSliceComponentProps<Content.HotelsAndVillasSlice>(['slice', 'index', 'slices', 'context'])
	)
</script>

<template>
	<section
		class="pb-[55px]"
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
	>
		<div class="mx-auto max-w-[582px] px-4">
			<div class="mt-[25px] px-[10px] py-[20px]">
				<div
					class="flex w-full justify-between pt-[30px] text-[12px] text-white max-tablet:gap-3 max-tablet:px-4 tablet:gap-5 tablet:px-9"
				>
					<NuxtLink
						to="/hotels"
						class="h-[40px] flex items-center justify-center w-full bg-mainColor px-2 uppercase transition-colors hover:bg-mainColorHover"
					>
						Hotels
					</NuxtLink>
					<NuxtLink
						to="/villas"
						class="h-[40px] flex items-center justify-center w-full bg-mainColor px-2 uppercase transition-colors hover:bg-mainColorHover"
					>
						Villas
					</NuxtLink>
					<NuxtLink
						to="/boats"
						class="h-[40px] flex items-center justify-center w-full bg-mainColor px-2 uppercase transition-colors hover:bg-mainColorHover"
					>
						Boats
					</NuxtLink>
				</div>
			</div>
		</div>

		<div class="mx-auto pt-4">
			<Swiper
				:loop="true"
				:breakpoints="{
					320: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					460: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 4,
						spaceBetween: 20,
					},

					991: {
						slidesPerView: 5,
						spaceBetween: 20,
					},
				}"
			>
				<SwiperSlide v-for="slide in slice.items" :key="slide">
					<NuxtImg
						class="h-[300px] w-full object-cover"
						:src="slide?.slider_image?.url"
						:alt="slide?.slider_image?.alt"
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	</section>
</template>
