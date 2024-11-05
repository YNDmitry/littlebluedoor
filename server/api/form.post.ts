import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
	const body = await readBody(event)

	try {
		const { comment, date, destination, email, firstName, lastName, travelDuration, phone } =
			body.values

		const formattedDate = new Date(date).toISOString()

		const d = await prisma.form.create({
			data: {
				comment,
				date: formattedDate,
				destination,
				email,
				firstName,
				lastName,
				travelDuration,
				phone,
			},
		})

		// Успешный ответ
		return { success: true, message: 'Form submitted successfully', data: d }
	} catch (error) {
		// Ошибка
		return { success: false, message: error.message || 'Server error' }
	} finally {
		// Отключаем Prisma после завершения запроса
		await prisma.$disconnect()
	}
})
