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
		class="pb-[150px] pt-[100px] max-tablet:pb-[80px] max-tablet:pt-[60px]"
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
	>
		<div class="mx-auto max-w-[1400px] px-4">
			<h2
				v-motion-fade-in
				class="text-center font-[500] uppercase max-tablet:text-[20px] text-[28px]"
			>
				{{ slice?.primary?.title }}
			</h2>

			<div
				v-if="slice?.variation === 'default'"
				class="grid gap-x-6 gap-y-20 pt-[45px] mobile:grid-cols-lbdOffer"
			>
				<div
					class="flex w-full flex-col items-center"
					v-for="(item, idx) in slice?.items"
					:key="idx"
				>
					<NuxtLink
						:to="item?.button_link?.url || '/experiences/' + item?.button_link?.uid || null"
						class="relative w-full rounded-lg overflow-hidden group"
					>
						<NuxtImg
							provider="prismic"
							class="object-cover aspect-square max-tablet:aspect-auto max-tablet:h-[500px] w-full"
							:src="item?.image?.url"
							width="300"
						/>
						<div
							class="absolute bottom-0 bg-bg2 backdrop-blur-md p-4 bg-opacity-50 rounded-t-lg z-10 flex flex-col gap-6"
						>
							<!-- Title -->
							<h3 v-motion-fade-in class="text-[20px] text-white font-medium uppercase text-center">
								{{ item?.title }}
							</h3>

							<!-- Paragraph -->
							<span
								v-motion-fade-in
								class="text-center text-white max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-500 max-tablet:max-h-full text-[14px]"
							>
								{{ item?.paragraph }}
							</span>
						</div>
					</NuxtLink>
					<div v-motion-fade-in class="flex flex-col items-center justify-end mt-4">
						<NuxtLink
							v-if="item?.button_link"
							:to="item?.button_link?.url || '/experiences/' + item?.button_link?.uid || null"
							class="hover:bg-primary-20 hover:text-white uppercase py-2 px-7 bg-white text-[16px] font-regular rounded-lg text-bg transition-colors"
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
				<article
					class="flex flex-col items-center h-full"
					v-for="(item, idx) in slice?.items"
					:key="idx"
				>
					<div v-motion-fade-in v-if="item?.image?.url" class="w-full">
						<NuxtImg
							provider="prismic"
							class="object-cover w-full aspect-square h-[300px]"
							:src="item?.image?.url"
						/>
					</div>

					<div v-motion-fade-in class="flex flex-col justify-between gap-4 pt-[20px] h-full">
						<h3 class="text-[20px] font-medium uppercase text-center">{{ item?.title }}</h3>

						<span class="text-center text-[14px] font-medium uppercase">{{
							item?.days_and_nights
						}}</span>
					</div>
				</article>
			</div>
		</div>
	</section>
</template>
