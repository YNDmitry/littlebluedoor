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
		class="relative max-tablet:mt-[35px] max-tablet:pb-[65px] tablet:mt-[65px] tablet:pb-[115px]"
	>
		<div class="relative">
			<Swiper
				class="pt-[40px] mt-6"
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
						:src="item?.image?.url"
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

		<div class="px-4 flex items-center justify-center">
			<NuxtLink
				:to="slice.primary.button_link"
				class="hover:bg-mainColorHover mx-auto flex items-center justify-center px-6 bg-mainColor text-[25px] font-medium text-bg transition-colors max-tablet:mt-[40px] max-tablet:h-[55px] max-tablet:text-[20px] tablet:mt-[70px] tablet:h-[67px]"
			>
				{{ slice.primary.button_label }}
			</NuxtLink>
		</div>
	</section>
</template>
