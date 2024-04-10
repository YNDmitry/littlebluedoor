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
		class="py-[60px]"
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
	>
		<div class="mx-auto max-w-[1450px]">
			<div class="flex flex-col gap-[10px] px-4">
				<h2
					v-motion-fade-in
					v-if="slice?.primary?.title"
					class="text-center font-[500] uppercase max-tablet:text-[20px] text-[28px]"
				>
					{{ slice?.primary?.title }}
				</h2>

				<p
					v-motion-fade-in
					v-if="slice?.primary?.paragraph"
					class="text-center max-tablet:max-w-[300px] max-tablet:mx-auto"
				>
					{{ slice?.primary?.paragraph }}
				</p>
			</div>
		</div>
		<div class="relative h-[250px] overflow-hidden">
			<component is="style">
				@keyframes scroll { 0% { transform: translateX(0); } 100% { transform:
				translateX(calc(-250px * {{ slice?.items.length }})); } } .partners { animation: scroll 15s
				linear infinite; } @media screen and (max-width: 768px) { @keyframes scrollMob { 0% {
				transform: translateX(0); } 100% { transform: translateX(calc(-180px *
				{{ slice?.items.length }})); } } .partners { animation: scrollMob 15s linear infinite; } }
			</component>
			<div
				class="partners absolute left-0 top-[55px] flex w-full items-end gap-[100px] max-tablet:gap-[30px]"
			>
				<template v-for="item in 3" :key="item">
					<NuxtImg
						v-for="(item, idx) in slice?.items"
						:key="idx"
						class="w-[150px] h-[90px] shrink-0 object-contain"
						:src="item.logo?.url || ''"
						width="150"
						:quality="90"
					/>
				</template>
			</div>
		</div>
	</section>
</template>
