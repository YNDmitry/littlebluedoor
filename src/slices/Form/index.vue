<script setup lang="ts">
	import { type Content } from '@prismicio/client'

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	defineProps(getSliceComponentProps<Content.FormSlice>(['slice', 'index', 'slices', 'context']))
</script>

<template>
	<section
		class="max-tablet:pt-[50px] py-[60px]"
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
	>
		<div class="mx-auto max-w-[1100px] px-4">
			<h2
				v-if="slice?.primary?.title"
				class="text-center font-[500] uppercase max-tablet:text-[20px] text-[28px]"
			>
				{{ slice?.primary?.title }}
			</h2>

			<p class="pt-4 text-center uppercase">{{ slice?.primary?.paragraph }}</p>

			<form class="mt-[30px]">
				<div class="px-12 py-8">
					<div class="flex flex-col gap-[30px]">
						<div class="flex gap-[30px]">
							<input
								class="h-[45px] w-full border-b border-gray-400 bg-transparent"
								type="text"
								placeholder="Where would you like to go?"
								aria-label="Where would you like to go?"
							/>

							<input
								class="h-[45px] w-full border-b border-gray-400 bg-transparent"
								type="date"
								placeholder="When would you like to go?"
								aria-label="When would you like to go?"
							/>

							<input
								class="h-[45px] w-full border-b border-gray-400 bg-transparent"
								type="text"
								placeholder="How long would you like to go for?"
								aria-label="How long would you like to go for?"
							/>
						</div>

						<div class="flex gap-[30px]">
							<select
								class="h-[45px] w-full border-b border-gray-400 bg-transparent"
								placeholder="Gender"
							>
								<option value="">Gender</option>
								<option value="mr">Mr</option>
								<option value="mrs">Mrs</option>
							</select>
							<input
								class="h-[45px] w-full border-b border-gray-400 bg-transparent"
								type="text"
								placeholder="First name"
								aria-label="First name"
							/>

							<input
								class="h-[45px] w-full border-b border-gray-400 bg-transparent"
								type="text"
								placeholder="Last name"
								aria-label="Last name"
							/>
						</div>

						<div class="flex gap-[30px]">
							<input
								class="h-[45px] w-full border-b border-gray-400 bg-transparent"
								type="email"
								placeholder="Email address"
								aria-label="Email address"
								required
							/>

							<input
								class="h-[45px] w-full border-b border-gray-400 bg-transparent"
								type="phone"
								placeholder="Phone number"
								aria-label="Phone number"
							/>
						</div>

						<textarea
							class="h-[170px] w-full border-b border-gray-400 bg-transparent"
							placeholder="Any specific comment or request?"
						></textarea>
					</div>
				</div>

				<div v-motion-fade-in class="text-center">
					<button
						type="submit"
						class="hover:bg-mainColorHover inline-block mx-auto bg-mainColor text-[16px] py-[16px] px-[25px] font-medium text-bg transition-colors uppercase"
					>
						Request my journey
					</button>
				</div>
			</form>
		</div>
	</section>
</template>
