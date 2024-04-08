<script setup lang="ts">
	const settings = useSettings()

	const isMobile = useMediaQuery('(max-width: 1200px)')

	const show = ref(false)

	const isMobileShow = computed(() => {
		return !isMobile.value ? true : false
	})
</script>

<template>
	<header class="fixed z-[1000] w-full bg-mainColor text-white">
		<div class="px-[16px]">
			<div id="nav" class="relative flex h-headerHeight items-center justify-between gap-6">
				<NuxtLink to="/" class="z-[1000]">
					<NuxtImg
						provider="prismic"
						v-if="settings?.data?.logo?.url"
						:src="settings?.data?.logo?.url"
						class="w-[60px]"
						width="60"
					/>
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
							<li v-for="(item, idx) in settings?.data?.navigation" :key="idx">
								<NuxtLink
									@click="isMobile ? (show = !show) : null"
									:to="item?.link?.url || ''"
									class="hover:opacity-70 transition-opacity max-largeDesktop:text-[25px] whitespace-nowrap"
									>{{ item?.label }}</NuxtLink
								>
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
