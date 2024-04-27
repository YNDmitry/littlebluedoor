<script setup lang="ts">
	const settings = useSettings()

	const isMobile = useMediaQuery('(max-width: 1200px)')

	const show = ref(false)

	const menu = ref()

	const items = ref([
		{
			label: 'Hotels',
			path: '/hotels',
		},
		{
			label: 'Villas',
			path: '/villas',
		},
		{
			label: 'Boats',
			path: '/boats',
		},
	])
</script>

<template>
	<header class="fixed z-[1000] w-full bg-mainColor text-white">
		<div class="px-[16px]">
			<div id="nav" class="relative flex h-headerHeight items-center justify-between gap-6">
				<NuxtLink to="/" class="z-[1000]" @click="show = false">
					<IconsLogo class="text-white w-[55px]" />
				</NuxtLink>

				<Burger :show="show" @click="show = !show" class="z-[1000]" />

				<div
					:class="{
						'max-largeDesktop:hidden': !show,
					}"
					class="max-largeDesktop:fixed max-largeDesktop:bg-mainColor max-largeDesktop:z-[999] max-largeDesktop:left-0 max-largeDesktop:right-0 max-largeDesktop:bottom-0 max-largeDesktop:top-0 max-largeDesktop:pt-[150px] max-largeDesktop:h-full"
				>
					<nav
						class="absolute max-largeDesktop:static left-[50%] translate-x-[-50%] max-largeDesktop:translate-x-0"
					>
						<ul
							class="flex max-largeDesktop:flex-col max-largeDesktop:items-center max-largeDesktop:gap-7 largeDesktop:gap-6"
						>
							<li class="relative">
								<NuxtLink
									@click="isMobile ? (show = !show) : null"
									@mouseenter="menu = true"
									@mouseleave="menu = false"
									to="/bookings"
									aria-controls="overlay_menu"
									class="hover:opacity-70 relative z-20 transition-opacity max-largeDesktop:text-[25px] whitespace-nowrap"
								>
									Bookings
								</NuxtLink>
								<div
									v-show="menu"
									@mouseenter="menu = true"
									@mouseleave="menu = false"
									class="absolute max-laptop:hidden z-10 top-0 bottom-0 flex flex-col bg-mainColor text-white pt-10 px-4 rounded-md min-h-32"
								>
									<NuxtLink :prefetch="true" v-for="item in items" :to="item.path" class="z-20">{{
										item?.label
									}}</NuxtLink>
								</div>
							</li>
							<li v-for="(item, idx) in settings?.data?.navigation" :key="idx">
								<NuxtLink
									@click="isMobile ? (show = !show) : null"
									:to="item?.link?.url || ''"
									class="hover:opacity-70 transition-opacity max-largeDesktop:text-[25px] whitespace-nowrap"
								>
									{{ item?.label }}
								</NuxtLink>
							</li>
						</ul>
					</nav>

					<NuxtLink
						:to="settings?.data?.whatsapp?.url"
						:target="settings?.data?.whatsapp?.target || ''"
						class="flex items-center justify-center gap-2 max-largeDesktop:pt-[50px] max-largeDesktop:text-[20px]"
					>
						<IconsWhatsapp customClasses="text-white" />

						<span>PLAN YOUR JOURNEY</span>
					</NuxtLink>
				</div>
			</div>
		</div>
	</header>
</template>
