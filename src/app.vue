<script setup>
	const LenisOptions = ref({
		duration: 0.2,
		lerp: 0.1,
		syncTouchLerp: 0.075,
		smoothWheel: true,
		wheelMultiplier: 1,
		touchMultiplier: 1,
		autoResize: true,
	})
</script>

<template>
	<div class="flex min-h-screen flex-col">
		<Header />

		<main class="h-full flex-1">
			<lenis :options="LenisOptions">
				<NuxtPage />
			</lenis>
		</main>

		<Footer />
	</div>
</template>
