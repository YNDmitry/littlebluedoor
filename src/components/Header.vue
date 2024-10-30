<script setup lang="ts">
	const settings = useSettings()

	const isMobile = useMediaQuery('(max-width: 1200px)')

	const popover = ref()

	const show = ref(false)

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
	<header
		class="fixed bg-opacity-50 z-[1000] top-2 left-2 right-2 rounded-lg backdrop-blur-lg bg-bg2 text-white"
	>
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
					class="max-largeDesktop:fixed flex items-center max-largeDesktop:z-[999] max-largeDesktop:left-0 max-largeDesktop:bg-bg2 max-largeDesktop:h-[100000px] max-largeDesktop:right-0 max-largeDesktop:bottom-0 max-largeDesktop:top-0 max-largeDesktop:pt-[150px]"
				>
					<nav
						class="absolute max-largeDesktop:static max-largeDesktop:top-0 left-[50%] translate-x-[-50%] max-largeDesktop:translate-x-0"
					>
						<ul
							class="flex max-largeDesktop:flex-col max-largeDesktop:items-center max-largeDesktop:gap-7 largeDesktop:gap-6"
						>
							<li class="relative">
								<NuxtLink
									@click="isMobile ? (show = !show) : null"
									@mouseenter="popover = true"
									@mouseleave="popover = false"
									to="/bookings"
									aria-controls="overlay_menu"
									class="hover:opacity-70 relative z-20 transition-opacity max-largeDesktop:text-[25px] whitespace-nowrap"
								>
									Bookings
								</NuxtLink>
								<div
									v-show="popover"
									@mouseenter="popover = true"
									@mouseleave="popover = false"
									class="absolute max-laptop:hidden z-10 top-0 bottom-0 pt-10 min-h-32"
								>
									<div class="flex flex-col gap-2 bg-bg2 text-white rounded-md px-4 py-2">
										<NuxtLink :prefetch="true" v-for="item in items" :to="item.path" class="z-20">{{
											item?.label
										}}</NuxtLink>
									</div>
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
						target="_blank"
						class="flex bg-white rounded-lg hover:scale-105 transition-all px-4 py-1 text-[14px] text-bg items-center justify-center gap-2 max-largeDesktop:pt-[50px] max-largeDesktop:text-[20px]"
					>
						<IconsWhatsapp customClasses="text-bg" />

						<span class="uppercase">Plan your journey</span>
					</NuxtLink>
				</div>
			</div>
		</div>
	</header>
</template>
