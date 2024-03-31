<script setup lang="ts">
	import { type Content } from '@prismicio/client'

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	defineProps(
		getSliceComponentProps<Content.HeroWithVideoSlice>(['slice', 'index', 'slices', 'context'])
	)
</script>

<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
		class="pt-headerHeightFull"
	>
		<div class="relative">
			<video autoplay muted loop class="w-full h-[720px] object-cover max-laptop:h-[400px]">
				<source :src="slice?.primary?.video?.url" type="video/webm" />
				Your browser does not support the video tag.
			</video>

			<div
				class="absolute left-1/2 top-1/2 flex w-full translate-x-[-50%] translate-y-[-50%] flex-col items-center px-3 text-white max-largeDesktop:gap-[30px] max-tablet:gap-[10px] largeDesktop:gap-[110px]"
			>
				<div class="flex flex-col items-center">
					<h1
						class="mt-[-20px ] text-center titleMainBanner capitalize max-largeDesktop:mt-[-10px] max-largeDesktop:text-[35px] max-tablet:text-[25px] largeDesktop:text-[70px]"
					>
						<span
							class="text-center block font-medium uppercase max-largeDesktop:text-[16px] max-tablet:text-[14px] largeDesktop:text-[30px]"
							>{{ slice.primary.pre_heading }}</span
						>
						{{ slice.primary.heading }}
					</h1>
				</div>

				<p
					class="text-center font-openSans max-largeDesktop:text-[14px] max-tablet:text-[12px] largeDesktop:text-[25px]"
				>
					{{ slice.primary.paragraph }}
				</p>
			</div>
		</div>
	</section>
</template>
