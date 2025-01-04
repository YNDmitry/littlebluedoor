import { defineNuxtRouteMiddleware, navigateTo, useState } from '#imports'

export default defineNuxtRouteMiddleware((to, from) => {
	// Получаем состояние отправки формы
	const isFormSubmitted = useState<boolean>('isFormSubmitted')

	// Если форма была отправлена, прерываем навигацию
	if (!isFormSubmitted.value) {
		return navigateTo('/')
	}
})
