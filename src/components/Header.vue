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
</script>

<template>
	<header
		:class="{
			'min-h-screen': show,
		}"
		class="fixed z-50 w-full bg-bg"
	>
		<div class="px-[16px]">
			<div class="flex h-headerHeight items-center justify-between gap-6">
				<NuxtLink to="/">
					<NuxtImg
						provider="prismic"
						:src="settings?.data?.logo?.url"
						class="w-[60px]"
						width="60"
					/>
				</NuxtLink>

				<Burger :show="show" @update:show="show = $event" />

				<nav class="absolute left-[50%] translate-x-[-50%]">
					<ul
						class="flex max-largeDesktop:flex-col max-largeDesktop:items-center max-largeDesktop:gap-3 largeDesktop:gap-6"
					>
						<li v-for="item in settings.data.navigation" :key="item">
							<NuxtLink
								:to="item?.link?.url || ''"
								class="hover:text-mainColorHover transition-colors max-largeDesktop:text-[23px]"
								>{{ item.label }}</NuxtLink
							>
						</li>
					</ul>
				</nav>

				<NuxtLink
					:to="settings?.data?.whatsapp?.url"
					:target="settings?.data?.whatsapp?.target || ''"
					class="hover:text-mainColorHover flex items-center justify-center gap-2 max-largeDesktop:pt-[20px] max-largeDesktop:text-[20px] max-largeDesktop:text-[23px]"
				>
					<IconsWhatsapp customClasses="text-mainColor" />

					<span>PLAN YOUR JOURNEY</span>
				</NuxtLink>
			</div>
		</div>
	</header>
</template>
