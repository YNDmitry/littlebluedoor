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
		class="py-16"
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
	>
		<div class="mx-auto max-w-[1450px]">
			<div class="flex flex-col gap-[10px] px-4">
				<h2
					v-if="slice?.primary?.title"
					class="text-center font-[500] uppercase max-tablet:text-[35px] tablet:text-[42px]"
				>
					{{ slice?.primary?.title }}
				</h2>

				<p v-if="slice?.primary?.paragraph" class="text-center font-openSans tablet:text-[20px]">
					{{ slice?.primary?.paragraph }}
				</p>
			</div>
		</div>
		<div class="relative h-[250px] overflow-hidden">
			<div class="partners absolute left-0 top-[55px] flex w-full items-center gap-[100px]">
				<template v-for="item in 3" :key="item">
					<NuxtImg class="w-[150px] shrink-0 object-contain" src="/img/logos/belmond.png" />
					<NuxtImg class="w-[150px] shrink-0 object-contain" src="/img/logos/elite.png" />
					<NuxtImg class="w-[150px] shrink-0 object-contain" src="/img/logos/lata.png" />

					<NuxtImg class="w-[150px] shrink-0 object-contain" src="/img/logos/logoBlue.png" />
					<NuxtImg class="w-[150px] shrink-0 object-contain" src="/img/logos/luxury.png" />

					<NuxtImg class="w-[150px] shrink-0 object-contain" src="/img/logos/membership.png" />
					<NuxtImg class="w-[150px] shrink-0 object-contain" src="/img/logos/prefered.png" />
					<NuxtImg class="w-[150px] shrink-0 object-contain" src="/img/logos/virtuoso.png" />
				</template>
			</div>
		</div>
	</section>
</template>
