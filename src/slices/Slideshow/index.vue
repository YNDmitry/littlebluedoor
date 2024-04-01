<script setup lang="ts">
	import { type Content } from '@prismicio/client'

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	defineProps(
		getSliceComponentProps<Content.SlideshowSlice>(['slice', 'index', 'slices', 'context'])
	)
</script>

<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
		class="relative pb-[100px]"
	>
		<div class="relative">
			<Swiper
				class="pt-[40px]"
				:space-between="20"
				:modules="[SwiperEffectFade, SwiperAutoplay]"
				:speed="700"
				:autoplay="{
					delay: 3000,
					disableOnInteraction: true,
				}"
				:loop="true"
				:effect="'fade'"
			>
				<SwiperSlide v-for="item in slice?.items">
					<NuxtImg
						provider="prismic"
						v-if="item?.image?.url"
						:src="item?.image?.url"
						:quality="80"
						width="2000"
						height="1000"
						class="w-full object-cover tablet:aspect-[1440/500] max-tablet:aspect-[700/500]"
					/>

					<p
						class="absolute uppercase z-10 tablet:right-[-8px] max-tablet:right-[-4px] text-start top-1/2 tablet:w-[45%] max-tablet:w-[35%] translate-y-[-20%] text-[40px] font-semibold text-white max-tablet:text-[25px]"
					>
						{{ item?.country }}
					</p>
				</SwiperSlide>
			</Swiper>

			<p
				class="absolute z-10 left-0 top-1/2 tablet:w-[55%] max-tablet:w-[65%] text-right translate-y-[-20%] text-center text-[40px] font-semibold text-white max-tablet:text-[25px]"
			>
				YOUR DOOR TO
			</p>
		</div>

		<div class="px-4 flex items-center justify-center" v-if="slice?.primary?.button_link">
			<NuxtLink
				:to="slice.primary.button_link"
				class="hover:bg-mainColorHover inline-block mx-auto bg-mainColor text-[16px] py-[16px] px-[25px] font-medium text-bg transition-colors max-tablet:mt-[40px] mt-[40px] uppercase"
			>
				{{ slice.primary.button_label }}
			</NuxtLink>
		</div>
	</section>
</template>
