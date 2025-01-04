<script setup lang="ts">
	import { type Content } from '@prismicio/client'
	import { Pagination } from 'swiper/modules'

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	defineProps(
		getSliceComponentProps<Content.SliderCardsSlice>(['slice', 'index', 'slices', 'context'])
	)

	const swiperRef = ref<null>(null)
	const swiper = useSwiper(swiperRef, {
		modules: [Pagination],
		pagination: {
			clickable: true,
		},
		breakpoints: {
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
		},
	})
	const next = () => swiper.next()
</script>

<template>
	<section
		class="max-tablet:pb-[50px] py-[60px]"
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
	>
		<div class="relative mx-auto max-w-[1315px] px-4">
			<h2
				v-motion-fade-in
				v-if="slice?.primary?.title"
				class="text-center font-[500] uppercase max-tablet:text-[20px] tablet:text-[30px] pb-[50px]"
			>
				{{ slice?.primary?.title }}
			</h2>

			<div class="relative">
				<ClientOnly>
					<swiper-container v-motion-fade-in class="max-tablet:pt-[50px]" ref="swiperRef">
						<swiper-slide v-for="slide in slice?.items" class="relative rounded-lg overflow-hidden">
							<NuxtImg
								provider="prismic"
								:quality="80"
								class="object-cover w-full max-tablet:h-[200px] tablet:h-[300px]"
								v-if="slide?.image?.url"
								:src="slide?.image?.url"
								width="200"
								height="300"
								placeholder
							/>
							<div
								v-if="slide?.title"
								class="text-center rounded-t-lg py-2 px-4 w-full backdrop-blur-sm bg-bg2 bg-opacity-35 absolute bottom-0 mt-3"
							>
								{{ slide?.title }}
							</div>
						</swiper-slide>
						<div id="cards-pagination"></div>
					</swiper-container>
				</ClientOnly>
			</div>
		</div>
	</section>
</template>
