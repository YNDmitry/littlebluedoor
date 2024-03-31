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
				class="px-4 text-center font-[500] uppercase max-tablet:text-[25px] max-mobile:text-[20px] tablet:text-[42px]"
			>
				{{ slice?.primary?.title }}
			</h2>

			<Swiper
				class="pt-[50px] mt-6"
				:breakpoints="{
					320: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1250: {
						slidesPerView: 4,
						spaceBetween: 35,
					},
				}"
			>
				<SwiperSlide v-for="slide in slice?.items" :key="slide">
					<NuxtLink :to="settings?.data?.instagram?.url">
						<div class="flex justify-between items-center bg-white px-3 py-3">
							<div class="flex items-center gap-3">
								<div class="rounded-[100%] overflow-hidden">
									<img
										src="https://a.storyblok.com/f/152732/320x320/53ce304c6e/instagram-avatar.jpeg/m/30x30/filters:quality(auto:best)"
										width="30"
										height="30"
									/>
								</div>

								<div class="instagram__photos-item-user">
									<div class="text-[10px]">{{ slice?.primary?.title }}</div>
									<div class="text-[10px]">London</div>
								</div>
							</div>

							<IconsEllipsis />
						</div>

						<div>
							<NuxtImg class="mx-auto object-cover w-full h-[250px]" :src="slide?.image?.url" />
						</div>
					</NuxtLink>
				</SwiperSlide>
			</Swiper>
		</div>
	</section>
</template>
