<template>
	<footer class="bg-mainColor">
		<div class="mx-auto px-4">
			<div class="pb-[20px] pt-[40px]">
				<p class="text-center text-white">Stay Tuned.</p>

				<form class="flex h-[75px] max-w-[750px] mx-auto pt-6">
					<input
						type="text"
						placeholder="EMAIL ADDRESS"
						class="w-full border-b border-gray-400 pl-4 tracking-[3px] tablet:text-[20px]"
					/>

					<button class="w-[140px] bg-primary border-primary border text-[14px] text-white">
						SUBSCRIBE
					</button>
				</form>

				<div class="flex items-center justify-center gap-5 max-tablet:pt-[45px] tablet:pt-[90px]">
					<NuxtLink to="/" class="hover:scale-125 transition-all">
						<IconsInstagram customClasses="text-white" />
					</NuxtLink>
					<NuxtLink to="/" class="hover:scale-125 transition-all">
						<IconsWhatsapp customClasses="text-white" />
					</NuxtLink>

					<NuxtLink to="/" class="hover:scale-125 transition-all">
						<IconsMail customClasses="text-white" />
					</NuxtLink>
				</div>
			</div>

			<div
				class="flex items-center justify-center gap-8 text-[14px] text-white max-tablet:flex-col max-tablet:gap-4 max-tablet:pb-4 tablet:h-[50px] tablet:gap-2"
			>
				<div class="flex gap-8">
					<a href="#" class="uppercase">T&S</a>
					<a href="#" class="uppercase">REFUND POLICY</a>
				</div>

				<a href="#" class="uppercase mx-4"
					>© {{ new Date().getFullYear() }} LITTLEBLUEDOOR | ALL RIGHTS RESERVED</a
				>

				<div class="flex gap-8">
					<a href="#">PRIVACY POLICY</a>
					<a href="#">REVIEWS</a>
				</div>
			</div>
		</div>
	</footer>
</template>
