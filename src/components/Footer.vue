<script setup lang="ts">
	import { object, string } from 'yup'
	const settings = useSettings()
	const mail = useMail()

	const schema = object({
		email: string().email('Enter a valid email').required('Email is a required'),
	})

	const { handleSubmit, isSubmitting } = useForm({
		validationSchema: schema,
	})

	const isFormSubmitted = ref(false)

	const onSubmit = handleSubmit(async (values) => {
		await $fetch('/api/newsletter', {
			method: 'post',
			body: { email: values.email },
		}).then((res) => {
			isFormSubmitted.value = true
			mail.send({
				from: 'Newsletter',
				subject: 'Newsletter',
				text: 'New newsletter email: ' + res.email,
			})
		})
	})
</script>

<template>
	<footer class="bg-bg2 text-white">
		<div class="mx-auto px-4">
			<div class="pb-[20px] pt-[40px]">
				<div class="text-center max-w-[390px] mx-auto">
					<div v-motion-fade-in class="text-[20px] font-medium">JOIN OUR MAILING LIST</div>
					<p v-motion-fade-in class="mt-4">
						Be the first to hear about upcoming trips, unique destinations, and preferred rates.
					</p>
				</div>

				<div class="flex items-center justify-center w-full max-w-[450px] mx-auto">
					<form
						v-if="!isFormSubmitted"
						@submit.prevent="onSubmit"
						class="flex h-[75px] pt-6 w-full"
					>
						<div class="flex flex-col w-full h-full relative">
							<Field
								v-motion-fade-in
								name="email"
								type="email"
								placeholder="EMAIL ADDRESS"
								class="w-full h-full border-b border-gray-400 pl-4 tracking-[3px] text-[12px] text-black rounded-none"
							/>
							<ErrorMessage name="email" class="absolute bottom-[-2rem] text-red" />
						</div>

						<button
							v-motion-fade-in
							type="submit"
							class="w-[140px] bg-primary border-primary border text-[14px]"
						>
							<span v-if="!isSubmitting">SUBSCRIBE</span>
							<Spiner v-else />
						</button>
					</form>
					<div v-else class="mt-8">Thank you for subscribing</div>
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
				<div v-motion-fade-in class="uppercase mx-4 text-center">
					© {{ new Date().getFullYear() }} LITTLEBLUEDOOR | ALL RIGHTS RESERVED
				</div>
			</div>
		</div>
	</footer>
</template>
