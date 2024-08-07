<script setup lang="ts">
	import { type Content } from '@prismicio/client'
	import { useSettings } from '../../composables/useSettings'

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	defineProps(
		getSliceComponentProps<Content.InstagramCardsSlice>(['slice', 'index', 'slices', 'context'])
	)

	const settings = useSettings()
</script>

<template>
	<section
		class="pb-[100px] pt-[100px]"
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
	>
		<div class="px-4 mx-auto max-w-[1300px]">
			<h2
				v-motion-fade-in
				class="px-4 text-center text-[28px] font-[500] uppercase max-tablet:text-[25px] max-mobile:text-[20px]"
			>
				{{ slice?.primary?.title }}
			</h2>

			<div class="relative">
				<Swiper
					v-motion-fade-in
					id="instagram-slider"
					class="pt-[50px] mt-6 !ml-[-1rem] !pl-[1rem] !mr-[-1rem] !pr-[1rem]"
					:modules="[SwiperNavigation]"
					:navigation="{
						nextEl: '#inst-next',
						prevEl: '#inst-prev',
					}"
					:breakpoints="{
						320: {
							slidesPerView: 'auto',
						},
						1200: {
							slidesPerView: 4,
							spaceBetween: 35,
						},
					}"
				>
					<SwiperSlide
						v-for="(slide, idx) in slice?.items"
						:key="idx"
						class="max-largeDesktop:max-w-[450px] max-largeDesktop:mr-[20px] max-tablet:max-w-[300px]"
					>
						<NuxtLink v-motion-fade-in :to="settings?.data?.instagram?.url">
							<div class="flex justify-between items-center bg-white px-3 py-3">
								<div class="flex items-center gap-3">
									<div
										class="rounded-[100%] overflow-hidden h-[30px] w-[30px]"
										v-if="slice?.primary?.avatar?.url"
									>
										<NuxtImg
											provider="prismic"
											:src="slice?.primary?.avatar?.url"
											width="30"
											height="30"
											class="object-cover w-full h-full"
											placeholder
										/>
									</div>

									<div class="instagram__photos-item-user">
										<div class="text-[10px]">{{ slice?.primary?.title }}</div>
										<div class="text-[10px]">{{ slide?.country || '' }}</div>
									</div>
								</div>

								<IconsEllipsis />
							</div>

							<div v-if="slide?.image?.url">
								<NuxtImg
									provider="prismic"
									class="mx-auto object-cover w-full h-[250px]"
									:src="slide?.image?.url"
									width="350"
									:quality="80"
								/>
							</div>
						</NuxtLink>
					</SwiperSlide>
				</Swiper>
				<div
					class="z-10 flex justify-between left-[-50px] right-[-50px] max-tablet:left-6 max-tablet:right-6 max-tablet:static max-tablet:mt-7 pt-4 absolute top-1/2 translate-y-[-50%]"
				>
					<button
						id="inst-prev"
						type="button"
						class="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-gray-200"
					>
						<IconsArrow customClasses="rotate-180" />
					</button>

					<button
						id="inst-next"
						type="button"
						class="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-gray-200"
					>
						<IconsArrow />
					</button>
				</div>
			</div>
		</div>
	</section>
</template>

<style>
	#instagram-slider .swiper-wrapper {
		@apply overflow-visible;
	}
</style>
