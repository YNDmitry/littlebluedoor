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
		class="py-[60px]"
	>
		<div class="mx-auto max-w-[1415px] px-4 pb-5">
			<h2
				class="text-center font-[500] uppercase max-tablet:text-[20px] text-[28px]"
				v-if="slice?.primary?.title"
			>
				{{ slice?.primary?.title }}
			</h2>

			<p class="pt-4 text-center" v-if="slice?.primary?.paragraph">
				{{ slice?.primary?.paragraph }}
			</p>

			<div
				class="grid gap-5 pt-8 mt-9 max-laptop:grid-cols-2 max-tablet:grid-cols-1 laptop:grid-cols-4"
			>
				<div
					class="flex flex-col gap-[15px] max-laptop:items-center"
					v-for="(item, idx) in slice?.items"
					:key="idx"
				>
					<div v-if="item?.title">{{ item.title }}</div>
					<NuxtImg
						provider="prismic"
						v-if="item?.image?.url"
						class="w-full h-[350px] object-cover"
						:src="item?.image?.url"
						alt=""
					/>

					<div class="flex flex-col gap-[10px]" v-if="item?.body">
						<PrismicRichText :field="item?.body" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
