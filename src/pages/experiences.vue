<template>
	<section class="pb-[100px] pt-headerHeight">
		<div class="px-4 py-2">
			<h1 class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]">
				LUXURY EXPERIENCES
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

		<div class="pt-[35px]">
			<NuxtImg class="mx-auto w-[80px]" src="/img/homePage/logo.png" width="80" />

			<div class="mx-auto flex max-w-[677px] flex-col gap-[15px] px-4 pt-[10px] text-[14px]">
				<p class="text-center uppercase">
					Lorem ipsum <b>dolor sit amet,</b> consectetur adipisicing elit. Provident maxime facere
					expedita quia voluptas suscipit reiciendis impedit voluptatibus quidem soluta!
				</p>

				<p class="text-center uppercase">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit itaque ullam similique,
					dolore corporis iste.
				</p>
			</div>
		</div>
	</section>

	<section class="pb-[75px]">
		<div class="mx-auto max-w-[1310px] px-4">
			<h2 class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]">
				LBD CURATED EXPERIENCES ON OFFER
			</h2>

			<div class="grid justify-items-start gap-6 pt-[45px] mobile:grid-cols-lbdOffer">
				<div class="flex w-full flex-col items-center">
					<div class="relative">
						<Swiper
							:navigation="{
								nextEl: '.swiper-lbdOne-btn.button-next',
								prevEl: '.swiper-lbdOne-btn.button-prev',
							}"
							:spaceBetween="20"
							class="w-[260px] overflow-hidden"
						>
							<SwiperSlide>
								<NuxtImg
									class="object-cover tablet:h-[260px] tablet:w-[260px]"
									src="/img/ourService.png"
									width="300"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<NuxtImg
									class="object-cover tablet:h-[260px] tablet:w-[260px]"
									src="/img/ourService.png"
									width="300"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<NuxtImg
									class="object-cover tablet:h-[260px] tablet:w-[260px]"
									src="/img/ourService.png"
									width="300"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<NuxtImg
									class="object-cover tablet:h-[260px] tablet:w-[260px]"
									src="/img/ourService.png"
									width="300"
								/>
							</SwiperSlide>
						</Swiper>

						<div
							class="tablet:widthBtn z-10 flex justify-between max-tablet:pt-4 tablet:absolute tablet:left-0 tablet:top-1/2 tablet:translate-x-[-55px] tablet:translate-y-[-50%]"
						>
							<button
								class="swiper-lbdOne-btn button-prev flex h-[45px] w-[45px] items-center justify-center rounded-full bg-gray-200"
							>
								<IconsArrow customClasses="rotate-180" />
							</button>

							<button
								class="swiper-lbdOne-btn button-next flex h-[45px] w-[45px] items-center justify-center rounded-full bg-gray-200"
							>
								<IconsArrow />
							</button>
						</div>
					</div>

					<div class="flex flex-col items-center gap-6 pt-[20px]">
						<p class="text-[20px] font-medium uppercase">Lorem ipsum dolor sit amet.</p>

						<span class="max-w-[450px] text-center text-[14px] font-medium uppercase"
							>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid esse
							cupiditate obcaecati vitae amet.</span
						>

						<p class="text-[20px] font-medium uppercase">3 days, 3 nights</p>

						<button class="text-[20px] font-semibold uppercase">Inquire</button>
					</div>
				</div>

				<div class="flex w-full flex-col items-center">
					<div class="relative">
						<Swiper
							:navigation="{
								nextEl: '.swiper-lbdOne-btn.button-next',
								prevEl: '.swiper-lbdOne-btn.button-prev',
							}"
							:spaceBetween="20"
							class="w-[260px] overflow-hidden"
						>
							<SwiperSlide>
								<NuxtImg
									class="object-cover tablet:h-[260px] tablet:w-[260px]"
									src="/img/ourService.png"
									width="300"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<NuxtImg
									class="object-cover tablet:h-[260px] tablet:w-[260px]"
									src="/img/ourService.png"
									width="300"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<NuxtImg
									class="object-cover tablet:h-[260px] tablet:w-[260px]"
									src="/img/ourService.png"
									width="300"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<NuxtImg
									class="object-cover tablet:h-[260px] tablet:w-[260px]"
									src="/img/ourService.png"
									width="300"
								/>
							</SwiperSlide>
						</Swiper>

						<div
							class="tablet:widthBtn z-10 flex justify-between max-tablet:pt-4 tablet:absolute tablet:left-0 tablet:top-1/2 tablet:translate-x-[-55px] tablet:translate-y-[-50%]"
						>
							<button
								class="swiper-lbdTwo-btn button-prev flex h-[45px] w-[45px] items-center justify-center rounded-full bg-gray-200"
							>
								<IconsArrow customClasses="rotate-180" />
							</button>

							<button
								class="swiper-lbdTwo-btn button-next flex h-[45px] w-[45px] items-center justify-center rounded-full bg-gray-200"
							>
								<IconsArrow />
							</button>
						</div>
					</div>

					<div class="flex flex-col items-center gap-6 pt-[20px]">
						<p class="text-[20px] font-medium uppercase">Lorem ipsum dolor sit amet.</p>

						<span class="max-w-[450px] text-center text-[14px] font-medium uppercase"
							>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid esse
							cupiditate obcaecati vitae amet.</span
						>

						<p class="text-[20px] font-medium uppercase">3 days, 3 nights</p>

						<button class="text-[20px] font-semibold uppercase">Inquire</button>
					</div>
				</div>

				<div class="flex w-full flex-col items-center">
					<div class="relative">
						<Swiper
							:navigation="{
								nextEl: '.swiper-lbdOne-btn.button-next',
								prevEl: '.swiper-lbdOne-btn.button-prev',
							}"
							:spaceBetween="20"
							class="w-[260px] overflow-hidden"
						>
							<SwiperSlide>
								<NuxtImg
									class="object-cover tablet:h-[260px] tablet:w-[260px]"
									src="/img/ourService.png"
									width="300"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<NuxtImg
									class="object-cover tablet:h-[260px] tablet:w-[260px]"
									src="/img/ourService.png"
									width="300"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<NuxtImg
									class="object-cover tablet:h-[260px] tablet:w-[260px]"
									src="/img/ourService.png"
									width="300"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<NuxtImg
									class="object-cover tablet:h-[260px] tablet:w-[260px]"
									src="/img/ourService.png"
									width="300"
								/>
							</SwiperSlide>
						</Swiper>

						<div
							class="tablet:widthBtn z-10 flex justify-between max-tablet:pt-4 tablet:absolute tablet:left-0 tablet:top-1/2 tablet:translate-x-[-55px] tablet:translate-y-[-50%]"
						>
							<button
								class="swiper-lbdThird-btn button-prev flex h-[45px] w-[45px] items-center justify-center rounded-full bg-gray-200"
							>
								<IconsArrow customClasses="rotate-180" />
							</button>

							<button
								class="swiper-lbdThird-btn button-next flex h-[45px] w-[45px] items-center justify-center rounded-full bg-gray-200"
							>
								<IconsArrow />
							</button>
						</div>
					</div>

					<div class="flex flex-col items-center gap-6 pt-[20px]">
						<p class="text-[20px] font-medium uppercase">Lorem ipsum dolor sit amet.</p>

						<span class="max-w-[450px] text-center text-[14px] font-medium uppercase"
							>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid esse
							cupiditate obcaecati vitae amet.</span
						>

						<p class="text-[20px] font-medium uppercase">3 days, 3 nights</p>

						<button class="text-[20px] font-semibold uppercase">Inquire</button>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="pb-[100px]">
		<div class="mx-auto max-w-[1310px] px-4">
			<h3 class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]">
				Coming soon
			</h3>

			<div class="grid items-start gap-6 pt-[45px] mobile:grid-cols-lbdOffer">
				<article class="flex flex-col items-center">
					<NuxtImg
						class="object-cover tablet:h-[300px] tablet:w-[300px]"
						src="/img/ourService.png"
						alt=""
					/>

					<div class="flex flex-col gap-4 pt-[20px]">
						<p class="text-[20px] font-medium uppercase">Lorem, ipsum dolor.</p>

						<span class="text-center text-[14px] font-medium uppercase">14 days</span>
					</div>
				</article>
				<article class="flex flex-col items-center">
					<NuxtImg
						class="object-cover tablet:h-[300px] tablet:w-[300px]"
						src="/img/ourService.png"
						alt=""
					/>

					<div class="flex flex-col gap-4 pt-[20px]">
						<p class="text-[20px] font-medium uppercase">Lorem, ipsum dolor.</p>

						<span class="text-center text-[14px] font-medium uppercase">14 days</span>
					</div>
				</article>
				<article class="flex flex-col items-center">
					<NuxtImg
						class="object-cover tablet:h-[300px] tablet:w-[300px]"
						src="/img/ourService.png"
						alt=""
					/>

					<div class="flex flex-col gap-4 pt-[20px]">
						<p class="text-[20px] font-medium uppercase">Lorem, ipsum dolor.</p>

						<span class="text-center text-[14px] font-medium uppercase">14 days</span>
					</div>
				</article>
			</div>
		</div>
	</section>

	<WhatsappSection />
</template>
