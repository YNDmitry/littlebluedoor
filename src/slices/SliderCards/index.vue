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
		class="max-tablet:pb-[50px] py-[60px]"
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

			<div class="relative">
				<Swiper
					class="max-tablet:pt-[50px]"
					:modules="[SwiperNavigation]"
					:navigation="{
						nextEl: '.swiper-lbdOne-btn.button-next',
						prevEl: '.swiper-lbdOne-btn.button-prev',
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
							provider="prismic"
							:quality="80"
							class="mx-auto object-cover max-tablet:h-[200px] max-tablet:w-[200px] tablet:h-[300px] tablet:w-[300px]"
							v-if="slide?.image?.url"
							:src="slide?.image?.url"
							width="200"
							height="300"
						/>
						<div v-if="slide?.title" class="text-center mt-3">{{ slide?.title }}</div>
					</SwiperSlide>
				</Swiper>

				<div
					class="z-10 flex justify-between left-[-50px] right-[-50px] max-tablet:left-6 max-tablet:right-6 max-tablet:static max-tablet:mt-7 pt-4 absolute top-1/2 translate-y-[-50%]"
				>
					<button
						type="button"
						class="swiper-lbdOne-btn button-prev flex h-[45px] w-[45px] items-center justify-center rounded-full bg-gray-200"
					>
						<IconsArrow customClasses="rotate-180" />
					</button>

					<button
						type="button"
						class="swiper-lbdOne-btn button-next flex h-[45px] w-[45px] items-center justify-center rounded-full bg-gray-200"
					>
						<IconsArrow />
					</button>
				</div>
			</div>
		</div>
	</section>
</template>
