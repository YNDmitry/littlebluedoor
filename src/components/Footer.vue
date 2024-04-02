<script setup lang="ts">
	const settings = useSettings()
</script>

<template>
	<footer class="bg-mainColor text-white">
		<div class="mx-auto px-4">
			<div class="pb-[20px] pt-[40px]">
				<div class="text-center max-w-[390px] mx-auto">
					<div v-motion-fade-in class="text-[20px] font-medium">JOIN OUR MAILING LIST</div>
					<p v-motion-fade-in class="mt-4">
						Be the first to hear about upcoming trips, unique destinations, and preferred rates.
					</p>
				</div>

				<div class="flex items-center justify-center w-full max-w-[450px] mx-auto">
					<form class="flex h-[75px] pt-6 w-full">
						<input
							v-motion-fade-in
							type="text"
							placeholder="EMAIL ADDRESS"
							class="w-full border-b border-gray-400 pl-4 tracking-[3px] text-[12px] text-black"
						/>

						<button
							v-motion-fade-in
							type="submit"
							class="w-[140px] bg-primary border-primary border text-[14px]"
						>
							SUBSCRIBE
						</button>
					</form>
				</div>

				<div
					v-motion-fade-in
					class="flex items-center justify-center gap-5 max-tablet:pt-[45px] tablet:pt-[90px]"
				>
					<NuxtLink
						:to="settings?.data?.instagram?.url"
						:target="settings?.data?.instagram?.target || ''"
						class="hover:scale-125 transition-all"
					>
						<IconsInstagram customClasses="text-white" />
					</NuxtLink>
					<NuxtLink
						:to="settings?.data?.whatsapp?.url"
						:target="settings?.data?.whatsapp?.target || ''"
						class="hover:scale-125 transition-all"
					>
						<IconsWhatsapp customClasses="text-white" />
					</NuxtLink>

					<NuxtLink
						:to="'mailto:' + settings?.data?.email?.url"
						class="hover:scale-125 transition-all"
					>
						<IconsMail customClasses="text-white" />
					</NuxtLink>
				</div>
			</div>

			<div
				class="flex items-center justify-center gap-8 text-[14px] text-white max-tablet:flex-col max-tablet:gap-4 max-tablet:pb-4 tablet:h-[50px] tablet:gap-2"
			>
				<div v-motion-fade-in class="uppercase mx-4">
					© {{ new Date().getFullYear() }} LITTLEBLUEDOOR | ALL RIGHTS RESERVED
				</div>
			</div>
		</div>
	</footer>
</template>
