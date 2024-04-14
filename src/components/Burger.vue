<script setup lang="ts">
	const props = defineProps({
		show: {
			type: Boolean,
			required: true,
		},
	})

	const emit = defineEmits(['update:show'])

	const toggleShow = () => {
		if (props.show) {
			emit('update:show', !props.show)
		}
	}
</script>

<template>
	<div @click="toggleShow" class="cursor-pointer w-12 h-8 relative z-20 largeDesktop:hidden">
		<div
			:class="props.show ? 'top-[50%] rotate-[-45deg] transition-transform' : 'top-1/4'"
			class="absolute right-0 h-0.5 w-12 bg-white transition-transform"
		/>
		<div
			:class="props.show ? 'top-[50%] w-12 rotate-45 transition-transform' : 'top-1/2 w-8'"
			class="absolute right-0 h-0.5 bg-white transition-transform"
		/>
	</div>
</template>
