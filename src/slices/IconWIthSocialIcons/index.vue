<script setup lang="ts">
	import { type Content } from '@prismicio/client'

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	defineProps(
		getSliceComponentProps<Content.IconWIthSocialIconsSlice>([
			'slice',
			'index',
			'slices',
			'context',
		])
	)

	const settings = useSettings()
</script>

<template>
	<section
		class="flex flex-col items-center pt-[80px]"
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
	>
		<NuxtImg
			v-motion-fade-in
			class="mx-auto w-[80px]"
			src="/img/homePage/logo.png"
			width="80"
			placeholder
		/>

		<div v-motion-fade-in class="mt-[15px] flex items-center justify-center gap-5 p-3">
			<NuxtLink
				:to="settings?.data?.instagram?.url"
				target="_blank"
				class="hover:scale-125 transition-all"
			>
				<IconsInstagram customClasses="text-white" />
			</NuxtLink>
			<NuxtLink
				:to="settings?.data?.whatsapp?.url"
				target="_blank"
				class="hover:scale-125 transition-all"
			>
				<IconsWhatsapp customClasses="text-white" />
			</NuxtLink>
			<NuxtLink :to="'mailto:' + settings?.data?.email?.url" class="hover:scale-125 transition-all">
				<IconsMail customClasses="text-white"
			/></NuxtLink>
		</div>
	</section>
</template>
