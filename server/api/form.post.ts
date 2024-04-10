import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async (event) => {
	const body = await readBody(event)

	const prisma = new PrismaClient()

	try {
		const { comment, date, destination, email, firstName, lastName, travelDuration, phone } =
			body.values

		const formatedDate = new Date(date).toISOString()

		const d = await prisma.form.create({
			data: {
				comment,
				date: formatedDate,
				destination,
				email,
				firstName,
				lastName,
				travelDuration,
				phone,
			},
		})

		prisma.$disconnect()

		return d
	} catch (error) {
		prisma.$disconnect()
		throw createError({ statusCode: 500, message: error.message })
	}
})
