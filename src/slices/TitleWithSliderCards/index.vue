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
		class="py-[60px]"
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
	>
		<div class="mx-auto max-w-[680px] px-4">
			<h2
				v-motion-fade-in
				class="text-center font-[500] uppercase max-tablet:text-[20px] text-[28px]"
			>
				{{ slice?.primary.title }}
			</h2>
		</div>

		<div
			class="hotelTravel mx-auto flex max-w-[1210px] flex-col px-4 pt-[50px] max-tablet:gap-[50px] tablet:gap-[100px]"
		>
			<article
				class="grid max-laptop:grid-cols-travelPopularTablet max-laptop:even:grid-cols-travelPopularReverseTablet max-tablet:grid-cols-1 max-tablet:even:grid-cols-1 laptop:grid-cols-travelPopular gap-x-[120px] gap-y-7 laptop:even:grid-cols-travelPopularReverse"
				v-for="(item, idx) in slice?.items"
				:key="idx"
			>
				<div v-motion-fade-in class="hotelSwiper relative flex flex-col gap-4">
					<Swiper
						:modules="[SwiperNavigation]"
						class="w-full max-w-[455px] max-tablet:max-w-none ml-4"
						:navigation="{
							nextEl: '#swiper-popularTravelOne-next-' + idx,
							prevEl: '#swiper-popularTravelOne-prev-' + idx,
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
								provider="prismic"
								class="w-full object-cover"
								v-if="item?.image?.url"
								:src="item?.image?.url"
								:alt="item?.image?.alt || ''"
								placeholder
							/>
						</SwiperSlide>
						<SwiperSlide>
							<NuxtImg
								provider="prismic"
								class="w-full object-cover"
								v-if="item?.image_2?.url"
								:src="item?.image_2?.url"
								:alt="item?.image_2?.alt || ''"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<NuxtImg
								provider="prismic"
								class="w-full object-cover"
								v-if="item?.image_3?.url"
								:src="item?.image_3?.url"
								:alt="item?.image_3?.alt || ''"
							/>
						</SwiperSlide>
					</Swiper>

					<div
						class="z-10 flex justify-between left-[-50px] right-[-50px] max-tablet:left-6 max-tablet:right-6 pt-4 absolute top-1/2 translate-y-[-50%]"
					>
						<button
							:id="'swiper-popularTravelOne-prev-' + idx"
							class="swiper-lbdOne-btn button-prev flex h-[45px] w-[45px] items-center justify-center rounded-full bg-gray-200"
						>
							<IconsArrow customClasses="rotate-180" />
						</button>

						<button
							:id="'swiper-popularTravelOne-next-' + idx"
							class="swiper-lbdOne-btn button-next flex h-[45px] w-[45px] items-center justify-center rounded-full bg-gray-200"
						>
							<IconsArrow />
						</button>
					</div>
				</div>

				<div
					class="hotelContent items-start flex w-full flex-col justify-center gap-[15px] text-[14px] max-tablet:text-center"
				>
					<h3
						v-motion-fade-in
						class="text-[20px] font-medium uppercase max-tablet:mx-auto"
						v-if="item?.title"
					>
						{{ item?.title }}
					</h3>

					<div v-motion-fade-in v-if="item?.body">
						<PrismicRichText :field="item?.body" />
					</div>

					<NuxtLink
						v-motion-fade-in
						v-if="item?.button_link"
						:to="item?.button_link?.url"
						class="hover:bg-mainColorHover uppercase py-2 px-7 bg-mainColor text-[16px] font-regular text-bg transition-colors mt-4 max-tablet:mx-auto"
					>
						{{ item?.button_label }}
					</NuxtLink>
				</div>
			</article>
		</div>
	</section>
</template>
