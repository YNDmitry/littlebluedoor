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
		class="py-[60px] max-tablet:py-[40px]"
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

		<div class="mx-auto flex max-w-[1400px] flex-col pt-[50px]">
			<article
				class="relative flex items-center max-tablet:flex-col"
				v-for="(item, idx) in slice?.items"
				:key="idx"
			>
				<div
					v-motion-fade-in
					class="relative h-[600px] gap-4 w-full max-tablet:!max-w-none max-tablet:h-auto"
					:class="{ 'max-w-[400px]': idx % 2 === 0 }"
				>
					<NuxtImg
						provider="prismic"
						class="w-full h-full object-cover max-tablet:aspect-square"
						width="1000"
						height="600"
						v-if="item?.image?.url"
						:src="item?.image?.url"
						:alt="item?.image?.alt || ''"
						placeholder
					/>
					<div
						v-if="idx % 2 === 0"
						class="items-start absolute max-tablet:relative max-tablet:py-8 left-0 right-0 top-0 bottom-0 p-4 max-tablet:bg-bg bg-bg2 bg-opacity-80 flex w-full flex-col justify-center gap-[15px] text-[14px] max-tablet:text-center"
					>
						<h3
							v-motion-fade-in
							class="text-[20px] font-medium text-white uppercase max-tablet:mx-auto"
							v-if="item?.title"
						>
							{{ item?.title }}
						</h3>

						<div v-motion-fade-in v-if="item?.body">
							<PrismicRichText :field="item?.body" class="!text-white" />
						</div>

						<NuxtLink
							v-motion-fade-in
							v-if="item?.button_link"
							:to="item?.button_link?.url"
							class="hover:bg-primary-20 hover:text-white uppercase py-2 px-7 bg-white text-[16px] font-regular text-bg transition-colors mt-4 max-tablet:mx-auto rounded-lg"
						>
							{{ item?.button_label }}
						</NuxtLink>
					</div>
				</div>
				<div
					v-motion-fade-in
					class="relative h-[600px] w-full max-tablet:!h-auto max-tablet:max-w-none"
					:class="{ 'max-w-[400px]': idx % 2 === 1 }"
				>
					<NuxtImg
						provider="prismic"
						class="w-full h-full object-cover max-tablet:hidden"
						width="1000"
						height="600"
						v-if="item?.image_2?.url"
						:src="item?.image_2?.url"
						:alt="item?.image_2?.alt || ''"
						placeholder
					/>
					<div
						v-if="idx % 2 === 1"
						class="items-start flex absolute max-tablet:relative max-tablet:py-8 left-0 right-0 top-0 bottom-0 p-4 max-tablet:bg-bg bg-bg2 bg-opacity-80 w-full flex-col justify-center gap-[15px] text-[14px] max-tablet:text-center"
					>
						<h3
							v-motion-fade-in
							class="text-[20px] text-white font-medium uppercase max-tablet:mx-auto"
							v-if="item?.title"
						>
							{{ item?.title }}
						</h3>

						<div v-motion-fade-in v-if="item?.body">
							<PrismicRichText :field="item?.body" class="!text-white" />
						</div>

						<NuxtLink
							v-motion-fade-in
							v-if="item?.button_link"
							:to="item?.button_link?.url"
							class="hover:bg-primary-20 hover:text-white uppercase py-2 px-7 bg-white text-[16px] font-regular text-bg transition-colors mt-4 max-tablet:mx-auto rounded-lg"
						>
							{{ item?.button_label }}
						</NuxtLink>
					</div>
				</div>
			</article>
		</div>
	</section>
</template>
