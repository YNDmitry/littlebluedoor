<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { getSliceComponentProps, PrismicRichText } from "@prismicio/vue";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.DocRichTextSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const linkResolver = (doc: any) => "/" + doc.uid;

const serializer = {
  heading2: ({ children }: any) =>
    `<h2 class="first:mt-0 font-[500] uppercase max-tablet:text-[1.25rem] text-[1.75rem] mb-[1.25rem] mt-[1.5625rem]">${children}</h2>`,
  heading3: ({ children }: any) =>
    `<h3 class="text-[1.25rem] mb-[0.9375rem] mt-[1.25rem] uppercase font-[500]">${children}</h3>`,
  heading4: ({ children }: any) =>
    `<h4 class="text-[1rem] my-[0.9375rem]">${children}</h4>`,
  paragraph: ({ children }: any) =>
    `<p class="my-[0.9375rem] max-tablet:text-[0.875rem] last:mb-0">${children}</p>`,
  list: ({ children }: any) =>
    `<ul class="list-disc max-tablet:text-[0.875rem] list-inside">${children}</ul>`,
  oList: ({ children }: any) =>
    `<ol class="list-decimal max-tablet:text-[0.875rem] list-inside">${children}</ol>`,
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
    <div v-if="slice?.primary?.group">
      <div
        v-motion-fade-in
        v-for="(item, idx) in slice.primary.group"
        :key="idx"
        class="max-w-[747px] mx-auto"
      >
        <PrismicRichText
          v-if="item.rich_text"
          :field="item.rich_text"
          :serializer="serializer"
          class="px-4 text-left"
          data-rich
        />
        <div class="!px-4 text-left my-4 w-full" v-if="item.table">
          <PrismicTable :field="item.table" class="w-full" />
        </div>
      </div>
    </div>
  </section>
</template>
