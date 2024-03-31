<script setup lang="ts">
	import { type Content } from '@prismicio/client'

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	defineProps(
		getSliceComponentProps<Content.SliderCardsSlice>(['slice', 'index', 'slices', 'context'])
	)
</script>

<template>
	<section
		class="max-tablet:pb-[50px] tablet:pb-[100px]"
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
	>
		<div class="relative mx-auto max-w-[1315px] px-4">
			<h2
				v-if="slice?.primary?.title"
				class="text-center font-[500] uppercase max-tablet:text-[20px] tablet:text-[30px] pb-[50px]"
			>
				{{ slice?.primary?.title }}
			</h2>

			<Swiper
				class="max-tablet:pt-[50px]"
				:navigation="{
					nextEl: '.swiper-past-btn.button-next',
					prevEl: '.swiper-past-btn.button-prev',
				}"
				:breakpoints="{
					320: {
						slidesPerView: 2,
						spaceBetween: 17,
					},

					600: {
						slidesPerView: 3,
						spaceBetween: 17,
					},

					991: {
						slidesPerView: 4,
						spaceBetween: 17,
					},
				}"
			>
				<SwiperSlide v-for="slide in slice?.items">
					<NuxtImg
						class="mx-auto object-cover max-tablet:h-[200px] max-tablet:w-[200px] tablet:h-[300px] tablet:w-[300px]"
						:src="slide?.image?.url"
						width="200"
						height="300"
					/>
				</SwiperSlide>
			</Swiper>

			<div class="flex justify-between px-4 pt-4">
				<button class="swiper-past-btn button-prev">
					<IconsArrow customClasses="rotate-180 w-[32px] h-[32px]" />
				</button>

				<button class="swiper-past-btn button-next">
					<IconsArrow customClasses="w-[32px] h-[32px]" />
				</button>
			</div>
		</div>
	</section>
</template>
