<script setup lang="ts">
	import { type Content } from '@prismicio/client'

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	defineProps(
		getSliceComponentProps<Content.SlideshowSlice>(['slice', 'index', 'slices', 'context'])
	)

	const slideIndex = ref(0)

	const getSlideIndex = (value: number) => {
		return (slideIndex.value = value)
	}

	const getActiveCounty = computed(() => {
		return slideIndex.value
	})
</script>

<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
		class="relative"
	>
		<div class="relative flex flex-col items-center justify-center">
			<Swiper
				class="pt-[40px] w-full"
				:space-between="20"
				:modules="[SwiperEffectFade, SwiperAutoplay]"
				:speed="700"
				:autoplay="{
					delay: 1500,
					disableOnInteraction: true,
				}"
				:loop="true"
				:effect="'fade'"
				@slide-change="getSlideIndex($event.realIndex)"
			>
				<SwiperSlide v-for="item in slice?.items">
					<NuxtImg
						provider="prismic"
						v-if="item?.image?.url"
						:src="item?.image?.url"
						:quality="80"
						width="2000"
						height="600"
						class="w-full object-cover h-[600px] max-tablet:h-[400px]"
						placeholder
					/>
				</SwiperSlide>
			</Swiper>

			<div
				v-motion-fade-in
				class="absolute text-center mx-2 top-1/2 left-1/3 max-tablet:left-0 max-tablet:right-0 max-w-[600px] uppercase z-10 text-[40px] font-semibold text-white max-tablet:text-[25px]"
			>
				Your door to
				<span class="max-tablet:block">{{ slice?.items[getActiveCounty]?.country }}</span>
			</div>
		</div>

		<div class="px-4 flex items-center justify-center" v-if="slice?.primary?.button_label">
			<NuxtLink
				:to="slice.primary.button_link.url"
				class="hover:bg-mainColorHover inline-block mx-auto bg-mainColor text-[16px] py-[16px] px-[25px] font-medium text-bg transition-colors max-tablet:mt-[40px] mt-[40px] uppercase"
			>
				{{ slice.primary.button_label }}
			</NuxtLink>
		</div>
	</section>
</template>
