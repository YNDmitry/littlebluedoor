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
			<video
				autoplay
				muted
				loop
				class="w-full h-[550px] object-cover max-laptop:h-[400px] pointer-events-none"
				v-if="slice?.primary?.video?.url"
			>
				<source :src="slice?.primary?.video?.url" type="video/webm" />
				<source :src="slice?.primary?.video_mp4?.url" type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			<div
				class="absolute left-1/2 top-1/2 flex w-full translate-x-[-50%] translate-y-[-50%] flex-col items-center px-3 text-white"
			>
				<div v-motion-fade-in class="flex flex-col items-center">
					<h1
						class="text-center titleMainBanner capitalize max-largeDesktop:mt-[-10px] max-largeDesktop:text-[35px] max-tablet:text-[25px] text-[60px]"
					>
						<span
							class="text-center text-[24px] tracking-[6px] block font-montserrat font-medium uppercase max-largeDesktop:text-[16px] max-tablet:text-[14px]"
							>{{ slice.primary.pre_heading }}</span
						>
						{{ slice.primary.heading }}
					</h1>
				</div>

				<p
					v-motion-fade-in
					class="text-center max-tablet:text-[12px] text-[20px] mt-[50px] max-tablet:mt-[30px]"
				>
					{{ slice.primary.paragraph }}
				</p>
			</div>
		</div>
	</section>
</template>
