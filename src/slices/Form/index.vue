<script setup lang="ts">
	import { type Content } from '@prismicio/client'

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	defineProps(getSliceComponentProps<Content.FormSlice>(['slice', 'index', 'slices', 'context']))
</script>

<template>
	<section
		class="max-tablet:pt-[50px] tablet:pt-[100px]"
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
	>
		<div class="mx-auto max-w-[900px] px-4">
			<h2
				v-if="slice?.primary?.title"
				class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]"
			>
				{{ slice?.primary?.title }}
			</h2>

			<p class="pt-4 text-center uppercase">{{ slice?.primary?.paragraph }}</p>

			<form class="mb-[120px] mt-[30px]">
				<div class="px-12 py-8">
					<div class="flex flex-col gap-[30px]">
						<div class="flex gap-[30px]">
							<input
								class="h-[45px] w-full border-b border-gray-400 bg-transparent"
								type="text"
								placeholder="FIRST NAME"
							/>

							<input
								class="h-[45px] w-full border-b border-gray-400 bg-transparent"
								type="text"
								placeholder="LAST NAME"
							/>
						</div>

						<input
							class="h-[45px] w-full border-b border-gray-400 bg-transparent"
							type="text"
							placeholder="EMAIL"
						/>

						<textarea
							class="h-[170px] w-full border-b border-gray-400 bg-transparent"
							placeholder="MESSAGE"
						></textarea>
					</div>
				</div>

				<button
					class="hover:bg-mainColorHover mx-auto mt-[20px] table h-[48px] bg-mainColor px-2 font-regular text-bg transition-colors tablet:text-[25px] px-7"
				>
					Send
				</button>
			</form>
		</div>
	</section>
</template>
