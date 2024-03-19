<template>
	<!-- HOTEL & VILLA BOOKINGS -->
	<section class="pb-[85px] pt-headerHeight">
		<div class="px-4 py-2">
			<h1 class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]">
				Hotel & VILLA BOOKINGS
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
			<NuxtImg class="mx-auto w-[80px]" width="80" src="/img/homePage/logo.png" />

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
	<!-- /HOTEL & VILLA BOOKINGS -->

	<!-- SLIDER TABS -->
	<section class="pb-[55px]">
		<div class="mx-auto max-w-[582px] px-4">
			<h2 class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]">
				Lorem ipsum dolor sit
			</h2>

			<div class="mt-[25px] px-[10px] py-[20px]">
				<p class="text-center font-semibold max-tablet:text-[14px]">
					Lorem ipsum dolor sit amet adipisicing elit. Veniam, beatae soluta autem quisquam,
					consequuntur consectetur
				</p>

				<div
					class="flex w-full justify-between pt-[30px] text-[12px] text-white max-tablet:gap-3 max-tablet:px-4 tablet:gap-5 tablet:px-9"
				>
					<NuxtLink
						to="/hotels"
						class="h-[40px] flex items-center justify-center w-full bg-mainColor px-2 uppercase transition-colors hover:bg-mainColorHover"
					>
						Hotels
					</NuxtLink>
					<NuxtLink
						to="/hotels"
						class="h-[40px] flex items-center justify-center w-full bg-mainColor px-2 uppercase transition-colors hover:bg-mainColorHover"
					>
						Villas & apartaments
					</NuxtLink>
				</div>
			</div>
		</div>

		<!-- TABS SLIDES -->
		<div class="pt-[30px]">
			<div
				class="mx-auto flex max-w-[365px] justify-between gap-2 px-4 pb-[30px] text-[18px] font-semibold"
			>
				<button
					class="uppercase"
					v-for="(tab, index) in tabs"
					:key="index"
					@click="currentTab = tab"
				>
					{{ tab }}
				</button>
			</div>

			<div class="mx-auto max-w-[1280px]">
				<div v-if="currentTab === 'Hotels'">
					<Swiper
						:breakpoints="{
							320: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							460: {
								slidesPerView: 3,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 4,
								spaceBetween: 20,
							},

							991: {
								slidesPerView: 5,
								spaceBetween: 20,
							},
						}"
					>
						<SwiperSlide>
							<img class="h-[200px] w-full object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img class="h-[200px] w-full object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img class="h-[200px] w-full object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img class="h-[200px] w-full object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img class="h-[200px] w-full object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img class="h-[200px] w-full object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img class="h-[200px] w-full object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img class="h-[200px] w-full object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img class="h-[200px] w-full object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
					</Swiper>
				</div>

				<div v-else-if="currentTab === 'Villas'">
					<Swiper
						:breakpoints="{
							320: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							460: {
								slidesPerView: 3,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 4,
								spaceBetween: 20,
							},

							991: {
								slidesPerView: 5,
								spaceBetween: 20,
							},
						}"
					>
						<SwiperSlide>
							<img class="h-[200px] w-[200px] object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img class="h-[200px] w-[200px] object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img class="h-[200px] w-[200px] object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img class="h-[200px] w-[200px] object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img class="h-[200px] w-[200px] object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img class="h-[200px] w-[200px] object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img class="h-[200px] w-[200px] object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img class="h-[200px] w-[200px] object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img class="h-[200px] w-[200px] object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
					</Swiper>
				</div>

				<div v-else-if="currentTab === 'Boats'">
					<Swiper
						:breakpoints="{
							320: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							460: {
								slidesPerView: 3,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 4,
								spaceBetween: 20,
							},

							991: {
								slidesPerView: 5,
								spaceBetween: 20,
							},
						}"
					>
						<SwiperSlide>
							<img class="h-[200px] w-[200px] object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img class="h-[200px] w-[200px] object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img class="h-[200px] w-[200px] object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img class="h-[200px] w-[200px] object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img class="h-[200px] w-[200px] object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img class="h-[200px] w-[200px] object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img class="h-[200px] w-[200px] object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img class="h-[200px] w-[200px] object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img class="h-[200px] w-[200px] object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
		<!-- /TABS SLIDES -->
	</section>
	<!-- /SLIDER TABS -->

	<!-- WHY US? -->
	<section class="pb-[120px]">
		<h2 class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]">
			WHY US?
		</h2>

		<div class="mx-auto flex max-w-[747px] flex-col items-center px-4 pt-[45px]">
			<p class="text-center tablet:uppercase">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				<b>10000</b> laboriosam.
			</p>

			<ul class="pb-[40px] pt-[30px]">
				<li>
					<p class="text-center tablet:uppercase"><b>Lorem, ipsum.</b></p>
				</li>
				<li>
					<p class="text-center tablet:uppercase"><b>Lorem, ipsum.</b></p>
				</li>
				<li>
					<p class="text-center tablet:uppercase">
						<b>Lorem ipsum dolor sit amet.</b>
					</p>
				</li>
				<li>
					<p class="text-center tablet:uppercase">
						<b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</b>
					</p>
				</li>
			</ul>

			<div class="flex flex-col gap-[20px]">
				<p class="text-center tablet:uppercase">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore natus sequi distinctio
					quae, exercitationem soluta!
				</p>

				<p class="text-center tablet:uppercase">
					<b>Lorem ipsum dolor sit amet.</b>
				</p>
			</div>
		</div>
	</section>
	<!-- /WHY US? -->

	<!-- A FEW POPULAR TRAVEL DESTINATIONS AMONG LBD CLIENTS -->
	<section class="max-tablet:pb-[120px] tablet:pb-[200px]">
		<div class="mx-auto max-w-[680px]">
			<h2 class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]">
				A few popular travel destinations among lbd clients
			</h2>
		</div>

		<div
			class="hotelTravel mx-auto flex max-w-[1210px] flex-col px-4 pt-[50px] max-tablet:gap-[50px] tablet:gap-[100px]"
		>
			<article
				class="grid max-laptop:grid-cols-travelPopularTablet max-laptop:gap-[25px] max-laptop:even:grid-cols-travelPopularReverseTablet max-tablet:grid-cols-1 max-tablet:even:grid-cols-1 laptop:grid-cols-travelPopular laptop:gap-[45px] laptop:even:grid-cols-travelPopularReverse"
				v-for="item in 4"
				:key="item"
			>
				<div class="hotelSwiper flex flex-col gap-4">
					<Swiper
						:modules="modules"
						class="w-full max-w-[485px]"
						:navigation="{
							nextEl: '.swiper-popularTravelOne-btn.button-next',
							prevEl: '.swiper-popularTravelOne-btn.button-prev',
						}"
						:breakpoints="{
							320: {
								slidesPerView: 1,
								spaceBetween: 15,
							},
						}"
					>
						<SwiperSlide>
							<img class="w-full object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img class="w-full object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img class="w-full object-cover" src="/img/ourService.png" alt="" />
						</SwiperSlide>
					</Swiper>

					<div class="flex justify-between">
						<button class="swiper-popularTravelOne-btn button-prev">
							<IconsArrow customClasses="rotate-180 w-[32px] h-[32px]" />
						</button>

						<button class="swiper-popularTravelOne-btn button-next">
							<IconsArrow customClasses="w-[32px] h-[32px]" />
						</button>
					</div>
				</div>

				<div
					class="hotelContent flex w-full flex-col items-center justify-center gap-[15px] text-[14px]"
				>
					<h3 class="text-[20px] font-medium text-center tablet:uppercase">
						Lorem ipsum dolor sit amet.
					</h3>

					<p class="text-center tablet:uppercase">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore aut consectetur
						veritatis molestias nostrum asperiores ex sit enim ducimus voluptatibus? Nulla, rem quod
						blanditiis incidunt aliquid quisquam.
					</p>

					<button
						class="hover:bg-mainColorHover py-2 px-7 table bg-mainColor text-[16px] font-regular text-bg transition-colors"
					>
						BOOK NOW
					</button>
				</div>
			</article>
		</div>
	</section>
	<!-- /A FEW POPULAR TRAVEL DESTINATIONS AMONG LBD CLIENTS -->

	<section class="pb-[40px]">
		<div class="mx-auto flex max-w-[1230px] flex-col items-center px-4">
			<p class="text-center tablet:uppercase">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				<b>10000</b> laboriosam.
			</p>

			<ul class="pb-[40px] pt-[30px]">
				<li>
					<p class="text-center tablet:uppercase"><b>Lorem, ipsum.</b></p>
				</li>
				<li>
					<p class="text-center tablet:uppercase"><b>Lorem, ipsum.</b></p>
				</li>
				<li>
					<p class="text-center tablet:uppercase">
						<b>Lorem ipsum dolor sit amet.</b>
					</p>
				</li>
				<li>
					<p class="text-center tablet:uppercase">
						<b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</b>
					</p>
				</li>
			</ul>

			<div class="flex flex-col gap-[20px]">
				<p class="text-center tablet:uppercase">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, fugit eius, omnis,
					aut temporibus amet excepturi porro eaque placeat saepe ullam ipsum. Corporis voluptas
					atque enim, hic maiores facilis ea cumque consequuntur est totam aspernatur ipsum non?
					Tempore, quod saepe?
				</p>

				<p class="text-center tablet:uppercase">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem voluptatum rem ea
					distinctio dicta, harum quis iure veniam tempora nostrum odio illo, dolores reiciendis
					quo!
				</p>

				<p class="text-center tablet:uppercase">
					<b>Lorem ipsum dolor sit amet.</b>
				</p>
			</div>

			<div class="flex flex-col items-center pt-[35px]">
				<NuxtImg class="mx-auto w-[80px]" width="80" src="/img/homePage/logo.png" />

				<span class="tracking-[0.5px] tablet:uppercase">LITTLE BLUE DOOR</span>

				<span class="text-[10px] tablet:uppercase">ELEVATED TRAVEL</span>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				currentTab: 'Hotels',
				tabs: ['Hotels', 'Villas', 'Boats'],
			}
		},
	}
</script>
./bookings.vue
