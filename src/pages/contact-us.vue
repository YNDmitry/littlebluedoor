<template>
	<!-- CONTACT -->
	<section class="pb-[60px] pt-headerHeight">
		<div class="px-4 py-2">
			<h1 class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]">
				contact
			</h1>
		</div>

		<div>
			<NuxtImg
				class="w-full object-cover max-tablet:h-[250px]"
				width="2000"
				src="/img/hotel/test.png"
				alt=""
			/>
		</div>

		<div class="flex flex-col items-center pt-[35px]">
			<NuxtImg class="mx-auto w-[80px]" src="/img/homePage/logo.png" width="80" />

			<div class="mt-[15px] flex items-center justify-center gap-5 p-3">
				<NuxtLink to="/" class="hover:scale-125 transition-all">
					<IconsInstagram customClasses="text-mainColor" />
				</NuxtLink>
				<NuxtLink to="/" class="hover:scale-125 transition-all">
					<IconsWhatsapp customClasses="text-mainColor" />
				</NuxtLink>
				<NuxtLink to="/" class="hover:scale-125 transition-all">
					<IconsMail customClasses="text-mainColor"
				/></NuxtLink>
			</div>
		</div>
	</section>
	<!-- /CONTACT -->

	<InstagramCarousel />
</template>
