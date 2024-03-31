<script setup lang="ts">
	import { type Content } from '@prismicio/client'

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	defineProps(
		getSliceComponentProps<Content.TitleWithSliderCardsSlice>([
			'slice',
			'index',
			'slices',
			'context',
		])
	)
</script>

<template>
	<section
		class="max-tablet:pb-[120px] tablet:pb-[200px]"
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
	>
		<div class="mx-auto max-w-[680px]">
			<h2 class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]">
				{{ slice?.primary.title }}
			</h2>
		</div>

		<div
			class="hotelTravel mx-auto flex max-w-[1210px] flex-col px-4 pt-[50px] max-tablet:gap-[50px] tablet:gap-[100px]"
		>
			<article
				class="grid max-laptop:grid-cols-travelPopularTablet max-laptop:gap-[25px] max-laptop:even:grid-cols-travelPopularReverseTablet max-tablet:grid-cols-1 max-tablet:even:grid-cols-1 laptop:grid-cols-travelPopular laptop:gap-[45px] laptop:even:grid-cols-travelPopularReverse"
				v-for="(item, idx) in slice?.items"
				:key="idx"
			>
				<div class="hotelSwiper flex flex-col gap-4">
					<Swiper
						:modules="[SwiperNavigation]"
						class="w-full max-w-[485px]"
						:navigation="{
							nextEl: '.swiper-popularTravelOne-btn.button-next',
							prevEl: '.swiper-popularTravelOne-btn.button-prev',
						}"
						:breakpoints="{
							320: {
								slidesPerView: 1,
								spaceBetween: 15,
							},
						}"
					>
						<SwiperSlide>
							<NuxtImg
								class="w-full object-cover"
								:src="item?.image?.url"
								:alt="item?.image?.alt || ''"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<NuxtImg
								class="w-full object-cover"
								:src="item?.image_2?.url"
								:alt="item?.image_2?.alt || ''"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<NuxtImg
								class="w-full object-cover"
								:src="item?.image_3?.url"
								:alt="item?.image_3?.alt || ''"
							/>
						</SwiperSlide>
					</Swiper>

					<div class="flex justify-between">
						<button class="swiper-popularTravelOne-btn button-prev">
							<IconsArrow customClasses="rotate-180 w-[32px] h-[32px]" />
						</button>

						<button class="swiper-popularTravelOne-btn button-next">
							<IconsArrow customClasses="w-[32px] h-[32px]" />
						</button>
					</div>
				</div>

				<div
					class="hotelContent items-start flex w-full flex-col justify-center gap-[15px] text-[14px]"
				>
					<h3 class="text-[20px] font-medium text-center tablet:uppercase" v-if="item?.title">
						{{ item?.title }}
					</h3>

					<p class="tablet:uppercase" v-if="item?.paragraph">
						{{ item?.paragraph }}
					</p>

					<NuxtLink
						v-if="item?.button_link"
						:to="item?.button_link"
						class="hover:bg-mainColorHover uppercase py-2 px-7 bg-mainColor text-[16px] font-regular text-bg transition-colors"
					>
						{{ item?.button_label }}
					</NuxtLink>
				</div>
			</article>
		</div>
	</section>
</template>
