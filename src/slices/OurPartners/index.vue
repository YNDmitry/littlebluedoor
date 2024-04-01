<script setup lang="ts">
	import { type Content } from '@prismicio/client'

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	defineProps(
		getSliceComponentProps<Content.OurPartnersSlice>(['slice', 'index', 'slices', 'context'])
	)
</script>

<template>
	<section
		class="py-[100px]"
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
	>
		<div class="mx-auto max-w-[1450px]">
			<div class="flex flex-col gap-[10px] px-4">
				<h2
					v-if="slice?.primary?.title"
					class="text-center font-[500] uppercase max-tablet:text-[20px] text-[28px]"
				>
					{{ slice?.primary?.title }}
				</h2>

				<p v-if="slice?.primary?.paragraph" class="text-center">
					{{ slice?.primary?.paragraph }}
				</p>
			</div>
		</div>
		<div class="relative h-[250px] overflow-hidden">
			<div class="partners absolute left-0 top-[55px] flex w-full items-center gap-[100px]">
				<template v-for="item in 3" :key="item">
					<NuxtImg
						class="w-[150px] shrink-0 object-contain"
						src="/img/logos/belmond.png"
						width="150"
					/>
					<NuxtImg
						class="w-[150px] shrink-0 object-contain"
						src="/img/logos/elite.png"
						width="150"
					/>
					<NuxtImg
						class="w-[150px] shrink-0 object-contain"
						src="/img/logos/lata.png"
						width="150"
					/>

					<NuxtImg
						class="w-[150px] shrink-0 object-contain"
						src="/img/logos/logoBlue.png"
						width="150"
					/>
					<NuxtImg
						class="w-[150px] shrink-0 object-contain"
						src="/img/logos/luxury.png"
						width="150"
					/>

					<NuxtImg
						class="w-[150px] shrink-0 object-contain"
						src="/img/logos/membership.png"
						width="150"
					/>
					<NuxtImg
						class="w-[150px] shrink-0 object-contain"
						src="/img/logos/prefered.png"
						width="150"
					/>
					<NuxtImg
						class="w-[150px] shrink-0 object-contain"
						src="/img/logos/virtuoso.png"
						width="150"
					/>
				</template>
			</div>
		</div>
	</section>
</template>
