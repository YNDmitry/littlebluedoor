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
					class="text-center font-[500] uppercase max-tablet:text-[25px] text-[28px]"
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
		<div class="relative h-[90px] mt-[55px] overflow-hidden">
			<component is="style">
				@keyframes scroll { 0% { transform: translateX(0); } 100% { transform:
				translateX(calc(-200px * {{ slice.items.length }})); } } .partners { animation: scroll 15s
				linear infinite; will-change: transform; } @media screen and (max-width: 768px) { @keyframes
				scrollMob { 0% { transform: translateX(0); } 100% { transform: translateX(calc(-180px *
				{{ slice.items.length }})); } } .partners { animation: scrollMob 15s linear infinite;
				will-change: transform; } }
			</component>
			<div
				class="partners absolute transition-all left-0 flex w-full items-end gap-[50px] max-tablet:gap-[30px]"
			>
				<template v-for="item in 5" :key="item">
					<div
						v-for="(item, idx) in slice?.items"
						:key="idx"
						class="rounded-xl p-4 min-w-[150px] h-[90px] bg-white flex items-center justify-center"
					>
						<NuxtImg
							class="object-contain"
							:src="item.logo?.url || ''"
							width="150"
							:quality="100"
							placeholder
						/>
					</div>
				</template>
			</div>
		</div>
	</section>
</template>
