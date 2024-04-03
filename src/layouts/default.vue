<script setup>
	import { SpeedInsights } from '@vercel/speed-insights/nuxt'
</script>

<template>
	<div>
		<Header />

		<div class="h-full flex-1 overflow-x-clip">
			<slot />
		</div>

		<Footer />
		<SpeedInsights />
	</div>
</template>
