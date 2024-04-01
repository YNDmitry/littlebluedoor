<script setup lang="ts">
	const settings = useSettings()
</script>

<template>
	<div>
		<section class="pb-[120px] pt-headerHeight">
			<div class="mx-auto max-w-[1150px] px-4">
				<h1 class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]">
					SOME OF the hotels we parent with
				</h1>

				<div class="flex flex-col pt-[15px]">
					<span class="text-center text-[14px] uppercase">Lorem ipsum dolor sit amet.</span>
					<span class="text-center text-[14px] uppercase">Lorem ipsum dolor </span>
					<span class="text-center text-[14px] uppercase"
						>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis!</span
					>
				</div>

				<div class="flex flex-col gap-20 pt-12">
					<div>
						<div class="flex justify-between items-center pb-5">
							<h2 class="text-[24px] font-semibold uppercase">Italy</h2>
						</div>

						<div class="inline-grid w-full grid-cols-someOfTheHotels justify-between gap-7">
							<article
								class="inline-flex flex-col items-center gap-[10px]"
								v-for="article in 3"
								:key="article"
							>
								<NuxtImg class="h-[300px] w-full object-cover" src="/img/ourService.png" alt="" />

								<div class="flex flex-col items-center px-2">
									<p class="text-[18px] uppercase">Lorem</p>
									<p class="text-[18px] uppercase">Lorem, ipsum</p>

									<NuxtLink
										:to="settings?.data?.whatsapp?.url"
										class="hover:bg-mainColorHover uppercase py-2 px-7 bg-mainColor text-[16px] font-regular text-bg transition-colors mt-4"
									>
										Book your room
									</NuxtLink>
								</div>
							</article>
						</div>
					</div>
					<div>
						<div class="flex justify-between items-center pb-5">
							<h2 class="text-[24px] font-semibold uppercase">Spain</h2>
						</div>

						<div class="inline-grid w-full grid-cols-someOfTheHotels justify-between gap-7">
							<article
								class="inline-flex flex-col items-center gap-[10px]"
								v-for="article in 3"
								:key="article"
							>
								<NuxtImg class="h-[300px] w-full object-cover" src="/img/ourService.png" alt="" />

								<div class="flex flex-col items-center px-2">
									<p class="text-[18px] uppercase">Lorem</p>
									<p class="text-[18px] uppercase">Lorem, ipsum</p>

									<NuxtLink
										:to="settings?.data?.whatsapp?.url"
										class="hover:bg-mainColorHover uppercase py-2 px-7 bg-mainColor text-[16px] font-regular text-bg transition-colors mt-4"
									>
										Book your room
									</NuxtLink>
								</div>
							</article>
						</div>
					</div>
				</div>
			</div>
		</section>

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
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, fugit eius,
						omnis, aut temporibus amet excepturi porro eaque placeat saepe ullam ipsum. Corporis
						voluptas atque enim, hic maiores facilis ea cumque consequuntur est totam aspernatur
						ipsum non? Tempore, quod saepe?
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
	</div>
</template>
