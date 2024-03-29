<template>
  <!-- BESPOKE INTINERARIES -->
  <section class="pb-[85px] pt-headerHeight">
    <div class="px-4 py-2">
      <h1
        class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]"
      >
        BESPOKE INTINERARIES
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
      <NuxtImg
        class="mx-auto w-[80px]"
        src="/img/homePage/logo.png"
        width="80"
      />

      <div
        class="mx-auto flex max-w-[677px] flex-col gap-[15px] px-4 pt-[10px] text-[14px]"
      >
        <p class="text-center uppercase">
          Lorem ipsum <b>dolor sit amet,</b> consectetur adipisicing elit.
          Provident maxime facere expedita quia voluptas suscipit reiciendis
          impedit voluptatibus quidem soluta!
        </p>

        <p class="text-center uppercase">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          itaque ullam similique, dolore corporis iste.
        </p>
      </div>
    </div>
  </section>
  <!-- /BESPOKE INTINERARIES -->

  <!-- HOW IT WORKS? -->
  <section>
    <div class="mx-auto max-w-[1315px] px-4 pb-5">
      <h2
        class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]"
      >
        HOW IT WORKS?
      </h2>

      <p class="pt-4 text-center">
        AVOID THE TOURSIT TRAPS AND IMMERSE IN THE <b>TRUE ESSENCE</b> OF EACH
        DESTINATION
      </p>

      <div
        class="grid gap-5 pt-8 max-laptop:grid-cols-2 max-tablet:grid-cols-1 laptop:grid-cols-4"
      >
        <div class="flex flex-col gap-[15px] max-laptop:items-center">
          <img
            class="w-[300px] object-cover"
            src="/img/ourService.png"
            alt=""
          />

          <div class="flex flex-col gap-[10px]">
            <p class="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              accusamus minima nesciunt assumenda qui fugiat commodi nam earum!
              Ea, dolore!
            </p>
            <p class="text-center">Lorem ipsum dolor sit amet</p>
          </div>
        </div>

        <div class="flex flex-col gap-[15px] max-laptop:items-center">
          <img
            class="w-[300px] object-cover"
            src="/img/ourService.png"
            alt=""
          />

          <div class="flex flex-col gap-[10px]">
            <p class="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              accusamus minima nesciunt assumenda qui fugiat commodi nam earum!
              Ea, dolore!
            </p>
            <p class="text-center">Lorem ipsum dolor sit amet</p>
          </div>
        </div>

        <div class="flex flex-col gap-[15px] max-laptop:items-center">
          <img
            class="w-[300px] object-cover"
            src="/img/ourService.png"
            alt=""
          />

          <div class="flex flex-col gap-[10px]">
            <p class="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              accusamus minima nesciunt assumenda qui fugiat commodi nam earum!
              Ea, dolore!
            </p>
            <p class="text-center">Lorem ipsum dolor sit amet</p>
          </div>
        </div>

        <div class="flex flex-col gap-[15px] max-laptop:items-center">
          <img
            class="w-[300px] object-cover"
            src="/img/ourService.png"
            alt=""
          />

          <div class="flex flex-col gap-[10px]">
            <p class="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              accusamus minima nesciunt assumenda qui fugiat commodi nam earum!
              Ea, dolore!
            </p>
            <p class="text-center">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /HOW IT WORKS? -->

  <!-- START PLANNING YOUR TRIP -->
  <section class="max-tablet:pt-[50px] tablet:pt-[100px]">
    <div class="mx-auto max-w-[900px] px-4">
      <h2
        class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]"
      >
        start planning your trip
      </h2>

      <p class="pt-4 text-center uppercase">
        An expert from lbd will contact you shortly
      </p>

      <form class="mb-[120px] mt-[30px]">
        <div class="px-12 py-8">
          <div class="flex flex-col gap-[30px]">
            <div class="flex gap-[30px]">
              <input
                class="h-[45px] w-full border-b border-gray-400 bg-transparent"
                type="text"
                placeholder="FIRST NAME"
              />

              <input
                class="h-[45px] w-full border-b border-gray-400 bg-transparent"
                type="text"
                placeholder="LAST NAME"
              />
            </div>

            <input
              class="h-[45px] w-full border-b border-gray-400 bg-transparent"
              type="text"
              placeholder="EMAIL"
            />

            <textarea
              class="h-[170px] w-full border-b border-gray-400 bg-transparent"
              placeholder="MESSAGE"
            ></textarea>
          </div>
        </div>

        <button
          class="hover:bg-mainColorHover mx-auto mt-[20px] table h-[48px] bg-mainColor px-2 font-regular text-bg transition-colors tablet:text-[25px] px-7"
        >
          Send
        </button>
      </form>
    </div>
  </section>
  <!-- /START PLANNING YOUR TRIP -->

  <!-- PAST ITINERARIES FOR LBG CLIENTS -->
  <section class="max-tablet:pb-[50px] tablet:pb-[100px]">
    <div class="relative mx-auto max-w-[1315px] px-4">
      <h2
        class="text-center font-[500] uppercase max-tablet:text-[20px] tablet:text-[30px] pb-[50px]"
      >
        PAST ITINERARIES FOR LBG CLIENTS
      </h2>

      <Swiper
        class="max-tablet:pt-[50px]"
        :navigation="{
          nextEl: '.swiper-past-btn.button-next',
          prevEl: '.swiper-past-btn.button-prev',
        }"
        :breakpoints="{
          320: {
            slidesPerView: 2,
            spaceBetween: 17,
          },

          600: {
            slidesPerView: 3,
            spaceBetween: 17,
          },

          991: {
            slidesPerView: 4,
            spaceBetween: 17,
          },
        }"
      >
        <SwiperSlide>
          <NuxtImg
            class="mx-auto object-cover max-tablet:h-[200px] max-tablet:w-[200px] tablet:h-[300px] tablet:w-[300px]"
            src="/img/ourService.png"
            width="200"
            height="300"
          />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg
            class="mx-auto object-cover max-tablet:h-[200px] max-tablet:w-[200px] tablet:h-[300px] tablet:w-[300px]"
            src="/img/ourService.png"
            width="200"
            height="300"
          />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg
            class="mx-auto object-cover max-tablet:h-[200px] max-tablet:w-[200px] tablet:h-[300px] tablet:w-[300px]"
            src="/img/ourService.png"
            width="200"
            height="300"
          />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg
            class="mx-auto object-cover max-tablet:h-[200px] max-tablet:w-[200px] tablet:h-[300px] tablet:w-[300px]"
            src="/img/ourService.png"
            width="200"
            height="300"
          />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg
            class="mx-auto object-cover max-tablet:h-[200px] max-tablet:w-[200px] tablet:h-[300px] tablet:w-[300px]"
            src="/img/ourService.png"
            width="200"
            height="300"
          />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg
            class="mx-auto object-cover max-tablet:h-[200px] max-tablet:w-[200px] tablet:h-[300px] tablet:w-[300px]"
            src="/img/ourService.png"
            width="200"
            height="300"
          />
        </SwiperSlide>
      </Swiper>

      <div class="flex justify-between px-4 pt-4">
        <button class="swiper-past-btn button-prev">
          <IconsArrow customClasses="rotate-180 w-[32px] h-[32px]" />
        </button>

        <button class="swiper-past-btn button-next">
          <IconsArrow customClasses="w-[32px] h-[32px]" />
        </button>
      </div>
    </div>
  </section>
  <!-- /PAST ITINERARIES FOR LBG CLIENTS -->

  <WhatsappSection />
</template>
