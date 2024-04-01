<script setup lang="ts">
	const navList = ref([
		{ name: 'Bookings', path: '/bookings' },
		{ name: 'Itineraries', path: '/ltineraries' },
		{ name: 'Experiences', path: '/experiences' },
		{ name: 'Digital Guides', path: '/digital-guides' },
		{ name: 'About Us', path: '/about-us' },
		{ name: 'Contact Us', path: '/contact-us' },
	])

	const show = ref(false)

	const settings = useSettings()

	const isMobile = useMediaQuery('(max-width: 1199px)')
</script>

<template>
	<header
		class="fixed z-50 w-full bg-bg"
	>
		<div class="px-[16px]">
			<div class="flex h-headerHeight items-center justify-between gap-6">
				<NuxtLink to="/" class="z-[1000]">
					<NuxtImg
						provider="prismic"
						:src="settings?.data?.logo?.url"
						class="w-[60px]"
						width="60"
					/>
				</NuxtLink>

				<Burger :show="show" @click="show = !show" class="z-[1000]"/>

				<div id="mobile-nav" v-show="show" class="fixed bg-bg z-[999] left-0 right-0 bottom-0 top-0 pt-[150px] h-full"</div>
				<ClientOnly>
					<Teleport to="#mobile-nav" :disabled="!isMobile">
						<nav
							class="absolute max-largeDesktop:relative left-[50%] max-largeDesktop:left-0 translate-x-[-50%] max-largeDesktop:translate-x-0"
						>
							<ul
								class="flex max-largeDesktop:flex-col max-largeDesktop:items-center max-largeDesktop:gap-7 largeDesktop:gap-6"
							>
								<li v-for="(item, idx) in settings?.data?.navigation" :key="idx">
									<NuxtLink
										:to="item?.link?.url || ''"
										class="hover:text-mainColorHover transition-colors max-largeDesktop:text-[25px]"
										>{{ item?.label }}</NuxtLink
									>
								</li>
							</ul>
						</nav>

						<NuxtLink
							:to="settings?.data?.whatsapp?.url"
							:target="settings?.data?.whatsapp?.target || ''"
							class="hover:text-mainColorHover flex items-center justify-center gap-2 max-largeDesktop:pt-[20px] max-largeDesktop:text-[20px]"
						>
							<IconsWhatsapp customClasses="text-mainColor" />

							<span>PLAN YOUR JOURNEY</span>
						</NuxtLink>
					</Teleport>
				</ClientOnly>
			</div>
		</div>
	</header>
</template>
