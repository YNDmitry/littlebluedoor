<script setup lang="ts">
	import { type Content } from '@prismicio/client'

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	defineProps(
		getSliceComponentProps<Content.HotelsAndVillasSlice>(['slice', 'index', 'slices', 'context'])
	)
</script>

<template>
	<section
		class="py-[60px]"
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
	>
		<div class="mx-auto max-w-[582px]">
			<div class="px-[10px]">
				<div
					v-motion-fade-in
					class="flex w-full justify-between text-[12px] text-white max-tablet:gap-3 max-tablet:px-4 tablet:gap-5 tablet:px-9"
				>
					<NuxtLink
						to="/hotels"
						class="h-[40px] flex items-center justify-center w-full bg-mainColor px-2 uppercase transition-colors hover:bg-mainColorHover"
					>
						Hotels
					</NuxtLink>
					<NuxtLink
						to="/villas"
						class="h-[40px] flex items-center justify-center w-full bg-mainColor px-2 uppercase transition-colors hover:bg-mainColorHover"
					>
						Villas
					</NuxtLink>
					<NuxtLink
						to="/boats"
						class="h-[40px] flex items-center justify-center w-full bg-mainColor px-2 uppercase transition-colors hover:bg-mainColorHover"
					>
						Boats
					</NuxtLink>
				</div>
			</div>
		</div>

		<component :is="'style'">
			@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(calc(-420px
			* {{ slice?.items.length }})); } } .hav-swiper { animation: scroll 30s linear infinite; }
		</component>
		<div v-motion-fade-in class="mx-auto pt-4 mt-5 hav-swiper flex gap-5">
			<template v-for="(item, index) in 3" :key="index">
				<div
					v-for="(slide, idx) in slice?.items"
					:key="idx"
					class="max-w-[400px] max-tablet:max-w-[300] shrink-0"
				>
					<NuxtImg
						provider="prismic"
						class="object-cover aspect-square max-tablet:max-w-[300px]"
						:src="slide?.slider_image?.url || ''"
						:alt="slide?.slider_image?.alt || ''"
						width="600"
						height="600"
					/>
				</div>
			</template>
		</div>
	</section>
</template>
