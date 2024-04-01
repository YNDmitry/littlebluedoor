<script setup>
	import { SpeedInsights } from '@vercel/speed-insights/nuxt'
</script>

<template>
	<div>
		<Header />

		<main class="h-full flex-1">
			<slot />
		</main>

		<Footer />
		<SpeedInsights />
	</div>
</template>
