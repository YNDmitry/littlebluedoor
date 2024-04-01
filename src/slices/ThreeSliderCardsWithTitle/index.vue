<script setup lang="ts">
	import { type Content } from '@prismicio/client'

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	defineProps(
		getSliceComponentProps<Content.ThreeSliderCardsWithTitleSlice>([
			'slice',
			'index',
			'slices',
			'context',
		])
	)
</script>

<template>
	<section
		class="pb-[150px] pt-[100px]"
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
	>
		<div class="mx-auto max-w-[1400px] px-4">
			<h2 class="text-center font-[500] uppercase max-tablet:text-[20px] text-[28px]">
				{{ slice?.primary?.title }}
			</h2>

			<div
				v-if="slice?.variation === 'default'"
				class="grid justify-items-start gap-x-6 gap-y-12 pt-[45px] mobile:grid-cols-lbdOffer"
			>
				<div
					class="flex w-full flex-col items-center"
					v-for="(item, idx) in slice?.items"
					:key="item"
				>
					<div class="relative">
						<Swiper
							:modules="[SwiperNavigation]"
							:navigation="{
								nextEl: '#swiper-ldbOne-prev-' + idx,
								prevEl: '#swiper-ldbOne-next-' + idx,
							}"
							:spaceBetween="20"
							class="w-[300px] overflow-hidden"
						>
							<SwiperSlide class="w-full">
								<NuxtImg
									provider="prismic"
									v-if="item?.image?.url"
									class="object-cover aspect-square"
									:src="item?.image?.url"
									width="300"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<NuxtImg
									provider="prismic"
									v-if="item?.image_2?.url"
									class="object-cover aspect-square"
									:src="item?.image_2?.url"
									width="300"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<NuxtImg
									provider="prismic"
									v-if="item?.image_3?.url"
									class="object-cover aspect-square"
									:src="item?.image_3.url"
									width="300"
								/>
							</SwiperSlide>
						</Swiper>

						<div
							class="tablet:widthBtn z-10 flex justify-between max-tablet:pt-4 tablet:absolute tablet:left-0 tablet:top-1/2 tablet:translate-x-[-55px] tablet:translate-y-[-50%]"
						>
							<button
								:id="'swiper-ldbOne-next-' + idx"
								class="swiper-lbdOne-btn button-prev flex h-[45px] w-[45px] items-center justify-center rounded-full bg-gray-200"
							>
								<IconsArrow customClasses="rotate-180" />
							</button>

							<button
								:id="'swiper-ldbOne-prev-' + idx"
								class="swiper-lbdOne-btn button-next flex h-[45px] w-[45px] items-center justify-center rounded-full bg-gray-200"
							>
								<IconsArrow />
							</button>
						</div>
					</div>

					<div class="flex flex-col items-center gap-6 pt-[20px]">
						<p class="text-[20px] font-medium uppercase">{{ item?.title }}</p>

						<span class="max-w-[450px] text-center text-[14px] font-medium uppercase">{{
							item?.paragraph
						}}</span>

						<p class="text-[20px] font-medium uppercase">{{ item?.days_and_nights }}</p>

						<NuxtLink
							:to="item?.button_link?.url"
							class="hover:bg-mainColorHover uppercase py-2 px-7 table bg-mainColor text-[16px] font-regular text-bg transition-colors"
						>
							find out more
						</NuxtLink>
					</div>
				</div>
			</div>

			<div
				v-if="slice?.variation === 'commingSoon'"
				class="grid gap-y-10 items-start gap-x-6 pt-[45px] mobile:grid-cols-lbdOffer"
			>
				<article class="flex flex-col items-center" v-for="item in slice?.items">
					<NuxtImg
						provider="prismic"
						v-if="item?.image?.url"
						class="object-cover w-full aspect-square"
						:src="item?.image?.url"
					/>

					<div class="flex flex-col gap-4 pt-[20px]">
						<p class="text-[20px] font-medium uppercase">{{ item?.title }}</p>

						<span class="text-center text-[14px] font-medium uppercase">{{
							item?.days_and_nights
						}}</span>
					</div>
				</article>
			</div>
		</div>
	</section>
</template>
