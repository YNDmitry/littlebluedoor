<script setup lang="ts">
	import { type Content } from '@prismicio/client'

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	defineProps(
		getSliceComponentProps<Content.RichTextSlice>(['slice', 'index', 'slices', 'context'])
	)

	const serializer = {
		heading1: ({ children }) =>
			`<h1 class="first:mt-0 font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px] mb-[25px]">${children}</h1>`,
		heading2: ({ children }) =>
			`<h2 class="first:mt-0 font-[500] uppercase max-tablet:text-[20px] text-[28px] mb-[20px] mt-[25px]">${children}</h2>`,
		heading3: ({ children }) =>
			`<h3 class="text-[20px] mb-[15px] mt-[20px] uppercase font-[500]">${children}</h3>`,
		heading4: ({ children }) => `<h4 class="text-[16px] my-[15px]">${children}</h4>`,
		heading5: ({ children }) => `<h5>${children}</h5>`,
		heading6: ({ children }) => `<h6>${children}</h6>`,
		paragraph: ({ children }) => `<p class="my-[15px]">${children}</p>`,
		preformatted: ({ node }) => `<pre>${JSON.stringify(node.text)}</pre>`,
		strong: ({ children }) => `<strong>${children}</strong>`,
		em: ({ children }) => `<em>${children}</em>`,
		listItem: ({ children }) => `<li>${children}</li>`,
		oListItem: ({ children }) => `<li>${children}</li>`,
		list: ({ children }) => `<ul>${children}</ul>`,
		oList: ({ children }) => `<ol>${children}</ol>`,
		image: ({ node }) => {
			const linkUrl = node.linkTo ? linkResolver(node.linkTo) : null
			const linkTarget =
				node.linkTo && node.linkTo.target ? `target="${node.linkTo.target}" rel="noopener"` : ''
			const wrapperClassList = [node.label || '', 'block-img']
			const img = `<img class="my-[50px] last:mb-0" src="${node.url}" alt="${
				node.alt ? node.alt : ''
			}" copyright="${node.copyright ? node.copyright : ''}" />`

			return `
        <p class="${wrapperClassList.join(' ')}">
          ${linkUrl ? `<a ${linkTarget} href="${linkUrl}">${img}</a>` : img}
        </p>
      `
		},
		embed: ({ node }) => `
        <div data-oembed="${node.oembed.embed_url}"
          data-oembed-type="${node.oembed.type}"
          data-oembed-provider="${node.oembed.provider_name}"
          ${label(node)}>
          ${node.oembed.html}
        </div>
      `,
		hyperlink: ({ node, children }) => {
			const target = node.data.target ? `target="${node.data.target}" rel="noopener"` : ''
			const url = linkResolver(node.data)
			return `<a ${target} href="${url}">${children}</a>`
		},
		label: ({ node, children }) => {
			return `<span class="${node.data.label}">${children}</span>`
		},
		span: ({ text }) => (text ? text : ''),
	}
</script>

<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
		class="pt-[60px] pb-[100px]"
	>
		<div v-motion-fade-in v-if="slice?.primary?.body" class="max-w-[747px] mx-auto">
			<PrismicRichText :field="slice?.primary?.body" :serializer="serializer" />
		</div>
	</section>
</template>
