<script setup lang="ts">
	import { type Content } from '@prismicio/client'

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	defineProps(
		getSliceComponentProps<Content.FourCardsWithTitleSlice>(['slice', 'index', 'slices', 'context'])
	)
</script>

<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
		class="py-[70px] max-tablet:py-[50px]"
	>
		<div class="mx-auto max-w-[1415px] px-4 pb-5">
			<h2
				v-motion-fade-in
				class="text-center font-[500] uppercase max-tablet:text-[20px] text-[28px]"
				v-if="slice?.primary?.title"
			>
				{{ slice?.primary?.title }}
			</h2>

			<p
				v-motion-fade-in
				class="pt-4 text-center max-tablet:max-w-[340px] max-tablet:mx-auto"
				v-if="slice?.primary?.paragraph"
			>
				{{ slice?.primary?.paragraph }}
			</p>

			<div
				class="grid gap-5 max-tablet:gap-y-12 pt-8 mt-9 max-laptop:grid-cols-2 max-tablet:grid-cols-1 laptop:grid-cols-4"
			>
				<div
					v-motion-fade-in
					class="flex group flex-col gap-[15px] max-laptop:items-center"
					v-for="(item, idx) in slice?.items"
					:key="idx"
				>
					<div class="relative rounded-lg overflow-hidden">
						<h3
							v-if="item?.title"
							class="absolute top-0 text-white left-0 w-full text-center text-[20px] font-[500] uppercase px-4 py-2 bg-bg2 bg-opacity-50 backdrop-blur-md rounded-b-md"
						>
							{{ item.title }}
						</h3>
						<NuxtImg
							provider="prismic"
							v-if="item?.image?.url"
							class="w-full aspect-square object-cover"
							:src="item?.image?.url"
							alt=""
							placeholder
						/>
						<div
							class="flex group-hover:max-h-96 group-hover:mb-0 -mb-10 max-tablet:mb-0 max-h-0 transition-all duration-500 max-tablet:!max-h-none flex-col gap-[10px] max-tablet:text-center absolute bottom-0 left-0 right-0 bg-bg2 bg-opacity-50 backdrop-blur-md rounded-t-lg p-4"
							v-if="item?.body"
						>
							<PrismicRichText :field="item?.body" class="!text-white" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
