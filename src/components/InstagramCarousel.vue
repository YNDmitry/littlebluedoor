<template>
	<section class="pb-[55px]">
		<div class="mx-auto max-w-[1360px] px-4">
			<h2
				class="px-4 text-center font-[500] uppercase max-tablet:text-[25px] max-mobile:text-[20px] tablet:text-[42px]"
			>
				@LITTLEBLUEDOOR.TRAVEL
			</h2>

			<Swiper
				class="pt-[50px] mt-6"
				:breakpoints="{
					320: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					465: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					615: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1250: {
						slidesPerView: 4,
						spaceBetween: 35,
					},
				}"
			>
				<SwiperSlide>
					<img class="mx-auto object-cover" src="/img/ourService.png" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img class="mx-auto object-cover" src="/img/ourService.png" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img class="mx-auto object-cover" src="/img/ourService.png" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img class="mx-auto object-cover" src="/img/ourService.png" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img class="mx-auto object-cover" src="/img/ourService.png" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img class="mx-auto object-cover" src="/img/ourService.png" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img class="mx-auto object-cover" src="/img/ourService.png" alt="" />
				</SwiperSlide>
			</Swiper>
		</div>
	</section>
</template>
