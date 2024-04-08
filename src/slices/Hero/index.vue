<script setup lang="ts">
	import { type Content } from '@prismicio/client'

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	defineProps(getSliceComponentProps<Content.HeroSlice>(['slice', 'index', 'slices', 'context']))

	const serializer = {
		paragraph: ({ children }) => `<p class="my-[15px]">${children}</p>`,
		strong: ({ children }) => `<strong>${children}</strong>`,
		image: ({ node }) => {
			const linkUrl = node.linkTo ? linkResolver(node.linkTo) : null
			const linkTarget =
				node.linkTo && node.linkTo.target ? `target="${node.linkTo.target}" rel="noopener"` : ''
			const wrapperClassList = [node.label || '', 'block-img']
			const img = `<img class="mx-auto text-center" src="${node.url}" alt="${
				node.alt ? node.alt : ''
			}" copyright="${node.copyright ? node.copyright : ''}" />`

			return `
        <p class="${wrapperClassList.join(' ')}">
          ${linkUrl ? `<a ${linkTarget} href="${linkUrl}">${img}</a>` : img}
        </p>
      `
		},
	}
</script>

<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
		class="pt-headerHeight"
	>
		<div class="px-4 pt-2 pb-8">
			<h1
				v-motion-fade-in
				v-if="slice?.primary?.heading"
				class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]"
			>
				{{ slice?.primary?.heading }}
			</h1>
		</div>

		<div
			v-motion-fade-in
			v-if="slice?.primary?.rich_text && slice?.variation === 'heroWithRichText'"
		>
			<PrismicRichText
				:field="slice?.primary?.rich_text"
				:serializer="serializer"
				class="max-w-[650px] mx-auto text-center px-[40px] mb-8"
			/>
		</div>

		<div v-motion-fade-in v-if="slice?.variation === 'default' || 'heroWIthRichText'">
			<NuxtImg
				provider="prismic"
				:src="slice?.primary?.image?.url"
				class="w-full object-cover max-tablet:h-[250px] h-[440px]"
				width="2000"
				height="600"
				:quality="80"
			/>
		</div>

		<component :is="'style'" v-if="slice?.variation === 'heroWithSlider'">
			@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(calc(-420px
			* {{ slice?.items.length }})); } } .hav-swiper { animation: scroll 30s linear infinite; }
		</component>
		<div
			v-motion-fade-in
			v-if="slice?.variation === 'heroWithSlider'"
			class="mx-auto pt-4 hav-swiper flex gap-5"
		>
			<template v-for="(item, index) in 3" :key="index">
				<div
					v-for="(slide, idx) in slice?.items"
					:key="idx"
					class="max-w-[400px] max-tablet:max-w-[300] shrink-0"
				>
					<NuxtImg
						provider="prismic"
						class="object-cover aspect-square max-tablet:max-w-[300px]"
						:src="slide?.image?.url || ''"
						:alt="slide?.image?.alt || ''"
						width="600"
						height="600"
					/>
				</div>
			</template>
		</div>
	</section>
</template>
