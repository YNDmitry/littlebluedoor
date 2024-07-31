<script setup lang="ts">
	import { type Content } from '@prismicio/client'

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	const props = defineProps(
		getSliceComponentProps<Content.PaymentBlockSlice>(['slice', 'index', 'slices', 'context'])
	)

	const linkResolver = (doc: any) => '/' + doc.uid

	const serializer = {
		heading1: ({ children }: any) =>
			`<h1 class="first:mt-0 font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px] mb-[25px]">${children}</h1>`,
		heading2: ({ children }: any) =>
			`<h2 class="first:mt-0 font-[500] uppercase max-tablet:text-[20px] text-[28px] mb-[20px] mt-[25px]">${children}</h2>`,
		heading3: ({ children }: any) =>
			`<h3 class="text-[20px] mb-[15px] mt-[20px] uppercase font-[500]">${children}</h3>`,
		heading4: ({ children }: any) => `<h4 class="text-[16px] my-[15px]">${children}</h4>`,
		heading5: ({ children }: any) => `<h5>${children}</h5>`,
		heading6: ({ children }: any) => `<h6>${children}</h6>`,
		paragraph: ({ children }: any) => `<p class="my-[15px] last:m-0">${children}</p>`,
		preformatted: ({ node }: any) => `<pre>${JSON.stringify(node.text)}</pre>`,
		strong: ({ children }: any) => `<strong class="block my-4 last:mb-[36px]">${children}</strong>`,
		em: ({ children }: any) => `<em>${children}</em>`,
		listItem: ({ children }: any) => `<li>${children}</li>`,
		oListItem: ({ children }: any) => `<li>${children}</li>`,
		list: ({ children }: any) => `<ul>${children}</ul>`,
		oList: ({ children }: any) => `<ol>${children}</ol>`,
		image: ({ node }: any) => {
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
		hyperlink: ({ node, children }: any) => {
			const target = node.data.target ? `target="${node.data.target}" rel="noopener"` : ''
			const url = linkResolver(node.data)
			return `<a ${target} href="${url}">${children}</a>`
		},
		label: ({ node, children }: any) => {
			return `<span class="${node.data.label}">${children}</span>`
		},
		span: ({ text }: any) => (text ? text : ''),
	}

	function getBaseConfig() {
		return {
			env: process.env.NODE_ENV === 'development' ? 'demo' : 'prod',
			recipientCode: process.env.NODE_ENV === 'development' ? 'DLB' : 'OLR',

			requestPayerInfo: true,
			requestRecipientInfo: true,

			payerEmailNotifications: true,

			paymentOptionsConfig: {
				filters: {
					type: ['credit_card'],
					excludedCreditCardsBrands: ['amex'],
				},
			},

			onCompleteCallback: function (args: any) {
				if (args.status == 'success') {
					alert(`Thank you for the payment! Will email you soon with all the details! `)
				} else if (args.status == 'error') {
					alert('Your payment was UNSUCCESSFUL please try again')
				}
			},
		}
	}

	function getFormattedDate(date: Date) {
		const yyyy = date.getFullYear()
		const mm = String(date.getMonth() + 1).padStart(2, '0')
		const dd = String(date.getDate()).padStart(2, '0')

		return `${yyyy}-${mm}-${dd}`
	}

	function payBalance() {
		if (!process.client) return

		let config: any = getBaseConfig()
		if (props.slice.variation === 'paymentBlockWithImages') {
			config.amount = props.slice.items.find((el) => el.is_deposit === false)?.product_price
		}

		if (typeof window !== 'undefined') {
			const modal = window.FlywirePayment.initiate(config)
			modal.render()
		}
	}

	function payDeposit() {
		if (!process.client) return

		const today = getFormattedDate(new Date())
		const balanceDate = getFormattedDate(new Date(props.slice.primary?.date)) // Months are zero indexed

		var config: any = getBaseConfig()
		if (props.slice.variation === 'paymentBlockWithImages') {
			config.amount = 0
			config.scheduledPayments = {
				type: 'scheduled',
				data: {
					instalments: [
						{
							amount: props.slice.items.find((el) => el.is_deposit === true)?.product_price,
							date: today,
						},
						{
							amount: props.slice.items.find((el) => el.is_deposit === true)?.product_price,
							date: balanceDate,
						},
					],
				},
			}
		}

		if (typeof window !== 'undefined') {
			const modal = window.FlywirePayment.initiate(config)
			modal.render()
		}
	}
</script>

<template>
	<section
		class="pb-16 max-tablet:pb-9"
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
	>
		<div class="flex-col text-center flex justify-center">
			<div class="max-w-[747px] px-4 mx-auto">
				<div v-motion-fade-in class="mt-[20px]" v-if="slice?.primary?.body">
					<PrismicRichText
						:field="slice?.primary?.body"
						:serializer="serializer"
						class="px-4 text-center"
					/>
				</div>
				<div
					v-if="slice.variation === 'paymentBlockWithImages'"
					class="mt-[40px] max-w-[747px] px-4 mx-auto"
					:class="
						slice?.items?.length === 1
							? 'flex'
							: 'grid grid-cols-[1fr_1fr] gap-3 max-tablet:flex max-tablet:flex-col max-tablet:gap-[50px]'
					"
				>
					<div v-for="btn in slice.items" class="mx-auto">
						<button
							type="button"
							v-motion-fade-in
							class="hover:bg-mainColorHover min-w-[300px] cursor-pointer text-center inline-block mx-auto bg-mainColor text-[16px] py-[16px] px-[25px] font-medium text-bg transition-colors uppercase"
							:class="slice.items.length > 1 ? 'w-full' : ''"
							@click.prevent="btn.is_deposit ? payDeposit() : payBalance()"
						>
							{{ btn.product_title_button }}
						</button>
						<p class="mt-3 text-[10px] opacity-70">{{ btn.description }}</p>
					</div>
				</div>
			</div>
			<div v-if="slice.variation === 'default'" class="px-4 mx-auto max-w-[1300px] w-full">
				<div class="relative">
					<Swiper
						v-motion-fade-in
						id="instagram-slider"
						class="pt-[50px] !ml-[-1rem] !pl-[1rem] !mr-[-1rem] !pr-[1rem]"
						:modules="[SwiperNavigation]"
						:navigation="{
							nextEl: '#inst-next',
							prevEl: '#inst-prev',
						}"
						:breakpoints="{
							320: {
								slidesPerView: 'auto',
							},
							1200: {
								slidesPerView: 4,
								spaceBetween: 35,
							},
						}"
					>
						<SwiperSlide
							v-for="(slide, idx) in slice?.items"
							:key="idx"
							class="max-largeDesktop:max-w-[450px] max-largeDesktop:mr-[20px] max-tablet:max-w-[300px]"
						>
							<NuxtImg
								provider="prismic"
								class="mx-auto object-cover w-full aspect-[4/5]"
								:src="slide?.image?.url"
								width="350"
								:quality="80"
							/>
						</SwiperSlide>
					</Swiper>
					<div
						class="z-10 flex justify-between left-[-50px] right-[-50px] max-tablet:left-6 max-tablet:right-6 max-tablet:static max-tablet:mt-7 pt-4 absolute top-1/2 translate-y-[-50%]"
					>
						<button
							id="inst-prev"
							type="button"
							class="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-gray-200"
						>
							<IconsArrow customClasses="rotate-180" />
						</button>

						<button
							id="inst-next"
							type="button"
							class="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-gray-200"
						>
							<IconsArrow />
						</button>
					</div>
				</div>
			</div>
			<div
				class="w-full max-w-[747px] px-4 mx-auto"
				v-if="slice.variation === 'paymenBlockWithWhatsAppAndPdf'"
			>
				<div v-motion-fade-in v-if="slice.primary.button_title_pdf" class="mb-10">
					<PrismicLink
						class="hover:bg-mainColorHover max-tablet:w-full min-w-[300px] text-center inline-block mx-auto bg-mainColor text-[16px] py-[16px] px-[25px] font-medium text-bg transition-colors uppercase"
						:field="slice.primary.button_link_pdf"
						>{{ slice.primary.button_title_pdf }}</PrismicLink
					>
					<p class="mt-3 opacity-70">{{ slice.primary.button_description_pdf }}</p>
				</div>
				<NuxtLink
					v-if="slice.primary.button_title_whatsapp"
					v-motion-fade-in
					:to="slice.primary.button_link_whatsapp.url"
					target="_blank"
					class="hover:bg-mainColorHover max-tablet:w-full min-w-[300px] text-center inline-block mx-auto bg-mainColor text-[16px] py-[16px] px-[25px] font-medium text-bg transition-colors uppercase"
				>
					{{ slice.primary.button_title_whatsapp }}
				</NuxtLink>
				<p class="mt-3 opacity-70">{{ slice.primary.button_description_whatsapp }}</p>
			</div>
		</div>
	</section>
</template>
