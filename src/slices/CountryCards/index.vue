<script setup lang="ts">
	import { type Content } from '@prismicio/client'

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	defineProps(
		getSliceComponentProps<Content.CountryCardsSlice>(['slice', 'index', 'slices', 'context'])
	)

	const settings = useSettings()

	const isMobile = useMediaQuery('(max-width: 768px)')
</script>

<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
		class="pb-[80px] max-tablet:pb-[40px] first:pb-[120px] first:max-tablet:pb-[80px]"
	>
		<div class="mx-auto max-w-[1150px] px-4" v-if="slice?.variation === 'default'">
			<div class="pt-headerHeight">
				<h1
					v-motion-fade-in
					v-if="slice?.primary?.title"
					class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]"
				>
					{{ slice?.primary?.title }}
				</h1>

				<div v-motion-fade-in v-if="slice?.primary?.paragraph">
					<PrismicRichText
						:field="slice?.primary?.paragraph"
						class="text-center max-w-[600px] mx-auto mt-4 max-tablet:px-4"
					/>
				</div>
			</div>
		</div>
		<div
			v-if="slice?.variation === 'countryCards' && !isMobile"
			class="mx-auto max-w-[1150px] px-4"
		>
			<div class="flex justify-center items-center pb-5 text-center">
				<h2 v-motion-fade-in class="text-[24px] font-semibold uppercase">
					{{ slice?.primary?.country_title }}
				</h2>
			</div>

			<div class="inline-grid w-full grid-cols-someOfTheHotels justify-between gap-4 gap-y-14">
				<article
					v-motion-fade-in
					class="inline-flex flex-col items-center w-full"
					v-for="(article, idx) in slice?.items"
					:key="idx"
				>
					<div class="relative w-full rounded-lg overflow-hidden">
						<NuxtImg
							provider="prismic"
							class="h-[300px] w-full object-cover"
							width="300"
							:src="article?.image?.url"
							placeholder
						/>

						<div
							class="flex absolute rounded-t-lg bottom-0 left-0 right-0 px-4 py-2 flex-col items-center bg-bg2 bg-opacity-50 backdrop-blur-md"
						>
							<p class="text-[18px]">{{ article?.title }}</p>
							<PrismicRichText :field="article?.body" class="text-[18px]" />
						</div>
					</div>
					<NuxtLink
						:to="settings?.data?.whatsapp?.url"
						target="_blank"
						class="hover:bg-primary-20 hover:text-white rounded-lg uppercase py-2 px-7 bg-white text-[16px] font-regular text-bg transition-colors mt-4"
					>
						Book your room
					</NuxtLink>
				</article>
			</div>
		</div>
		<div v-if="slice?.variation === 'countryCards' && isMobile" class="mx-auto max-w-[1150px] px-4">
			<Accordion>
				<AccordionTab
					v-motion-fade-in
					:pt="{
						headerAction: 'flex justify-between items-center flex-row-reverse',
					}"
				>
					<template #header>
						<h2 class="text-[24px] font-semibold uppercase">
							{{ slice?.primary?.country_title }}
						</h2>
					</template>
					<template #default>
						<div
							class="inline-grid w-full grid-cols-someOfTheHotels justify-between gap-7 gap-y-14 pt-8"
						>
							<article
								v-motion-fade-in
								class="inline-flex flex-col items-center gap-[10px]"
								v-for="(article, idx) in slice?.items"
								:key="idx"
							>
								<NuxtImg
									provider="prismic"
									class="h-[300px] w-full object-cover"
									width="300"
									:src="article?.image?.url"
								/>

								<div class="flex flex-col items-center px-2">
									<p class="text-[18px]">{{ article?.title }}</p>
									<PrismicRichText :field="article?.body" class="text-[18px]" />

									<NuxtLink
										:to="settings?.data?.whatsapp?.url"
										class="hover:bg-mainColorHover uppercase py-2 px-7 bg-mainColor text-[16px] font-regular text-bg transition-colors mt-4"
									>
										Book your room
									</NuxtLink>
								</div>
							</article>
						</div>
					</template>
				</AccordionTab>
			</Accordion>
		</div>
	</section>
</template>
