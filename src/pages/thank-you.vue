<script setup lang="ts">
	definePageMeta({
		middleware: 'form-guard',
	})
	defineRouteRules({
		prerender: true,
	})

	useSeoMeta({
		title: 'Thank you | Littlebluedoor',
	})
</script>

<template>
	<div class="max-w-[40rem] mx-auto text-center pt-[10rem] pb-[5rem]">
		<h1 class="text-[2rem]">Thank you!</h1>
		<p class="mt-2">
			We’ve received your message and will get back to you as soon as possible. If you have any
			urgent inquiries, feel free to contact us directly at
			<NuxtLink to="mailto:info@littlebluedoor.io" class="underline">email</NuxtLink> or
			<NuxtLink to="https://wa.me/message/ZOKXUIMPTQOQE1" target="_blank" class="underline"
				>WhatsApp</NuxtLink
			>.
		</p>
		<NuxtLink
			to="/"
			class="hover:bg-primary-20 hover:text-white min-w-[300px] text-center inline-block mx-auto bg-white text-[16px] py-[16px] px-[25px] font-medium text-bg2 rounded-lg transition-colors mt-[40px] uppercase"
			>Homepage</NuxtLink
		>
	</div>
</template>
