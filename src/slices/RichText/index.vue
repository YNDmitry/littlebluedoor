<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.RichTextSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const linkResolver = (doc: any) => "/" + doc.uid;

const serializer = {
  heading1: ({ children }: any) =>
    `<h1 class="first:mt-0 font-[500] uppercase max-tablet:text-[1.5625rem] tablet:text-[2.1875rem] mb-[1.5625rem]">${children}</h1>`,
  heading2: ({ children }: any) =>
    `<h2 class="first:mt-0 font-[500] uppercase max-tablet:text-[1.25rem] text-[1.75rem] mb-[1.25rem] mt-[1.5625rem]">${children}</h2>`,
  heading3: ({ children }: any) =>
    `<h3 class="text-[1.25rem] mb-[0.9375rem] mt-[1.25rem] uppercase font-[500]">${children}</h3>`,
  heading4: ({ children }: any) =>
    `<h4 class="text-[1rem] my-[0.9375rem]">${children}</h4>`,
  heading5: ({ children }: any) => `<h5>${children}</h5>`,
  heading6: ({ children }: any) => `<h6>${children}</h6>`,
  paragraph: ({ children }: any) =>
    `<p class="my-[0.9375rem] text-[0.875rem] last:mb-0">${children}</p>`,
  preformatted: ({ node }: any) => `<pre>${JSON.stringify(node.text)}</pre>`,
  strong: ({ children }: any) => `<strong>${children}</strong>`,
  em: ({ children }: any) => `<em>${children}</em>`,
  listItem: ({ children }: any) =>
    `<li class="max-tablet:text-[0.875rem]">${children}</li>`,
  oListItem: ({ children }: any) =>
    `<li class="max-tablet:text-[0.875rem]">${children}</li>`,
  list: ({ children }: any) => `<ul>${children}</ul>`,
  oList: ({ children }: any) => `<ol>${children}</ol>`,
  image: ({ node }: any) => {
    const linkUrl = node.linkTo ? linkResolver(node.linkTo) : null;
    const linkTarget =
      node.linkTo && node.linkTo.target
        ? `target="${node.linkTo.target}" rel="noopener"`
        : "";
    const wrapperClassList = [node.label || "", "block-img"];
    const img = `<img class="my-[3.125rem] last:mb-0" src="${node.url}" alt="${
      node.alt ? node.alt : ""
    }" copyright="${node.copyright ? node.copyright : ""}" />`;

    return `
        <p class="${wrapperClassList.join(" ")}">
          ${linkUrl ? `<a ${linkTarget} href="${linkUrl}">${img}</a>` : img}
        </p>
      `;
  },
  hyperlink: ({ node, children }: any) => {
    const target = node.data.target
      ? `target="${node.data.target}" rel="noopener"`
      : "";
    const url = linkResolver(node.data);
    return `<a ${target} href="${url}">${children}</a>`;
  },
  label: ({ node, children }: any) => {
    return `<span class="${node.data.label}">${children}</span>`;
  },
  span: ({ text }: any) => (text ? text : ""),
};
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="py-[60px] max-tablet:py-[40px]"
  >
    <div
      v-motion-fade-in
      v-if="slice?.primary?.body"
      class="max-w-[747px] mx-auto"
    >
      <PrismicRichText
        :field="slice?.primary?.body"
        :serializer="serializer"
        class="px-4 text-center"
      />
    </div>
  </section>
</template>
