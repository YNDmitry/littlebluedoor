<script setup lang="ts">
	import { type Content } from '@prismicio/client'
	import { object, string } from 'yup'
	const { $mail } = useNuxtApp()

	// The array passed to `getSliceComponentProps` is purely optional.
	// Consider it as a visual hint for you when templating your slice.
	defineProps(getSliceComponentProps<Content.FormSlice>(['slice', 'index', 'slices', 'context']))

	const schema = object({
		destination: string().required('Destination is a required field'),
		date: string().required('Date is a required field'),
		travelDuration: string().required('Travel duration is a required field'),
		firstName: string().required('First name is a required field'),
		lastName: string().required('Last name is a required field'),
		email: string().email('Enter a valid email').required('Email is a required field'),
		phone: string().required('Phone is a required field'),
		comment: string().required('This is a required field'),
	})

	const { handleSubmit, isSubmitting } = useForm({
		validationSchema: schema,
	})

	const isFormSubmitted = useState<boolean>('isFormSubmitted', () => false)

	const onSubmit = handleSubmit(async (values) => {
		try {
			const res = await $fetch('/api/form', {
				method: 'post',
				body: { values },
			})

			const resMail = await $mail.send({
				from: 'Form',
				subject: 'Form',
				text: `First name: ${values.firstName}\nLast name: ${values.lastName}\nEmail: ${values.email}\nPhone: ${values.phone}\nTravel duration: ${values.travelDuration}\nDate: ${values.date}\nComment: ${values.comment}\n`,
			})

			isFormSubmitted.value = true

			return navigateTo('/thank-you')
		} catch (error) {
			console.error(error)
		}
	})

	const { value, setValue } = useField('date')
</script>

<template>
	<section
		class="max-tablet:pt-[50px] py-[60px]"
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
	>
		<div class="mx-auto max-w-[1100px] px-4">
			<h2
				v-if="slice?.primary?.title"
				class="text-center font-[500] uppercase max-tablet:text-[20px] text-[28px]"
			>
				{{ slice?.primary?.title }}
			</h2>

			<p class="pt-4 text-center uppercase">{{ slice?.primary?.paragraph }}</p>

			<form @submit.prevent="onSubmit" class="mt-[30px]">
				<div class="px-12 max-tablet:px-0 py-8">
					<div class="flex flex-col gap-[30px]">
						<div class="flex max-tablet:flex-col gap-[30px]">
							<div v-auto-animate class="w-full flex flex-col gap-y-2">
								<Field
									class="min-h-[45px] w-full border-b border-gray-400 bg-transparent rounded-none"
									type="text"
									name="destination"
									placeholder="Where would you like to go?"
									aria-label="Where would you like to go?"
								/>
								<ErrorMessage name="destination" class="text-[red]" />
							</div>

							<div v-auto-animate class="w-full flex flex-col gap-y-2">
								<DatePicker
									name="date"
									@update:model-value="$event = setValue($event)"
									:model-value="value"
									placeholder="When would you like to go?"
									aria-label="When would you like to go?"
									:pt="{
										panel: 'text-white rounded-lg',
										pcInputText: '!bg-transparent text-white rounded-lg',
									}"
								/>
								<ErrorMessage name="date" class="text-[red]" />
							</div>

							<div v-auto-animate class="w-full flex flex-col gap-y-2">
								<Field
									class="min-h-[45px] w-full border-b border-gray-400 bg-transparent rounded-none"
									type="text"
									name="travelDuration"
									placeholder="How long would you like to go for?"
									aria-label="How long would you like to go for?"
								/>
								<ErrorMessage name="travelDuration" class="text-[red]" />
							</div>
						</div>

						<div class="flex max-tablet:flex-col gap-[30px]">
							<div v-auto-animate class="w-full flex flex-col gap-y-2">
								<Field
									class="min-h-[45px] w-full border-b border-gray-400 bg-transparent rounded-none"
									type="text"
									name="firstName"
									placeholder="First name"
									aria-label="First name"
								/>
								<ErrorMessage name="firstName" class="text-[red]" />
							</div>

							<div v-auto-animate class="w-full flex flex-col gap-y-2">
								<Field
									class="min-h-[45px] w-full border-b border-gray-400 bg-transparent rounded-none"
									type="text"
									name="lastName"
									placeholder="Last name"
									aria-label="Last name"
								/>
								<ErrorMessage name="lastName" class="text-[red]" />
							</div>
						</div>

						<div class="flex max-tablet:flex-col gap-[30px]">
							<div v-auto-animate class="w-full flex flex-col gap-y-2">
								<Field
									class="min-h-[45px] w-full border-b border-gray-400 bg-transparent rounded-none"
									type="email"
									name="email"
									placeholder="Email address"
									aria-label="Email address"
								/>
								<ErrorMessage name="email" class="text-[red]" />
							</div>

							<div v-auto-animate class="w-full flex flex-col gap-y-2">
								<Field
									class="min-h-[45px] w-full border-b border-gray-400 bg-transparent rounded-none"
									type="phone"
									name="phone"
									placeholder="Phone number"
									aria-label="Phone number"
								/>
								<ErrorMessage name="phone" class="text-[red]" />
							</div>
						</div>

						<div v-auto-animate class="w-full flex flex-col gap-y-2">
							<Field
								as="textarea"
								name="comment"
								class="min-h-[170px] w-full border-b border-gray-400 bg-transparent rounded-none"
								placeholder="Any specific comments or requests?"
							/>
							<ErrorMessage name="comment" class="text-[red]" />
						</div>
					</div>
				</div>

				<div v-motion-fade-in class="text-center">
					<button
						type="submit"
						class="hover:bg-primary-20 hover:text-white inline-block mx-auto rounded-lg bg-white text-[16px] py-[16px] px-[25px] font-medium text-bg2 transition-colors uppercase"
					>
						<span v-if="!isSubmitting">Request my journey</span>
						<Spiner v-else />
					</button>
				</div>
			</form>
		</div>
	</section>
</template>

<style>
	.p-inputtext.p-component.p-datepicker-input {
		@apply bg-transparent border-b shadow-none border-gray-400 border-t-0 border-l-0 border-r-0 rounded-none px-0;
	}

	.p-inputtext.p-component.p-datepicker-input:hover {
		@apply border-gray-400;
	}

	.p-inputtext.p-component.p-datepicker-input:focus {
		@apply border-gray-400 shadow-none;
	}

	.p-datepicker.p-component.p-inputwrapper.p-inputwrapper-focus.p-focus {
		@apply shadow-none outline-none;
	}
</style>
