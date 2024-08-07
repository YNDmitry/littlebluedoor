<script setup lang="ts">
	import { type Content } from '@prismicio/client'

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	const props = defineProps(
		getSliceComponentProps<Content.HeroSlice>(['slice', 'index', 'slices', 'context'])
	)

	const img = useImage()
	const serializer = {
		paragraph: ({ children }) => `<p class="my-[15px]">${children}</p>`,
		strong: ({ children }) => `<strong>${children}</strong>`,
		image: ({ node }) => {
			const linkUrl = node.linkTo ? linkResolver(node.linkTo) : null
			const linkTarget =
				node.linkTo && node.linkTo.target ? `target="${node.linkTo.target}" rel="noopener"` : ''
			const wrapperClassList = [node.label || '', 'block-img']
			const image = `<img class="mx-auto text-center w-[80px]" src="${img(node.url, { format: 'webp', provider: 'prismic' })}" alt="${
				node.alt ? node.alt : ''
			}" copyright="${node.copyright ? node.copyright : ''}" />`

			return `
	       <p class="${wrapperClassList.join(' ')}">
	         ${linkUrl ? `<a ${linkTarget} href="${linkUrl}">${image}</a>` : image}
	       </p>
	     `
		},
	}

	const sliderCount = ref(props.slice.items?.length)
</script>

<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
		:class="!slice?.primary?.heading ? 'pt-[60px]' : 'pt-headerHeight'"
	>
		<div class="px-4 pt-2 pb-8" v-if="slice?.primary?.heading">
			<h1
				v-motion-fade-in
				class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]"
			>
				{{ slice?.primary?.heading }}
			</h1>
		</div>

		<div
			v-motion-fade-in
			v-if="slice?.primary?.rich_text && slice?.variation === 'heroWithRichText'"
			class="text-center"
		>
			<NuxtImg
				v-if="slice?.primary?.small_image?.url"
				:src="slice?.primary?.small_image?.url"
				provider="prismic"
				width="80"
				format="webp"
				class="mx-auto"
				placeholder
			/>
			<PrismicRichText
				:field="slice?.primary?.rich_text"
				:serializer="serializer"
				class="max-w-[650px] mx-auto text-center px-8 mb-8"
			/>
		</div>

		<div v-motion-fade-in v-if="slice?.variation === 'default' || 'heroWIthRichText'">
			<NuxtImg
				provider="prismic"
				v-if="slice?.primary?.image?.url"
				:src="slice?.primary?.image?.url"
				class="w-full object-cover max-tablet:h-[250px] h-[440px]"
				width="2000"
				height="600"
				:quality="80"
				format="webp"
				placeholder
			/>
		</div>

		<div
			v-motion-fade-in
			class="mx-auto flex max-w-[747px] flex-col items-center px-4"
			v-if="slice.variation === 'heroWithSliderAndRichText'"
		>
			<PrismicRichText
				:field="slice?.primary?.rich_text"
				v-if="slice?.primary?.rich_text"
				class="text-center"
			/>

			<div v-motion-fade-in class="block text-center mt-4" v-if="slice.primary.button_link">
				<NuxtLink
					:to="slice.primary.button_link.url || ''"
					class="hover:bg-mainColorHover inline-block mx-auto bg-mainColor text-[16px] py-[16px] px-[25px] font-medium text-bg transition-colors mt-[40px] uppercase"
					>{{ slice.primary.button_label }}</NuxtLink
				>
			</div>
		</div>

		<div
			v-if="
				slice?.variation === ('heroWithSlider' || 'heroWithSliderAndRichText') &&
				slice?.items.length > 0
			"
			class="mx-auto pt-4 hav-swiper flex gap-5"
		>
			<template v-for="(item, index) in 3">
				<div
					v-for="(slide, idx) in slice?.items"
					:key="idx"
					class="max-w-[400px] max-tablet:max-w-[250px] shrink-0"
				>
					<NuxtImg
						provider="prismic"
						class="object-cover aspect-square max-tablet:max-w-[250px]"
						:src="slide?.image?.url"
						width="600"
						height="600"
					/>
				</div>
			</template>
		</div>
	</section>
</template>

<style scoped>
	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc(-420px * v-bind(sliderCount)));
		}
	}
	.hav-swiper {
		animation: scroll 30s linear infinite;
	}
	@media screen and (max-width: 768px) {
		@keyframes scrollMob {
			0% {
				transform: translateX(0);
			}
			100% {
				transform: translateX(calc(-270px * v-bind(sliderCount)));
			}
		}
		.hav-swiper {
			animation: scrollMob 15s linear infinite;
		}
	}
</style>
