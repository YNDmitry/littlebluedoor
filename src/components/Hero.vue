<script setup lang="ts">
	defineProps({
		title: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},
	})
</script>

<template>
	<section class="pt-headerHeight">
		<div class="px-4 pt-2 pb-8">
			<h1 class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]">
				{{ title }}
			</h1>
		</div>

		<div>
			<NuxtImg
				class="w-full object-cover max-tablet:h-[250px]"
				width="2000"
				:src="img"
				:alt="title"
			/>
		</div>
	</section>
</template>
